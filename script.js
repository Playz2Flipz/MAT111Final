const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const CFG={analyzeUrl:"",chatUrl:"",...(window.SNAPGREEN_CONFIG||{})};
const D={
en:{nHome:"Home",nAna:"Analyzer",nChat:"Chat",nGame:"Game",nRew:"Rewards",tAnalyzer:"Waste Analyzer",tChat:"Chat with SnapGreen",tGame:"Recycling Game",tRewards:"Achievements",tHistory:"History",tProfile:"Profile",
slogan:"Let's make a greener planet together!",hi:"Hello, Eco Friend! 🌱",ecoScore:"Your Eco Score",ecoSum:"{n} scans · {m} correct sorts",explore:"Explore Features",
fAnalyze:"Analyze Waste",fAnalyzeD:"Scan & sort",fChat:"Ask Chatbot",fChatD:"Recycling help",fGame:"Play Game",fGameD:"Sort & score",tipsT:"Green Tips",recent:"Recent Activity",viewAll:"View all",noAct:"No activity yet. Scan some waste or play a game!",
tip1:"Use reusable bags and avoid single-use plastic!",tip2:"Rinse containers before recycling them.",tip3:"Turn off lights and unplug devices you don't use.",
pickHint:"Take a photo or choose an image",takePhoto:"Take Photo",gallery:"Choose from Gallery",analyze:"Analyze",analyzing:"Analyzing your waste...",
demoA:"Demo Mode: results are samples. No AI service is connected.",demoC:"Demo Mode: simple keyword replies. No AI service is connected.",
how:"How it works?",howD:"Just take a photo of the waste, and let SnapGreen help you!",info:"Take or choose a photo of one waste item, then tap Analyze.",
cat:"Category",conf:"Confidence",scanAgain:"Scan Again",saveR:"Save Result",learn:"Learn More",saved:"Saved to History",errA:"Analysis failed. Check your connection and try again.",
plastic:"Plastic",glass:"Glass",paper:"Paper",metal:"Metal",organic:"Organic Waste",general:"General Waste",other:"Other",
x_plastic:"Rinse, remove the cap and label, squash it, then put it in the plastic bin.",x_glass:"Empty and rinse. Put it in the glass bin; never mix with ceramics.",x_paper:"Keep it dry and clean. Flatten boxes and put them in the paper bin.",x_metal:"Rinse the can and put it in the metal bin. Metal recycles again and again.",x_organic:"Compost it or put it in the food-waste bin. Don't mix with plastic.",x_general:"Put it in the general waste bin. It can't be recycled.",x_other:"Check local rules. Hazardous items need a special drop-off point.",
w1:"Plastic bottle",w2:"Glass jar",w3:"Newspaper",w4:"Aluminum can",w5:"Banana peel",
online:"Online",ph:"Type a message...",newChat:"New conversation started",thinking:"Thinking...",errC:"Couldn't reach the chatbot. Try again.",
hello:"Hi! I'm SnapGreen 🌱 Ask me anything about recycling and sorting waste.",
s1:"What can be recycled?",s2:"How to sort waste?",s3:"Eco tips 🌿",s4:"How do I recycle a plastic bottle?",
r_bottle:"Plastic bottles can be recycled! ♻️\nRinse them, remove the cap, and put them in the plastic recycling bin.",r_recycle:"Most clean plastic, glass, paper and metal can be recycled. Food-soiled items and soft plastic bags usually can't.",r_sort:"Sort into 4 groups: plastic, glass, paper, and others. Rinse containers and keep paper dry.",r_tips:"Bring your own bag and bottle, buy less, repair before replacing, and compost food scraps.",r_def:"I can help with recycling, sorting and eco tips. Try asking: \"How do I recycle a plastic bottle?\"",
level:"Level",gTitle:"Recycling Game",gTag:"Sort the waste correctly and help the planet!",hpT:"How to Play?",hp1:"Drag the waste",hp2:"to the correct bin",hp3:"and earn points!",best:"Your High Score",startG:"Start Game",scoreL:"Score",timeL:"Time",corr:"Correct!",ptsN:"+{n} points",wrongT:"Try again!",instr:"Sort the waste into the correct bin!",start:"Start",b_plastic:"Plastic",b_glass:"Glass",b_paper:"Paper",b_others:"Others",
good:"Correct! +10 🎉",bad:"Not quite: {i} goes in {b}",over:"Time's up!",fin:"Final score",okN:"Correct",noN:"Incorrect",again:"Play Again",home:"Return Home",
i1:"Shampoo bottle",i2:"Plastic cup",i3:"Glass bottle",i4:"Glass jar",i5:"Newspaper",i6:"Cardboard box",i7:"Metal can",i8:"Banana peel",i9:"Battery",
fAll:"All",fLearn:"Learning",fGameF:"Gaming",fEco:"Eco Actions",claim:"Claim",claimed:"Claimed",lockedT:"Locked",unl:"Unlocked",
a0n:"Green Champion",a0d:"Claim all badges!",a1n:"Eco Learner",a1d:"Send 5 chat messages",a2n:"Recycle Pro",a2d:"Analyze 3 items",a3n:"Game Master",a3d:"Sort 20 items correctly",a4n:"Green Hero",a4d:"Reach 300 Eco Score",
rewardOk:"Reward claimed! +{n} Eco points 🎉",
noHist:"Nothing here yet.",hScan:"Analyzed: {n}",hGame:"Game score: {n}",hAch:"Achievement: {n}",
pName:"Eco Friend",pSub:"SnapGreen member",settings:"Settings",lang:"Language",reset:"Reset all data",resetQ:"Delete all progress?",pScans:"Scans",pGames:"Games",pBadges:"Badges",ok:"OK",close:"Close"},
th:{nHome:"หน้าแรก",nAna:"วิเคราะห์",nChat:"แชท",nGame:"เกม",nRew:"รางวัล",tAnalyzer:"วิเคราะห์ขยะ",tChat:"แชทกับ SnapGreen",tGame:"เกมรีไซเคิล",tRewards:"ความสำเร็จ",tHistory:"ประวัติ",tProfile:"โปรไฟล์",
slogan:"มาทำให้โลกเขียวขึ้นไปด้วยกัน!",hi:"สวัสดี เพื่อนรักษ์โลก! 🌱",ecoScore:"คะแนนรักษ์โลกของคุณ",ecoSum:"สแกน {n} ครั้ง · แยกถูก {m} ชิ้น",explore:"ฟีเจอร์ทั้งหมด",
fAnalyze:"วิเคราะห์ขยะ",fAnalyzeD:"สแกนและแยก",fChat:"ถามแชทบอท",fChatD:"ช่วยเรื่องรีไซเคิล",fGame:"เล่นเกม",fGameD:"แยกขยะ ทำคะแนน",tipsT:"เคล็ดลับรักษ์โลก",recent:"กิจกรรมล่าสุด",viewAll:"ดูทั้งหมด",noAct:"ยังไม่มีกิจกรรม ลองสแกนขยะหรือเล่นเกมดู!",
tip1:"ใช้ถุงผ้าและหลีกเลี่ยงพลาสติกใช้ครั้งเดียว!",tip2:"ล้างภาชนะก่อนทิ้งเพื่อรีไซเคิล",tip3:"ปิดไฟและถอดปลั๊กอุปกรณ์ที่ไม่ใช้",
pickHint:"ถ่ายรูปหรือเลือกรูปภาพ",takePhoto:"ถ่ายภาพ",gallery:"เลือกจากแกลเลอรี",analyze:"วิเคราะห์",analyzing:"กำลังวิเคราะห์ขยะของคุณ...",
demoA:"โหมดสาธิต: ผลลัพธ์เป็นตัวอย่าง ยังไม่ได้เชื่อมต่อบริการ AI",demoC:"โหมดสาธิต: ตอบตามคีย์เวิร์ดอย่างง่าย ยังไม่ได้เชื่อมต่อบริการ AI",
how:"ใช้งานอย่างไร?",howD:"แค่ถ่ายรูปขยะ แล้วให้ SnapGreen ช่วยคุณ!",info:"ถ่ายหรือเลือกรูปขยะ 1 ชิ้น แล้วกดวิเคราะห์",
cat:"ประเภท",conf:"ความมั่นใจ",scanAgain:"สแกนอีกครั้ง",saveR:"บันทึกผล",learn:"เรียนรู้เพิ่มเติม",saved:"บันทึกลงประวัติแล้ว",errA:"วิเคราะห์ไม่สำเร็จ ตรวจสอบการเชื่อมต่อแล้วลองใหม่",
plastic:"พลาสติก",glass:"แก้ว",paper:"กระดาษ",metal:"โลหะ",organic:"ขยะอินทรีย์",general:"ขยะทั่วไป",other:"อื่น ๆ",
x_plastic:"ล้างให้สะอาด ถอดฝาและฉลาก บีบให้แบน แล้วทิ้งในถังพลาสติก",x_glass:"เทให้หมดและล้าง ทิ้งในถังแก้ว ห้ามปนกับเซรามิก",x_paper:"เก็บให้แห้งและสะอาด พับกล่องให้แบนแล้วทิ้งในถังกระดาษ",x_metal:"ล้างกระป๋องแล้วทิ้งในถังโลหะ โลหะรีไซเคิลได้ซ้ำแล้วซ้ำอีก",x_organic:"นำไปหมักปุ๋ยหรือทิ้งในถังเศษอาหาร อย่าปนกับพลาสติก",x_general:"ทิ้งในถังขยะทั่วไป ไม่สามารถรีไซเคิลได้",x_other:"ตรวจสอบกฎท้องถิ่น ขยะอันตรายต้องทิ้งที่จุดรับเฉพาะ",
w1:"ขวดพลาสติก",w2:"โหลแก้ว",w3:"หนังสือพิมพ์",w4:"กระป๋องอะลูมิเนียม",w5:"เปลือกกล้วย",
online:"ออนไลน์",ph:"พิมพ์ข้อความ...",newChat:"เริ่มบทสนทนาใหม่แล้ว",thinking:"กำลังคิด...",errC:"เชื่อมต่อแชทบอทไม่ได้ ลองใหม่อีกครั้ง",
hello:"สวัสดี! ฉัน SnapGreen 🌱 ถามเรื่องรีไซเคิลและการแยกขยะได้เลย",
s1:"อะไรรีไซเคิลได้บ้าง?",s2:"แยกขยะอย่างไร?",s3:"เคล็ดลับรักษ์โลก 🌿",s4:"รีไซเคิลขวดพลาสติกอย่างไร?",
r_bottle:"ขวดพลาสติกรีไซเคิลได้! ♻️\nล้างให้สะอาด ถอดฝา แล้วทิ้งในถังรีไซเคิลพลาสติก",r_recycle:"พลาสติก แก้ว กระดาษ และโลหะที่สะอาดส่วนใหญ่รีไซเคิลได้ ส่วนของที่เปื้อนอาหารและถุงพลาสติกบางมักรีไซเคิลไม่ได้",r_sort:"แยกเป็น 4 กลุ่ม: พลาสติก แก้ว กระดาษ และอื่น ๆ ล้างภาชนะและเก็บกระดาษให้แห้ง",r_tips:"พกถุงและขวดน้ำของตัวเอง ซื้อให้น้อยลง ซ่อมก่อนซื้อใหม่ และหมักเศษอาหารเป็นปุ๋ย",r_def:"ฉันช่วยเรื่องรีไซเคิล การแยกขยะ และเคล็ดลับรักษ์โลกได้ ลองถามว่า \"รีไซเคิลขวดพลาสติกอย่างไร?\"",
level:"เลเวล",gTitle:"เกมรีไซเคิล",gTag:"แยกขยะให้ถูกต้อง ช่วยโลกของเรา!",hpT:"วิธีเล่น?",hp1:"ลากขยะ",hp2:"ไปที่ถังที่ถูกต้อง",hp3:"รับคะแนนสะสม!",best:"คะแนนสูงสุดของคุณ",startG:"เริ่มเกม",scoreL:"คะแนน",timeL:"เวลา",corr:"ถูกต้อง!",ptsN:"+{n} คะแนน",wrongT:"ลองใหม่นะ!",instr:"แยกขยะลงถังให้ถูกต้อง!",start:"เริ่มเล่น",b_plastic:"พลาสติก",b_glass:"แก้ว",b_paper:"กระดาษ",b_others:"อื่น ๆ",
good:"ถูกต้อง! +10 🎉",bad:"ยังไม่ถูก: {i} ต้องทิ้งใน{b}",over:"หมดเวลา!",fin:"คะแนนรวม",okN:"ตอบถูก",noN:"ตอบผิด",again:"เล่นอีกครั้ง",home:"กลับหน้าแรก",
i1:"ขวดแชมพู",i2:"แก้วพลาสติก",i3:"ขวดแก้ว",i4:"โหลแก้ว",i5:"หนังสือพิมพ์",i6:"กล่องกระดาษ",i7:"กระป๋องโลหะ",i8:"เปลือกกล้วย",i9:"ถ่านไฟฉาย",
fAll:"ทั้งหมด",fLearn:"การเรียนรู้",fGameF:"เกม",fEco:"ทำเพื่อโลก",claim:"รับรางวัล",claimed:"รับแล้ว",lockedT:"ล็อก",unl:"ปลดล็อกแล้ว",
a0n:"แชมป์รักษ์โลก",a0d:"รับเหรียญครบทุกอัน!",a1n:"นักเรียนรักษ์โลก",a1d:"ส่งข้อความแชท 5 ครั้ง",a2n:"โปรรีไซเคิล",a2d:"วิเคราะห์ขยะ 3 ชิ้น",a3n:"เซียนเกม",a3d:"แยกถูก 20 ชิ้น",a4n:"ฮีโร่สีเขียว",a4d:"ได้คะแนนรักษ์โลก 300",
rewardOk:"รับรางวัลแล้ว! +{n} คะแนน 🎉",
noHist:"ยังไม่มีข้อมูล",hScan:"วิเคราะห์: {n}",hGame:"คะแนนเกม: {n}",hAch:"ความสำเร็จ: {n}",
pName:"เพื่อนรักษ์โลก",pSub:"สมาชิก SnapGreen",settings:"การตั้งค่า",lang:"ภาษา",reset:"ล้างข้อมูลทั้งหมด",resetQ:"ลบความคืบหน้าทั้งหมด?",pScans:"สแกน",pGames:"เกม",pBadges:"เหรียญ",ok:"ตกลง",close:"ปิด"}};

