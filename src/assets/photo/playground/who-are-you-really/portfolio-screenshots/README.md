# Who Are You Really? — Portfolio Playground screenshots

ถ่ายวันที่ 12 พฤศจิกายน 2026 (Asia/Bangkok) ด้วย **Playwright MCP**, Chromium **157.0.8103.51** จาก UI ที่เรนเดอร์จริงของ checkout นี้

**ทุกภาพเป็น Design Preview และใช้ข้อมูลกับผลคะแนนตัวอย่าง ไม่ใช่ภาพจากการแข่งขัน multiplayer จริงหรือ Firebase Emulators** ไม่มีภาพจาก Emulator ในชุดนี้

Source commit: `0698282e0542db019f3d2bd708de0c8f540925b6` โดย working tree ก่อนถ่ายสะอาด ตรวจ `AGENTS.md`, เส้นทาง Preview, fixtures, คอมโพเนนต์เกม และการตั้งค่า Firebase ก่อนเริ่ม ไม่มีการแก้ gameplay, business logic, CSS หรือข้อมูลตัวอย่าง ไม่มี commit, push หรือ deploy

## ไฟล์และที่มา

ขนาด viewport เป็น CSS pixels; ขนาด PNG เป็น pixels จริงที่อ่านจาก PNG header ทุกภาพใช้ **deviceScaleFactor: 2** และ screenshot **scale: 'device'** เดสก์ท็อปเป็นภาพครอปรอบกรอบเกมจาก viewport เดิม จึงมีความกว้าง PNG ต่างจาก viewport × 2 โดยไม่มีการย่อ/ขยายหรือแต่งภาพภายหลัง

ทุก URL ในตารางมีฐาน `http://127.0.0.1:3000` และเป็น **Design Preview**

