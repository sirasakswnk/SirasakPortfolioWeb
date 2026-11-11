# IN SYNC — Playground integration

เกมที่สามใน `src/data/playground.js` แสดงต่อจาก Merchant’s Bluff

## ข้อมูลที่ยืนยันแล้ว

- ผู้พัฒนายืนยันว่าทำคนเดียวทั้งโปรเจค ใช้บทบาท **Solo Developer**
- ผู้พัฒนาระบุว่าเสร็จแล้วพร้อมเล่น ใช้สถานะ **Completed · Playable**
- Play demo https://heartsyncboardgamebymingmx.vercel.app/ ตามลิงก์ที่ผู้พัฒนาให้ ตรวจ HTTP GET วันที่ 11 พฤศจิกายน 2026 ได้ HTTP 200 และ title “IN SYNC”
- Repository https://github.com/sirasakswnk/In-sync-boardgame
- Stack จาก source ได้แก่ Next.js, React, TypeScript, Firebase, @dnd-kit และ CSS Modules

## ภาพสำหรับเว็บ

เก็บต้นฉบับครบ **7 ภาพ** พร้อม README, capture evidence และสคริปต์ของชุดส่งงานไว้ใน `portfolio-screenshots/` รายละเอียดวิธีถ่ายอยู่ใน [README ชุดภาพ](portfolio-screenshots/README.md)

ภาพหลักจาก `/dev/preview` ใช้ป้าย **Design Preview · ข้อมูลตัวอย่าง** ในปก คำอธิบายการ์ด และ captions ส่วนภาพ home ในชุดต้นฉบับใช้ Firebase Emulators และชื่อสาธิตตามเอกสารส่งงาน

| ไฟล์สำหรับเว็บ | ขนาด PNG/WebP | ที่มา |
| --- | --- | --- |
| `optimized/cover.webp` | 1600 × 900 | จัดภาพจาก guess-ranking และ crop ของ game-results พร้อมป้าย Design Preview |
| `optimized/lobby.webp` | 860 × 2360 | Lobby ตัวอย่าง ผู้เล่นสองคน พร้อมหนึ่งคน |
| `optimized/round-reveal.webp` | 860 × 2520 | เปิดคำตอบครบ 5 ใบ คะแนนตัวอย่าง 8/10 |
| `optimized/game-results.webp` | 860 × 2520 | ผลตัวอย่าง 16–22 พร้อมบันทึกรอบและจำนวนทายตรง |

ภาพสำหรับเว็บรวม **2,766,704 bytes** ใช้ WebP แบบ lossless ตรวจ decoded RGBA ของภาพประกอบทั้งสามให้ตรง PNG แล้ว ภาพปกมี `cover.svg` และ `cover.png` สำหรับแก้ไขต่อ และตรวจพิกเซล PNG เทียบ WebP ตรงกัน

ความกว้างภาพต้นฉบับ 860px มาจาก viewport กว้าง 430 CSS px และ device scale 2 ภาพสำหรับเว็บคงความละเอียดจากชุดส่งงาน ภาพปกวาง guess-ranking ครบทั้งภาพ และใช้พื้นที่ `viewBox="0 180 860 986"` ของ game-results

ภาพ self-ranking, watch-guess และ home เก็บในชุดต้นฉบับ ส่วนภาพ guess-ranking ใช้ประกอบปก การเลือกนี้ทำให้รายการมีภาพปกหนึ่งภาพและแกลเลอรี 3 ภาพตามรูปแบบ Playground

## ขอบเขตของหลักฐานและข้อจำกัด

- Source ชุดภาพอยู่ branch `main`, commit `ab2ea87a2e8b1505e177f710dc68d8eccb8b00e4` ตามเอกสารส่งงาน
- Lobby fixture พร้อมเฉพาะมะปราง และแสดงการรอต้นกล้ากดพร้อม คำบรรยายภาพระบุสถานะนี้
- Watch ใช้ demoOrder ของ Preview ตามเอกสาร ภาพนี้เก็บไว้ในต้นฉบับ
- หน้า Guess เรียก live publisher ไปยัง Database Emulator และเกิด permission_denied ที่ `/live/preview/preview-partner` ในรอบถ่าย เอกสารต้นฉบับบันทึกไว้ว่า warning อยู่ใน console ภาพปกใช้หน้าจอที่ browser ส่งออกตามเดิม
- ค่าคะแนนในภาพมาจาก preview reducer/projection และ scoring ของ source snapshot ส่วนผล multiplayer ต้องอ้างอิงการทดสอบระบบเกมโดยตรง
- งานนำเข้า Portfolio ตรวจหน้า HTML ของ Demo, ภาพ และการแสดงผลใน Portfolio การสร้างห้องและการเล่นบน production อยู่นอกขอบเขตการตรวจรอบนี้
