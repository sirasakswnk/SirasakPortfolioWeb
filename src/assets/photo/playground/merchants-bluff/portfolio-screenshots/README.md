# Merchant’s Bluff — Portfolio / Playground screenshots

ภาพจาก UI จริงของ source ในเครื่อง ถ่ายด้วย **Playwright MCP** วันที่ **2026-11-09 (Asia/Bangkok, UTC+7)** เป็น PNG ความละเอียดเดิม ไม่มีการย่อภาพภายหลัง

**ชุดนี้เป็น Design Preview ไม่ใช่ผลการเล่น multiplayer จริง** ใช้ข้อมูลตัวอย่างเดิมใน `src/lib/preview/scenarios.ts` ผ่าน `RoomPreview` และ components ร่วมกับเกมจริง ไม่ใช้ภาพจากผลทดสอบเก่าหรือห้องจริงบน Emulators

คำบรรยายที่ควรแสดงเมื่อใช้ใน Portfolio: **“Merchant’s Bluff — Design Preview · ข้อมูลตัวอย่าง ไม่ใช่ผลการเล่น multiplayer จริง”** โดยเฉพาะภาพแผง/ป๊อปอัปที่ถ่ายเฉพาะ element จึงไม่มีป้าย preview ด้านบนอยู่ในภาพ

## Source และวิธีถ่าย

- Branch: `preview`
- Commit: `d7625f5a9937c8e2ba82c8ead2e708e2d356dd3a`
- ตอนเริ่มงานไม่มีการเปลี่ยน tracked source; งานนี้เพิ่มเฉพาะไฟล์ส่งมอบในโฟลเดอร์นี้ ไม่แก้ UI, CSS, business logic, กติกา หรือข้อมูลตัวอย่าง
- อ่าน `AGENTS.md`, `README.md`, `docs/preview.md` และโค้ด preview/หน้าจอ/controls ที่เกี่ยวข้องก่อนถ่าย
- Local origin: `http://127.0.0.1:4100` ใช้ `frame=1` ตามลิงก์ “เปิดตัวอย่างเต็มหน้า” ของ Preview Studio เพื่อตัดแถบตั้งค่า studio ออกตามความสามารถเดิม
- ทุก preview ใช้ `state=online` (ค่าเริ่มต้น); desktop ใช้ `width=auto` (ค่าเริ่มต้น), mobile ใช้ `width=390` และ browser viewport 390 × 844 จริง
- Browser zoom 100%, `devicePixelRatio=1`, `visualViewport.scale=1`, screenshot `scale: 'css'` ไม่มีการแก้ DOM/CSS, mask หรือซ่อนป้ายข้อมูลตัวอย่างด้วยสคริปต์
- ซ่อน Next.js Dev Tools ผ่านเมนู Preferences → Hide และกด Collapse issues badge ผ่าน UI ของเครื่องมือพัฒนา ไม่แก้หน้าจอเกม
- รอ `document.fonts.ready`, ภาพโหลดครบ และแอนิเมชัน/การเคลื่อนไพ่จบก่อนถ่าย ชุดสุดท้ายโหลดฟอนต์เดิม **Chonburi / Sarabun** สำเร็จ
- ภาพแบบ element screenshot เป็นการถ่ายขอบเขต component โดย Playwright โดยตรง ขนาดปัดตามขอบพิกเซลได้ 1px ไม่ได้ครอปหรือขยายไฟล์หลังถ่าย

## รายการภาพ

ทุกไฟล์ถ่ายวันที่ **2026-11-09**; ขนาดทั้งหมดเป็นพิกเซล