| ไฟล์ | หน้าจอ / สถานะที่ถ่าย | Viewport | PNG จริง | URL และขั้นตอนเพิ่มเติม |
| --- | --- | --- | --- | --- |
| [deciding.png](deciding.png) | ภาพหลัก: หลังสถานการณ์ข้อ 2 รอบ 2 ใบคำให้การ คำถาม การ์ด 5 บทบาท เลือกสายลับ ได้ 4 แต้ม ปุ่มดูข้อถัดไปและล็อกคำทาย | 1440 × 1600 | 1288 × 2674 | `/preview?phase=DECIDING&clue=2&round=2` → เลือกสายลับ → เปิด “ดูคำถามของข้อนี้” → ถ่ายก่อนล็อก/ส่ง |
| [lobby.png](lobby.png) | รหัส DEMOUI, มะลิ/แมว และต้น/จิ้งจอก พร้อมทั้งคู่ ปุ่มเริ่มเปิดใช้งาน | 1440 × 1600 | 2048 × 2304 | `/preview?phase=LOBBY` → กด “ฉันพร้อมแล้ว! ✓” ของมะลิ; ต้นพร้อมอยู่แล้ว → ไม่กดเริ่ม |
| [round-reveal.png](round-reveal.png) | ผลรอบ 2 บทบาทจริง คำทาย +4/+3 เหตุผล คะแนนสะสม 9–3 และปุ่มพร้อมลุยรอบ 3 | 1440 × 1600 | 1288 × 2224 | `/preview?phase=ROUND_REVEAL&round=2`; desktop แสดงเหตุผลคะแนนทั้งคู่โดยตรง ไม่ต้องเปิด disclosure |
| [match-result.png](match-result.png) | จบครบ 4 รอบ มะลิชนะ 11–10 ประวัติครบ 4 รอบและปุ่มเล่นอีกครั้ง พับรายละเอียดทั้งหมด | 1440 × 1600 | 1288 × 2086 | `/preview?phase=MATCH_RESULT` |
| [role-intro.png](role-intro.png) | บทบาทลับสายลับ ภาพตัวละคร ชื่อ คำอธิบายครบ และปุ่มเข้าใจบทบาทแล้ว | 1440 × 1600 | 1288 × 2174 | `/preview?phase=ROLE_INTRO&role=spy` → ยังไม่ยืนยันบทบาท |
| [answering.png](answering.png) | คำถามช่วยงานเจ้าภาพ ตัวเลือก A–D เลือก C ไว้ ปุ่มยืนยันคำตอบ | 1440 × 1600 | 1288 × 1978 | `/preview?phase=ANSWERING&clue=2` → เลือก C “เปิดเพลง…” → ยังไม่ส่ง |
| [answer-reveal.png](answer-reveal.png) | คำถามข้อ 2 ชื่อมะลิ/ต้น คำตอบทั้งคู่ และประวัติข้อก่อนหน้า | 1440 × 1600 | 1288 × 1930 | `/preview?phase=ANSWER_REVEAL&clue=2` |
| [mobile-gameplay.png](mobile-gameplay.png) | มือถือ: ใบคำให้การ สายลับที่เลือก แวมไพร์ และแถบปุ่มล่าง | 390 × 844 | 780 × 1688 | `/preview?phase=DECIDING&clue=2&round=2` → เลือกสายลับ พับคำถาม → `scrollY=210` |
| [match-history.png](match-history.png) | ภาพเสริม: เปิดรอบ 2 เห็นบทบาท คำทาย เหตุผล และหลักฐานทั้ง 4 ข้อ | 1440 × 2045 | 1288 × 3858 | `/preview?phase=MATCH_RESULT` → กดแถวรอบที่ 2; เพิ่มความสูง viewport เพื่อเก็บครบ |
| [mobile-gameplay-02.png](mobile-gameplay-02.png) | ภาพเสริมมือถือ: การ์ดส่วนที่เหลือจนถึงผี พร้อมแถบปุ่มล่าง | 390 × 844 | 780 × 1688 | URL เดียวกับมือถือภาพแรก สถานะเดิม → `scrollY=650` |
| [home.png](home.png) | ภาพเสริมธีมแฟ้มคดี: ชื่อเกม บัตรสายสืบ อวาตาร์ วิธีเล่น และคะแนน | 1440 × 1600 | 2320 × 2490 | `/preview?phase=HOME`; ฟอร์มว่างตามค่าเริ่มต้น ไม่สร้างห้อง |

## การจัดกรอบและตรวจคุณภาพ

- กดพับ “UI Preview / แสดง / ซ่อนตัวเลือก” ผ่าน `<summary>` ก่อนถ่ายทุกภาพ ส่วน toolbar อยู่เหนือพื้นที่ครอป/เลื่อนพ้นภาพ ไม่มีการลบองค์ประกอบหรือแก้ DOM/CSS เพื่อจัดฉาก
- เดสก์ท็อปครอปรอบ `.game-screen-wrapper` โดยเว้นข้างละ 32 CSS px บน 16 px ล่าง 24 px; หน้า Home ครอปรอบ `.wrap` เว้นบน 52 px เพื่อเก็บแท็บแฟ้มครบ พิกัดจริงแต่ละไฟล์อยู่ใน `capture-metadata.json`
- รอ `document.fonts.ready` และ decode ภาพตัวละครที่มองเห็นได้ครบก่อนถ่าย ไม่รอ lazy images ใน dialog/รายละเอียดที่พับอยู่ ใช้ `animations: 'disabled'` ตอน screenshot
- CSS ใช้ font stack ของโปรเจคตามเดิม ไม่มี webfont โหลดค้าง `document.fonts.status` เป็น `loaded` ทุก capture; ตรวจผ่าน Chromium CDP พบข้อความไทยตัวอย่างใช้ **Leelawadee UI Bold** ซึ่งเป็น Windows fallback ที่มีอยู่ใน font stack ไม่ได้ยืนยันว่ามี Noto Sans Thai บนเครื่อง
- เปิดตรวจ PNG สุดท้ายทุกไฟล์ทั้ง 11 ภาพแล้ว: ตัวละครปรากฏ ข้อความสำคัญและปุ่มอ่านได้ การ์ดที่เลือกมีเครื่องหมาย ไม่มี loading/error overlay ปิดบังเนื้อหาที่ต้องการ บันทึกผลตรวจรายไฟล์ใน metadata
- ตรวจขนาดจาก PNG header ตรง metadata ครบ 11 ไฟล์ และเก็บ SHA-256/จำนวน bytes ใน `png-verification.json` ไม่พบ `pageerror` ระหว่างการถ่ายรอบที่สำเร็จ

