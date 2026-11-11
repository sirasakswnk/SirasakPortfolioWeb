# IN SYNC — ภาพสำหรับ Portfolio / Playground

ภาพหน้าจอจาก UI, CSS, Noto Sans Thai และกติกาปัจจุบันของโปรเจกต์ ถ่ายด้วย **Playwright MCP** ผ่าน dev server ไม่มีการแก้ source, CSS, ข้อความ, คะแนน หรือ state ใน DOM เพื่อทำภาพ ไม่มีการปรับขนาด/แต่ง PNG หลัง browser ส่งออก

**ป้ายที่มาสำหรับใช้คู่กับภาพ 1–6: “Design Preview · ข้อมูลตัวอย่าง”** ส่วน `home.png` ใช้ป้าย “Firebase Emulators · ชื่อสาธิต” ป้ายกำกับอยู่ในเอกสารนี้ ไม่ได้เพิ่มทับ UI ใน PNG โปรดคงคำกำกับนี้เมื่อใช้บน Portfolio

## Source และการถ่าย

- วันที่: **11 พฤศจิกายน 2026** เวลา **19:00:57–19:01:10 Asia/Bangkok (UTC+7)**; timestamp รายไฟล์อยู่ใน [capture-evidence.json](capture-evidence.json)
- Branch: `main`
- Source commit: `ab2ea87a2e8b1505e177f710dc68d8eccb8b00e4`
- Source tracked files ไม่มี diff ก่อนเริ่มและหลังงาน; ไฟล์ส่งงานยังไม่ commit
- Chromium `157.0.8103.40`, viewport กว้าง 430 CSS px, browser zoom **100%** (`visualViewport.scale = 1`), **deviceScaleFactor 2**, screenshot **`scale: 'device'`**, PNG
- ใช้ mobile-width responsive layout ใน Chromium; ไม่ได้อ้างว่าเป็นการทดสอบบนอุปกรณ์มือถือจริง
- เริ่มจาก 430 × 932; ลดความสูงภาพ guess ให้กระชับ และเพิ่มความสูง lobby/reveal/results/home ให้ส่วนสำคัญครบ โดยคงความกว้างเดิม
- ภาพทุกไฟล์เป็น viewport screenshot จากด้านบน ไม่ต่อภาพ ไม่ใช้ fullPage stitching ไม่เปลี่ยนขนาดตัวอักษร ใช้ color scheme light และ motion ปกติ
- ซ่อน Next.js Dev Tools ผ่านเมนูของเครื่องมือเอง: Preferences → Hide Dev Tools for this session → Hide

## รายการภาพและที่มา

URL ทุกแถวเปิดบน `http://localhost:3000` และใช้ธีมโต๊ะบอร์ดเกมเริ่มต้นของโปรเจกต์

| ไฟล์ | PNG จริง (px) | Viewport (CSS px) | URL / screen | บทบาทและแหล่งข้อมูล |
| --- | --- | --- | --- | --- |
| [guess-ranking.png](guess-ranking.png) | 860 × 1688 | 430 × 844 | `http://localhost:3000/dev/preview?screen=guess` | Design Preview; ต้นกล้าเป็นคนทายใจมะปราง; วางครบ 5/5 ก่อนล็อก |
| [lobby.png](lobby.png) | 860 × 2360 | 430 × 1180 | `http://localhost:3000/dev/preview?screen=lobby` | Design Preview; มะปรางเป็น host; ผู้เล่น 2 คน รหัส K7M4QX; ความพร้อมตาม fixture เดิม ดูข้อจำกัดด้านล่าง |
| [round-reveal.png](round-reveal.png) | 860 × 2520 | 430 × 1260 | `http://localhost:3000/dev/preview?screen=reveal` | Design Preview; มะปรางเป็นคนวาง ต้นกล้าเป็นคนทาย; เฉลยครบ 5 ใบ; คะแนน 8/10 |
| [game-results.png](game-results.png) | 860 × 2520 | 430 × 1260 | `http://localhost:3000/dev/preview?screen=results` | Design Preview; มุมมองมะปราง; มะปราง 16/30 ต้นกล้า 22/30; ต้นกล้าชนะ |
| [self-ranking.png](self-ranking.png) | 860 × 1864 | 430 × 932 | `http://localhost:3000/dev/preview?screen=self` | Design Preview; มะปรางเป็นคนวาง; จัด 3 ใบ เหลือในมือ 2 ใบ เพื่อแสดงวิธีแตะไพ่แล้วแตะช่อง |
| [watch-guess.png](watch-guess.png) | 860 × 1864 | 430 × 932 | `http://localhost:3000/dev/preview?screen=watch` | Design Preview; มะปรางดูคำทายจำลองของต้นกล้า 3/5 ช่อง พร้อมคำตอบของตัวเอง |
| [home.png](home.png) | 860 × 2520 | 430 × 1260 | `http://localhost:3000/` | Firebase Emulators; Anonymous Auth; กรอกชื่อสาธิต “มะปราง” และเลือกกระต่ายผ่านฟอร์ม |

