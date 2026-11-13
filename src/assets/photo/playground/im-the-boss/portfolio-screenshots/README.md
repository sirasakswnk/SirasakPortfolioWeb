# I’m The BOSS / โต๊ะเจรจาดีล — Portfolio screenshots

ถ่ายด้วย **Playwright MCP** วันที่ **12 พฤศจิกายน 2026 (Asia/Bangkok)** จาก React UI ตาม source ปัจจุบัน ได้ภาพหลักครบ **8/8** และภาพเสริม **5** รวม **13 PNG** เปิดตรวจภาพสุดท้ายทุกไฟล์แล้ว

Source commit: `1bb786d8a46021e8f094a6f10aef576fc7d1e49c` — `feat: add offer fill preview and offer animations` (2026-10-23). Tracked application files ไม่มี diff ทั้งก่อนและหลังงานนี้ ไฟล์ `agent.md` และ HTML บางไฟล์ใน `design/` เป็น untracked ที่มีอยู่ก่อนเริ่มงาน ไม่ได้แก้ไข

ไม่มีการแก้ gameplay, business logic, UI/CSS, ข้อความ หรือค่าคะแนนเพื่อถ่ายภาพ ไม่มี commit, push, deploy หรือการแก้ Firebase Rules ใช้ห้องสาธิตบน Emulator แยกจาก production เท่านั้น

## รายการภาพและขนาดจริง

ทุกภาพใช้ Chromium **157.0.8103.51**, `deviceScaleFactor: 2`, `scale: 'device'`, PNG, browser zoom ปกติ ขนาด viewport เป็น CSS pixels; คอลัมน์ PNG เป็นขนาดที่อ่านจาก PNG IHDR จริง ดู SHA-256, เวลาแก้ไขไฟล์ และ metadata ใน [manifest.json](manifest.json)

| ไฟล์ | หน้าจอ / ที่มา | Viewport | PNG จริง | วิธีเก็บ |
|---|---|---|---|---|
| [game-table.png](game-table.png) | โต๊ะเปิดดีล มุมบอส / Emulator | 1600 × 1320 | 3200 × 2640 | full-page |
| [boss-offers.png](boss-offers.png) | ตรวจข้อเสนอ สีแดงซ้ำ / Design Preview | 1440 × 1100 | 1736 × 1554 | กรอบ modal + รอบละ 24 CSS px |
| [action-card.png](action-card.png) | เลือกพักร้อนน้ำเงินและเป้าหมาย ก่อนยืนยัน / Emulator | 1440 × 1100 | 1776 × 1228 | กรอบ modal + รอบละ 24 CSS px |
| [final-score.png](final-score.png) | เปิดเงินครบ 4/4 คน / Design Preview | 1440 × 1100 | 1456 × 1324 | กรอบ modal + รอบละ 24 CSS px |
| [lobby.png](lobby.png) | ห้อง 4 คน ออนไลน์ครบ / Emulator | 1440 × 1100 | 2850 × 2868 | full-page |
| [offer-modal.png](offer-modal.png) | ยื่นข้อเสนอจากมุมมะปราง ก่อนส่ง / Emulator | 1440 × 1100 | 1736 × 1502 | กรอบ modal + รอบละ 24 CSS px |
| [cards-gallery.png](cards-gallery.png) | การ์ดครบทุกชนิด / Design Preview | 1440 × 1100 | 2850 × 3840 | full-page |
| [mobile-gameplay.png](mobile-gameplay.png) | โต๊ะย่อ มุมบอส / Emulator | 390 × 844 | 780 × 1688 | viewport, scrollY = 160 |
| [mobile-hand.png](mobile-hand.png) | เปิดแผงมือครบ 5 ใบ / Emulator | 390 × 844 | 780 × 1688 | viewport, scrollY = 200 |
| [cards-family.png](cards-family.png) | การ์ดญาติทั้ง 6 สี / Design Preview | 1440 × 1100 | 2848 × 538 | clip x=8, y=173, w=1424, h=269 |
| [cards-action.png](cards-action.png) | พักร้อน ซื้อตัว หยุด แย่งบอส / Design Preview | 1440 × 1400 | 2848 × 1662 | clip x=8, y=453, w=1424, h=831 |
| [home.png](home.png) | หน้าแรกและธีม / Design Preview | 1440 × 1100 | 2850 × 3718 | full-page |
| [interrupt-window.png](interrupt-window.png) | การ์ดพักร้อนรอผลและเวลาตอบโต้ / Emulator | 1600 × 1320 | 3170 × 2792 | full-page |