Object.assign(D.en,{b_general:"General",b_recycle:"Recycle",b_wet:"Wet",b_hazard:"Hazard",
bn_general:"Blue bin",bn_recycle:"Yellow bin",bn_wet:"Green bin",bn_hazard:"Red bin",
bt_general:"General waste",bt_recycle:"Recycle",bt_wet:"Wet waste",bt_hazard:"Hazardous waste",
lm_general:"The blue bin is for waste that can't be recycled or composted, like used tissue, snack wrappers and foam.",
lm_recycle:"The yellow bin is for clean recyclables: plastic, glass, paper and metal. Rinse and dry them first.",
lm_wet:"The green bin is for food scraps and plant waste. It can become compost, so keep plastic out.",
lm_hazard:"The red bin is for batteries, electronics, bulbs, medicine and chemicals. Never mix them with other waste. Use a collection point.",
txtLbl:"Or describe your waste (no photo needed)",txtPh:"e.g. banana peel, old phone charger...",
demoA:"Demo Mode: photos are not read. Results come from sample keywords. No AI is connected.",
howD:"Take a photo or just type what it is, and let SnapGreen help you!",needIn:"Add a photo or describe your waste first.",
noMatch:"Demo Mode doesn't know that one. Try: bottle, banana peel, battery, box.",demoTag:"Demo sample",conf:"Confidence",nearT:"Near you",sampleD:"sample data",nav:"Navigate",km:"km",
hello:"Hiii~ I'm Green 🌱 Ask me anything about waste, serious or silly. I can even help you find drop-off points near you!",
s3:"Eco tips 🌿",s5:"Where can I drop e-waste near me?",
r_hi:"Heyyy 👋 Got any waste for me to sort today?",r_thanks:"Anytime~ 🌱 The planet is smiling because of you today!",
r_bottle:"Plastic bottle? Easy peasy! 🥤 Pour it out, take the cap off, squash it, then into the yellow bin. You're crushing it ♻️",
r_recycle:"The yellow bin takes clean plastic, glass, paper and cans ✨ Got food on it? Rinse first, or Green gets grumpy 😤",
r_sort:"4 colors, that's all! 🔵 blue = general 🟡 yellow = recycle 🟢 green = wet 🔴 red = hazardous. Sort like this and you're a hero 🦸",
r_tips:"Today's tip 💡 Carry a tote bag and your own cup. That's hundreds of plastic pieces saved a year. You got this! 💪",
r_wet:"Banana peel and food scraps go in the green bin 🟢🍌 Bonus: they can become compost. Fancy! 🌿",
r_battery:"Batteries are red bin stuff 🔴 Never toss them with other waste! Keep them in a sealed bag and drop at a collection point 🔋 Ask me \"e-waste near me\"!",
r_ewaste:"E-waste can't go in normal bins 🔌 Here are drop-off points near you (sample data):\n📍 Pathum Wan District Office, 7.9 km\n📍 Chulalongkorn University, 7.9 km\n📍 Lumphini Park, 8.4 km\nWipe your data before you drop it off 😉",
r_feel:"Leftover feelings? No bin takes those 😭 Hug yourself first, or pour them out to a good friend. If it's really heavy, talk to someone you trust 💚\n💡 Tip: used tissues from crying go in the blue bin (general waste)!",
r_def:"Hmm~ Green isn't sure about that one 🤔 Try asking about sorting, recycling or e-waste drop-offs, like \"Where does a banana peel go?\" 🍌",
goalL:"Goal {n}",startLv:"Start Level {n}",lvT:"Choose a level",lvLock:"Score {n} on Level {m} to unlock it",win:"Level cleared!",lvOpen:"Level {n} unlocked!",next:"Next Level",backLobby:"Back to Lobby",goalHit:"Goal reached! Keep going 🎯",bad:"Not quite: {i} goes in the {b}",over:"Time's up!",
r_c:""});
Object.assign(D.th,{b_general:"ทั่วไป",b_recycle:"รีไซเคิล",b_wet:"เปียก",b_hazard:"อันตราย",
bn_general:"ถังน้ำเงิน",bn_recycle:"ถังเหลือง",bn_wet:"ถังเขียว",bn_hazard:"ถังแดง",
bt_general:"ขยะทั่วไป",bt_recycle:"รีไซเคิล",bt_wet:"ขยะเปียก",bt_hazard:"ขยะอันตราย",
lm_general:"ถังน้ำเงินสำหรับขยะที่รีไซเคิลหรือทำปุ๋ยไม่ได้ เช่น ทิชชู่ใช้แล้ว ซองขนม และโฟม",
lm_recycle:"ถังเหลืองสำหรับวัสดุรีไซเคิลที่สะอาด: พลาสติก แก้ว กระดาษ โลหะ ควรล้างและเช็ดให้แห้งก่อน",
lm_wet:"ถังเขียวสำหรับเศษอาหารและเศษพืช นำไปทำปุ๋ยได้ จึงไม่ควรมีพลาสติกปน",
lm_hazard:"ถังแดงสำหรับถ่านไฟฉาย อุปกรณ์อิเล็กทรอนิกส์ หลอดไฟ ยา และสารเคมี ห้ามทิ้งรวมกับขยะอื่น ให้นำไปที่จุดรับ",
txtLbl:"หรือพิมพ์อธิบายขยะของคุณ (ไม่ต้องแนบรูป)",txtPh:"เช่น เปลือกกล้วย, สายชาร์จมือถือเก่า...",
demoA:"โหมดสาธิต: ไม่ได้อ่านรูปภาพ ผลลัพธ์มาจากคีย์เวิร์ดตัวอย่าง ยังไม่ได้เชื่อมต่อ AI",
howD:"ถ่ายรูปหรือพิมพ์บอกว่าเป็นอะไร แล้วให้ SnapGreen ช่วยคุณ!",needIn:"เพิ่มรูปหรือพิมพ์อธิบายขยะก่อนนะ",
noMatch:"โหมดสาธิตยังไม่รู้จักสิ่งนี้ ลอง: ขวด เปลือกกล้วย ถ่านไฟฉาย กล่อง",demoTag:"ตัวอย่างสาธิต",conf:"มั่นใจ",nearT:"ใกล้คุณ",sampleD:"ข้อมูลตัวอย่าง",nav:"นำทาง",km:"กม.",
hello:"สวัสดี~ น้องกรีนเองง 🌱 ถามเรื่องขยะได้หมด จริงจังหรือกวนๆ ก็ได้ ถามหาจุดทิ้งใกล้ตัวก็ได้นะ",
s3:"เคล็ดลับรักษ์โลก 🌿",s5:"ทิ้งขยะอิเล็กทรอนิกส์ใกล้ฉันที่ไหน?",
r_hi:"หวัดดีจ้า~ 👋 วันนี้มีขยะอะไรให้น้องกรีนช่วยมั้ย?",r_thanks:"ยินดีจ้า~ 🌱 วันนี้โลกยิ้มเพราะเธอเลยนะ!",
r_bottle:"ขวดพลาสติกเหรอ ง่ายมาก! 🥤 เทน้ำออก ถอดฝา บีบให้แบน แล้วหย่อนถังเหลืองได้เลย เก่งมากกก ♻️",
r_recycle:"ถังเหลืองรับพลาสติกสะอาด แก้ว กระดาษ กระป๋อง ✨ ถ้าเปื้อนอาหารเยอะ ล้างก่อนนะ ไม่งั้นน้องกรีนงอน 😤",
r_sort:"จำง่ายๆ 4 สีเลย! 🔵 น้ำเงิน=ทั่วไป 🟡 เหลือง=รีไซเคิล 🟢 เขียว=เปียก 🔴 แดง=อันตราย แยกแค่นี้ก็เป็นฮีโร่แล้ว 🦸",
r_tips:"เคล็ดลับวันนี้ 💡 พกถุงผ้ากับแก้วส่วนตัวติดตัวไว้ ลดพลาสติกได้เป็นร้อยชิ้นต่อปีเลยนะ สู้ๆ! 💪",
r_wet:"เปลือกกล้วย เศษอาหาร ทิ้งถังเขียวเลยจ้า 🟢🍌 เอาไปทำปุ๋ยหมักต่อได้ด้วยนะ เก๋ไปอีก! 🌿",
r_battery:"ถ่านไฟฉาย/แบตเตอรี่ = ถังแดง ขยะอันตราย 🔴 ห้ามโยนรวมกับขยะอื่นนะ เก็บใส่ถุงปิดสนิทแล้วไปทิ้งที่จุดรับ 🔋 พิมพ์ \"ทิ้งขยะอิเล็กทรอนิกส์ใกล้ฉัน\" ได้เลย!",
r_ewaste:"ขยะอิเล็กทรอนิกส์ห้ามทิ้งถังปกติน้า 🔌 จุดทิ้งใกล้ๆ (ข้อมูลตัวอย่าง):\n📍 สำนักงานเขตปทุมวัน 7.9 กม.\n📍 จุฬาลงกรณ์มหาวิทยาลัย 7.9 กม.\n📍 สวนลุมพินี 8.4 กม.\nอย่าลืมลบข้อมูลในเครื่องก่อนทิ้งด้วยน้า 😉",
r_feel:"เศษใจเหลือๆ ถังไหนก็ไม่รับจ้า 😭 เก็บไว้กอดตัวเองก่อน หรือเทให้เพื่อนสนิทฟังแทนนะ ถ้าหนักมากๆ คุยกับคนที่ไว้ใจได้ก็ดีนะ 💚\n💡 เคล็ดลับ: ทิชชู่เช็ดน้ำตาที่ใช้แล้วทิ้งถังน้ำเงิน (ขยะทั่วไป) ได้เลย",
r_def:"อื้ม~ น้องกรีนยังไม่แน่ใจเรื่องนี้ 🤔 ลองถามเรื่องแยกขยะ รีไซเคิล หรือจุดทิ้งขยะอิเล็กทรอนิกส์ดูนะ เช่น \"เปลือกกล้วยทิ้งไหน?\" 🍌",
goalL:"เป้า {n}",startLv:"เริ่มด่าน {n}",lvT:"เลือกด่าน",lvLock:"ทำให้ได้ {n} คะแนนในด่าน {m} เพื่อปลดล็อก",win:"ผ่านด่านแล้ว!",lvOpen:"ปลดล็อกด่าน {n} แล้ว!",next:"ด่านถัดไป",backLobby:"กลับหน้าเตรียมเล่น",goalHit:"ถึงเป้าแล้ว! สู้ต่อ 🎯",bad:"ยังไม่ถูก: {i} ต้องทิ้งใน{b}",over:"หมดเวลา!",
r_c:""});
Object.assign(D.en,{endless:"Endless",startEnd:"Start Endless Mode",lives:"Lives",endLock:"Unlock Level 5 to play Endless Mode",pause:"Paused",leaveQ:"Leave this round?",resume:"Resume",leave:"Exit to Lobby",endBest:"Endless best",over2:"Game over!"});
Object.assign(D.th,{endless:"ไม่รู้จบ",startEnd:"เริ่มโหมดไม่รู้จบ",lives:"ชีวิต",endLock:"ปลดล็อกด่าน 5 เพื่อเล่นโหมดไม่รู้จบ",pause:"หยุดชั่วคราว",leaveQ:"ออกจากรอบนี้?",resume:"เล่นต่อ",leave:"ออกจากเกม",endBest:"สถิติไม่รู้จบ",over2:"จบเกม!"});
let S={lang:null,eco:0,best:0,unlocked:1,scans:0,chats:0,correct:0,games:0,claimed:[],hist:[],sound:true};
try{Object.assign(S,JSON.parse(localStorage.getItem("sg2")||"{}"))}catch(e){}
if(!S.lang)S.lang=(navigator.language||"en").toLowerCase().startsWith("th")?"th":"en";
const save=()=>{try{localStorage.setItem("sg2",JSON.stringify(S))}catch(e){}};
const t=(k,v={})=>{let s=D[S.lang][k]??k;for(const x in v)s=s.replace("{"+x+"}",v[x]);return s};
const fmt=ts=>new Date(ts).toLocaleString(S.lang==="th"?"th-TH":"en-US",{dateStyle:"medium",timeStyle:"short"});
const CAT={general:["🗑️","#2f80e0"],recycle:["♻️","#f2c230"],wet:["🍃","#2fa05e"],hazard:["☣️","#e0483f"]};
let toastT;const toast=m=>{const e=$("#toast");e.textContent=m;e.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove("show"),2200)};
const modal=h=>{const m=$("#modal");m.innerHTML=`<div class="mb">${h}</div>`;m.hidden=false;return m};
const closeModal=()=>{$("#modal").hidden=true};
const addHist=o=>{S.hist.unshift({...o,ts:Date.now()});S.hist=S.hist.slice(0,60)};
let AC;const ac=()=>{try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume();return AC}catch(e){}};
function tone(f,at,d,type="sine",v=.12){const c=ac();if(!c||!S.sound)return;const o=c.createOscillator(),g=c.createGain(),t0=c.currentTime+at;o.type=type;o.frequency.setValueAtTime(f,t0);g.gain.setValueAtTime(v,t0);g.gain.exponentialRampToValueAtTime(.001,t0+d);o.connect(g);g.connect(c.destination);o.start(t0);o.stop(t0+d)}
const beep=(f,d=.12)=>tone(f,0,d);
const SFX={ok:()=>{tone(784,0,.12,"triangle");tone(1175,.1,.22,"triangle")},no:()=>{tone(220,0,.18,"sawtooth",.1);tone(150,.14,.3,"sawtooth",.1)},time:()=>{[600,480,360].forEach((f,i)=>tone(f,i*.22,.2,"square",.07))},win:()=>{[523,659,784,1047].forEach((f,i)=>tone(f,i*.14,.25,"triangle",.14));tone(1047,.6,.7,"triangle",.14);tone(1319,.6,.7,"sine",.08)}};

