**Bu repo, karmaşıklığı giderilmiş javascript kodlarını ve javascript karmaşıklık giderici mjs dosyasını içerir.
İstediğiniz karmaşık javascript dosyalarını, bu mjs aracı ile karmaşıklığını giderebilirsiniz.
Onun dışında cleaned_js klasörü altında da bizim sycthe'ta topladığımız karmaşık verilerin karmaşasının çözülmüş halleri bulunmaktadır.**
                                                           
**This repository contains minified JavaScript code and an MJS file for minifying JavaScript. You can use this MJS tool to minify any complex JavaScript files you wish. Additionally, the `cleaned_js` folder contains the minified versions of the complex data we collected in Sycthe.**

---

# Arkose X-Ray

Arkose Labs Captcha sisteminin tersine mühendislik ve deobfuscasyon aracı.  
Reverse engineering & deobfuscation toolkit for Arkose Labs Captcha system.

---

## Ne İşe Yarar / What It Does

**Türkçe:** Arkose Labs tarafından kullanılan obfuscate edilmiş JavaScript dosyalarını (`_0x` pattern'li, anlamsız değişken isimleri içeren) Babel AST transformları kullanarak deobfuscate eder. Ayrıca BDA (Browser Data Analysis) şifreleme yapısını ve PoW (Proof of Work) algoritmasını analiz eder.

**English:** Deobfuscates Arkose Labs' obfuscated JavaScript files (with `_0x` patterns, meaningless variable names) using Babel AST transforms. Also analyzes BDA (Browser Data Analysis) encryption structure and PoW (Proof of Work) algorithm.

---

## Kurulum / Installation

```bash
git clone https://github.com/yourusername/arkose-x-ray.git
cd arkose-x-ray
npm install
```

### Gereksinimler / Requirements

- Node.js >= 18
- npm

---

## Kullanım / Usage

### Deobfuscate JavaScript

```bash
node arkose_xray_deobfuscate.mjs <girdi-dosyasi> <cikti-dosyasi>
node arkose_xray_deobfuscate.mjs <input-file> <output-file>
```

### Ornek / Example

```bash
node arkose_xray_deobfuscate.mjs cleaned_js/obfuscated.js cleaned_js/decoded.js
```

### decode_rn.js - RSA Anahtar Cikarimi / RSA Key Extraction

```bash
node decode_rn.js
```

Bu script, enforcement JS dosyasi icindeki `rn` bytecode dizisinden RSA public key parametrelerini (modulus & exponent) cikarir.  
This script extracts RSA public key parameters (modulus & exponent) from the `rn` bytecode array inside the enforcement JS file.

---

## Dosyalar / Files

| Dosya / File | Aciklama / Description |
|---|---|
| `arkose_xray_deobfuscate.mjs` | Ana deobfuscator / Main deobfuscator tool (Babel AST) |
| `decode_rn.js` | `rn` bytecode icinden RSA anahtari cikarir / Extracts RSA key from `rn` bytecode |
| `bda_ve_pow_desifre.md` | BDA & PoW sifre cozme raporu / BDA & PoW decryption report |
| `cleaned_js/` | Deobfuscate edilmis JS dosyalari / Deobfuscated JS files |
| `docs/` | Ek dokumantasyon / Additional documentation |

---

## Arkose Labs Sifreleme Analizi ve Teknik Detaylar

> **Turkce:**  
> Bu bolum, sistemin BDA (Browser Data Analysis) paketini sifreleme mekanizmasini, kullanilan fonksiyon hiyerarsisini ve RSA anahtarinin kaynagini teknik detaylariyla aciklamaktadir.

> **English:**  
> This section explains the BDA (Browser Data Analysis) package encryption mechanism, the function hierarchy used, and the source of the RSA key with technical details.

### 1. Sifreleme Mimarisi ve Cagri Yigini / Encryption Architecture & Call Stack

**Turkce:** Sistem, tarayici verilerini guvenli bir sekilde paketlemek icin katmanli bir yapi kullanir. Ana sifreleme sureci su fonksiyonlar uzerinden yurutulur:

**English:** The system uses a layered architecture to securely package browser data. The main encryption process runs through these functions:

| Fonksiyon / Function | Satir / Line | Gorevi / Role |
|---|---|---|
| **Un** | 8608 | **Ana Sifreleme Fonksiyonu / Main Crypto Function** — `Un(r, Ho, Ko.publicKey, yi)` — `r` = raw data, `Ho` = target params |
| **Ue** | 7648 | **Ortam Kontrolu / Environment Check** — Selects encryption method: `WebCrypto` > `msCrypto` > `Forge` (fallback). Loads `Ne`/`Fe` polyfills if needed. |
| **Mn** | 8577 | **VM Tetikleyici / VM Trigger** — Starts the Virtual Machine execution |
| **Te** | 7467 | **Payload Builder** — Constructs the BDA payload |

### 2. RSA Public Key Kaynagi ve VM Isleyisi / RSA Public Key Source & VM Operation

**Turkce:** Yaygin kaninin aksine, RSA anahtari bir API endpoint'inden dinamik olarak cekilmemekte; dogrudan kodun icine gomulu bir Sanal Makine (VM) yapisi uzerinden sunulmaktadir.

**English:** Contrary to common belief, the RSA key is NOT fetched dynamically from an API endpoint — it is served through a Virtual Machine (VM) structure embedded directly in the code.

#### RSA Anahtarinin Cikarilmasi / RSA Key Extraction

- **rn Bytecode (Satir 7940 / Line 7940):** RSA Public Key, kod icerisinde `rn` degiskeni altinda bir bayt kodu (bytecode) dizisi olarak saklanir. Bu veri bir API yaniti degildir, dogrudan statik dosyada mevcuttur.
  
  The RSA Public Key is stored as a bytecode array under the `rn` variable in the code. This is NOT an API response — it is directly present in the static file.

- **Ko.publicKey Ayrimi / Ko.publicKey Distinction:** Sistemde gorulen `Ko.publicKey` (Orn: `747B83EC-...`) degeri gercek RSA anahtari degil, ilgili sitenin tanimlayici **"Site Key"** degeridir.
  
  The `Ko.publicKey` value (e.g. `747B83EC-...`) is NOT the actual RSA key — it is the **Site Key** identifier for the target website.

- **Ln ve on Fonksiyonlari / Ln & on Functions:** `Ln` fonksiyonu, `rn` dizisindeki operasyonlari ayristirir. `on` fonksiyonu ise bu islemler sirasinda kullanilan karartilmis (obfuscated) dizgileri XOR mantigiyla desifre ederek okunabilir hale getirir.
  
  `Ln` parses operations in the `rn` array. `on` decodes obfuscated strings using XOR logic during these operations.

#### Sanal Makine (VM) Yurutme Sureci / VM Execution Process

VM, `rn` bytecode verisini isleyerek su adimlari tamamlar / The VM processes the `rn` bytecode as follows:

1. Bytecode icinden RSA parametrelerini (**n** - modulus ve **e** - exponent) ayiklar.  
   Extracts RSA parameters (**n** - modulus, **e** - exponent) from the bytecode.

2. Elde edilen ham degerleri kullanarak `crypto.subtle.importKey` metodu uzerinden **RSA-OAEP** formatinda gecerli bir kriptografik anahtar olusturur.  
   Creates a valid cryptographic key in **RSA-OAEP** format using `crypto.subtle.importKey` with the extracted raw values.

3. Olusturulan bu anahtar, `window.arkl.rs` nesnesine yazilacak olan sifreli verinin uretiminde kullanilir.  
   This generated key is used to produce the encrypted data that will be written to `window.arkl.rs`.

### 3. BDA Veri Dizilimi / BDA Payload Serialization

**Turkce:** Sifreleme oncesinde `Te` fonksiyonu (Satir 7467) tarafindan hazirlanan veri paketi, sunucunun dogrulama mekanizmasi icin kritik olan su siralamayi takip eder:

**English:** The data packet prepared by the `Te` function (Line 7467) before encryption follows this order, critical for the server's verification mechanism:

```
api_type → f (Temel Fingerprint / Base Fingerprint)
         → n (Zaman Damgasi / Timestamp)
         → wh (Pencere Ozellikleri / Window Properties)
         → enhanced_fp (Gelismis Fingerprint / Enhanced Fingerprint)
         → fb (Bot Tespit Bayraklari / Bot Detection Flags)
         → fe → ife_hash → jsbd
```

### 4. Sifreleme Algoritmalari / Encryption Algorithms

**Turkce:** Uc katmanli sifreleme stratejisi (`window.arkl._method` secimi):

**English:** Three-layer encryption strategy (`window.arkl._method` selection):

| Yontem / Method | Kullanim / Usage | Algoritma / Algorithm |
|---|---|---|
| `webcrypto` | Modern tarayicilar / Modern browsers | `window.crypto.subtle.encrypt()` — RSA-OAEP, SHA-256 |
| `mscrypto` | Internet Explorer / Edge | `window.msCrypto` |
| `fallback` | Eski tarayicilar / Legacy browsers | Forge kutuphanesi / Forge library (Pure JS RSA) |

### 5. PoW (Proof of Work) Algoritmasi

**Turkce:** Iki PoW turu desteklenir:

**English:** Two types of PoW are supported:

| Tur / Type | Kod / Code | Aciklama / Description |
|---|---|---|
| **LEADING_ZERO** | 0 | Hash'in basinda N tane sifir biti bul / Find N leading zero bits in hash |
| **TARGET_HASH** | 1 | Birden fazla hedef hash'e ulas / Reach multiple target hashes |

PoW, SHA-256 ile WASM hizlandirmali Web Worker uzerinde calisir. Worker kodu dinamik olarak `/dapib/{region}/{uuid}/{id}.js` endpoint'inden HMAC-SHA256 imzali olarak yuklenir.

PoW runs on a Web Worker with SHA-256 WASM acceleration. Worker code is dynamically loaded from the `/dapib/{region}/{uuid}/{id}.js` endpoint signed with HMAC-SHA256.

---

## Teknik Rapor / Technical Report

Detayli teknik rapor icin: [`bda_ve_pow_desifre.md`](bda_ve_pow_desifre.md)  
For the detailed technical report: [`bda_ve_pow_desifre.md`](bda_ve_pow_desifre.md)

---
