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

หน้า Portfolio ทำงานได้โดยไม่ต้องเปิด backend ข้อมูล Projects อยู่ใน `src/data/projects.js` ส่วนเนื้อหาอื่นกำหนดใน Vue components ไม่มีการเรียก API จาก `data/db.json` ในโค้ดปัจจุบัน

## โครงสร้างหลัก

| ตำแหน่ง | หน้าที่ |
| --- | --- |
| `src/App.vue` | ประกอบส่วนต่าง ๆ ของหน้า |
| `src/components/Portfolio.vue` | Section หลักของ Portfolio พร้อมแท็บ ลูกศร swipe และ transition |
| `src/components/ProjectsPanel.vue` | การ์ดโปรเจค รายละเอียดภาพ และ empty state |
| `src/components/CertificatesPanel.vue` | ใบประกาศ 10 รายการและ native dialog สำหรับดูภาพเต็ม |
| `src/data/projects.js` | ข้อมูลผลงานที่แสดงบนหน้า Projects |
| `src/components/` | รวม Navbar, Hero, Skills และ Contact ด้วย |
| `src/assets/typography.css` | ฟอนต์หลัก กรอบ focus และข้อความสำหรับ assistive technology |
| `src/assets/motion.css` และ `src/utils/motion.js` | รองรับการตั้งค่าลดการเคลื่อนไหว |
| `src/assets/photo/optimized/` | รูปโปรไฟล์ ภาพย่อ และภาพเต็มที่ปรับขนาดไฟล์แล้ว |
| `src/assets/photo/project/` | ภาพต้นฉบับและภาพ optimized ของแต่ละโปรเจค |
| `public/icons/` และ `public/resume.pdf` | ไอคอนและ Resume |
| `data/db.json` | ข้อมูลนักศึกษาและรายวิชาสำหรับ mock API เดิม |

Bootstrap, Bootstrap Icons และ Niramit โหลดผ่าน CDN; เมื่อเข้าไม่ถึง Google Fonts จะใช้ฟอนต์สำรองที่กำหนดใน CSS

## การใช้งาน Portfolio

- เมื่อโหลดเว็บจะแสดง Projects ก่อน สลับเป็น Certificates ได้ด้วยแท็บหรือลูกศรเหนือเนื้อหา
- บนจอสัมผัสสามารถปัดแนวนอนบนพื้นที่เนื้อหาทั่วไปเพื่อสลับหมวด การปัดบนลิงก์ ปุ่ม และ dialog จะไม่เปลี่ยนหมวด
- หมวดที่เลือกคงอยู่เมื่อเลื่อนไปส่วนอื่นแล้วกลับมา และกลับเป็น Projects เมื่อ reload
- ใช้ Tab เลื่อนไปยัง controls, Enter/Space กดปุ่ม และ Left/Right/Home/End เลือกแท็บ
- การ์ดโปรเจคเปิดภาพหลักขนาดเต็มได้ และใช้ View project screenshots เพื่อเปิดภาพประกอบเพิ่มเติม ทุกภาพมีคำอธิบายและเปิดขนาดเต็มในแท็บใหม่ได้
- ใบประกาศเปิดด้วย Enter/Space และปิดด้วย Escape, ปุ่ม Close หรือพื้นหลัง dialog จะคืน focus ไปยังการ์ดเดิม
- ระบบรองรับ `prefers-reduced-motion` และถอด panel ที่ออกหลัง transition จบ เพื่อให้แต่ละ panel จัดการ cleanup ของตัวเอง

## การเพิ่มหรือแก้ไขโปรเจค