/* ---------- Navigation ---------- */
let cur="home";
function go(n){if(cur==="game"&&n!=="game")stopGame();cur=n;if(n==="game"&&!G.run)showLobby();
 $$(".screen").forEach(s=>s.classList.toggle("active",s.id===n));
 $$(".tabs button").forEach(b=>b.classList.toggle("on",b.dataset.go===n));
 renderAll();if(n==="chat")scrollMsgs()}
document.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g)go(g.dataset.go)});

/* ---------- i18n + renders ---------- */
function applyLang(){document.documentElement.lang=S.lang;
 $$("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
 $$("[data-i18n-ph]").forEach(e=>e.placeholder=t(e.dataset.i18nPh));
 $$("[data-lang]").forEach(b=>b.classList.toggle("on",b.dataset.lang===S.lang));
 renderAll();if(result)showResult(result)}
const ACH=[
 {id:"a1",cat:"learn",icon:"🌱",goal:5,pts:50,get:()=>S.chats},
 {id:"a2",cat:"eco",icon:"♻️",goal:3,pts:100,get:()=>S.scans},
 {id:"a3",cat:"game",icon:"🏆",goal:20,pts:100,get:()=>S.correct},
 {id:"a4",cat:"eco",icon:"🌍",goal:300,pts:150,get:()=>S.eco}];
const A0={id:"a0",icon:"🏅",goal:4,pts:300,get:()=>ACH.filter(a=>S.claimed.includes(a.id)).length};
const prog=a=>Math.min(a.get(),a.goal);
function actLine(h){const k=h.k;
 if(k==="scan")return{i:CAT[h.c]?.[0]||"♻️",b:t("hScan",{n:Array.isArray(h.n)?h.n[S.lang==="th"?1:0]:t(h.n)}),s:t("bt_"+h.c)};
 if(k==="game")return{i:"🎮",b:t("hGame",{n:h.n}),s:""};
 return{i:"🏆",b:t("hAch",{n:t(h.n+"n")}),s:""}}
const li=h=>{const a=actLine(h);return`<div class="li"><div class="ic">${a.i}</div><div><b>${a.b}</b><small>${a.s?a.s+" · ":""}${fmt(h.ts)}</small></div></div>`};
function renderAll(){
 $("#ecoNum").textContent=S.eco;$("#ecoBar").style.width=(S.eco%1000)/10+"%";
 $("#ecoSum").textContent=t("ecoSum",{n:S.scans,m:S.correct});
 $("#tipTxt").textContent=t("tip"+(new Date().getDate()%3+1));
 $("#recent").innerHTML=S.hist.length?S.hist.slice(0,3).map(li).join(""):`<div class="empty">${t("noAct")}</div>`;
 $("#histList").innerHTML=S.hist.length?S.hist.map(li).join(""):`<div class="empty">${t("noHist")}</div>`;
 $("#pStats").innerHTML=`<div><b>${S.scans}</b><small>${t("pScans")}</small></div><div><b>${S.games}</b><small>${t("pGames")}</small></div><div><b>${S.claimed.length}</b><small>${t("pBadges")}</small></div>`;
 renderRewards();if(typeof renderLevels==="function")renderLevels()}
let filt="all";
function claimBtn(a){const d=a.get()>=a.goal,c=S.claimed.includes(a.id);return`<button class="btn pri" data-claim="${a.id}" ${(!d||c)?"disabled":""}>${c?t("claimed"):t("claim")}</button>`}
function renderRewards(){
 $("#featAch").innerHTML=`<span class="medal">${A0.icon}</span><div class="grow"><b>${t("a0n")}</b><br><small>${t("a0d")}</small><div class="bar"><i style="width:${prog(A0)/A0.goal*100}%"></i></div><small>${prog(A0)} / ${A0.goal}</small></div>${claimBtn(A0)}`;
 $("#achGrid").innerHTML=ACH.filter(a=>filt==="all"||a.cat===filt).map(a=>{const d=a.get()>=a.goal,c=S.claimed.includes(a.id);
  return`<div class="ach ${d?"done":"lock"}" data-detail="${a.id}"><div class="bd">${d?a.icon:"🔒"}</div><b>${t(a.id+"n")}</b><small>${t(a.id+"d")}</small><div class="bar"><i style="width:${prog(a)/a.goal*100}%"></i></div><small>${prog(a)}/${a.goal} · ${c?t("claimed"):d?t("unl"):t("lockedT")}</small></div>`}).join("")}
$("#filters").addEventListener("click",e=>{const b=e.target.closest("[data-f]");if(!b)return;filt=b.dataset.f;$$("#filters button").forEach(x=>x.classList.toggle("on",x===b));renderRewards()});
$("#rewards").addEventListener("click",e=>{
 const c=e.target.closest("[data-claim]");
 if(c){const a=[A0,...ACH].find(x=>x.id===c.dataset.claim);if(a.get()<a.goal||S.claimed.includes(a.id))return;
  S.claimed.push(a.id);S.eco+=a.pts;addHist({k:"ach",n:a.id});save();renderAll();beep(660);
  modal(`<div style="font-size:60px">${a.icon}</div><h3>${t(a.id+"n")}</h3><p>${t("rewardOk",{n:a.pts})}</p><button class="btn pri wide" onclick="closeModal()">${t("ok")}</button>`);return}
 const d=e.target.closest("[data-detail]");
 if(d){const a=ACH.find(x=>x.id===d.dataset.detail);modal(`<div style="font-size:60px">${a.get()>=a.goal?a.icon:"🔒"}</div><h3>${t(a.id+"n")}</h3><p>${t(a.id+"d")}<br>${prog(a)} / ${a.goal}</p><button class="btn sec wide" onclick="closeModal()">${t("close")}</button>`)}});
$$("[data-lang]").forEach(b=>b.onclick=()=>{S.lang=b.dataset.lang;save();applyLang()});
$("#resetBtn").onclick=()=>{if(confirm(t("resetQ"))){const l=S.lang;try{localStorage.removeItem("sg2")}catch(e){}S={lang:l,eco:0,best:0,unlocked:1,scans:0,chats:0,correct:0,games:0,claimed:[],hist:[],sound:true};renderAll()}};
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});

