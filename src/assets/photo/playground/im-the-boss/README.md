# I’m The BOSS — Playground integration

เกมที่ห้าใน `src/data/playground.js` ต่อจาก Who Are You Really? แสดงผ่านปุ่ม Show all games (5)

## ข้อมูลที่ยืนยันแล้ว

- ผู้พัฒนายืนยันว่าทำคนเดียวทั้งโปรเจค ใช้ **Solo Developer**
- ผู้พัฒนายืนยันว่าเสร็จแล้วพร้อมเล่น ใช้ **Completed · Playable**
- Play demo https://im-the-boss-boardgame.vercel.app/ ตามลิงก์ที่ผู้พัฒนาให้ ตรวจ HTTP GET วันที่ 13 พฤศจิกายน 2026 ได้ HTTP 200 และ title “โต๊ะเจรจาดีล”
- Repository https://github.com/sirasakswnk/I-m-The-BOSS-BoardGame
- Stack จาก source ได้แก่ React, TypeScript, Vite, Zustand, Tailwind CSS, Framer Motion, Firebase Realtime Database และ Firebase Anonymous Auth

## ภาพสำหรับเว็บ

เก็บต้นฉบับครบ **13 PNG** พร้อม manifest และสคริปต์ใน `portfolio-screenshots/` ที่มาของแต่ละภาพและวิธีถ่ายซ้ำอยู่ใน [README ชุดภาพ](portfolio-screenshots/README.md)

ชุดภาพถ่ายจาก source commit `1bb786d8a46021e8f094a6f10aef576fc7d1e49c` ตามเอกสารส่งงาน ประกอบด้วยภาพจาก **Firebase Emulators 7 ภาพ** และ **Design Preview 6 ภาพ** ตรวจ SHA-256 และขนาดจริงของ PNG ทั้ง 13 ไฟล์ตรงกับ `manifest.json` และเปิดตรวจภาพชุดส่งงานแล้ว

| ไฟล์สำหรับเว็บ | ขนาด | ที่มา |
| --- | --- | --- |
| `optimized/cover.webp` | 1600 × 900 | ปกจัดจาก `game-table.png` ทั้งภาพ แสดงโต๊ะสาธิต 4 คนบน Emulator ดีลช่อง 4 รับแล้ว 2/5 ส่วนและมีข้อเสนอรอตรวจ |
| `optimized/boss-offers.webp` | 1736 × 1554 | Design Preview แสดงข้อเสนอสีแดงซ้ำ สถานะรับแล้ว/รอตรวจ และปุ่มจัดการข้อขัดแย้ง |
| `optimized/action-card.webp` | 1776 × 1228 | Emulator ผู้เล่นเลือกการ์ดพักร้อนน้ำเงินและนักลงทุนของบอส ก่อนกดยืนยัน |
| `optimized/final-score.webp` | 1456 × 1324 | Design Preview เปิดเงินครบ 4 คน คะแนนตัวอย่าง 55/41/36/12 ล้านและปุ่มเล่นอีกรอบ |

ภาพสำหรับเว็บรวม **537,380 bytes** ใช้ WebP แบบ lossless ตรวจ decoded RGBA ตรงกับ PNG ทั้งสี่ภาพ ภาพประกอบคงความละเอียดต้นฉบับ ปกมี `cover.svg` และ `cover.png` สำหรับแก้ไขต่อ โดย SVG ฝังภาพโต๊ะ Emulator ต้นฉบับครบทั้งภาพ

เลือกปกหนึ่งภาพและแกลเลอรี 3 ภาพตามรูปแบบ Playground ภาพ Lobby, Offer modal, Cards gallery, มือถือสองภาพ, การ์ดแยกประเภทสองภาพ, Home และ Interrupt window เก็บไว้ครบในชุดต้นฉบับ

## บริบทของภาพและข้อจำกัด

- ภาพโต๊ะมาจากการเล่นผ่าน UI ด้วย Anonymous Auth คนละ browser context รวม 4 คนบน Firebase Emulators ตามเอกสารส่งงาน ดีลในภาพยังเปิดอยู่ เงินของบอสจึงยังเป็น 0 ล้าน จำนวนเงินในข้อเสนอเป็นมูลค่าที่เจรจา
- ภาพตรวจข้อเสนอเป็น fixture สำหรับแสดงข้อความสีซ้ำ คำบรรยายระบุ Design Preview และสถานการณ์ตัวอย่างตาม source
- คะแนนจบเกม 55/41/36/12 ล้านมาจาก `gameOverFifteen` ใน Preview โดยแสดงที่มาคะแนนตัวอย่างในคำบรรยายภาพ
- ภาพลงการ์ดถ่ายก่อนยืนยัน ปุ่มลงการ์ดเปิดใช้งานและเลือกนักลงทุนของผู้เล่นอื่นเป็นเป้าหมาย
- ภาพมือถือมีแถบผู้เล่นที่เลื่อนแนวนอนได้ และ hand dock บังปุ่มท้ายแผงดีลที่ตำแหน่งเลื่อนบางช่วง รายละเอียดอยู่ใน README ชุดภาพ
- การตรวจลิงก์ Demo ยืนยันการเข้าถึงหน้า HTML สถานะเสร็จแล้วพร้อมเล่นมาจากคำยืนยันของผู้พัฒนา