## ข้อจำกัดและความหมายของข้อมูล

- สภาพแวดล้อมยังไม่พร้อมเล่นผ่าน Emulator: พบ Java และ RTDB emulator JAR แต่ไม่พบ Firebase CLI บน PATH หรือในตำแหน่ง CLI/cache ที่ตรวจ และไม่มี Auth/RTDB Emulator เปิดอยู่ จึงเลือก Preview ตามขอบเขตที่อนุญาต ไม่ติดตั้ง CLI หรือเชื่อมต่อข้อมูลจริงเพื่อถ่ายภาพ
- Preview มาจาก `components/preview/GamePreview.tsx` และ `fixtures.ts` ซึ่งส่ง snapshot ตัวอย่างเข้าคอมโพเนนต์เกมจริง การกดพร้อม/เลือกคำตอบ/เลือกผู้ต้องสงสัยเป็นสถานะเฉพาะหน้านี้ ไม่สร้างห้องหรือส่งผลเข้าระบบเกม
- ชื่อมะลิ/ต้น อวาตาร์ รหัส DEMOUI สถานะออนไลน์ บทบาท หลักฐาน และคะแนนเป็นตัวอย่างทั้งหมด ข้อความ “เชื่อมต่อห้องแล้ว” ในภาพก็เป็นข้อความจำลอง ไม่มีหลักฐานการเชื่อมต่อ multiplayer ในชุดนี้
- ประวัติคะแนนตัวอย่างคือ `[5,0]`, `[4,3]`, `[0,5]`, `[2,2]` รวม `11–10` ส่วนสรุปรอบ 2 สะสม `9–3` ผลเหล่านี้เป็นค่าตั้งไว้ใน fixture ไม่ได้มาจากการเล่น 4 รอบระหว่างถ่าย
- หน้า Preview แต่ละหน้าเริ่มจาก fixture ของตัวเอง: `answering.png` เลือก C ผ่าน UI แต่ `answer-reveal.png` ใช้คำตอบ A/C ที่ fixture กำหนด จึงไม่ใช่ลำดับเกมต่อเนื่องจากการกดส่งครั้งเดียวกัน ประวัติใน match fixture ใช้บทบาท/หลักฐานเดิมประกอบหลายรอบ
- หน้า Answering แสดงหมวดเป็นคำว่า `task` ตาม UI ปัจจุบัน ไม่ได้แก้คำแปลเพื่อถ่ายภาพ
- Next dev มีคำเตือนแนะนำให้ภาพสายลับที่เป็น LCP ใช้ `loading="eager"`; ภาพปัจจุบันโหลดแบบ lazy ตาม source เดิม รอ decode สำเร็จก่อนถ่ายแล้ว คำเตือนไม่ปรากฏใน PNG และไม่ได้แก้ source เพื่อปิดคำเตือน
- หน้าทายบน desktop จำกัดความกว้างกรอบไว้ 580 CSS px จึงได้ภาพแนวตั้งยาวแม้ viewport เป็น desktop; Lobby/Home ใช้กรอบกว้างกว่า เก็บภาพต้นฉบับเต็มองค์ประกอบไว้สำหรับจัดภาพปกภายหลัง
- มือถือเรียงการ์ดเป็นคอลัมน์เดียว ภาพแรกเห็นใบคำให้การและ 2 การ์ดครบ แต่แถบปุ่มตรึงด้านล่างบังบางส่วนของการ์ดถัดไปในตำแหน่งเลื่อนนั้น จึงมีภาพที่สองเก็บการ์ดที่เหลือ ไม่สามารถอ่านทุกการ์ดพร้อมใบคำให้การครบใน 390 × 844 ภาพเดียว
- แถบปุ่มมือถือสูงประมาณ **126.98 CSS px** เริ่มที่ `y=717.02` ภาพที่สองเลื่อนจนการ์ดสุดท้ายจบที่ `y=676.70` อยู่เหนือแถบปุ่มประมาณ 40 px จึงเข้าถึงเนื้อหาครบได้ ไม่พบ horizontal overflow (`scrollWidth=390`) เป็นการตรวจ Chromium mobile emulation ยังไม่ได้ทดสอบโทรศัพท์จริงหรือ browser chrome/safe-area ของ iOS/Android
- ซ่อนตรา Next.js Dev Tools บนมือถือผ่าน UI: Open Next.js Dev Tools → Preferences → Hide for this session ไม่ได้แก้การตั้งค่าโปรเจค