/* ---------- Analyzer ---------- */
const L=a=>a[S.lang==="th"?1:0];
const KB=[
{k:["ขวดแก้ว","แก้ว","โหล","glass","jar"],b:"recycle",n:["Glass bottle / jar","ขวดแก้ว / โหลแก้ว"],tg:[["Glass","แก้ว"],["Fragile","แตกง่าย"]],st:[["🫗","Empty and rinse","เทและล้างให้สะอาด"],["🏷️","Remove the lid","แยกฝาออก"],["⚠️","Wrap broken pieces in paper","ห่อเศษแก้วแตกด้วยกระดาษ"]],c:90},
{k:["ทิชชู่","ซองขนม","โฟม","ถุงขนม","หลอดดูด","tissue","snack","foam","wrapper","straw"],b:"general",n:["General waste","ขยะทั่วไป"],tg:[["Not recyclable","รีไซเคิลไม่ได้"],["Often soiled","มักเปื้อน"]],st:[["🗑️","Put it in the blue bin","ทิ้งลงถังน้ำเงิน"],["🛍️","Tie the bag to avoid litter","มัดปากถุงกันขยะหล่น"],["♻️","Use less single-use stuff","ลดของใช้ครั้งเดียวทิ้ง"]],c:86},
{k:["ขวดน้ำ","ขวด","แก้วพลาสติก","พลาสติก","plastic","bottle"],b:"recycle",n:["Plastic bottle","ขวดพลาสติก"],tg:[["PET plastic","พลาสติก PET"],["Liquid left","มีน้ำเหลืออยู่"]],st:[["💧","Pour out any liquid","เทน้ำออกให้หมด"],["🧴","Remove the cap","แยกฝาออก"],["🤏","Squash it flat","บีบให้แบน"]],c:92},
{k:["กล่อง","ลัง","กระดาษ","หนังสือพิมพ์","paper","cardboard","box","newspaper"],b:"recycle",n:["Cardboard / paper","ลังกระดาษ / กระดาษ"],tg:[["Paper","กระดาษ"],["Keep dry","ต้องแห้ง"]],st:[["📦","Flatten the box","พับกล่องให้แบน"],["🧽","Remove tape and food","ดึงเทปและเศษอาหารออก"],["☂️","Keep it dry","เก็บให้แห้ง"]],c:90},
{k:["กระป๋อง","can","metal","aluminum"],b:"recycle",n:["Metal can","กระป๋องโลหะ"],tg:[["Metal","โลหะ"],["Sharp edge","ขอบคม"]],st:[["🫗","Empty it out","เทของเหลวออก"],["🚿","Rinse it quickly","ล้างให้สะอาด"],["🤏","Crush it if you can","บีบให้แบนถ้าทำได้"]],c:91},
{k:["เปลือก","กล้วย","เศษอาหาร","อาหาร","ผลไม้","ผัก","เปลือกไข่","banana","peel","food","fruit","vegetable","eggshell","leaves","ใบไม้"],b:"wet",n:["Food scraps","เปลือกกล้วย / เศษอาหาร"],tg:[["Organic","ย่อยสลายได้"],["Compostable","ทำปุ๋ยได้"]],st:[["🥄","Drain excess liquid","สะเด็ดน้ำออก"],["🚫","Keep plastic out","อย่าให้มีพลาสติกปน"],["🌱","Compost if you can","ทำปุ๋ยหมักได้ถ้าทำได้"]],c:94},
{k:["ถ่าน","แบตเตอรี่","แบต","battery","batteries"],b:"hazard",n:["Battery","ถ่านไฟฉาย / แบตเตอรี่"],tg:[["Hazardous","อันตราย"],["Can leak","รั่วได้"]],st:[["🔋","Never bin with other waste","ห้ามทิ้งรวมกับขยะอื่น"],["🛍️","Keep in a sealed bag","เก็บใส่ถุงปิดสนิท"],["📍","Drop at a collection point","นำไปทิ้งที่จุดรับ"]],c:93},
{k:["มือถือ","โทรศัพท์","สายชาร์จ","ที่ชาร์จ","หูฟัง","อิเล็กทรอนิกส์","คอมพิวเตอร์","phone","charger","cable","earbud","electronic","laptop"],b:"hazard",n:["Electronic waste","ขยะอิเล็กทรอนิกส์"],tg:[["E-waste","อิเล็กทรอนิกส์"],["Contains metals","มีโลหะหนัก"]],st:[["🔌","Unplug and remove the battery","ถอดปลั๊กและแบตเตอรี่"],["💾","Wipe personal data","ลบข้อมูลส่วนตัว"],["📍","Drop at an e-waste point","นำไปทิ้งที่จุดรับขยะอิเล็กทรอนิกส์"]],c:91},
{k:["หลอดไฟ","ยาหมดอายุ","ยาเก่า","สารเคมี","น้ำยา","สเปรย์","bulb","lamp","medicine","chemical","paint","spray"],b:"hazard",n:["Hazardous item","ขยะอันตราย"],tg:[["Hazardous","อันตราย"],["Handle with care","ระวังเป็นพิเศษ"]],st:[["📦","Keep it in its container","เก็บไว้ในภาชนะเดิม"],["🧤","Handle with care","ระวังแตกหรือรั่ว"],["📍","Take it to a hazard point","นำไปทิ้งที่จุดรับขยะอันตราย"]],c:88}];
const PLACES=[{n:["Pathum Wan District Office","สำนักงานเขตปทุมวัน"],d:7.9},{n:["Chulalongkorn University","จุฬาลงกรณ์มหาวิทยาลัย"],d:7.9},{n:["Lumphini Park","สวนลุมพินี"],d:8.4}];
function demoFind(q){q=q.toLowerCase();let best=null,bl=0;KB.forEach(e=>e.k.forEach(k=>{if(q.includes(k)&&k.length>bl){bl=k.length;best=e}}));return best}
const binSVG=c=>`<svg class="binic" viewBox="0 0 64 84"><rect x="22" y="2" width="20" height="7" rx="3" fill="${c}"/><rect x="4" y="8" width="56" height="9" rx="4" fill="${c}" opacity=".8"/><path d="M8 18h48l-5 62a4 4 0 0 1-4 4H17a4 4 0 0 1-4-4z" fill="${c}"/><text x="32" y="60" text-anchor="middle" font-size="28" fill="rgba(0,0,0,.4)">♻︎</text></svg>`;
let file=null,result=null;
$("#demoA").hidden=!!CFG.analyzeUrl;$("#demoC").hidden=!!CFG.chatUrl;
$("#camBtn").onclick=()=>$("#cam").click();$("#galBtn").onclick=()=>$("#gal").click();
$("#infoBtn").onclick=()=>toast(t("info"));
const updAna=()=>{$("#anaBtn").hidden=!(file||$("#txtIn").value.trim())};
$("#txtIn").oninput=updAna;
[$("#cam"),$("#gal")].forEach(i=>i.onchange=()=>{const f=i.files[0];i.value="";if(!f)return;
 if(!f.type.startsWith("image/"))return toast(t("errA"));
 file=f;result=null;$("#prevImg").src=URL.createObjectURL(f);$("#preview").classList.add("has");
 $("#result").hidden=true;$("#how").hidden=true;updAna()});
