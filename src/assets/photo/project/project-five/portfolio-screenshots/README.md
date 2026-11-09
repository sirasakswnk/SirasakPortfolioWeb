# MonoShop — Portfolio screenshots

ถ่ายวันที่ **9 พฤศจิกายน 2026** จาก UI ปัจจุบันของโปรเจกต์บนเครื่องจริง โดยใช้ **Playwright MCP**
สำหรับภาพหน้าจอทั้ง 7 ภาพ ภาพแผนผังเป็นงาน SVG ที่สร้างจากการตรวจโค้ดและ render เป็น PNG แยกต่างหาก
ยังไม่ได้จัดรวมเป็นภาพปก Portfolio และไม่ได้ commit, push หรือ deploy

## ไฟล์ส่งงาน

ทุก PNG คงความละเอียดเดิม ใช้ browser zoom 100%, device scale 1 และถ่ายเป็น viewport
ไม่ย่อภาพหลังถ่าย ไม่ประกอบหน้าจอใหม่ และไม่มี API fixture/mock ในภาพส่งงาน

| ไฟล์ | ความละเอียด | หน้า / ขั้นตอนที่ถ่าย | ที่มาของข้อมูล |
| --- | --- | --- | --- |
| `home.png` | 1920 × 1536 | หน้า Home แบบยังไม่เข้าสู่ระบบ เห็น Navbar, Hero, Art Toy และสินค้าแนะนำ 3 รายการ | UI จริง + สินค้าสำเนาในฐานข้อมูลสาธิต |
| `product-catalog.png` | 1600 × 1050 | ใช้ช่องค้นหาบน Navbar ค้นคำว่า **figure** เห็นคำค้นและผลลัพธ์ Changli, Theresa และ Original | ค้นผ่าน `GET /products/search/figure` จริง ได้ 3 รายการ |
| `product-detail.png` | 1600 × 1120 | ลูกค้าสาธิตเปิด Mr.Apeone รหัส `001` เห็นภาพ ราคา ยี่ห้อ วัสดุ ขนาด รุ่น คำอธิบาย จำนวน และปุ่มเพิ่มลงตะกร้า | ข้อมูลสินค้าเดิมสำเนา + บัญชีสาธิต |
| `cart.png` | 1600 × 1000 | ตะกร้าลูกค้าสาธิต: Mr.Apeone ×2, Sora ×1, Elli ×1 รวม 3 รายการ / 4 ชิ้น / 28,270 บาท เห็นปุ่มปรับจำนวน ลบ และยืนยัน | เพิ่มสินค้าจาก UI ผ่าน Express API และบันทึกใน PostgreSQL แยกจริง |
| `my-orders.png` | 1600 × 1050 | เปิด Orders ของลูกค้าสาธิต กางรายการล่าสุด พร้อมคำสั่งซื้อย้อนหลังอีก 2 รายการ | รายการล่าสุดสร้างผ่านการยืนยันตะกร้าจริงในระบบสาธิต; อีก 2 รายการเป็น seed สาธิต |
| `admin-orders.png` | 1600 × 1280 | เข้าสู่ระบบ Admin สาธิต เปิด Admin Orders และกางรายการล่าสุด เห็นยอด สถานะ และปุ่มตกลง/ลบที่มีจริง | อ่านคำสั่งซื้อในฐานข้อมูลสาธิตเดียวกัน ไม่มีการกดเปลี่ยนสถานะหรือลบ |
| `product-edit.png` | 1600 × 1240 | Admin สาธิตเปิด Mr.Apeone แล้วกดแก้ไขสินค้า เห็นฟอร์มและปุ่มบันทึก/ยกเลิก | ฟอร์มจริงจากข้อมูลสินค้าเดิม **ไม่ได้แก้ค่าและไม่ได้กดบันทึก** |
| `system-overview.svg` | viewBox 1920 × 1280 | แผนภาพสถาปัตยกรรมที่สร้างใหม่จากโค้ดจริง | native SVG shapes, paths และ text ที่แก้ไขต่อได้ |
| `system-overview.png` | 1920 × 1280 | Render จาก SVG ด้านบนด้วย Chromium/Playwright | ภาพส่งออกแผนผัง ไม่ใช่ screenshot ของหน้าเว็บ |

## การแยกข้อมูลและที่มาของภาพ

