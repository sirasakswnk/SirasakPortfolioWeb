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
| `src/components/ProjectsPanel.vue` | เลือกโปรเจคเด่น กริดโปรเจคอื่น และ empty state |
| `src/components/ProjectCard.vue` | การ์ดโปรเจคเด่นและการ์ดขนาดย่อ |
| `src/components/ProjectDetailsDialog.vue` | native dialog สำหรับรายละเอียด บทบาท เทคโนโลยี และภาพทั้งหมด |
| `src/components/ProjectImageButton.vue` และ `ProjectImageViewer.vue` | ภาพที่มีเอฟเฟกต์ hover และป๊อปอัปดูภาพ พร้อมขนาดจริง |
| `src/assets/project-dialog.css` | ธีมครีมอุ่น–ทอง–ม่วงที่ใช้ร่วมกันในป๊อปอัปรายละเอียดและดูภาพ |
| `src/utils/bodyScrollLock.js` | จัดการการล็อก scroll สำหรับหน้าต่างรายละเอียดและภาพที่เปิดซ้อนกัน |
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
- Projects แสดงโปรเจคเด่นหนึ่งรายการด้านบน และโปรเจคอื่นเป็นกริด 2 คอลัมน์ หรือ 1 คอลัมน์เมื่อหน้าจอกว้างไม่เกิน 700px ส่วน More projects จะปรากฏเมื่อมีโปรเจคอื่นจริง
- การ์ดแสดงรูปปก ชื่อ สถานะ บทบาท คำอธิบายสั้น และเทคโนโลยีหลักไม่เกิน 4 รายการ กด View details เพื่ออ่านบทบาท เทคโนโลยีทั้งหมด และดูภาพพร้อมคำอธิบาย
- รูปปกและรูปในรายละเอียดมีเอฟเฟกต์ hover และปุ่ม View image กดแล้วเปิดป๊อปอัปในหน้าเดิม ใช้ Actual size ดูขนาดจริงและเลื่อนดูภาพ หรือ Fit to screen เพื่อย่อกลับ ปิดด้วย Escape, Close หรือพื้นหลังแล้วคืน focus ไปยังรูปเดิม หากเปิดจากรายละเอียด หน้าต่างรายละเอียดและตำแหน่ง scroll ภายในจะยังอยู่
- หน้าต่างรายละเอียดโปรเจคปิดได้ด้วย Escape, ปุ่ม Close หรือพื้นหลัง จากนั้นคืน focus ไปปุ่มเดิมและคืนการเลื่อนหน้าเว็บ ระหว่างเปิดหน้าต่างจะไม่สลับหมวด Portfolio
- ใบประกาศเปิดด้วย Enter/Space และปิดด้วย Escape, ปุ่ม Close หรือพื้นหลัง dialog จะคืน focus ไปยังการ์ดเดิม
- ระบบรองรับ `prefers-reduced-motion` และถอด panel ที่ออกหลัง transition จบ เพื่อให้แต่ละ panel จัดการ cleanup ของตัวเอง

## การเพิ่มหรือแก้ไขโปรเจค

1. เตรียมภาพใน `src/assets/photo/project/<ชื่อโฟลเดอร์>/` และภาพสำหรับเว็บในโฟลเดอร์ `optimized/` ของโปรเจคนั้น เก็บต้นฉบับไว้สำหรับปรับภาพภายหลัง
2. Import ภาพที่เตรียมแล้วและเพิ่ม object ใน array `projects` ของ `src/data/projects.js` ใช้ `featured: true` กับโปรเจคเด่นหนึ่งรายการ (ปัจจุบันคือ OCRPTT) รายการอื่นแสดงตามลำดับใน array หากไม่ได้กำหนดโปรเจคเด่นจะใช้รายการแรก หากกำหนดหลายรายการจะใช้รายการแรกที่มีค่า `featured: true` เป็นโปรเจคเด่นเพียงรายการเดียว
3. ใช้ `id` ที่ไม่ซ้ำ พร้อมชื่อ คำอธิบาย เทคโนโลยี บทบาท และสถานะตามความเป็นจริง หากยังไม่ได้ยืนยันสถานะให้ใช้ `status: null` เพื่อซ่อนป้ายสถานะทั้งบนการ์ดและในรายละเอียด
4. ใส่ `repositoryUrl` หรือ `demoUrl` เฉพาะลิงก์สาธารณะที่พร้อมใช้งาน หากไม่มีให้ใช้ `null` ระบบจะซ่อนปุ่มนั้น รองรับ absolute URL แบบ HTTP/HTTPS
5. กำหนดขนาดภาพตามไฟล์จริงใน `imageWidth`/`imageHeight` และ `width`/`height` ของ screenshot พร้อม alt และ caption ที่สื่อความหมาย