$("#anaBtn").onclick=async()=>{const q=$("#txtIn").value.trim();if(!file&&!q)return toast(t("needIn"));
 $("#anaBtn").hidden=true;$("#anaLoad").hidden=false;$("#result").hidden=true;
 try{let r;
  if(CFG.analyzeUrl){const fd=new FormData();if(file)fd.append("image",file);if(q)fd.append("text",q);fd.append("lang",S.lang);
   const res=await fetch(CFG.analyzeUrl,{method:"POST",body:fd});if(!res.ok)throw 0;const j=await res.json();
   r={n:j.name,b:CAT[j.bin]?j.bin:"general",tg:j.tags||[],st:(j.steps||[]).map(x=>typeof x==="string"?["•",x]:[x.icon||"•",x.text]),c:j.confidence}}
  else{await new Promise(r=>setTimeout(r,1200));let e=q?demoFind(q):null;
   if(!e&&q){toast(t("noMatch"));e={...KB[1],n:q,c:50}}
   if(!e)e=KB[Math.floor(Math.random()*KB.length)];
   r={...e,demo:true}}
  result=r;S.scans++;S.eco+=10;save();showResult(r);renderAll()}
 catch(e){toast(t("errA"))}
 $("#anaLoad").hidden=true;updAna()};
function showResult(r){const el=$("#result"),[ic,col]=CAT[r.b];
 const nm=Array.isArray(r.n)?L(r.n):r.n;
 const tags=(r.tg||[]).map(x=>Array.isArray(x)?L(x):x);if(r.demo)tags.push(t("demoTag"));
 const steps=(r.st||[]).map(x=>[x[0],x.length===3?L(x.slice(1)):x[1]]);
 const c=r.c!=null?Math.round(r.c>1?r.c:r.c*100):null;
 const near=r.b==="hazard"?`<div class="near"><b>📍 ${t("nearT")}</b> <small>· ${t("sampleD")}</small>${PLACES.map(p=>`<div class="pl"><div><b>${L(p.n)}</b><small>${p.d} ${t("km")}</small></div><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(L(p.n)+" Bangkok")}" target="_blank" rel="noopener">${t("nav")} ›</a></div>`).join("")}</div>`:"";
 el.innerHTML=`<div class="rcard"><div class="rtop">${binSVG(col)}<div><small>${nm}</small><h3>${t("bn_"+r.b)}</h3><small>${t("bt_"+r.b)}</small></div></div>
 <div class="tgs">${tags.map(x=>`<span>${x}</span>`).join("")}</div>
 <ul class="steps2">${steps.map(x=>`<li><i>${x[0]}</i>${x[1]}</li>`).join("")}</ul>
 ${c!=null?`<div class="cbar"><i style="width:${c}%"></i></div><small>${t("conf")} ${c}%</small>`:""}
 <div class="ra"><button id="rAgain">${t("scanAgain")}</button><button class="sv" id="rSave">${t("saveR")}</button><button id="rMore">${t("learn")}</button></div></div>${near}`;
 el.hidden=false;
 $("#rAgain").onclick=()=>{file=null;result=null;el.hidden=true;$("#txtIn").value="";$("#preview").classList.remove("has");$("#how").hidden=false;updAna()};
 $("#rSave").onclick=()=>{if(r.saved)return;r.saved=true;addHist({k:"scan",n:r.n,c:r.b});save();renderAll();toast(t("saved"))};
 $("#rMore").onclick=()=>modal(`<div style="font-size:54px">${ic}</div><h3>${t("bn_"+r.b)} · ${t("bt_"+r.b)}</h3><p>${t("lm_"+r.b)}</p><button class="btn sec wide" onclick="closeModal()">${t("close")}</button>`)}