- Frontend ใช้ Vue source, Pinia stores, Vue Router, Bootstrap และ CSS เดิมทั้งหมด
  เซิร์ฟเวอร์สำหรับถ่ายภาพใช้ Vue plugin และ alias เดิม แต่ไม่เปิด `vite-plugin-vue-devtools`
  จึงไม่มี DevTools overlay โดยไม่ได้ลบหรือแต่งเนื้อหา UI เพื่อถ่ายภาพ
- URL สำหรับถ่าย: Frontend `http://127.0.0.1:5173/`, Express API `http://127.0.0.1:3010/`
- PostgreSQL สำหรับงานนี้เป็น **cluster แยก** ที่ฟังเฉพาะ `127.0.0.1:55432`
  ฐานข้อมูลชื่อ `monoshop_portfolio_demo` ข้อมูลและไฟล์ runtime อยู่ใน `work/portfolio-demo/`
  ไม่ใช้ฐานข้อมูลเดิมเป็นปลายทางของคำสั่งเขียน
- คัดลอกเฉพาะ schema 9 ตารางและข้อมูล catalog จาก local source แบบอ่านอย่างเดียว:
  `products`, `brands`, `series`, `producttype` มีสินค้า 9 รายการ
  **ไม่ได้คัดลอกสมาชิก ตะกร้า หรือคำสั่งซื้อส่วนบุคคลจากฐานข้อมูลเดิม**
- สมาชิก 2 คนเป็นสาธิต: **Portfolio Customer** และ **Portfolio Admin**
  อีเมลที่ปรากฏในภาพอยู่บนโดเมน `example.invalid` และไม่มีผู้รับจริง
  รูป avatar ใช้สำเนา `backend/img_mem/default.jpg` ซึ่งเป็นภาพการ์ตูนของระบบ
  บัญชี Admin ถูก provision ในฐานข้อมูลสาธิต ไม่ได้อ้างว่าหน้าสมัครสมาชิกสร้าง Admin ได้
- Password สาธิตและ secret ของ instance นี้สร้างแบบสุ่มและเก็บเฉพาะไฟล์ local ที่ถูก ignore
  ไม่รวมไว้ในโฟลเดอร์ส่งงานนี้ ไม่ต้องพิมพ์ credentials ในเอกสารหรือข้อความตอบกลับ
- ภาพสินค้าใช้ไฟล์เดิม `backend/img_pd/001.jpg` ถึง `009.jpg`
  Hero ใช้ `frontend/MonoShop/public/Model.png`; โลโก้ใช้ `public/mono_img.png`
- คำสั่งซื้อ `DEMO202611070001` (confirmed) และ `DEMO202611050001` (shipped)
  เป็นตัวอย่างย้อนหลังที่ seed เพื่อสาธิต UI สถานะ ไม่ใช่หลักฐานการขายหรือจัดส่งจริง
- คำสั่งซื้อ `ORD202611090001` เกิดจากการเพิ่มสินค้าทาง UI และยืนยันตะกร้าในระบบสาธิตจริง
  ภาพ cart ถูกถ่ายก่อนยืนยัน จากนั้นจึงถ่าย my-orders/admin-orders หลังยืนยัน
  เมื่อถ่ายเสร็จ ตะกร้านี้ถูกใช้สร้าง order แล้ว จึงไม่มี active cart ค้างอยู่
- ไม่มีการ mock API หรือ inject JWT เพื่อข้าม login ภาพทั้งสองบทบาทผ่านฟอร์ม login
  และใช้ cookie ที่ Express ออกให้จริง ภาพเหล่านี้เป็น **ข้อมูลสาธิตผ่าน backend จริง**
  ไม่ใช่ธุรกรรมลูกค้าจริงหรือผลรับรองการทำงานทุกส่วนของระบบ
- ภาพเบื้องต้นที่ถ่ายด้วย Playwright ผ่าน Node และใช้ฟอนต์สำรองถูกถ่ายทับแล้ว
  ไฟล์ 7 ภาพในตารางเป็นรุ่นสุดท้ายจาก Playwright MCP ที่โหลด webfonts สำเร็จ

## สิ่งที่ตรวจจากโค้ดก่อนถ่าย