ผลรวมแสดงคะแนนทั้งคู่ ปุ่มเล่นอีกครั้ง บันทึกรอบที่ทายแม่นที่สุด และจำนวนทายตรงครบในภาพเดียว จึงไม่ต้องแยก `game-results-01.png` / `game-results-02.png` ประวัติย้อนหลังยังพับอยู่ตาม UI เริ่มต้น

## Firebase Emulator preflight ที่ทำจริง

1. อ่าน `AGENTS.md`, `README.md`, `docs/DEVELOPMENT.md`, scripts ใน `package.json`, `.env.emulator`, `firebase.json` และโค้ดหน้าจอ/การเชื่อมต่อปัจจุบันก่อนเปิด browser ที่ต่อ Firebase
2. ตรวจว่าไม่มี listener เดิมบนพอร์ตที่ต้องใช้ แล้วเปิด `npm.cmd run emulators` และ `npm.cmd run dev:emulator` จาก root โปรเจกต์ (ไม่ใช้ `npm run dev` ที่อ่านค่า production จาก `.env.local`)
3. อ่านวิธีโหลด env ใน `scripts/with-env.mjs`: โหลด `.env.emulator` เข้า process ก่อนเรียก Next.js; `admin.ts` ใช้ emulator และไม่อ่าน service account เมื่อมี `FIREBASE_DATABASE_EMULATOR_HOST`
4. ตรวจ Emulator Hub `http://127.0.0.1:4400/emulators`: Auth **127.0.0.1:9099**, Database **127.0.0.1:9000**, project **demo-heart-sync**
5. ตรวจ compiled browser bundle ผ่าน HTTP ก่อนเปิดหน้าเชื่อม Firebase: public config เป็น `demo-heart-sync`, emulator flag เปิด, `connectAuthEmulator(...:9099)` และ `connectDatabaseEmulator(...,9000)` ทำงาน ค่าฐานข้อมูลที่มีชื่อโดเมน demo ใน config ถูก SDK เปลี่ยนปลายทางไป emulator
6. `GET /api/health` ได้ `ok: true`, `database: "ok"`, `questions: 38`
7. Network ที่สังเกตระหว่างถ่าย: Database WebSocket **ws://127.0.0.1:9000/.ws**; Auth signUp/lookup ที่ **127.0.0.1:9099** ได้ HTTP 200; `/api/profile` ได้ HTTP 200 ไม่มีการใช้ production Firebase

สคริปต์ preflight แบบอ่านอย่างเดียว: [verify-emulators.mjs](verify-emulators.mjs)

```powershell
# Terminal 1 (จาก root โปรเจกต์)
npm.cmd run emulators

# Terminal 2
npm.cmd run dev:emulator

# Terminal 3 — ก่อนเปิด UI ที่เชื่อม Firebase
node portfolio-screenshots/verify-emulators.mjs
```

## วิธีจัดสถานะเพื่อถ่ายซ้ำ

ใช้ browser context ใหม่เพื่อไม่ให้ draft จาก session เดิมติดมา ตั้ง deviceScaleFactor 2 ตอนสร้าง context และ viewport ตามตาราง รอ `document.fonts.ready`, `img.decode()` และการเคลื่อนไหวเข้าเฟรมก่อนถ่ายทุกครั้ง