/* ---------- Chat ---------- */
function hscroll(el){let d=null;
 el.addEventListener("wheel",e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){el.scrollLeft+=e.deltaY;e.preventDefault()}},{passive:false});
 el.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse")d={x:e.clientX,s:el.scrollLeft,m:false}});
 window.addEventListener("pointermove",e=>{if(d){const dx=e.clientX-d.x;if(Math.abs(dx)>4)d.m=true;el.scrollLeft=d.s-dx}});
 window.addEventListener("pointerup",()=>{if(d)setTimeout(()=>{d=null},0)});
 el.addEventListener("click",e=>{if(d&&d.m){e.stopPropagation();e.preventDefault()}},true)}
hscroll($(".chips"));hscroll($("#filters"));
const msgs=$("#msgs"),scrollMsgs=()=>msgs.scrollTop=msgs.scrollHeight;
function bubble(txt,who){const d=document.createElement("div");d.className="m "+who;d.textContent=txt;msgs.appendChild(d);scrollMsgs();return d}
function resetChat(){msgs.innerHTML="";bubble(t("hello"),"a")}
function demoReply(q){q=q.toLowerCase();const m=r=>r.test(q);
 if(m(/ใจ|เศร้า|เหงา|อกหัก|heart|sad|lonely|broken/))return t("r_feel");
 if(m(/ขอบคุณ|thank/))return t("r_thanks");
 if(m(/ถ่าน|แบต|battery/))return t("r_battery");
 if(m(/อิเล็กทรอนิกส์|e-?waste|electronic|มือถือ|สายชาร์จ|phone|charger|ใกล้|near|จุดทิ้ง|drop/))return t("r_ewaste");
 if(m(/เปลือก|กล้วย|เศษอาหาร|food|peel|banana/))return t("r_wet");
 if(m(/ขวด|bottle/))return t("r_bottle");
 if(m(/รีไซเคิล|recycl/))return t("r_recycle");
 if(m(/แยก|sort|ถัง|bin/))return t("r_sort");
 if(m(/เคล็ด|tip|ลด/))return t("r_tips");
 if(m(/สวัสดี|หวัดดี|hello|hey|^hi/))return t("r_hi");
 return t("r_def")}
