🔍 Arkose Labs Veri Deşifre Raporu
1. BDA (Browser Data Analysis) Paket Yapısı
BDA Nedir?
BDA, tarayıcı fingerprint verisinin RSA ile şifrelenmiş halidir. /fc/gt2/public_key/{apiKey} endpoint'ine POST ile gönderilir.
Paketi Hangi Fonksiyon Hangi Anahtarla Paketliyor?
Akış şeması (kanıtlı, her adım kodda bulundu):
Sıra	Fonksiyon	Dosya:Satır	Görevi
1	Te(Ko.fp)	enforcement_120fcc72.js:168060	Fingerprint'i key=value listesine dönüştürür, copyright header ekler, ife_hash hesaplar
2	Un(r, Ho, publicKey, yi)	enforcement_120fcc72.js:207745	Fingerprint'i RSA ile şifreler, callback olarak yi'ye sonucu iletir
3	He(fp)	enforcement_120fcc72.js:174414	window.arkl nesnesini oluşturur (base64 encode/decode, string→bytes yardımcıları)
4	Ue(host, publicKey)	enforcement_120fcc72.js:172136	Şifreleme yöntemini seçer (webcrypto > mscrypto > forge)
5	Mn()	enforcement_120fcc72.js:207363	Şifrelemeyi tetikler, sonucu window.arkl.rs'ye yazar
6	mt({bda, publicKey, ...})	enforcement_120fcc72.js:151253	URL parametrelerini oluşturur (bda=...&public_key=...&capi_version=...)
7	bt(host, publicKey, params, ...)	enforcement_120fcc72.js:152081	/fc/gt2/public_key/{pk}'e POST atar
Anahtar: publicKey = 747B83EC-2CA3-43AD-A7DF-701F286FBABA (API key/UUID, RSA public key değil; asıl RSA anahtarı window.arkl içinde yönetiliyor)
---
2. Şifreleme Algoritması
Üç katmanlı şifreleme stratejisi (kanıt: De() string tablosu):
window.arkl._method seçimi:
├── "webcrypto" → window.crypto.subtle.encrypt()  [RSA-OAEP, SHA-256]
├── "mscrypto"  → window.msCrypto                 [Microsoft IE/Edge]
└── "fallback"  → forge kütüphanesi               [Pure JS RSA]
String tablosundan kanıt:
De() içinde: "subtle", "crypto", "forge", "msrCry", "msCryp", "msrcry"
→ Bu string'ler sırasıyla Web Crypto API, forge kütüphanesi ve Microsoft Crypto API'yi işaret ediyor
window.arkl API'si:
window.arkl.pl          → Platform bilgisi
window.arkl.encode(buf) → Uint8Array → Base64
window.arkl.decode(str) → Base64 → ArrayBuffer
window.arkl.stringToBytes(str) → String → Uint8Array
window.arkl.rs          → Şifrelenmiş fingerprint (Base64)
window.arkl._method     → "webcrypto" | "mscrypto" | "fallback"
---
3. BDA Verisinin Dizilişi
POST Body Formatı (mt() fonksiyonundan):
bda={RSA-şifreli-base64-fingerprint}
&public_key=747B83EC-2CA3-43AD-A7DF-701F286FBABA
&capi_version=4.0.17
&capi_mode=inline
&style_theme=base
&rnd={random}
&language=en
&site={window.location.origin}
&userbrowser={navigator.userAgent}
Fingerprint İçeriği (Co() ve Do() fonksiyonları):
{
  f: {
    DNT: Do Not Track,
    L: navigator.language,
    D: screen.colorDepth,
    PR: window.devicePixelRatio,
    S: screen properties,
    AS: audio signature,
    TO: timezone offset,
    SS: session storage,
    LS: local storage,
    IDB: IndexedDB,
    B: battery,
    ODB: open database,
    CPUC: CPU class,
    PK: platform,
    CFP: canvas fingerprint,
    FR: font detection,
    FOS: fonts on screen,
    FB: fonts baseline,
    JSF: JS fonts,
    P: plugins,
    T: touch support,
    H: hardware concurrency,
    SWF: shared worker flag
  },
  ef: { enhanced fingerprint key-value pairs },
  w: { HL, DT, ... window properties },
  js: { ... navigator properties }
}
---
4. /fc/gt2/ API Yanıtı
İncelenen 6 farklı bundle'ın GT2 yanıtları:
Bundle	Boyut	PoW/Difficulty Alanı
2026-05-08T11-14-44.987Z	2917	YOK
2026-05-08T11-17-14.123Z	2917	YOK
2026-05-08T11-19-35.179Z	2917	YOK
2026-05-08T11-26-15.218Z	2917	YOK
2026-05-08T11-45-52.679Z	2917	YOK
Sonuç: /fc/gt2/public_key/ yanıtında PoW/difficulty alanı doğrudan YOKTUR. Ancak enforcement kodu (bt() → mi() fonksiyonu) yanıtta opsiyonel pow: true alanını kontrol eder:
// enforcement_120fcc72.js, mi() içinde:
i.pow && (Ko.pow = !0, Ko.blockedByPow = !0)
PoW gerektiğinde sunucu bu alanı ekler. İncelenen örneklerde PoW tetiklenmemiş.
GT2 Yanıt Formatı:
{
  "token": "12718ad948c4532d9.6223233301|r=us-east-1|meta=3|...",
  "challenge_url": "",
  "challenge_url_cdn": "https://.../game_core_bootstrap.js",
  "challenge_url_cdn_sri": "sha384-...",
  "mbio": true, "tbio": true, "kbio": true,
  "styles": [...],
  "iframe_width": 478,
  "iframe_height": 488
}
---
5. PoW (Proof of Work) Algoritması
PoW Mimarisi:
Enforcement Frame
  └── PoW Iframe (/cdn/fc/assets/pow/2.4.0/standard/index.html)
       ├── main.js (UI: Preact bileşenleri)
       └── Web Worker (dapib endpoint'inden dinamik yüklenir)
            └── SHA-256 WASM hesaplaması
İki PoW Türü (kanıt: unknown_f9e1761a.js):
Tür	Kod	Açıklama	Konfigürasyon
LEADING_ZERO	0	Hash'in başında N tane sıfır biti bul	seed, count (difficulty)
TARGET_HASH	1	Birden fazla hedef hash'e ulaş	seed, startingNonce, splits[{targetHash}]
Worker Mesaj Protokolü:
Ana thread → Worker (başlatma):
{
  type: "start",
  data: {
    type: 0,           // 0=LEADING_ZERO, 1=TARGET_HASH
    itimeout: 10000,   // timeout ms
    seed: [...bytes],  // seed array
    difficulty: 20,    // leading zero count (LEADING_ZERO)
    targetHashData: [...] // hedef hash listesi (TARGET_HASH)
  }
}
Worker → Ana thread:
// Durum bildirimi
{ type: "loaded" | "running" | "done" | "error" | "split_done" }
// Başarılı sonuç (LEADING_ZERO):
{ type: "done", data: { result: nonce, iteration_count: N, hash_rate: X } }
// Başarılı sonuç (TARGET_HASH):
{ type: "done", data: { targetHashData: [{target_hash, attempt_count}], ... } }
Hash Algoritması:
SHA-256, WASM ile hızlandırılmış. Worker kodu dapib endpoint'inden dinamik yüklenir:
GET /dapib/{region}/{uuid}/{id}.js?expiry={timestamp}&mac={HMAC-SHA256}
MAC imzası HMAC-SHA256 ile oluşturulur (mac=JrbbpNPewWA6jpDpGdDQs0YLHOz5WcmBPyhqdi8rbqo= → Base64, 44 karakter, = padding).
PoW Sonuç Gönderimi:
POST /pows/started  → {session_token, pow_token, round, time}
POST /pows/split    → {session_token, pow_token, round, split_num, execution_time, hash_rate, result}
---
Özet Tablo
Bileşen	Endpoint/URL	Algoritma
BDA Şifreleme	window.arkl.rs	RSA-OAEP (Web Crypto API)
BDA Gönderim	POST /fc/gt2/public_key/{pk}	URL-encoded form
Session Token	/fc/gt2/public_key/ yanıtı	`token=...
PoW Başlatma	/cdn/fc/assets/pow/2.4.0/standard/index.html	Web Worker + SHA-256 WASM
PoW Sonuç	POST /pows/started, POST /pows/split	JSON
PoW Worker	GET /dapib/{region}/{uuid}/{id}.js?expiry&mac=HMAC	HMAC-SHA256 imzalı
Challenge	POST /fc/gfct/	Oyun verisi (15 waves, gameType=4)
Cevap Kontrol	POST /fc/ca/	decryption_key döner
Analytics	GET /fc/a/?callback=...	JSONP

----- - - --  - - - - - - --- - - -
10 mayıs
----- - - --  - - - - - - --- - - -
✦ bda_ve_pow_desifre.md güncelleme verisi:

   1. Şifreleme Fn & Call Stack:
  Un (L8608) = main crypto fn. Call stack: Un(r, Ho, Ko.publicKey, yi).
  Ue (L7648) → check WebCrypto/Forge. Missing → Ne/Fe polyfill load.
  Mn (L8577) → execute VM.

   2. RSA Public Key Kaynağı:
  RSA Key ∈ rn bytecode (L7940). NOT API. 
  Ko.publicKey = Site Key. Not RSA.
  Ln → split rn ops. on → XOR decode strings.
  VM execute rn → parse n (modulus) + e (exponent) → crypto.subtle.importKey (RSA-OAEP).

   3. BDA Payload (Te fn):
  Te (L7467) → build r (BDA payload).
  Combine order: api_type → f (f_h) → `n` (timestamp) → `wh` (w) → `enhanced_fp (ef) → fb (bot flag) → fe → ife_hash → jsbd`.