โครงสร้างรายการใหม่ (เป็นตัวอย่างสำหรับแก้ค่าและเพิ่มไฟล์ภาพก่อนใช้งาน):

```js
import cover from '@/assets/photo/project/project-two/optimized/cover.webp'

// เพิ่มใน array projects
{
  id: 'project-two',
  featured: false,
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

ภาพ OCRPTT สำหรับเว็บชุดปัจจุบันมี 6 ภาพ รวม System overview เป็น WebP รวม 422,576 bytes เทียบกับ PNG ต้นฉบับ 1,538,815 bytes โดยรักษาสัดส่วนภาพและเปิดดูขนาดเต็มได้ การ์ดโหลดภาพหลักก่อน ส่วนภาพประกอบจะสร้างเมื่อเปิดหน้าต่างรายละเอียดและใช้ lazy loading ตัวเลขนี้เป็นขนาดไฟล์ ณ วันที่ 6 พฤศจิกายน 2026 ไม่ใช่ผลวัดเวลาโหลด และควรตรวจใหม่เมื่อเปลี่ยนภาพ

MunBOT อยู่ถัดจาก OCRPTT ในส่วน More projects เป็นโครงงานที่ทำร่วมกับเพื่อนรวม 2 คน โดยเจ้าของ Portfolio รับผิดชอบ LINE Chatbot, RAG และการเทรนโมเดล ขณะนี้เว้นสถานะไว้เพื่อรอการยืนยัน และยังไม่มีลิงก์สาธารณะ GitHub/Live Demo

ภาพ MunBOT มีภาพปก 1 ภาพและภาพประกอบ 10 ภาพใน `project-two/optimized/` รวม 886,862 bytes ภาพ JPEG ใช้สำเนาต้นฉบับเพราะมีขนาดเล็กกว่าการแปลงเป็น WebP แบบ lossless ส่วนภาพปกและตารางประเมินใช้ WebP ภาพปกแก้ไขต่อได้จาก `project-two/cover.svg` โดยใช้ภาพหน้าจอจริงที่ฝังไว้ใน SVG

คำบรรยายผลประเมินระบุ 93.3% จากภาพทดสอบ 2,774 ภาพ ครอบคลุม Healthy, Mosaic Disease และ Brown Streak Disease โดยไม่มี Bacterial Blight ในชุดทดสอบนี้ ค่าความมั่นใจบนหน้าจอทำนายแต่ละภาพแสดงเป็น confidence ไม่ใช้แทนความแม่นยำรวมของโมเดล ภาพต้นฉบับหลายภาพมีความละเอียดต่ำ จึงอาจไม่คมเมื่อขยายขนาดจริง

Kemi Classroom เป็นโปรเจคที่สามในกริด โดยผู้พัฒนายืนยันว่าทำคนเดียว ใช้บทบาท Solo Full-stack Developer และสถานะ Deployed · Pilot Preparation ภาพมีปก 1 ภาพและภาพประกอบ 10 ภาพใน `project-three/optimized/` รวม 1,211,894 bytes ภาพปกและแผนภาพมีต้นฉบับ SVG สำหรับแก้ไขต่อได้

ภาพ Kemi Classroom ใช้ข้อมูลสาธิตจากระบบทดสอบ โดยตารางคะแนนเป็น UI ปัจจุบันที่ render ด้วย fixture ในเครื่อง และผู้ใช้ยืนยันว่ารายชื่อกับเลขประจำตัวในภาพนำเข้า Excel เป็นข้อมูลสมมติ ภาพ admin แสดงคำเตือนสำรองตามภาพจริง ไม่อ้างว่าผลตรวจทั้งหมดผ่าน ส่วนสถานะนำร่องเป็นการเตรียม ยังไม่อ้างว่าผ่านการใช้งานจริงครบทุกห้อง Repo เป็น private จึงเว้น GitHub และยังไม่ได้กำหนดลิงก์ Demo

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