| ไฟล์ | ความละเอียด PNG | Scene / role / ผู้เล่น | Browser viewport | แหล่งข้อมูล / วิธีจัดเฟรม |
| --- | --- | --- | --- | --- |
| [game-table.png](game-table.png) | 1440 × 2287 | pack / merchant / 4 | 1440 × 2287 | Design Preview; viewport จากบนสุด เห็นโต๊ะและ controls ครบ |
| [sheriff-decision.png](sheriff-decision.png) | 1073 × 440 | negotiate / sheriff / 4 | 1440 × 1000 | Design Preview; element `#your-turn > section` เป็นแผง desktop จริง |
| [inspection-result.png](inspection-result.png) | 1440 × 2030 | inspect-contraband / sheriff / 4 | 1440 × 2030 | Design Preview; viewport จากบนสุด เห็นโต๊ะและข้อความผลตรวจ |
| [final-score.png](final-score.png) | 512 × 505 | game-over / sheriff / 4 | 1440 × 900 | Design Preview; element `[data-score-popup]` ป๊อปอัปอันดับเดิม |
| [lobby.png](lobby.png) | 1440 × 1450 | lobby / sheriff (host) / 4 | 1440 × 1450 | Design Preview; กดพร้อมของ host ให้ครบ 4/4 โดยไม่กดเริ่มเกม |
| [mobile-hand-01.png](mobile-hand-01.png) | 390 × 844 | pack / merchant / 4 | 390 × 844 | Design Preview; เลื่อนถึงหัวแผงจัดกระเป๋า (`scrollY=1347`) |
| [mobile-hand-02.png](mobile-hand-02.png) | 390 × 844 | pack / merchant / 4 | 390 × 844 | Design Preview; ต่อจากภาพ 01 เลื่อนลงอีก 83px (`scrollY=1430`) |
| [home.png](home.png) | 1440 × 844 | หน้าแรก `/` / ไม่มี role / ไม่มีผู้เล่นในห้อง | 1440 × 844 | Design Preview ของหน้าแรกจริงในเครื่อง; Auth Emulator เท่านั้น ไม่ใช่ฉาก `/preview` หรือเกมจริง |
| [final-score-rules.png](final-score-rules.png) | 1073 × 479 | game-over / sheriff / 4 | 1440 × 900 | Design Preview; ภาพเสริม element กติกาที่เปิดผ่าน UI เพื่อเห็นสูตรคะแนน |

## เปิดหน้าและถ่ายซ้ำ

จาก root ของโปรเจกต์ ใช้ dependencies ตาม lockfile ที่ติดตั้งไว้ เปิด dev server โดยกำหนด demo configuration ใน process เพื่อไม่ใช้ Firebase production จากไฟล์ environment ที่เครื่องอาจมีอยู่ ไม่ต้องเปิดหรือคัดลอก credentials

PowerShell terminal สำหรับ dev server:

```powershell
$env:NEXT_PUBLIC_USE_FIREBASE_EMULATORS='true'
$env:NEXT_PUBLIC_FIREBASE_PROJECT_ID='demo-merchants-bluff'
$env:NEXT_PUBLIC_FIREBASE_API_KEY='demo-key'
$env:NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN='demo-merchants-bluff.firebaseapp.com'
$env:NEXT_PUBLIC_FIREBASE_DATABASE_URL='http://127.0.0.1:19000?ns=demo-merchants-bluff'
$env:NEXT_PUBLIC_FIREBASE_APP_ID='demo-app'
$env:NEXT_PUBLIC_FIREBASE_EMULATOR_HOST='127.0.0.1'
$env:NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT='19099'
$env:NEXT_PUBLIC_FIREBASE_DATABASE_EMULATOR_PORT='19000'
npm.cmd run dev -- --hostname 127.0.0.1 --port 4100
```

ค่าข้างต้นเป็นค่า demo ไม่ใช่ credentials จริง หน้า `/preview` ไม่ต้องเปิด Emulators เพราะไม่มี Auth/Rooms API/RTDB แต่หน้าแรกเรียก anonymous Auth อัตโนมัติ จึงเปิด **Auth Emulator อย่างเดียว** ในอีก terminal เพื่อให้ฟอร์มพ้นสถานะกำลังเชื่อมต่อ โดยไม่สร้างห้อง:

```powershell
New-Item -ItemType Directory -Force work/runtime/firebase-config | Out-Null
$env:XDG_CONFIG_HOME=(Join-Path (Get-Location) 'work/runtime/firebase-config')
$env:FIREBASE_CLI_DISABLE_UPDATE_CHECK='true'
node node_modules/firebase-tools/lib/bin/firebase.js --config firebase.emulators.json emulators:start --only auth --project demo-merchants-bluff
```

ก่อนรันตรวจว่าพอร์ต 4100/19099 ไม่ชน service ที่ใช้อยู่ ห้ามหยุด service ของผู้ใช้เพื่อถ่ายภาพ `next/font/google` ต้องดาวน์โหลดฟอนต์เดิมได้; หาก server แจ้งใช้ fallback ให้แก้การเข้าถึงเครือข่ายแล้วโหลดหน้าใหม่ก่อนถ่าย ไม่เปลี่ยนฟอนต์ใน source

เปิดลิงก์ต่อไปนี้ต่อท้าย local origin แล้วตั้ง viewport ตามตาราง:

```text
/preview?frame=1&scene=pack&role=merchant&players=4
/preview?frame=1&scene=negotiate&role=sheriff&players=4
/preview?frame=1&scene=inspect-contraband&role=sheriff&players=4
/preview?frame=1&scene=game-over&role=sheriff&players=4
/preview?frame=1&scene=lobby&role=sheriff&players=4
/preview?frame=1&scene=pack&role=merchant&players=4&width=390
/
```

1. **game-table:** เลือกแอปเปิลใบที่ 1, แอปเปิลใบที่ 2 และหน้าไม้ใบที่ 6 ผ่านปุ่มไพ่ จะขึ้น “เลือกแล้ว 3/5 ใบ” คงคำแจ้งแอปเปิล ไม่กดปิดกระเป๋า ชี้หน้าไม้เพื่อให้รายละเอียดแสดงหน้าไม้ แล้วเลื่อนจากบนสุดถ่าย viewport
2. **sheriff-decision:** กด “เลือก เมย์ตลาดเช้า” ผ่าน UI จะเห็นคำแจ้งแอปเปิล 3 ใบ ข้อเสนอ 4 เหรียญ ปุ่มให้ผ่าน/ตรวจ ถ่าย `#your-turn > section` เป็น element screenshot ไม่เปิด confirmation ไม่สร้าง modal เพิ่ม
3. **inspection-result:** เปิดฉากโดยตรง รอฟอนต์/ภาพและอย่างน้อย 2 วินาที ผลเดิมคือแอปเปิล 1 ใบผ่าน ยึดเหล้าเถื่อน 1 ใบและหน้าไม้ 1 ใบ ค่าปรับ 9 เหรียญ ไม่โอนข้อเสนอ ตรวจตอนถ่ายว่าไม่มี animation กำลังทำงาน แล้วถ่ายจากบนสุด
4. **final-score:** รอป๊อปอัปเดิมเปิดอัตโนมัติ คลิกหัวข้อเพื่อไม่ให้ focus ring บังปุ่มปิด ถ่าย `[data-score-popup]` จากนั้นปิดป๊อปอัป เปิด “กติกาย่อ · สำรับ 360 ใบ” และถ่าย element `details` ชั้นนอกเป็น `final-score-rules.png` โดยไม่กดกลับล็อบบี้
5. **lobby:** กด “พร้อม” ของ host หนึ่งครั้ง ได้พร้อม 4/4 และปุ่มเริ่มเกมใช้งานได้ ไม่กดเริ่มเกม แล้วถ่ายจากบนสุด
6. **mobile:** ตั้ง viewport 390 × 844 ก่อนเปิดหน้า เลือกขนมปังใบที่ 3 ใช้ “ดูไพ่ใบก่อนหน้า” เลื่อนไปเลือกแอปเปิลใบที่ 2 และใบที่ 1 แล้วใช้ “ดูไพ่ใบถัดไป” สองครั้งกลับไปให้ขนมปังอยู่กลางพัด รอให้หยุด ถ่าย 01 โดยวางหัวแผงจัดกระเป๋าห่างบนเฟรมประมาณ 16px จากนั้นเลื่อนลง 83px ถ่าย 02 ให้ปุ่ม “ปิดกระเป๋าและยืนยัน” อยู่ครบ จำนวนเลือกยังเป็น 3/5 เดิม ไม่กดส่ง
7. **home:** เปิด `/` รอข้อความ “ใส่ชื่อที่เพื่อนจะเห็นก่อน” แทนสถานะโหลดบัญชี ใช้โหมดสร้างห้องเริ่มต้น ให้เห็นตัวเลือกเข้าด้วยรหัส ไม่กรอกชื่อ/ส่งฟอร์ม/สร้างห้อง

ตัวอย่าง Playwright หลังเปิดหน้าและจัดสถานะผ่าน UI แล้ว:

```javascript
await page.setViewportSize({ width: 1440, height: 2287 });
await page.evaluate(() => document.fonts.ready);
await page.waitForFunction(() => [...document.images].every(i => i.complete && i.naturalWidth > 0));
await page.screenshot({ path: 'portfolio-screenshots/game-table.png', scale: 'css' });
// แผงเฉพาะส่วน: ใช้ locator.screenshot({ path: '...', scale: 'css' })
```