อ่าน `README.md` ระดับ root และ `frontend/MonoShop/README.md` แล้ว
ไม่พบ `AGENTS.md` ในโปรเจกต์หรือโฟลเดอร์แม่ที่ตรวจ (`D:/`, `D:/Vscode/`, `D:/Vscode/Monoshop-main/`)

| ส่วน | หลักฐานจาก source |
| --- | --- |
| Vue 3, Pinia, Bootstrap, Axios | `frontend/MonoShop/package.json`, `src/main.js` |
| Routes ของ Home/catalog/member/product/cart/orders/admin | `frontend/MonoShop/src/router/index.js` |
| สถานะ login และ avatar / จำนวนและรหัสตะกร้า | `src/stores/authStore.js`, `src/stores/cartStore.js` |
| UI ภาพทั้ง 7 | `TheHome.vue`, `PageProduct.vue`, `ProductShow.vue`, `CartShow.vue`, `OrderList.vue`, `AdminOrders.vue`, `MainMenu.vue` |
| การ login ผ่านฟอร์ม | `TheLogin.vue`, `backend/Controllers/memberController.js` |
| Express, CORS, body/cookie parser, static images | `backend/index.js` |
| bcrypt hash, JWT อายุ 1 ชั่วโมง, HttpOnly cookie | `backend/Controllers/memberController.js`, `backend/service/authCookie.js` |
| JWT/role สำหรับแก้สินค้าและจัดการ order ของ Admin | `productController.putProducts`, `cartController.ensureAdmin` |
| สินค้า/สมาชิก/ตะกร้า/คำสั่งซื้อ | `backend/Routes/*.js`, `backend/Controllers/*.js` |
| PostgreSQL ผ่าน pg Pool | `backend/service/database.js`, `databaseConfig.js` |
| รูปสินค้าและสมาชิกใน filesystem | `/img_pd`, `/img_mem` ใน `index.js`; Multer upload ใน `memberController.js` |

`sources/schema.sql` เป็น schema-only snapshot ไม่มีข้อมูลสมาชิกหรือ credentials
`sources/catalog.json` มีเฉพาะข้อมูลสินค้าสาธารณะและ lookup tables ที่ใช้สาธิต
`sources/source-fingerprints.json` บันทึก SHA-256 ของไฟล์ source ที่เกี่ยวข้อง เพื่อเทียบว่าภาพมาจาก source รุ่นใด

## วิธีรันและถ่ายซ้ำ

ใช้ Windows, PostgreSQL 17 binaries, Node.js ตามเงื่อนไขของ frontend และติดตั้ง dependencies
ใน `backend/` และ `frontend/MonoShop/` ก่อน เริ่มคำสั่งจาก root ของโปรเจกต์
ถ้า PostgreSQL อยู่คนละตำแหน่ง ให้ตั้ง `PG_BIN` เป็นโฟลเดอร์ที่มี `initdb.exe`, `postgres.exe`, `psql.exe`
ค่าเริ่มต้นคือ `C:/Program Files/PostgreSQL/17/bin`

### 1. เตรียม cluster แยกจาก snapshot ที่แนบ

```powershell
node portfolio-screenshots/sources/setup-demo.cjs --from-snapshot --initialize-only
```

ไม่ต้องอ่าน `.env` ของระบบเดิมเมื่อใช้ `--from-snapshot`
หากต้องการ refresh catalog/schema จาก local source ให้ละ flag นี้ โดยเตรียมค่า DB ไว้ใน
`backend/.env` ของเครื่องเอง สคริปต์จะยอมอ่านจาก source ที่เป็น loopback host เท่านั้น
และใช้ read-only transaction สำหรับ catalog

### 2. เปิด PostgreSQL สาธิตใน Terminal แยก

```powershell
node portfolio-screenshots/sources/run-demo-postgres.cjs
```

ถ้า instance พอร์ต 55432 ของงานนี้เปิดอยู่แล้ว ไม่ต้องเปิดซ้ำ
ภายในสภาพแวดล้อม automation นี้ `pg_ctl start` พบ restricted-token error จึงใช้การเปิด
`postgres.exe` โดยตรงผ่านสคริปต์ข้างบน ไม่ได้แก้การตั้งค่าความปลอดภัยของ Windows

### 3. Seed สมาชิกและคำสั่งซื้อสาธิต