เริ่มสำรวจที่ 1440 × 1100; โต๊ะหลักใช้ 1600 × 1320 เพื่อให้กระดาน การ์ดในมือ และปุ่มในแผงดีลอยู่ครบ ใน 1440 px แผงดีลมี scroll ภายในและปุ่มท้ายแผงมองเห็นไม่ครบ จึงเพิ่มความกว้างด้วย viewport โดยไม่แก้ CSS

ภาพ full-page บางไฟล์กว้าง 2850 แทน 2880 หรือ 3170 แทน 3200 เพราะ Chromium ตัดพื้นที่ scrollbar แนวตั้ง 15 CSS px ออกจากพื้นที่เอกสาร ไม่มีการย่อภาพหลังถ่าย Modal ใช้ bounding box จริงแล้วปัดพิกัดลง/ขนาดขึ้น

## ที่มาและสถานการณ์แต่ละภาพ

### ห้อง Emulator: lobby, offer-modal, action-card, game-table, mobile และ interrupt

URL: `http://127.0.0.1:5180/89824` — รหัสห้อง **89824** สร้างใหม่ผ่าน UI จริง ใช้ Anonymous Auth คนละ browser context รวม 4 ตัวตน ไม่ seed/แก้ state โดยตรง ไม่ mock network และไม่ข้าม auth

| ที่นั่ง | ชื่อสาธิต | นักลงทุนที่แจกได้ | บทบาท |
|---|---|---|---|
| 1 | มะปราง Demo | เหลือง | เจ้าของห้อง / ผู้ยื่นข้อเสนอ |
| 2 | ต้นกล้า Demo | ดำ | ผู้ยื่นข้อเสนอรอตรวจ |
| 3 | ฟ้า Demo | น้ำเงิน | บอสเทิร์นแรก / มุมโต๊ะหลักและมือถือ |
| 4 | ภูมิ Demo | เขียว | ผู้เลือกการ์ดพักร้อน |

ออนไลน์ครบทุกคนใน `lobby.png` ตาม UI จริง มีที่นั่งว่างอีก 2 ที่ เงินเริ่มต้นคนละ 0 ล้าน นักลงทุนแดงและม่วงอยู่ข้างกระดาน

ลำดับการเล่นและถ่าย:

1. สร้างห้องด้วยชื่อมะปราง ให้ผู้เล่นอีก 3 context เข้าจากลิงก์เชิญ ใส่ชื่อและกดเข้าร่วม รอรายชื่อครบและถ่าย `lobby.png` ก่อนกดเริ่ม
2. เจ้าของห้องกดเริ่ม เกมสุ่มฟ้าเป็นบอส ฟ้าทอยได้ **3** เดินจากช่อง **1 → 4** รอ `[data-testid="dice-roll"]` หายจนครบแอนิเมชัน แล้วกดเปิดดีล
3. ช่อง 4 ใช้นักลงทุน 4 สี: เลือก 2 จากแดง/น้ำเงิน/เขียว และ 2 จากเหลือง/ม่วง/ดำ แผ่นดีล #1 ให้ **2 ล้าน/ส่วน**, **5 ส่วน**, รวม **10 ล้าน** ตัวเลขมาจาก engine/config ปัจจุบัน
4. มะปรางกด “ยื่นข้อเสนอ” เลือกนักลงทุนเหลืองบนโต๊ะ + การ์ดญาติเขียวจากมือ กดเพิ่มจำนวนส่วนจาก 1 เป็น **2** ถ่าย `offer-modal.png` **ก่อนส่ง** โดยปุ่มส่ง enabled จากนั้นจึงส่งจริงเพื่อเตรียมโต๊ะภาพถัดไป
5. ภูมิกด “ลงการ์ด” เลือก `travel-blue-1` และนักลงทุนน้ำเงินของฟ้า ถ่าย `action-card.png` **ก่อนยืนยัน** ปุ่มลงการ์ด enabled เป้าหมายเป็นนักลงทุนของผู้เล่นอื่น ไม่ติดพักร้อน และเกมอยู่ `dealOpen` จึงตรงกับ `getActionBlockReason` / `getTravelTargets` ใน `src/ui/table/actionUtils.ts` ไม่ได้บังคับเปิดปุ่มที่ถูกปิด
6. ต้นกล้ายื่นนักลงทุนดำ ขอ **1 ส่วน** จากนั้นฟ้ากด “ตรวจข้อเสนอ” รับข้อเสนอของมะปรางและปิด modal
7. ถ่าย `game-table.png` จากฟ้า: มะปราง **รับแล้ว 2 ส่วน = 4 ล้าน**, ต้นกล้า **รอตรวจ 1 ส่วน = 2 ล้าน**, รับรวม **2/5 ส่วน**, บอสน้ำเงินร่วมฟรี ยังขาดนักลงทุนอีก 1 สีจากกลุ่มหลัง ปุ่มล็อกดีล disabled เงินส่วนตัวของฟ้ายัง **0 ล้าน** เพราะยังไม่ปิดดีล ตัวเลข 4 และ 2 ล้านเป็นมูลค่าข้อเสนอ ไม่ใช่เงินที่จ่ายสำเร็จแล้ว
8. ปรับหน้าเดิมของฟ้าเป็น 390 × 844 เลื่อนแนวตั้ง 160 px ถ่าย `mobile-gameplay.png`; ภาพมือถ่ายที่ scrollY=200 กดปุ่ม “การ์ดในมือ” รอแผงเลื่อนขึ้นจบแล้วถ่าย `mobile-hand.png` แสดงหยุด 2 ใบ, ซื้อตัว 2 ใบ, แย่งบอส 1 ใบ เงิน 0 ล้าน ไม่ใช้ `fullPage` เพื่อคงหน้าตามือถือจริง
9. หลังเก็บภาพก่อนใช้การ์ดทั้งหมดแล้ว จึงกดยืนยันพักร้อนจากภูมิผ่าน UI ถ่าย `interrupt-window.png` จากฟ้าขณะที่แถบตอบโต้แสดง **เหลือ 5 วิ / ผ่านแล้ว 0/3** และคิวแสดงพักร้อน เป้าหมายนักลงทุนของฟ้า สัญลักษณ์น้ำเงิน สถานะรอผล ค่าเวลาที่อ่านก่อน screenshot ประมาณ **4332 ms** เป็นเวลาที่เดินจริง ไม่ได้หยุด clock หรือยืด deadline ภาพนี้เกิดภายหลังภาพโต๊ะ/มือถือและไม่ใช่สถานะเดียวกัน

เงินในห้องสาธิตยังเป็นเงินเริ่มต้น ไม่ได้เล่นจนจบเกม ภาพนี้ไม่ใช่หลักฐานผลคะแนนจบเกมหรือการจ่ายเงินจริง

### boss-offers.png — Design Preview พร้อมข้อมูลตัวอย่าง

URL: `http://127.0.0.1:5180/preview/game` → กด **ดีลมีข้อชน** (`preview-state-dealConflict`) → **ตรวจข้อเสนอ** → รอเปิด modal อย่างน้อย 800 ms

ใช้ `buildPreviewGame()` seed **66**, เวลา fixture `2026-10-20T12:00:00Z` ใน `src/ui/pages/Preview.tsx`; state เริ่ม/ทอย/เปิดดีลผ่าน engine แต่ `buildDealConflictState()` **ประกอบข้อเสนอและการรับขึ้นเป็น fixture โดยตรง** เพื่อทดสอบสีซ้ำ ไม่ใช่ข้อเสนอที่ผู้เล่นยื่นผ่าน multiplayer

บอส **นก**, ช่อง **2**, แผ่น **#1**, 5 ส่วน × 2 ล้าน = 10 ล้าน **มิ้นท์รับแล้ว 1 ส่วน = 2 ล้าน**, **โอ๊ตรอตรวจ 1 ส่วน = 2 ล้าน** ทั้งสองเสนอแดงบนโต๊ะ จึงแสดงข้อความ “สีแดงซ้ำกับข้อเสนอของ มิ้นท์” พร้อมปุ่มยกเลิกข้อเสนอที่ชน เงินบอสเหลือตามข้อตกลง **8 ล้าน** ไม่ใช่เงินสะสมส่วนตัว