1. **Guess:** เปิด `screen=guess`; แตะไพ่ในมือแล้วแตะปุ่มช่องว่างทีละใบ: เมืองใหญ่ → อันดับ 1, ภูเขา → 2, ทะเล → 3, สวนสนุก → 4, เมืองเก่า → 5 รอไพ่ลงแท่นครบและข้อความ “ครบแล้ว! ตรวจอันดับก่อนยืนยัน” ปุ่ม “ล็อกคำทาย” ต้อง enabled แต่ **ยังไม่กด** ลำดับนี้ตรงกับคำทายที่ Preview ใช้ในหน้า reveal
2. **Lobby:** เปิด `screen=lobby`; คงผู้เล่น/หมวด/ความพร้อมตามตัวอย่าง มีหมวดเลือก 5 กอง รวม 25 ข้อ เล่น 6 ข้อ; ไม่เปลี่ยนกองหรือพยายามส่งคำสั่งเริ่มเกม
3. **Reveal:** เปิด `screen=reveal`; รอการเปิดอัตโนมัติจนขึ้น “เปิดครบแล้ว · ไหนขอดูหน่อยสิ๊” และ “เปิดแล้ว 5 / 5 ใบ” แล้วรออีก 700 ms ไม่กดข้ามแอนิเมชัน; คะแนนจากข้อมูลเดิมคือ เมืองใหญ่ +2, ภูเขา +2, สวนสนุก +1, ทะเล +1, เมืองเก่า +2 = **8/10**
4. **Results:** เปิด `screen=results`; รอ count-up จบ (ตัวเลขใช้เวลาประมาณ 450 ms; สคริปต์รอนานกว่านั้น) คงประวัติพับอยู่; ผลรวม **16–22**, รอบดีที่สุดของทั้งคู่ **8/10**, ทายตรงคนละ **7 จาก 15 ใบ** ไม่กดเล่นอีกครั้ง
5. **Self:** เปิด `screen=self`; แตะเมืองใหญ่ → ช่อง 1, ภูเขา → 2, สวนสนุก → 3 เหลือเมืองเก่าและทะเลในมือ ไม่เลือกไพ่ค้างไว้ เพื่อให้คำแนะนำในถาดอ่านชัด ปุ่มยืนยันยัง disabled เพราะจัดไม่ครบ เป็นเฟรมสาธิตวิธีเล่นโดยตั้งใจ
6. **Watch:** เปิด `screen=watch`; คง `demoOrder` เดิม: ทะเลช่อง 1, ช่อง 2 ว่าง, เมืองเก่าช่อง 3, เมืองใหญ่ช่อง 4, ช่อง 5 ว่าง พร้อมคำตอบของมะปรางด้านล่าง **ข้อมูลและการเคลื่อนไหวที่ UI สาธิตในภาพมาจาก Design Preview** ไม่ใช่ session เล่นสดของผู้เล่นสองคน
7. **Home:** เปิด `/` หลังผ่าน emulator preflight รอ Anonymous Auth และ `/api/profile` สำเร็จ กรอก “มะปราง” เลือกกระต่าย แล้วย้าย focus ออกจากช่องชื่อ ไม่กดสร้าง/เข้าห้อง ชื่อกับอวาตาร์ยังเป็นค่าที่กรอกในฟอร์ม ไม่ได้บันทึกเป็น profile; artwork ด้านบนเป็น TableScene ของหน้าแรกปัจจุบัน

ถ่ายซ้ำอัตโนมัติผ่าน **Playwright MCP `browser_run_code_unsafe`** โดยส่ง `filename: "portfolio-screenshots/capture.mcp.js"` หลัง preflight ผ่าน สคริปต์ [capture.mcp.js](capture.mcp.js) สร้าง context แยกและใช้ UI controls เพื่อจัดไพ่ ไม่เขียน sessionStorage หรือ state ของ React เอง สคริปต์จะเขียนทับ PNG ชื่อเดิมและคืนข้อมูลการตรวจ จึงควรเก็บผลที่คืนมาแทน `capture-evidence.json` เมื่อถ่ายชุดใหม่

## ข้อจำกัดและภาพที่ยังขาด

