# Sirasak Portfolio

เว็บ Portfolio หน้าเดียวของ Sirasak Suwannakoed พัฒนาด้วย Vue 3 และ Vite ประกอบด้วยข้อมูลแนะนำตัว ใบประกาศ ทักษะ และช่องทางติดต่อ

## เริ่มใช้งาน

ติดตั้ง dependencies ตาม `package-lock.json`:

```sh
npm ci
npm run dev
```

เปิด URL ที่ Vite แสดงใน terminal บน Windows PowerShell หากเรียก `npm` ไม่ได้เพราะ execution policy ให้ใช้ `npm.cmd` แทน

สภาพแวดล้อมที่ตรวจล่าสุด: Node.js `v24.20.0` และ npm `11.19.0`

## Build และ preview

```sh
npm run build
npm run preview
```

ผล build อยู่ใน `dist/` ส่วน preview ใช้ตรวจผล build ในเครื่อง และต้องสั่ง build ก่อน

หน้า Portfolio ทำงานได้โดยไม่ต้องเปิด backend เนื้อหาที่แสดงกำหนดไว้ใน Vue components โดยตรง ไม่มีการเรียก API จาก `data/db.json` ในโค้ดปัจจุบัน

## โครงสร้างหลัก

| ตำแหน่ง | หน้าที่ |
| --- | --- |
| `src/App.vue` | ประกอบส่วนต่าง ๆ ของหน้า |
| `src/components/` | Navbar, Hero, Certificates (`Portfolio.vue`), Skills และ Contact |
| `src/assets/typography.css` | ฟอนต์หลัก กรอบ focus และข้อความสำหรับ assistive technology |
| `src/assets/motion.css` และ `src/utils/motion.js` | รองรับการตั้งค่าลดการเคลื่อนไหว |
| `src/assets/photo/optimized/` | รูปโปรไฟล์ ภาพย่อ และภาพเต็มที่ปรับขนาดไฟล์แล้ว |
| `public/icons/` และ `public/resume.pdf` | ไอคอนและ Resume |
| `data/db.json` | ข้อมูลนักศึกษาและรายวิชาสำหรับ mock API เดิม |

Bootstrap, Bootstrap Icons และ Niramit โหลดผ่าน CDN; เมื่อเข้าไม่ถึง Google Fonts จะใช้ฟอนต์สำรองที่กำหนดใน CSS

## Mock API เดิม (ไม่จำเป็นสำหรับหน้า Portfolio)

เก็บ `json-server` และ `data/db.json` ไว้สำหรับใช้งานข้อมูลเดิมแยกจากหน้าเว็บ เปิดด้วย terminal อีกหน้าต่าง:

```sh
npm run backend
```

Endpoints ที่พอร์ต 3000:

- `GET http://localhost:3000/subjects` — รายการรายวิชา
- `GET http://localhost:3000/subjects/:id` — รายวิชาตาม `id` ของรายการ
- `GET http://localhost:3000/student` — ข้อมูลนักศึกษา

ใช้ `json-server` รุ่น `1.0.0-beta.3` ตาม lockfile ซึ่ง watch การเปลี่ยนไฟล์ให้อัตโนมัติ จึงไม่ต้องใส่ `--watch` คำสั่งนี้เป็น mock server สำหรับพัฒนา มี API เขียนข้อมูลที่บันทึกกลับไปยังไฟล์ JSON ด้วย

หากพอร์ต 3000 ถูกใช้อยู่ สามารถระบุพอร์ตอื่นได้:

```sh
npm run backend -- --port 3001
```

หยุด dev server, preview หรือ mock server ด้วย `Ctrl+C` ใน terminal ที่เปิดไว้

## Dependencies

- Runtime ของหน้าเว็บ: `vue`
- เครื่องมือพัฒนา: `vite`, `@vitejs/plugin-vue`, `vite-plugin-vue-devtools`
- Mock API เสริม: `json-server` อยู่ใน devDependencies และไม่จำเป็นต่อการแสดงหน้า Portfolio

นำ direct dependencies `jason-server` และ `uuid` ออกแล้ว เพราะไม่พบการใช้งานใน source หรือ scripts; `jason-server` เป็นคนละแพ็กเกจกับ `json-server`