ข้อจำกัด fixture: โค้ดเพิ่มข้อเสนอแดงให้สองคนโดยไม่ได้เปลี่ยนนักลงทุนจริงที่แจกอยู่ใน state จึงใช้ภาพนี้อธิบาย **หน้าตรวจข้อเสนอและข้อความสีซ้ำ** เท่านั้น ไม่กล่าวว่าเป็นการเล่นที่ผ่านกติกาทั้งลำดับ เก็บสถานะและตัวเลขเดิมตาม source ไม่แก้ให้สมจริงขึ้น

### final-score.png — Design Preview พร้อมคะแนนตัวอย่าง

URL: `http://127.0.0.1:5180/preview/game` → **จบดีล 15** (`preview-state-gameOverFifteen`) → ถ้าปุ่มเปิดทั้งหมดปรากฏให้กด → รออย่างน้อย 1200 ms และตรวจว่าเปิดแล้ว **4/4 คน**

`buildGameOverState()` กำหนดตัวเลขตรงใน Preview: **นก 55 ล้าน (อันดับ 1 / ผู้ชนะ), มิ้นท์ 41, โอ๊ต 36, เจมส์ 12** ไม่ได้คำนวณจากการเล่นครบ 15 ดีลในรอบนี้ ไม่ใช่ผลของห้อง Emulator 89824 ถ่ายพร้อมปุ่มเล่นอีกรอบ แต่ไม่ได้กด rematch

ตรวจจาก source ว่ามีสถานะ **จบจากเต๋า** (`gameOverDie`) ด้วย ซึ่งใช้ตัวอย่าง 42/42/25/11 และ overlay ทอยเช็กจบ แต่ภาพส่งมอบนี้เลือก **จบดีล 15** เพื่อให้ผู้ชนะและอันดับอ่านชัดเจน

### cards-gallery.png, cards-family.png, cards-action.png — Design Preview

URL: `http://127.0.0.1:5180/preview/cards` ใช้คอมโพเนนต์ `CardsPreview` และ `InfluenceCard` จริงจาก source: ญาติ 6 สี, พักร้อน 6 สี + wild, ซื้อตัว 3 ส่วน, หยุด และแย่งเป็นบอส รวมถึงหลังการ์ด/ตัวอย่างมือ ไม่ใช่มือผู้เล่นจริงหรือผลสุ่มจากห้อง Emulator

ภาพรวมยาว 3840 px จึงมีภาพแยกสองไฟล์เพื่ออ่านข้อความได้สะดวก `cards-action.png` ใช้ viewport สูง 1400 เพื่อให้การ์ดหยุดและแย่งบอสอยู่ครบ ไม่ตัดท้ายการ์ด ไม่มีการจัด layout ใหม่

### home.png — Design Preview

URL: `http://127.0.0.1:5180/preview/home` ชื่อที่กรอก **มิ้นท์** มาจาก `th.preview.mockNickname` ปุ่มสร้าง/เข้าร่วมห้องใน Preview แสดงข้อความว่าไม่ทำงาน เป็นหน้าตัวอย่าง ไม่ใช่หลักฐานการสร้างห้องอีกห้องหนึ่ง

## ตรวจสภาพแวดล้อมและวิธีถ่ายซ้ำ

1. อ่าน `agent.md`, `plan.md`, source Preview และ Firebase config ปัจจุบันก่อนถ่าย ใช้ dependencies ที่ติดตั้งอยู่แล้ว
2. เปิด Firebase Emulators ด้วย `firebase emulators:start --config firebase.emulator.json --only database,auth --project demo-im-the-boss-deal` ในเครื่องนี้ CLI ไม่มีใน PATH จึงเรียก CLI ที่มีอยู่ใน npm cache ด้วย Node ไม่ได้ติดตั้ง dependency ใหม่
3. เปิด dev server แยกที่พอร์ต 5180 ใน PowerShell:

   ```powershell
   $env:VITE_USE_EMULATORS = 'true'
   npm.cmd run dev -- --host 127.0.0.1 --port 5180 --strictPort
   ```

   ใช้ Firebase web config ที่เตรียมไว้ใน `.env` เดิม โดยไม่แสดงหรือคัดลอกค่าออกมา ไม่แก้ `.env.local` ที่เดิมตั้ง Emulator เป็น false ตัวแปร process ด้านบน override เฉพาะ server ที่เปิดสำหรับงานนี้ พอร์ต 5173 มีเว็บอื่นใช้อยู่ จึงไม่ใช้หรือปิด server นั้น