- **ยังไม่ได้ภาพ lobby ที่ทั้งสองคนพร้อมและปุ่มเริ่มเกม enabled:** fixture ใน `DevPreview.tsx` คืนค่า `screen=lobby` หลัง ready เฉพาะมะปราง ก่อน ready ต้นกล้า และใช้ `idleCommands` ที่ไม่เปลี่ยน state แม้กดปุ่ม ภาพส่งมอบจึงตรงข้อมูลเดิมและแสดง “รอ ต้นกล้า กดพร้อม” การทำสถานะทั้งคู่พร้อมต้องปรับ Preview หรือใช้ห้อง emulator จริง ซึ่งอยู่นอกขอบเขตแหล่งภาพ/การห้ามแก้ source รอบนี้
- Preview สร้างข้อมูลผ่าน reducer/projection และสูตรคะแนนจริงในเครื่อง แต่ไม่ยืนยันการเล่นผ่าน backend ครบเกม ปุ่มส่ง/ไปต่อ/เล่นอีกครั้งของ Preview ไม่เปลี่ยนเกมตามปกติ
- แม้ Preview ตั้งใจไม่ใช้ backend แต่ `RankStage` ฝั่ง guess เรียก `useLivePublisher` เมื่อ Firebase configured จึงพบ warning **permission_denied** ที่ `/live/preview/preview-partner` ทั้งหมด 7 ครั้งใน capture สุดท้าย ปลายทางตรวจแล้วเป็น **Database Emulator**; ไม่มีการเปลี่ยน Rules หรือสร้างสิทธิ์ให้ preview IDs และ warning ไม่ขึ้นเป็น error overlay บนภาพ
- `watch` ใช้ demoOrder คงที่ 3/5 ช่อง จึงเก็บเป็นภาพนิ่งที่บอกสถานะจำลอง ไม่มีหลักฐาน realtime จากคู่หูจริง และสถานะนี้ไม่ได้เป็นเหตุการณ์ต่อเนื่องกับไพ่ที่จัดใน guess
- ตอนเปิดครั้งแรกพบ `/favicon.ico` HTTP 404; ไม่กระทบ artwork ในเนื้อหา ไม่ได้เพิ่ม favicon หรือแก้ source รอบนี้
- ภาพไฟล์ครบทั้ง 7 ชื่อ; ขาดเฉพาะสถานะ lobby แบบทั้งคู่พร้อมตามที่อธิบาย ไม่ได้ทำภาพปกรวม และไม่ได้ commit/push/deploy

## ผลตรวจรอบนี้

- เปิดตรวจ **PNG ชุดสุดท้ายทั้ง 7 ไฟล์** ด้วย image viewer หลัง capture ตรวจขอบ ข้อความ ไพ่ คะแนน ปุ่ม รูป และ overlay แล้ว ไม่มีส่วนสำคัญถูกตัด/บังหรือรูปเนื้อหาโหลดเสีย
- พบ footer หน้าผลรวมถูกตัดในรอบแรก จึงเพิ่ม viewport เป็น 430 × 1260 แล้วถ่ายใหม่ ไฟล์ส่งมอบมี footer และบันทึกครบ ไม่มี scrollbar ปรากฏ
- ทุกภาพ: `document.fonts.status = loaded`, โหลด Noto Sans Thai แล้ว, broken images = 0, ไม่มี horizontal overflow และความสูงเอกสารไม่เกิน viewport ที่ถ่าย
- รอแอนิเมชันเฉลยครบ 5 ใบตามธรรมชาติ และรอตัวเลขผลรวมคงที่แล้ว ไม่ลด motion เพื่อข้ามการเฉลย
- Browser capture สุดท้ายไม่มี `pageerror`/console error ที่บันทึกได้; มี Firebase warnings 7 ครั้งตามข้อจำกัดข้างต้น ไม่อ้างว่า console สะอาดทั้งหมด
- อ่านขนาดจาก PNG header จริง ตรงตามตารางทั้งหมด หลักฐาน timestamp, viewport, DPR, font, ข้อความในเฟรม, endpoint ที่สังเกต และ diagnostics อยู่ใน [capture-evidence.json](capture-evidence.json) โดยไม่บันทึก token/credential หรือ response body ของ Auth
- ไม่รัน unit/integration/build/lint ในรอบนี้ เพราะงานเป็นการเก็บภาพ ไม่มีการเปลี่ยน application source; การตรวจครั้งนี้ไม่ใช่การทดสอบเกมครบ 6 รอบผ่าน Firebase หรือการรับรอง production
