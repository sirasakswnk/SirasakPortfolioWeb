# MonoShop — Portfolio integration

โปรเจคที่ห้าใน `src/data/projects.js` แสดงต่อจาก Nongwaste โดยใช้ `featured: false`

## ข้อมูลที่ผู้พัฒนายืนยัน

- ชื่อที่แสดง: **MonoShop**
- สถานะ: **Completed (Academic Project)** — โครงงานรายวิชาเสร็จแล้ว
- บทบาท: **Backend Developer** รับผิดชอบ backend ทั้งหมด ไม่ระบุจำนวนสมาชิกเพราะยังไม่ได้ยืนยัน
- ส่วนงาน: Express REST APIs, PostgreSQL data access, ระบบสมาชิกและ authentication, สินค้า, ตะกร้า, คำสั่งซื้อ, administrator checks และอัปโหลดรูปสมาชิก
- Repository สาธารณะ: https://github.com/sirasakswnk/Monoshop
- ไม่กำหนด Live Demo เพราะการตรวจในงานนี้เป็นการนำภาพระบบทดสอบมาแสดงใน Portfolio

## ภาพและที่มา

เก็บชุดภาพส่งงานเดิมพร้อมหลักฐานไว้ใน `portfolio-screenshots/` โดยไม่แก้ไขต้นฉบับ รายละเอียดวิธีถ่าย ข้อมูลสาธิต และข้อจำกัดอยู่ใน [เอกสารชุดภาพ](portfolio-screenshots/README.md)

| ไฟล์สำหรับเว็บ | ความละเอียด | การนำเสนอ |
| --- | --- | --- |
| `optimized/cover.webp` | 1600 × 1000 | ภาพปกที่จัดจากหน้าแรกและรายละเอียดสินค้า พร้อมสรุปบทบาท backend |
| `optimized/system-overview.webp` | 1920 × 1280 | แผนภาพจากชุดส่งงานเดิม แสดง frontend, API, PostgreSQL, authentication และไฟล์ภาพสมาชิก |
| `optimized/home.webp` | 1920 × 1536 | หน้าแรกและสินค้าแนะนำ |
| `optimized/product-catalog.webp` | 1600 × 1050 | การค้นหา figure ผ่าน API ในฐานข้อมูลสาธิต |
| `optimized/product-detail.webp` | 1600 × 1120 | ข้อมูลสินค้าและ controls สำหรับเลือกจำนวน/เพิ่มลงตะกร้า |
| `optimized/cart.webp` | 1600 × 1000 | ตะกร้าสาธิต 3 รายการ รวม 4 ชิ้น ยอด 28,270 บาท |
| `optimized/my-orders.webp` | 1600 × 1050 | คำสั่งซื้อจากการยืนยันตะกร้า และประวัติ seed สาธิต 2 รายการ |
| `optimized/admin-orders.webp` | 1600 × 1280 | มุมมองผู้ดูแล พร้อมรายละเอียดสินค้าและ controls ของคำสั่งซื้อ |
| `optimized/product-edit.webp` | 1600 × 1240 | ฟอร์มแก้ไขสินค้าในบัญชีผู้ดูแลสาธิต |

รวมภาพสำหรับเว็บ 9 ไฟล์ ขนาด **2,477,384 bytes** ภาพจากชุดส่งงานทั้ง 8 ภาพแปลงเป็น WebP แบบ lossless ที่ขนาดเดิม ตรวจ decoded RGBA ให้ตรงกับ PNG แล้ว ภาพปกมี `cover.svg` และ `cover.png` สำหรับแก้ไข/ส่งออกต่อ ส่วน SVG ของแผนภาพอยู่ในชุดส่งงานเดิม

## ขอบเขตคำบรรยาย

- เอกสารชุดภาพระบุว่าถ่ายจาก UI เดิมผ่าน backend จริงและ PostgreSQL cluster แยก ไม่มี mock API ข้อมูลสมาชิกและคำสั่งซื้อใช้ข้อมูลสาธิต ไม่ใช่ข้อมูลลูกค้าจริง
- ภาพยังแสดงชื่อ MonoCraft ตาม UI เดิม ส่วนชื่อการ์ดและปกใช้ MonoShop ตามที่ผู้พัฒนายืนยัน
- ตาม `portfolio-screenshots/backend-validation.json` มีข้อจำกัด order header เก็บ `totalQty`/`totalPrice` เป็น 0 ขณะที่รายละเอียดสินค้าและยอดที่ API คำนวณใหม่ตรงกับภาพ จึงอธิบายยอดบนหน้า Orders ว่าคำนวณจาก order details และไม่ใช้ภาพเป็นหลักฐานว่า workflow ถูกต้องทุกส่วน
- ภาพ Admin แสดง controls ที่มีอยู่ ไม่ได้ทดสอบเปลี่ยนสถานะหรือลบ และภาพ product edit เป็นการเปิดฟอร์มโดยไม่บันทึก
- ไม่อ้างว่ามี payment gateway หรือการชำระเงินจริง
- งานเพิ่ม Portfolio ไม่ได้รัน capture scripts ซ้ำ ไม่เปลี่ยน backend ของ MonoShop และไม่เขียนข้อมูลไปยังระบบ MonoShop ที่ออนไลน์

การตรวจในงานนี้ครอบคลุมภาพและข้อมูลที่นำเข้า รวมถึงการแสดงผลของเว็บ Portfolio แยกจากผลตรวจระบบ MonoShop ที่บันทึกในเอกสารชุดภาพเดิม