4. ตรวจ `http://127.0.0.1:4400/emulators` ให้ Auth=9099 และ Database=9000 พร้อมทำงาน ตรวจ **compiled** `/src/net/firebase.ts` ว่า `DEV=true`, `VITE_USE_EMULATORS="true"` และเรียก `connectAuthEmulator` ไป 127.0.0.1:9099 กับ `connectDatabaseEmulator` ไป 127.0.0.1:9000 (Vite แปลงเลข 9000 เป็น `9e3`) แล้วจึงสร้างห้อง การตรวจครั้งนี้ผ่านครบก่อนกดสร้าง/เข้าร่วม
5. ใน Playwright MCP สร้าง context ด้วย:

   ```javascript
   const context = await page.context().browser().newContext({
     viewport: { width: 1440, height: 1100 },
     deviceScaleFactor: 2,
   });
   const shotPage = await context.newPage();
   ```

   ผู้เล่นคนละ context เพื่อให้ Anonymous UID แยกกัน ตรวจที่นั่งว่ามี UID ไม่ซ้ำกัน 4 คนแล้ว มุมมือถือปรับ `setViewportSize({ width: 390, height: 844 })` เป็นการตรวจ CSS responsive ใน Chromium ไม่ใช่การทดสอบบนโทรศัพท์จริง

6. ทำ UI ตามขั้นตอนแต่ละภาพข้างต้น ก่อนถ่ายรอ `document.fonts.ready`, decode รูปที่มี และรอ transition/animation จบ ยกเว้นภาพ interrupt ที่ตั้งใจเก็บช่วงเวลาตอบโต้จริง การ์ดส่วนใหญ่ใช้ SVG/CSS ภายในแอป ไม่ต้องรอไฟล์ภาพจากภายนอก
7. ใช้ `page.screenshot({ path, fullPage: true, scale: 'device' })` สำหรับหน้าที่ยาว มือถือใช้ screenshot viewport ส่วน modal ใช้ `boundingBox()` แล้วบวกพื้นที่รอบ 24 CSS px ทุกด้าน ปุ่มยืนยันของ offer/action ต้อง enabled และถ่ายก่อนกด
8. สำหรับภาพ Preview มีสคริปต์ [capture-preview.mcp.js](capture-preview.mcp.js) ให้โหลดผ่าน `browser_run_code_unsafe` ด้วย `filename` แบบ absolute path สคริปต์สร้าง context ใหม่และถ่าย Preview 6 ภาพผ่าน UI ปกติ ตรวจ URL และ output path ในไฟล์ก่อนรัน สคริปต์ **จะเขียนทับ PNG Preview ชื่อเดิม** และต้องเปิดตรวจใหม่/อัปเดต manifest หลังถ่าย
9. Emulator ใช้การสุ่มจริง รหัสห้อง บอส ไพ่ และหน้าเต๋าในการเล่นใหม่อาจต่างออกไป จึงทำซ้ำ **ขั้นตอนและประเภทหน้าจอ** ได้ แต่ไม่รับประกันตัวเลข/ไพ่ตรงภาพเดิม หากเริ่มเกมใหม่ ให้เลือกผู้เล่นและการ์ดที่ถูกกติกาตามที่ UI เปิดให้เลือก ไม่ฉีด state เพื่อบังคับผล
10. เปิดตรวจ PNG ทุกไฟล์ซ้ำ และรัน `node portfolio-screenshots/verify-artifacts.cjs` เพื่ออ่านขนาด/แฮชและเทียบกับ manifest เดิม หากถ่ายใหม่ ให้ปรับวันที่ บทบาท สถานการณ์ และหลักฐานใน `build-manifest.cjs` ให้ตรงก่อนรันสร้าง manifest ใหม่ แล้วตรวจอีกครั้ง สคริปต์สร้าง manifest มี metadata ของรอบ 2026-11-12 ไม่ใช่ตัวตรวจที่มา/คุณภาพอัตโนมัติ อัปเดต README ให้ตรงกับภาพด้วย

## ผลตรวจและข้อจำกัด