1. เตรียมภาพใน `src/assets/photo/project/<ชื่อโฟลเดอร์>/` และภาพสำหรับเว็บในโฟลเดอร์ `optimized/` ของโปรเจคนั้น เก็บต้นฉบับไว้สำหรับปรับภาพภายหลัง
2. Import ภาพที่เตรียมแล้วและเพิ่ม object ใน array `projects` ของ `src/data/projects.js` ลำดับใน array คือลำดับการแสดง
3. ใช้ `id` ที่ไม่ซ้ำ พร้อมชื่อ คำอธิบาย เทคโนโลยี บทบาท และสถานะตามความเป็นจริง
4. ใส่ `repositoryUrl` หรือ `demoUrl` เฉพาะลิงก์สาธารณะที่พร้อมใช้งาน หากไม่มีให้ใช้ `null` ระบบจะซ่อนปุ่มนั้น รองรับ absolute URL แบบ HTTP/HTTPS
5. กำหนดขนาดภาพตามไฟล์จริงใน `imageWidth`/`imageHeight` และ `width`/`height` ของ screenshot พร้อม alt และ caption ที่สื่อความหมาย

โครงสร้างรายการใหม่ (เป็นตัวอย่างสำหรับแก้ค่าและเพิ่มไฟล์ภาพก่อนใช้งาน):

```js
import cover from '@/assets/photo/project/project-two/optimized/cover.webp'

// เพิ่มใน array projects
{
  id: 'project-two',
  title: 'ชื่อโปรเจค',
  category: 'Personal Project',
  status: 'In Development',
  role: 'บทบาทของคุณ',
  summary: 'โปรเจคทำอะไรหรือแก้ปัญหาอะไร',
  roleDescription: 'ส่วนที่คุณพัฒนาและรับผิดชอบจริง',
  technologies: ['เทคโนโลยีที่ใช้จริง'],
  image: cover,
  imageAlt: 'คำอธิบายภาพหลัก',
  imageWidth: 1600,
  imageHeight: 1000,
  imageCaption: 'คำอธิบายภาพหรือประเภทข้อมูลสาธิต',
  repositoryUrl: null,
  demoUrl: null,
  screenshots: [],
}
```

แต่ละรายการใน `screenshots` ใช้ฟิลด์ `id`, `title`, `image`, `imageAlt`, `width`, `height` และ `caption` หากไม่มีภาพเพิ่มเติมให้ใช้ array ว่าง รายการ Projects ว่างจะแสดง empty state

OCRPTT เป็นโครงการสหกิจศึกษาที่ผู้พัฒนารับผิดชอบคนเดียว มีสถานะ Completed (Prototype) ภาพ UI/ประวัติ/รายงานใช้ข้อมูล Demo ส่วนภาพ detection เป็น recorded model output จึงไม่ใช้ค่าบนภาพเหล่านี้เป็นคำกล่าวอ้างความแม่นยำ OCR ปัจจุบันไม่มีปุ่ม GitHub หรือ Live Demo สำหรับรายการนี้

ภาพ OCRPTT สำหรับเว็บชุดปัจจุบันเป็น WebP รวม 292,908 bytes เทียบกับ PNG ต้นฉบับ 1,299,955 bytes โดยรักษาสัดส่วนภาพและเปิดดูขนาดเต็มได้ การ์ดโหลดภาพหลักก่อน ส่วนภาพประกอบใช้ lazy loading ภายในรายละเอียดที่ยุบไว้ ตัวเลขนี้เป็นขนาดไฟล์ ณ วันที่ 6 พฤศจิกายน 2026 ไม่ใช่ผลวัดเวลาโหลด และควรตรวจใหม่เมื่อเปลี่ยนภาพ

## การตรวจหลังแก้ไข

```sh
npm run build
git diff --check
```

ตรวจผ่านเบราว์เซอร์เพิ่มที่จอ 320, 375/390, 768 และ 1440px รวมถึงแนวนอน: Projects เป็นค่าเริ่มต้น, tabs/arrows/swipe, การสลับเร็ว, keyboard/focus, reduced motion, ภาพโปรเจคและใบประกาศ พร้อม console/network และการคืน scroll หลังปิด dialog

ผล viewport/touch emulation เป็นการตรวจในเบราว์เซอร์บนเครื่องพัฒนา การรับรองบนมือถือจริงหรือ screen reader ต้องทดสอบเพิ่มเติมแยกต่างหาก

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
