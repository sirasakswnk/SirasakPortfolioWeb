# Sirasak Portfolio

เว็บ Portfolio ส่วนตัวของ **Sirasak Suwannakoed** สำหรับนำเสนอผลงานพัฒนาเว็บ งานด้าน AI ทักษะ และประสบการณ์ผ่านโปรเจคต่าง ๆ พัฒนาด้วย Vue 3 และ Vite รองรับการแสดงผลบนคอมพิวเตอร์และมือถือ

## สิ่งที่อยู่ในเว็บ

- **Home** แนะนำตัว พร้อมลิงก์ GitHub, LinkedIn และ Resume
- **Projects** ผลงานหลัก พร้อมบทบาทที่รับผิดชอบ เทคโนโลยี และแกลเลอรีภาพ
- **Playground** เกมและโปรเจคส่วนตัวที่ทำเพื่อเล่นกับเพื่อน
- **Certificates** ใบประกาศและภาพที่เปิดดูขนาดเต็มได้
- **Skills และ Contact** ทักษะและช่องทางติดต่อ

## เทคโนโลยี

Vue 3, Vite, JavaScript, CSS และ Bootstrap โดยใช้ฟอนต์ Niramit

## เริ่มต้นใช้งาน

เตรียม Node.js และ npm แล้วติดตั้ง dependencies และเปิดเซิร์ฟเวอร์พัฒนา

```sh
npm ci
npm run dev
```

เปิด URL ที่ Vite แสดงใน terminal บน Windows PowerShell สามารถใช้ `npm.cmd` แทน `npm` หากติดข้อจำกัด execution policy

## Build และ preview

```sh
npm run build
npm run preview
```

ไฟล์สำหรับเผยแพร่อยู่ใน `dist/` ส่วนคำสั่ง preview ใช้เปิดตรวจเว็บที่ build แล้วในเครื่อง

## โครงสร้างโปรเจค

| ตำแหน่ง | เนื้อหา |
| --- | --- |
| `src/components/` | ส่วนต่าง ๆ ของหน้าเว็บ การ์ดผลงาน และหน้าต่างดูรายละเอียด |
| `src/data/projects.js` | ข้อมูลผลงานหลัก |
| `src/data/playground.js` | ข้อมูลเกมและโปรเจคส่วนตัว |
| `src/assets/` | สไตล์ ภาพผลงาน และใบประกาศ |
| `public/` | Resume ไอคอน และไฟล์สาธารณะ |
