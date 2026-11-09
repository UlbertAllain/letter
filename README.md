# Interactive Letter

Eksperimen website interaktif yang menyajikan sebuah surat sebagai rangkaian langkah, bukan sebagai halaman teks statis. Pengguna menavigasi pembuka, pilihan perasaan, pertanyaan, pesan, dan penutup.

## Implementasi

State perjalanan diatur di `app/page.tsx`. Komponen terpisah menangani setiap langkah, termasuk `MoodPicker`, `ForgiveGame`, `HeartUnlock`, `LetterSection`, dan `RepairChecklist`. Transisi visual menggunakan Framer Motion.

## Stack

Next.js, React, TypeScript, Framer Motion, canvas-confetti, Lucide React, dan Tailwind CSS.

## Menjalankan

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000`.

## Struktur

```text
app/page.tsx           State dan alur interaksi
components/            Setiap tahap cerita dan dekorasi
app/globals.css        Styling global
```

## Validasi

```bash
npm run lint
npm run build
```

Project ini bersifat personal/eksperimental dan tidak memerlukan backend pada implementasi saat ini. Saat membagikannya, pastikan konten pribadi atau identitas pihak lain memang layak dipublikasikan.
