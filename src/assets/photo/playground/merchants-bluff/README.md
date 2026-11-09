# Merchant’s Bluff — Playground integration

เกมที่สองใน `src/data/playground.js` แสดงต่อจาก Wavelength โดยใช้การ์ดแบบย่อของ Playground

## ข้อมูลที่ผู้พัฒนายืนยัน

- ทำคนเดียวทั้งโปรเจค: **Solo Developer**
- สถานะ: **Playable Prototype**
- ผู้พัฒนายืนยันว่า deploy แล้วที่ https://merchant-s-bluff.vercel.app/
- ตรวจ HTTP GET ของ URL นี้วันที่ 9 พฤศจิกายน 2026 ได้ **200** และ title “Merchant’s Bluff” จึงใส่ Play demo ตรวจเฉพาะหน้า HTML ไม่ได้สร้างบัญชี ห้อง หรือทดสอบ multiplayer บน production
- Repository: https://github.com/sirasakswnk/Merchant-s-Bluff
- Stack จาก source: Next.js, React, TypeScript, Firebase Auth/Realtime Database และ Zod พร้อมแยก game engine, server command validation และ UI

## แหล่งภาพ

เก็บต้นฉบับ **9 ภาพ** และเอกสารส่งงานไว้ใน `portfolio-screenshots/` โดยไม่เปลี่ยนแปลง อ่าน [README ชุดภาพ](portfolio-screenshots/README.md) สำหรับวิธีถ่ายซ้ำและขอบเขตการตรวจ

ทุกภาพเป็น **Design Preview** และข้อมูลตัวอย่าง ไม่ใช่ผล multiplayer จริง ชุดภาพถ่ายจาก branch `preview`, commit `d7625f5a9937c8e2ba82c8ead2e708e2d356dd3a` ปก คำอธิบายบนการ์ด และคำบรรยายภาพที่แสดงบนเว็บระบุ Design Preview ไว้

| ไฟล์สำหรับเว็บ | ขนาด | ที่มา |
| --- | --- | --- |
| `optimized/cover.webp` | 1600 × 900 | จัดภาพจากสองพื้นที่ของ `game-table.png` ได้แก่โต๊ะและผู้เล่น กับแผงจัดกระเป๋า พร้อมป้าย DESIGN PREVIEW |
| `optimized/sheriff-decision.webp` | 1073 × 440 | แผงเลือกพ่อค้า คำแจ้ง ข้อเสนอเงิน และปุ่มตัดสิน |
| `optimized/inspection-result.webp` | 1440 × 2030 | ฉากผลตรวจที่มีสินค้าที่เปิดเผย การยึด และค่าปรับตัวอย่าง |
| `optimized/ranking-and-rules.webp` | 1760 × 950 | จัด `final-score.png` กับ `final-score-rules.png` คู่กัน โดยแยกป้ายกำกับและคงภาพต้นฉบับที่ขนาดเดิม |

ภาพสำหรับเว็บรวม **1,663,076 bytes** ใช้ WebP แบบ lossless ภาพ sheriff-decision/inspection-result คงความละเอียดเดิมและตรวจ decoded RGBA เทียบต้นฉบับแล้ว ภาพจัดองค์ประกอบมี SVG/PNG สำหรับแก้ไขต่อ ได้แก่ `cover` และ `ranking-and-rules`

ปกใช้พื้นที่จากภาพต้นฉบับ 1440 × 2287: โต๊ะ `viewBox="260 440 920 950"` และแผงจัดกระเป๋า `viewBox="177 1470 1073 790"` ไม่มีการสร้าง UI หรือผลเกมใหม่

ภาพ lobby, mobile-hand-01/02 และ home เก็บต้นฉบับไว้ โดยยังไม่ได้ import เข้าแกลเลอรีเพื่อคงรายการให้กระชับ การแสดงสูตรคะแนนรวมไว้ในภาพคู่ ทำให้แกลเลอรีมี 3 ภาพตามรูปแบบ Playground

## ข้อจำกัดของ snapshot ที่นำเสนอ

- ป๊อปอัปใน `final-score.png` แสดงอันดับและเงินสด ยังไม่มีคะแนนรวม รายละเอียดสินค้า/โบนัส หรือเจ้าตลาด จึงบรรยายตามสิ่งที่เห็นจริง ไม่อ้างว่าตัวเลขเงินสดเป็นคะแนนรวม
- สูตรคะแนนอยู่ในแผงกติกาอีกภาพหนึ่ง การจัดภาพคู่ไม่ใช่ภาพหน้าจอเดียว และไม่ใช่หลักฐานว่าป๊อปอัปคำนวณ/แสดงองค์ประกอบคะแนนทั้งหมด
- ข้อจำกัดนี้อ้างอิง source snapshot ที่ถ่ายภาพ ไม่สรุปแทนทุกเวอร์ชันของเกมที่ deploy
- ภาพหลักมาจาก `/preview` ไม่เรียก Rooms API/Auth/RTDB ตามเอกสารชุดภาพ ส่วนภาพ home ใช้ Auth Emulator ในรอบถ่าย ไม่มีผลเกม multiplayer
- งาน Portfolio ไม่เปลี่ยน source เกม ไม่แก้ Firebase Rules ไม่รัน capture ซ้ำ และไม่เขียนข้อมูล production