let busy=false;
async function sendMsg(q){q=q.trim();if(!q||busy)return;busy=true;bubble(q,"u");$("#chatIn").value="";S.chats++;save();
 const w=bubble("","a");w.innerHTML='<span class="dots"><span></span><span></span><span></span></span>';
 try{let r;
  if(CFG.chatUrl){const res=await fetch(CFG.chatUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:q,lang:S.lang})});if(!res.ok)throw 0;r=(await res.json()).reply}
  else{await new Promise(r=>setTimeout(r,800));r=demoReply(q)}
  w.textContent=r}catch(e){w.textContent=t("errC")}
 busy=false;scrollMsgs();renderAll()}
$("#send").onclick=()=>sendMsg($("#chatIn").value);
$("#chatIn").onkeydown=e=>{if(e.key==="Enter")sendMsg(e.target.value)};
$(".chips").onclick=e=>{const b=e.target.closest("button");if(b)sendMsg(b.textContent)};
$("#newChat").onclick=()=>{resetChat();toast(t("newChat"))};

/* ---------- Game ---------- */
const LV=[40,80,120,150,200],TIME=30;
const ITEMS=[["🧴","Plastic bottle","ขวดพลาสติก","recycle"],["🍌","Banana peel","เปลือกกล้วย","wet"],["🔋","Battery","ถ่านไฟฉาย","hazard"],["🧻","Used tissue","ทิชชู่ใช้แล้ว","general"],
["📦","Cardboard box","ลังกระดาษ","recycle"],["🍎","Apple core","เศษแอปเปิล","wet"],["📱","Old phone","มือถือเก่า","hazard"],["🍿","Snack bag","ซองขนม","general"],
["🍾","Glass bottle","ขวดแก้ว","recycle"],["🥚","Eggshell","เปลือกไข่","wet"],["💡","Light bulb","หลอดไฟ","hazard"],["🥡","Foam box","กล่องโฟม","general"],
["🥫","Metal can","กระป๋องโลหะ","recycle"],["🍂","Dry leaves","ใบไม้แห้ง","wet"],["💊","Expired medicine","ยาหมดอายุ","hazard"],["🪥","Old toothbrush","แปรงสีฟันเก่า","general"],
["📰","Newspaper","หนังสือพิมพ์","recycle"],["🧪","Chemicals","สารเคมี","hazard"]];
const G={t:TIME,score:0,lvl:1,sel:1,ok:0,no:0,run:false,cur:null,tm:null,hit:false,end:false,lives:3,paused:false};
const item=$("#item"),fb=$("#fb"),scene=$("#scene");
const clock=s=>"0"+Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
function hud(){$("#gScore").textContent=G.score;$("#gLvl").textContent=G.end?"∞":G.lvl;
 $("#gTimeL").textContent=G.end?t("lives"):t("timeL");$("#gTime").textContent=G.end?"❤️".repeat(Math.max(G.lives,0)):clock(G.t)}
function renderLevels(){const box=$("#levels");if(!box)return;const el=S.unlocked<5;
 box.innerHTML=LV.map((g,i)=>{const n=i+1,lock=n>S.unlocked;return`<button class="lv ${lock?"lock":""} ${n===G.sel?"sel":""}" data-lv="${n}"><b>${lock?"🔒":n}</b><small>${t("goalL",{n:g})}</small></button>`}).join("")
  +`<button class="lv endless ${el?"lock":""} ${G.sel===0?"sel":""}" data-lv="0"><b>${el?"🔒":"∞"}</b><small>${t("endless")}${S.endBest?" · "+S.endBest:""}</small></button>`;
 $("#startBtn span").textContent=G.sel===0?t("startEnd"):t("startLv",{n:G.sel});$("#bestNum").textContent=S.best;hud()}