## ถ่ายซ้ำ

1. เปิด PowerShell ที่ Git root: `D:\Vscode\BoardGame\Who Are You Really\gemini\who-are-you-really` และตรวจ source commit ข้างต้น มี dependencies ติดตั้งไว้แล้วในรอบนี้
2. ถ้าพอร์ต 3000 ว่าง ให้รัน `node portfolio-screenshots/start-preview.mjs` ซึ่งใช้ Next dev บน loopback และตั้ง Firebase เป็น demo project/endpoint localhost โดย override credentials เป็นค่าว่างเฉพาะ process ไม่แก้ `.env` สคริปต์นี้ **ไม่ได้เปิด Emulator** ให้เข้าถึงเฉพาะ `/preview` สำหรับชุดนี้
3. ใช้ Playwright MCP `browser_run_code_unsafe` พร้อม `filename` เป็น absolute path ของ `portfolio-screenshots/capture-desktop.mcp.js` แล้ว `capture-mobile.mcp.js` ทั้งสองไฟล์เป็น async function สำหรับ MCP ไม่ใช่โปรแกรมที่รันด้วย Node ตรง ๆ แก้ค่า output path ในสคริปต์หาก checkout อยู่คนละที่
4. สคริปต์สร้าง browser context ใหม่ด้วย DPR 2, กด UI ตามตาราง, พับ toolbar, รอฟอนต์/รูป และถ่าย PNG เดสก์ท็อปเพิ่มความสูงสำหรับ match history; มือถือใช้ `isMobile: true`, `hasTouch: true` และถ่าย viewport สองตำแหน่งเลื่อน
5. ผลลัพธ์ MCP คืนค่า records/errors ให้บันทึกเป็น `capture-metadata.json` ใหม่เมื่อถ่ายซ้ำ (metadata ที่ส่งมอบอ้างอิงรอบวันที่ 12 พ.ย. เท่านั้น) จากนั้นรัน `node portfolio-screenshots/verify-artifacts.mjs` เพื่ออ่านขนาดจริงและสร้าง hashes ใหม่ แล้วเปิดตรวจ PNG ทุกไฟล์อีกครั้ง

ไฟล์ประกอบ: `capture-desktop.mcp.js`, `capture-mobile.mcp.js`, `start-preview.mjs`, `capture-metadata.json`, `verify-artifacts.mjs`, `png-verification.json`

สถานะเมื่อส่งมอบ: ภาพหลักครบ **8/8**, ภาพเสริม **3** รวม **11 PNG**, ไม่มีภาพที่ยังขาด `git status --short` แสดงเพียง `?? portfolio-screenshots/` โดย tracked source files ไม่มี diff ปิด browser contexts และหยุด dev server ที่เปิดสำหรับงานนี้แล้ว