- เปิดดู PNG สุดท้ายครบ 13 ไฟล์แล้ว ตรวจชื่อ ตัวเลข ความคมชัดของ modal และองค์ประกอบตามหน้าจอที่ร้องขอ รวมถึงถ่ายใหม่เมื่อพบการ์ดท้าย gallery ถูกตัด
- ฟอนต์ของ browser context ที่ใช้ทุกอันรายงาน `loaded`; ไม่มีรูป `<img>` ที่โหลดเสียในการตรวจท้ายงาน ภาพการ์ดใช้ SVG/CSS ตาม source
- หน้า Emulator มี Auth resource origin `http://127.0.0.1:9099`; การต่อ Database Emulator ตรวจจาก compiled connection call และ Emulator Hub ที่เปิดอยู่ ไม่มีการนำ production มาเล่นทดแทน
- **มือถือ:** 390 × 844, DPR=2; `documentElement.scrollWidth=375` ไม่เกิด horizontal overflow ของทั้งหน้า ส่วนต่าง 15 px คือ scrollbar แถบผู้เล่นมี horizontal scroll ของตัวเองและเห็นได้เพียงประมาณ 1–1.5 ที่นั่งต่อครั้ง ชื่อยาวมี ellipsis ตาม UI ต้องเลื่อนเพื่อดูคนอื่น
- **มือถือ:** ที่ scrollY=160 แสดงชื่อผู้เล่นบางส่วนของแถบ กระดานย่อ มูลค่าดีล จำนวนส่วน ข้อเสนอ และปุ่มล่างได้ แต่ hand dock เริ่มที่ y=727.5 และบังปุ่มท้ายแผงดีล ต้องเลื่อนลงเพิ่มเพื่อกดปุ่มในแผง ภาพ `mobile-hand.png` เปิดแผงมือแล้วบังแผงดีลโดยตั้งใจตาม UI จึงส่งสองภาพแยกกัน
- **เดสก์ท็อป:** การ์ดในมือเป็นพัดซ้อนกัน จึงเห็นการ์ดครบเป็นชุดแต่คำอธิบายของแต่ละใบไม่ครบ ใช้ภาพ gallery หรือ mobile-hand อ่านข้อความแยก ไม่เปลี่ยนการจัดมือของเกมเพื่อถ่าย
- **Offer modal:** แสดงจำนวน 2 ส่วนและดีลแบ่งได้ 5 ส่วน แต่ source ปัจจุบันไม่แสดงผลตอบแทนรวมเป็นเงินใน modal นี้ ภาพเก็บตาม UI จริง ผล 4 ล้านเห็นหลังส่งใน bubble/แผงตรวจข้อเสนอ ไม่ได้เติมเลขลงภาพ
- Design Preview มีเฉพาะมุมบอสสำหรับการเจรจา (`viewerUid = state.bossUid`) และมุม host ใน endgame ไม่มีตัวเลือกสลับผู้เล่น จึงใช้ Emulator สำหรับ offer/action/table/mobile/lobby และแยกที่มาของ Preview ชัดเจน
- `boss-offers.png` กับ `final-score.png` เป็น fixture คนละสถานการณ์กับห้อง Emulator ต้องใช้คำบรรยาย **Design Preview พร้อมข้อมูลตัวอย่าง** เมื่อเผยแพร่ โดยเฉพาะคะแนน 55/41/36/12
- ไม่ได้ทดสอบ gameplay ทั้งระบบ, ชุด unit/rules/E2E หรือ build ใหม่ เพราะไม่มีการแก้ application งานนี้ตรวจการเข้าถึง UI และ artifact เท่านั้น
- **ภาพที่ยังขาด: ไม่มีในรายการหลัก 8 ภาพ** ภาพเสริม home/interrupt/mobile-hand/cards-family/cards-action มีครบด้วย

แนะนำคำบรรยาย Portfolio: “ภาพ UI ปัจจุบัน — โต๊ะ/ข้อเสนอ/มือถือจากการเล่นสาธิตบน Firebase Emulators; หน้าตรวจสีซ้ำ คะแนนจบเกม และคลังการ์ดจาก Design Preview พร้อมข้อมูลตัวอย่าง”

ไฟล์ทั้งหมดอยู่ใน `portfolio-screenshots/` งานนี้ยังไม่เผยแพร่เข้า Portfolio และไม่ทำ commit/push/deploy