$("#levels").addEventListener("click",e=>{const b=e.target.closest("[data-lv]");if(!b)return;const n=+b.dataset.lv;
 if(n===0){if(S.unlocked<5)return toast(t("endLock"))}else if(n>S.unlocked)return toast(t("lvLock",{n:LV[n-2],m:n-1}));
 G.sel=n;renderLevels()});
function showLobby(){if(G.sel>S.unlocked)G.sel=S.unlocked;$("#lobby").hidden=false;$("#play").hidden=true;renderLevels()}
function next(){const pool=ITEMS.slice(0,Math.min(ITEMS.length,8+G.lvl*2));G.cur=pool[Math.floor(Math.random()*pool.length)];
 item.innerHTML=`<span>${G.cur[0]}</span><em>${L(G.cur.slice(1,3))}</em>`;item.style.transform="";item.style.animation="none";void item.offsetWidth;item.style.animation=""}
function stopGame(){clearInterval(G.tm);G.run=false;G.paused=false;$("#pauseBox").hidden=true;item.innerHTML="";showLobby()}
const tick=()=>{if(G.paused)return;G.t--;hud();if(G.t<=0)endGame()};
function startGame(){const en=G.sel===0;Object.assign(G,{t:TIME,score:0,lvl:en?5:G.sel,end:en,lives:3,ok:0,no:0,run:true,hit:false,paused:false});
 hud();ac();$("#lobby").hidden=true;$("#play").hidden=false;$("#pauseBox").hidden=true;fb.className="fb";next();
 clearInterval(G.tm);if(!en)G.tm=setInterval(tick,1000)}
function pauseGame(title){if(!G.run||G.paused)return;G.paused=true;$("#pbT").textContent=title;$("#pauseBox").hidden=false}
function resumeGame(){G.paused=false;$("#pauseBox").hidden=true}
$("#pauseBtn").onclick=()=>pauseGame(t("pause"));$("#quitBtn").onclick=()=>pauseGame(t("leaveQ"));
$("#resumeBtn").onclick=resumeGame;$("#exitBtn").onclick=stopGame;
function endGame(){clearInterval(G.tm);G.run=false;S.games++;
 const lv=G.lvl,fin=G.score,okN=G.ok,noN=G.no,goal=LV[lv-1],win=fin>=goal,rec=fin>S.best;let unl=false;
 if(rec)S.best=fin;if(win&&lv<5&&S.unlocked<lv+1){S.unlocked=lv+1;unl=true}
 addHist({k:"game",n:fin});save();renderAll();(win?SFX.win:SFX.time)();stopGame();
 modal(`<div style="font-size:50px">${win?"🏆":"⏰"}</div><h3>${win?t("win"):t("over")}</h3><small>${t("fin")} · ${t("goalL",{n:goal})}</small><div class="sc">${fin}</div><p>✅ ${t("okN")}: ${okN} · ❌ ${t("noN")}: ${noN}</p>${unl?`<p>🔓 ${t("lvOpen",{n:lv+1})}${lv+1===5?" · ∞ "+t("endless"):""}</p>`:""}
 ${win&&lv<5?`<button class="btn pri wide" id="mNext">${t("next")}</button>`:""}<button class="btn ${win&&lv<5?"sec":"pri"} wide" id="mAgain">${t("again")}</button><button class="btn sec wide" id="mLobby">${t("backLobby")}</button>`);
 if($("#mNext"))$("#mNext").onclick=()=>{closeModal();G.sel=lv+1;startGame()};
 $("#mAgain").onclick=()=>{closeModal();G.sel=lv;startGame()};$("#mLobby").onclick=closeModal}
function endEndless(){clearInterval(G.tm);G.run=false;S.games++;
 const fin=G.score,okN=G.ok,noN=G.no,rec=fin>(S.endBest||0)&&fin>0;if(rec)S.endBest=fin;if(fin>S.best)S.best=fin;
 addHist({k:"game",n:fin});save();renderAll();(rec?SFX.win:SFX.time)();stopGame();
 modal(`<div style="font-size:50px">${rec?"🏆":"💔"}</div><h3>${t("over2")}</h3><small>${t("endBest")}: ${S.endBest||0}</small><div class="sc">${fin}</div><p>✅ ${t("okN")}: ${okN} · ❌ ${t("noN")}: ${noN}</p><button class="btn pri wide" id="mAgain">${t("again")}</button><button class="btn sec wide" id="mLobby">${t("backLobby")}</button>`);
 $("#mAgain").onclick=()=>{closeModal();G.sel=0;startGame()};$("#mLobby").onclick=closeModal}
function answer(bin){if(!G.run||G.paused||!G.cur)return;
 if(bin===G.cur[3]){G.score+=10;G.ok++;S.correct++;SFX.ok();say(true,t("corr"),t("ptsN",{n:10}));save();
  if(!G.end&&!G.hit&&G.score>=LV[G.lvl-1]){G.hit=true;setTimeout(()=>toast(t("goalHit")),700)}}
 else{G.no++;if(G.end)G.lives--;SFX.no();scene.classList.add("shake");setTimeout(()=>scene.classList.remove("shake"),300);
  say(false,t("wrongT"),t("bad",{i:L(G.cur.slice(1,3)),b:t("bn_"+G.cur[3])+" ("+t("bt_"+G.cur[3])+")"}));
  if(G.end&&G.lives<=0){hud();return endEndless()}}
 hud();next()}
let fbT;function say(ok,a,b){fb.innerHTML=`<i>${ok?"✓":"✕"}</i><div><b>${a}</b><small>${b}</small></div>`;fb.className="fb show "+(ok?"ok":"no");clearTimeout(fbT);fbT=setTimeout(()=>fb.classList.remove("show"),2200)}
$("#startBtn").onclick=startGame;
$("#snd").onclick=()=>{S.sound=!S.sound;$("#snd").textContent=S.sound?"🔊":"🔇";save()};
$$(".bin").forEach(b=>b.onclick=()=>answer(b.dataset.bin));
let drag=null;
item.addEventListener("pointerdown",e=>{if(!G.run||G.paused)return;drag={x:e.clientX,y:e.clientY};item.setPointerCapture(e.pointerId)});
item.addEventListener("pointermove",e=>{if(!drag)return;item.style.transform=`translate(${e.clientX-drag.x}px,${e.clientY-drag.y}px)`;
 const b=document.elementsFromPoint(e.clientX,e.clientY).find(x=>x.classList?.contains("bin"));$$(".bin").forEach(x=>x.classList.toggle("hot",x===b))});
item.addEventListener("pointerup",e=>{if(!drag)return;drag=null;
 const b=document.elementsFromPoint(e.clientX,e.clientY).find(x=>x.classList?.contains("bin"));$$(".bin").forEach(x=>x.classList.remove("hot"));
 if(b)answer(b.dataset.bin);else item.style.transform=""});

/* ---------- Init ---------- */
$("#snd").textContent=S.sound?"🔊":"🔇";
resetChat();showLobby();applyLang();