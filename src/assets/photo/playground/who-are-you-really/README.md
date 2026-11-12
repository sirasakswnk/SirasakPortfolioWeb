# Who Are You Really? — Playground integration

เกมที่สี่ใน `src/data/playground.js` ต่อจาก IN SYNC แสดงผ่านปุ่ม Show all games (4)

## ข้อมูลที่ยืนยันแล้ว

- ผู้พัฒนายืนยันว่าทำคนเดียวทั้งโปรเจค ใช้ **Solo Developer**
- ผู้พัฒนายืนยันว่าเสร็จแล้วพร้อมเล่น ใช้ **Completed · Playable**
- Play demo https://who-are-you-really-board-game.vercel.app/ ตามลิงก์ที่ผู้พัฒนาให้ ตรวจ HTTP GET วันที่ 12 พฤศจิกายน 2026 ได้ HTTP 200 และ title “Who Are You Really? — ตอบตามบท จับตัวตนเพื่อนให้ได้”
- Repository https://github.com/sirasakswnk/Who-Are-You-Really-BoardGame
- Stack จาก source ได้แก่ Next.js, React, TypeScript, CSS Modules, Firebase Realtime Database และ Firebase Anonymous Auth

## ภาพสำหรับเว็บ

ต้นฉบับครบ **11 PNG** พร้อม README, metadata, hashes และสคริปต์การถ่ายอยู่ใน `portfolio-screenshots/` รายละเอียดที่มาและวิธีถ่ายซ้ำอยู่ใน [README ชุดภาพ](portfolio-screenshots/README.md)

ทุกภาพเป็น **Design Preview · ข้อมูลตัวอย่าง** จาก source commit `0698282e0542db019f3d2bd708de0c8f540925b6` ตามเอกสารส่งงาน ตรวจ SHA-256 และขนาดของ PNG ทั้ง 11 ไฟล์ตรงกับ `png-verification.json` และเปิดตรวจภาพชุดส่งงานแล้ว

| ไฟล์สำหรับเว็บ | ขนาด | ที่มา |
| --- | --- | --- |
| `optimized/cover.webp` | 1600 × 900 | จัดจากสองส่วนของ `deciding.png` ภาพเดียว ได้แก่ใบคำให้การพร้อมคำถาม และการ์ดสายลับ/แวมไพร์ โดยเลือกสายลับไว้ |
| `optimized/lobby.webp` | 2048 × 2304 | Lobby รหัส DEMOUI พร้อมผู้เล่นตัวอย่างสองคนที่พร้อมทั้งคู่ |
| `optimized/round-reveal.webp` | 1288 × 2224 | ผลตัวอย่างรอบ 2 บทบาทจริง คำทาย คะแนน +4/+3 และคะแนนสะสม 9–3 |
| `optimized/match-result.webp` | 1288 × 2086 | คะแนนรวมตัวอย่าง 11–10 พร้อมสรุปคะแนนทั้ง 4 รอบและปุ่มเล่นอีกครั้ง |

ภาพสำหรับเว็บรวม **4,218,812 bytes** ใช้ WebP แบบ lossless ตรวจ decoded RGBA ตรงกับ PNG ทั้งสี่ภาพ ภาพประกอบคงความละเอียดต้นฉบับ ปกมี `cover.svg` และ `cover.png` สำหรับแก้ไขต่อ โดย SVG ฝังภาพ Deciding ต้นฉบับและใช้ viewBox ครอปส่วนใบคำให้การกับการ์ดผู้ต้องสงสัย

เลือกภาพปกหนึ่งภาพและแกลเลอรี 3 ภาพตามรูปแบบ Playground ภาพ Role intro, Answering, Answer reveal, Match history, Home และมือถือสองภาพเก็บครบในชุดต้นฉบับ

## ขอบเขตของหลักฐานและข้อจำกัด

- คะแนน 9–3 และ 11–10 เป็นค่าตัวอย่างใน Preview แต่ละหน้า คำบรรยายระบุ Design Preview บนปก การ์ด และภาพแกลเลอรี
- Lobby ใช้การกดพร้อมภายใน Preview เพื่อแสดงทั้งสองคนพร้อม ข้อมูลห้องและสถานะออนไลน์เป็นข้อมูลสาธิต
- ภาพหน้าต่าง ๆ มาจาก fixture ของแต่ละหน้า จึงอ้างอิงสถานการณ์ของแต่ละภาพตาม README ชุดส่งงาน
- ภาพมือถือมีสองตำแหน่งเลื่อนเพื่อเก็บการ์ดครบ แถบปุ่มด้านล่างบังการ์ดบางส่วนระหว่างเลื่อนตาม UI ใน snapshot ดังกล่าว
- การตรวจลิงก์ Demo ยืนยันการเข้าถึงหน้า HTML ส่วนสถานะเสร็จแล้วพร้อมเล่นมาจากคำยืนยันของผู้พัฒนา
