# Wavelength — Playground integration

เกมแรกใน `src/data/playground.js` แสดงในหมวด Playground ต่อท้ายผลงานหลัก

## ข้อมูลที่ผู้พัฒนายืนยัน

- บทบาท **Solo Developer** — ทำคนเดียวทั้งโปรเจค
- สถานะ **Playable Prototype**
- เกมส่วนตัวสำหรับเล่นกับเพื่อน เป็น web adaptation ของ Wavelength ไม่อ้างว่าออกแบบบอร์ดเกมต้นฉบับ
- เทคโนโลยีจาก source: React, TypeScript, Vite, Firebase Anonymous Auth, Realtime Database และ SVG dial
- Repository สาธารณะ: https://github.com/sirasakswnk/wavelength-boardgame
- `demoUrl: null`: ตรวจ HTTP GET ของ homepage ที่ repo ระบุ (`https://wavelength-boardgame.vercel.app/`) วันที่ 9 พฤศจิกายน 2026 ได้ HTTP 404 จึงยังไม่แสดง Play demo ตรวจเฉพาะการตอบกลับหน้าเว็บ ไม่ได้สร้างห้องหรือเชื่อมเกมบน production

## ภาพที่นำมาใช้

เก็บต้นฉบับครบ 7 ภาพและเอกสารส่งงานไว้ใน `portfolio-screenshots/` โดยไม่แก้ไข [README ต้นฉบับ](portfolio-screenshots/README.md) ระบุขั้นตอนถ่ายผ่าน UI จริงด้วยผู้เล่นสองคนใน isolated browser contexts บน Firebase Emulators และผลครบ 4 รอบ Player A ชนะ 5–3

| ไฟล์สำหรับเว็บ | ขนาด | ที่มา |
| --- | --- | --- |
| `optimized/cover.webp` | 1440 × 810 | `round-result.png` ครอปเฉพาะพื้นหลังตกแต่งด้านล่าง 190px กระดานและ feedback คะแนนเดิมคงอยู่ |
| `optimized/lobby.webp` | 1440 × 1000 | ห้องผู้เล่นสองคนก่อนเริ่มเกม |
| `optimized/guessing.webp` | 1440 × 1000 | มุมมองคนทาย ขณะเป้าหมายยังซ่อนและเข็มขยับจากกึ่งกลาง |
| `optimized/game-result.webp` | 1440 × 1000 | ผลจบเกม 4 รอบ และปุ่มเล่นอีกครั้ง |

ภาพปกหนึ่งภาพและแกลเลอรี 3 ภาพคงขนาดรายการให้กระชับตามรูปแบบ Playground รวมไฟล์สำหรับเว็บ **1,471,222 bytes** เป็น WebP แบบ lossless ตรวจ decoded RGBA เทียบ PNG แล้ว สำหรับปกตรวจเทียบพื้นที่ crop ของภาพต้นฉบับโดยตรง มี `cover.svg` และ `cover.png` สำหรับแก้ไข/ส่งออกต่อ

ภาพเสริม `clue-giver.png`, `home.png` และ `mobile-gameplay.png` เก็บเป็นต้นฉบับโดยยังไม่ได้ import เข้าแกลเลอรี จึงไม่ถูกโหลดโดยหน้า Portfolio

## ขอบเขตหลักฐาน

- ตามเอกสารส่งงาน สร้างห้อง เข้าห้อง หมุน เปิดฝา ส่งคำใบ้ ทาย เฉลย สลับรอบ และจบเกมผ่าน UI โดยไม่แก้ source หรือเขียนสถานะ/คะแนนข้ามขั้นตอน
- ภาพเป็นผลจาก Firebase Emulators ไม่ใช่หลักฐานการเล่นบนบริการ production
- ป้าย “เยี่ยม +3” ในภาพเฉลยยังทับขอบบนของวงล้อบางส่วนตาม UI เดิม ไม่ซ่อนหรือย้ายในการทำปก
- เอกสารต้นฉบับระบุว่าชื่อผู้เล่นบนภาพมือถือถูกย่อ และเป็น viewport emulation ไม่ใช่การทดสอบโทรศัพท์จริง
- ภาพจบเกมแสดงปุ่ม rematch แต่การกด rematch ไม่อยู่ในรอบถ่ายภาพนี้
- งานนำเข้า Portfolio ไม่รันเกมหรือ capture ซ้ำ ไม่แก้ Firebase Rules และไม่เขียนข้อมูล production ของเกม
