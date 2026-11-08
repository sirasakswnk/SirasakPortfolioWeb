# Nongwaste

โปรเจคที่สี่ในหน้า Portfolio แสดงต่อจาก Kemi Classroom โดยใช้ `featured: false` ใน `src/data/projects.js`

## ข้อมูลที่ยืนยันแล้ว

- โครงการทีมสำหรับ Super AI Engineer Season 5
- บทบาทเจ้าของ Portfolio: LINE & Frontend Developer — รับผิดชอบส่วน LINE และหน้าบ้านตามที่ผู้พัฒนายืนยัน ไม่ระบุจำนวนสมาชิกเพราะยังไม่มีข้อมูล
- สถานะ: Completed (Prototype) ตามที่ผู้พัฒนายืนยัน
- Repository สาธารณะ: https://github.com/sirasakswnk/nongwasteLineChatBot (fork ของ `ukilolll/nongwaste`)
- ยังไม่กำหนด Live Demo และไม่ใช้ URL ที่ปรากฏในภาพเป็นหลักฐานว่าบริการยังออนไลน์
- ระบบประกอบด้วย LINE Messaging API, Python/FastAPI, Ultralytics YOLO, Google Cloud Storage, Firebase Realtime Database และ Google Maps JavaScript API บน HTML/CSS/JavaScript

## ภาพที่แสดง

| ไฟล์สำหรับเว็บ | ขนาด | ที่มาและขอบเขต |
| --- | --- | --- |
| `optimized/cover.webp` | 1600 × 1000 | จัดภาพปกจาก `line-detection.png`, `waste-map.png` และ `Nongwaste.png` โดยไม่สร้างผลตรวจใหม่ |
| `optimized/system-overview.webp` | 1920 × 1280 | แผนภาพ SVG ตาม source code พร้อมมาสคอตที่ผู้ใช้ส่งมา |
| `optimized/line-detection.webp` | 665 × 1292 | ภาพ LINE ต้นฉบับ แสดง segmentation ประเภทพลาสติก และจำนวนวัตถุ |
| `optimized/location-report.webp` | 665 × 1265 | ขั้นตอนส่งภาพและพิกัดใน LINE |
| `optimized/location-report2.webp` | 667 × 1262 | ภาพต่อเนื่องของขั้นตอนเดิม พร้อมข้อความยืนยันการบันทึก |
| `optimized/waste-map.webp` | 666 × 1271 | แผนที่เว็บแสดงหมุดจุดขยะ |
| `optimized/cleanup-report.webp` | 666 × 1271 | รายละเอียดหมุดและ controls สำหรับส่งภาพหลักฐาน ไม่ใช่ภาพยืนยันการส่งสำเร็จ |
| `optimized/plastic-detection.jpg` | 1920 × 1920 | สำเนา JPEG ต้นฉบับของ model validation prediction mosaic |
| `optimized/mascot-poses.webp` | 1600 × 760 | จัดมาสคอตที่ผู้ใช้ให้มาทั้งสามท่าในภาพเดียว ไม่ระบุว่าเจ้าของ Portfolio เป็นผู้ออกแบบ |

รวมภาพสำหรับเว็บ 9 ไฟล์ ขนาด 3,081,461 bytes ณ วันที่ 9 พฤศจิกายน 2026 ภาพหน้าจอ PNG ทั้ง 5 ภาพแปลงเป็น WebP แบบ lossless ที่ขนาดเดิม และตรวจ decoded RGBA เทียบต้นฉบับแล้ว ส่วนภาพโมเดลเก็บ JPEG เดิมโดยไม่บีบอัดซ้ำ

เก็บภาพต้นฉบับทั้งหมดไว้ ภาพจัดองค์ประกอบมี `cover.svg`/`.png` และ `mascot-poses.svg`/`.png` แผนภาพมี `system-overview.svg`/`.png` เพื่อแก้ไขและส่งออกต่อได้

## แหล่งอ้างอิงและข้อจำกัดของคำอธิบาย

- แผนภาพอ้างอิง `main.py`, `frontend/index.html` และ `service/` จาก source snapshot commit `aecfc257c58986f48c2e7c88d5e00a27f009338b`
- LINE รับภาพสำหรับวิเคราะห์พลาสติก หรือรับภาพ พิกัด และคำอธิบายในขั้นตอนแจ้งจุดขยะ โดย FastAPI ประสานงานกับโมเดลและ storage
- เว็บอ่านข้อมูล `locations` จาก Firebase โดยตรง ไม่อ้างว่ามีการอัปเดตหมุดแบบ realtime subscription
- การส่งหลักฐานผ่าน `POST /clean` เก็บภาพใน Google Cloud Storage และเชื่อมระเบียน `clean_ups` กับ location ใน Firebase
- ไม่อ้างรุ่นย่อยของ YOLO, ความแม่นยำรวม, สถานะบริการออนไลน์ หรือการทดสอบระบบจริงจากภาพเหล่านี้ ตัวเลขบนภาพทำนายเป็น confidence ของตัวอย่าง
- ไม่คัดลอก credentials หรือ configuration ของบริการลงในแผนภาพหรือข้อมูล Portfolio