ใช้ browser context ที่ `deviceScaleFactor: 1` และ zoom 100% ตัวอย่างการ evaluate ข้างต้นใช้รอ/อ่านสถานะเท่านั้น การเลื่อนเพื่อจัดเฟรมใช้ browser scroll ปกติ ไม่แก้เนื้อหาหรือ CSS

## ขอบเขตที่ตรวจจริงและข้อจำกัด

- เปิดตรวจ **PNG สุดท้ายทั้ง 9 ภาพ** แล้ว: โต๊ะ/ผู้เล่น/ไพ่/controls สำคัญอยู่ครบตามภาพที่ระบุ ไม่มี broken image, loading, DevTools หรือ error overlay ในภาพส่งมอบ และตรวจขนาดจาก PNG header
- ตรวจปุ่มเลือกไพ่ desktop, ปุ่มเลื่อนไพ่/เลือกไพ่ mobile, เลือกพ่อค้าของนายด่าน, พร้อมใน preview, เปิด/ปิดคะแนน และเปิดกติกา ใน session นี้เท่านั้น
- ตรวจ network ของ session: ไม่มี request ไป Rooms API/RTDB หรือ Firebase production; หน้าแรกมี signUp/lookup ไป **127.0.0.1:19099** ของ demo Auth Emulator สำเร็จเท่านั้น ตั้ง browser network guard ให้อนุญาตเฉพาะ localhost/127.0.0.1 ตั้งแต่ก่อนเปิดหน้าแรก
- ช่วงเตรียมงานเคยพบ favicon 404 และ HMR ขาดการเชื่อมต่อตอน restart server รวมทั้งดาวน์โหลดฟอนต์ไม่ได้ใน sandbox แก้การเข้าถึงฟอนต์และถ่ายชุดส่งมอบใหม่หลังโหลดฟอนต์สำเร็จ ไม่ใช้ภาพ draft เหล่านั้น
- **ภาพคะแนนยังไม่ครบรายละเอียดที่ขอ:** `FinalScorePopup` ปัจจุบันใช้ standings จัดอันดับ แต่ช่องตัวเลขแสดง `score.cash` พร้อมหน่วย “เหรียญ” จึงเป็นเงินสด **ไม่ใช่คะแนนรวม** ไม่มี breakdown เงิน/สินค้า/โบนัส และไม่มีส่วนเจ้าตลาดให้ถ่ายใน UI นี้ ไม่เปลี่ยนคะแนนหรือแต่ง component เพิ่ม สูตรคะแนนมีอยู่ในกติกา จึงแนบ `final-score-rules.png` แยกต่างหาก ไม่ใช่รายละเอียดคะแนนของผู้เล่น
- ผลตรวจ desktop แสดงรายการสินค้าที่เปิด/ผ่าน/ยึดเป็น **ข้อความ** ตาม UI เดิม ไม่มีกราฟิกไพ่เปิดรายใบให้ถ่าย ไม่เพิ่มภาพไพ่หรือสินค้าลงในผล
- โต๊ะและมือไพ่อยู่เรียงแนวตั้งตาม UI เดิม จึงใช้ภาพ desktop สูงสำหรับ game-table/inspection-result เพื่อเก็บทั้งโต๊ะและ controls โดยคงขนาดตัวอักษรจริง ส่วนภาพแผงนายด่าน/คะแนนถ่าย element เพื่อให้อ่านชัดและลดพื้นที่ว่าง
- มือถือใช้ responsive UI จริงใน desktop browser viewport ไม่ใช่การทดสอบบนโทรศัพท์จริง ไพ่ปลายพัดถูก clip ตาม layout เดิม จึงเห็นบางใบไม่เต็มใบ ต้องใช้ปุ่มเลื่อนหรือปัดเพื่อดูใบอื่น ภาพ 02 ตั้งใจเลื่อนพ้นหัวแผงให้เห็นปุ่มยืนยัน ส่วนหัวแผงอยู่ในภาพ 01
- ไม่มีภาพเกม multiplayer จริงบน Emulators ในชุดนี้ ไม่ได้เล่นจบเกม ไม่ได้ทดสอบ synchronization, privacy, reconnect หรือ production และไม่ใช้ผล unit/E2E/รายงานเก่ามาอ้างว่าผ่านในงานนี้
- ไม่สร้างห้อง ไม่เขียน Firebase production ไม่ deploy Rules ไม่เปิดเผยไฟล์ environment/token/credentials ไม่สร้างภาพปกรวมหรือ System Overview และไม่ commit/push/deploy