```powershell
node portfolio-screenshots/sources/setup-demo.cjs --from-snapshot --reset-capture
```

`--reset-capture` ล้างเฉพาะตะกร้า/คำสั่งซื้อของฐานข้อมูลสาธิตที่ตรวจชื่อและพอร์ตแล้ว
เพื่อให้ถ่ายซ้ำได้โดยไม่มี order ซ้ำ ไม่ใช้ flag นี้กับฐานข้อมูลอื่น

### 4. เปิด Backend และ Frontend คนละ Terminal

```powershell
node portfolio-screenshots/sources/run-demo-backend.cjs
```

```powershell
node portfolio-screenshots/sources/run-demo-frontend.mjs
```

ให้พอร์ต 3010 และ 5173 ว่างก่อนรัน Frontend launcher นี้กำหนด API เป็นพอร์ต 3010
เฉพาะ process ไม่แก้ไฟล์ `.env` หรือ default ของแอป

### 5. ถ่ายด้วย Playwright MCP

```powershell
node portfolio-screenshots/sources/compile-mcp-capture.cjs
```

จากนั้นให้ automation เปิด tab/context แยก เช่น `monoshop-portfolio-demo`
ด้วย Playwright MCP ไปที่ `http://127.0.0.1:5173/` และรันโค้ด orchestration ใน
`sources/capture-with-mcp.js` ผ่าน `functions.exec`
หากย้ายโปรเจกต์ ให้ปรับ output root ใน orchestration ให้ตรงกับตำแหน่งใหม่

- Orchestrator รัน customer ก่อน admin แล้วบันทึก manifest/checks รุ่นส่งงาน
- สคริปต์ private ถูกสร้างใน `work/portfolio-demo/` และมี credentials สาธิตในหน่วยความจำ/ไฟล์ local
  **อย่าแสดง raw MCP code result** เพราะเครื่องมืออาจ echo โค้ดที่มีค่าบัญชีสาธิต
  Orchestrator ตัดส่วน code echo ออกและส่งกลับเฉพาะผลตรวจที่ไม่มี credentials
- ไฟล์ `capture-customer.mjs`, `capture-admin.mjs` และ `capture-helpers.mjs`
  อธิบายลำดับ UI ที่ใช้และใช้เป็น source สำหรับ compiler โดยไม่มี credentials ฝังใน source เหล่านี้
- การถ่ายซ้ำจะสร้างเลข order/วันที่ใหม่ตามเวลาของระบบในเครื่อง
  เนื่องจาก router ใช้ `createMemoryHistory` URL ใน address bar อาจคง `/`
  แม้ UI เปลี่ยนหน้าแล้ว ต้องกดลิงก์หรือใช้ script ตามขั้นตอน ไม่เปิด deep link โดยคาดว่าจะเลือกหน้านั้นทันที
- หลังถ่ายให้เปิดตรวจ PNG ทุกภาพ และรัน `node portfolio-screenshots/sources/verify-artifacts.cjs`

### 6. สร้างแผนภาพซ้ำ

```powershell
node portfolio-screenshots/sources/create-system-overview.cjs
# หากยังไม่มี Playwright สำหรับ render diagram:
# npm.cmd install --prefix work/verification/monocraft --no-save --package-lock=false playwright
node portfolio-screenshots/sources/render-system-overview.cjs
```

SVG ใช้ข้อความอังกฤษและ native objects ไม่มีภาพ bitmap ฝังอยู่ สามารถแก้ข้อความ สี กล่อง
และเส้นเชื่อมในโปรแกรม vector ได้ PNG ใช้ viewport 1920 × 1280 และ device scale 1

## ผลตรวจและข้อจำกัด

- ได้ไฟล์ภาพครบตามรายการ ไม่มีภาพที่ขาด และไม่ต้องแบ่งภาพ `-01`/`-02`
- เปิดตรวจภาพทั้ง 7 และ PNG ของแผนภาพแล้ว ข้อมูลหลัก ฟอร์ม และปุ่มที่ระบุอยู่ในเฟรม
  ไม่มี loading, รูปเสีย, DevTools overlay, error overlay หรือ horizontal overflow ในภาพส่งงาน
- Playwright MCP รุ่นสุดท้าย: ไม่มี page exception และไม่มี Console error
  `capture-manifest.json` ระบุ viewport, เวลาถ่าย, ฟอนต์ที่โหลด และหน้าที่เลือก
  `customer-capture-checks.json` / `admin-capture-checks.json` เก็บ method/path/status
  ไม่เก็บ headers, token หรือ password
- **ชื่อแบรนด์:** package/โปรเจกต์ใช้ MonoShop แต่ Navbar และข้อความใน UI ใช้ MonoCraft
  คงชื่อทุกจุดตาม source และระบุทั้งสองชื่อในแผนภาพ ไม่เปลี่ยนแบรนด์เพื่อถ่ายภาพ
- **Hero CSS เดิม:** ข้อความ MonoCraft แบบ gradient ใน Hero โปร่งใสใน runtime
  ตรวจได้ว่า `background-image: none`, `-webkit-text-fill-color: transparent` และ token สีว่าง
  source ประกาศ `:root` ภายใน `<style scoped>` ของ `TheHome.vue`
  ภาพจึงคงลักษณะ UI จริงไว้ โดยมีชื่อ MonoCraft ใน Navbar ตามเดิม ไม่แต่งภาพหรือแก้ CSS
- **Catalog เดิม:** grid desktop กำหนด 4 คอลัมน์ตายตัว ผลค้นหา `figure` มี 3 รายการ
  จึงเหลือพื้นที่คอลัมน์ขวาตามการออกแบบเดิม ไม่เพิ่มผลค้นหาหรือเติมสินค้าปลอม
- **พบข้อจำกัด backend จริง:** `confirmOrder` ใช้ alias `totalQty`/`totalPrice`
  โดยไม่ quote ใน SQL แต่ไปอ่าน camelCase จากผลลัพธ์ PostgreSQL จึงบันทึกยอดที่ header
  ของ order ล่าสุดเป็น 0 ขณะที่ `orderDtl` มี 4 ชิ้น ยอด 28,270 บาทครบ
  หน้า Orders อ่าน endpoint ที่ SUM จากรายละเอียดใหม่ จึงแสดงยอดที่ถูกต้องตามภาพ
  หลักฐานอยู่ใน `backend-validation.json` **ไม่ได้แก้ business logic ตามขอบเขตงานนี้**
  ดังนั้นภาพนี้ไม่ใช่หลักฐานว่า checkout หรือยอด header ทำงานถูกต้องครบทุกส่วน
- จำนวนเงินบางตำแหน่งในหน้า Orders/Admin ไม่มี comma ตาม format ที่ source ใช้อยู่
  ขนาดสินค้ารายละเอียดเป็นค่า `medium` ตามข้อมูลเดิม ไม่แต่งหน่วยวัดเพิ่ม
- ไม่พบ payment-provider integration ใน dependencies/routes/controllers ที่ตรวจ
  แผนภาพแสดงเฉพาะสมาชิก สินค้า ตะกร้า คำสั่งซื้อ authentication และ filesystem ที่มีจริง
  ไม่มี payment gateway และไม่อ้างว่าการยืนยัน order เป็นการชำระเงินจริง
- การเปิด product edit ไม่ใช่การทดสอบ save และการเห็นปุ่ม Admin ไม่ใช่การทดสอบเปลี่ยนสถานะ/ลบ
  capture log ไม่มี `PUT`/`DELETE` สำหรับสินค้าและ Admin order ในรอบถ่าย
- ไม่มีการเขียน production หรือฐานข้อมูล source เดิม ไม่มีการเปลี่ยน business logic / UI design
  ของแอปในงานถ่ายภาพนี้ แก้ root `.gitignore` เฉพาะเพื่อกัน runtime/credentials สาธิตออกจากการแชร์
- **สิ่งที่ยังไม่ทำ:** ภาพปกแบบจัดรวม, การเผยแพร่บน Portfolio, การแก้ CSS/ยอด header
  และการทดสอบฟังก์ชันอื่นนอกลำดับถ่ายภาพ ไม่อยู่ในขอบเขตส่งงานครั้งนี้

แชร์เฉพาะโฟลเดอร์ `portfolio-screenshots/` ได้ โดยไม่แนบ `work/portfolio-demo/`, `.env`
หรือฐานข้อมูล runtime ภาพในชุดนี้เป็นข้อมูลสาธิตสำหรับนำเสนอความสามารถของ UI
