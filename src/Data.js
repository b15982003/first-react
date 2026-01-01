export const itineraryData = [
  // --- 第 1 天 ---
  {
    day: 1,
    title: "2/6 抵達與市區探索",
    items: [
      {
        id: "d1-1",
        time: "08:30",
        place: "桃園國際機場 一航廈",
        note: "訂單編號：FYYKJY，飛機：CI081 中華航空",
        mapUrl: "https://maps.app.goo.gl/j1BFYDiGiGAcbcA28",
        content: [
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/tw_plan.jpg",
            alt: "機場照片",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/ms3BGThLr97rPpXW8",
            label: "第一航廈 map",
          },
          // --- 第一部分：注意事項 ---
          { type: "text", value: "🔴 出發前最後確認：" },
          {
            type: "text",
            value:
              "1. 行動電源、鋰電池、打火機(1個) 務必「隨身攜帶」，不可託運。",
          },
          {
            type: "text",
            value: "2. 液體超過 100ml 必須託運 (包含乳液、牙膏)。",
          },
          {
            type: "text",
            value: "3. 建議起飛前 3 小時抵達，長途航線排隊人潮較多。",
          },

          // --- 第二部分：早餐推薦 ---
          { type: "text", value: "🥐 早餐吃什麼？(建議過安檢前先吃)" },

          {
            type: "text",
            value:
              "【推薦 1】3F 出境大廳 - 摩斯漢堡 (Mos Burger)\n就在報到櫃檯旁，台灣味的最後巡禮，人多但速度快。",
          },

          {
            type: "text",
            value:
              "【推薦 2】B1 新東陽美食街\n如果時間很充裕，B1 有漢堡王、鹽酥雞、滷肉飯，選擇最多。",
          },

          {
            type: "text",
            value:
              "【隱藏版】過安檢後 - 免費貴賓室 (Free Lounge)\n位於出境後 4F (華航/國泰貴賓室旁)，有免費沙發、充電座、淋浴間(需自備毛巾)，適合想省錢休息的人。",
          },
        ],
      },
      {
        id: "d1-2",
        time: "17:05",
        place: "London 倫敦希斯洛機場 (LHR) - T3",
        note: "轉機前往冰島",
        mapUrl: "https://maps.app.goo.gl/uX2G4puBVYG77Krs8",
        content: [
          {
            type: "text",
            value:
              "🔴 轉機最高準則：\n下飛機後，不管誰問什麼，眼睛只找「紫色 Flight Connections (轉機)」指標走。千萬不要跟著黃色 Arrival (入境) 走。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/turn_flight.jpg",
            alt: "認準紫色轉機指標",
          },

          { type: "text", value: "👮‍♀️ 安檢與人員提問攻略：" },
          {
            type: "text",
            value: "遇到安檢人員或地勤時，保持鎮定，簡單回答即可：",
          },
          {
            type: "text",
            value:
              "Q: Where is your final destination? (終點去哪？)\nA: Iceland. (冰島)",
          },
          {
            type: "text",
            value:
              "Q: Any liquids or laptops? (有液體或筆電嗎？)\nA: Yes, in my bag. (有的，在包包裡) \n*T3 目前多為新機器不需取出，但請聽現場指令。",
          },

          {
            type: "text",
            value:
              "🚌 航廈確認：\n請抬頭看電子大螢幕，確認你的下一班飛機在 T2、T3 還是 T5。\n- 若在 T3：直接過安檢去登機門。\n- 若在 T2/T5：跟著指標去搭接駁車 (Transfer Bus)。",
          },
        ],
      },
      {
        id: "d1-3",
        time: "20:40",
        place: "London 倫敦希斯洛機場 (LHR ✈️ KEF)",
        note: "訂單編號：BEZMGQ，飛機：FI455 Icelandair",
        mapUrl: "https://maps.app.goo.gl/uX2G4puBVYG77Krs8",
        content: [
          { type: "text", value: "🛫 登機與飛行：" },
          {
            type: "text",
            value:
              "這段航程約 3 小時。建議在飛機上先換好網卡（如果是實體卡），這樣一下飛機就有網路可用。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/icelandair.jpg",
            alt: "飛往冰島的機翼視角",
          },
          { type: "text", value: "💡 抵達前的小撇步：" },
          {
            type: "text",
            value:
              "1. 酒精飲料：如果你們有打算在冰島喝酒，強烈建議在「Keflavík 機場的入境免稅店」購買。冰島市區酒稅極高，機場買大約是市區的 5-6 折！",
          },
          {
            type: "text",
            value:
              "2. 下載離線地圖：利用機上時間確認 Google Map 離線地圖已下載完成（包含雷克雅維克與南部海岸）。",
          },

          {
            type: "text",
            value:
              "👀 注意窗外：\n如果運氣好且天氣晴朗，快抵達冰島時往窗外看，有機會看到極光或壯觀的冰河地形！",
          },
        ],
      },
      {
        id: "d1-4",
        time: "23:55",
        place: "雷恰內斯拜爾 Keflavík",
        note: "抵達冰島 凱夫拉維克國際機場",
        mapUrl: "https://maps.app.goo.gl/uRi8nQg6yNeLc1SG6",
        content: [
          { type: "text", value: "租車 00:00" },
          { type: "text", value: "民宿 Hótel Heiðmörk" },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/first_hotel.png",
            alt: "Hótel Heiðmörk",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/fLMG1dXgXpaRpxVt5",
            label: "🏨 導航去民宿",
          },
        ],
      },
    ],
  },

  // --- 第 2 天 ---
  {
    day: 2,
    title: "抵達與市區探索",
    items: [
      {
        id: "d1-1",
        time: "10:00",
        place: "倫敦希斯洛機場",
        note: "或是你的抵達機場",
        mapUrl: "https://goo.gl/maps/example1",
        // 🔥 這裡改成了 content 陣列，可以放多張圖、多段字
        content: [
          {
            type: "text",
            value:
              "抵達倫敦後，首先要通過海關。記得準備好護照與回程機票證明，海關人員可能會詢問停留天數。",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1542296332-2e44a996aa0b?auto=format&fit=crop&w=600&q=80",
            alt: "機場照片",
          },
          {
            type: "text",
            value:
              "領完行李後，建議直接在機場購買 Oyster Card (牡蠣卡) 或是使用感應式信用卡搭乘地鐵 (Piccadilly Line) 前往市區，車程約 50 分鐘。",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=600&q=80",
            alt: "倫敦地鐵",
          },
          {
            type: "text",
            value:
              "如果不趕時間，也可以選擇搭乘 Heathrow Express 機場快線，雖然比較貴但只要 15 分鐘就能到 Paddington 車站。",
          },
        ],
      },
      {
        id: "d1-2",
        time: "14:00",
        place: "飯店 Check-in",
        note: "先放行李",
        mapUrl: "",
        content: [
          { type: "text", value: "先到飯店辦理入住手續，放下沈重的行李。" },
          // 甚至可以放一些房間的照片
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
            alt: "飯店大廳",
          },
        ],
      },
      {
        id: "d1-3",
        time: "16:00",
        place: "波羅市場 (Borough Market)",
        note: "吃晚餐的好地方",
        mapUrl: "https://goo.gl/maps/example2",
        content: [
          { type: "text", value: "倫敦最古老的市場之一，這裡是美食天堂！" },
          {
            type: "text",
            value:
              "必吃推薦：Richard Haward's Oysters (生蠔)、Paella (西班牙燉飯)。",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1515516901840-058a7a4f1832?auto=format&fit=crop&w=600&q=80",
            alt: "波羅市場美食",
          },
        ],
      },
    ],
  },

  // --- 第 3 天 (範本) ---
  {
    day: 3,
    title: "抵達與市區探索",
    items: [
      {
        id: "d1-1",
        time: "10:00",
        place: "倫敦希斯洛機場",
        note: "或是你的抵達機場",
        mapUrl: "https://goo.gl/maps/example1",
        // 🔥 這裡改成了 content 陣列，可以放多張圖、多段字
        content: [
          {
            type: "text",
            value:
              "抵達倫敦後，首先要通過海關。記得準備好護照與回程機票證明，海關人員可能會詢問停留天數。",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1542296332-2e44a996aa0b?auto=format&fit=crop&w=600&q=80",
            alt: "機場照片",
          },
          {
            type: "text",
            value:
              "領完行李後，建議直接在機場購買 Oyster Card (牡蠣卡) 或是使用感應式信用卡搭乘地鐵 (Piccadilly Line) 前往市區，車程約 50 分鐘。",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=600&q=80",
            alt: "倫敦地鐵",
          },
          {
            type: "text",
            value:
              "如果不趕時間，也可以選擇搭乘 Heathrow Express 機場快線，雖然比較貴但只要 15 分鐘就能到 Paddington 車站。",
          },
        ],
      },
      {
        id: "d1-2",
        time: "14:00",
        place: "飯店 Check-in",
        note: "先放行李",
        mapUrl: "",
        content: [
          { type: "text", value: "先到飯店辦理入住手續，放下沈重的行李。" },
          // 甚至可以放一些房間的照片
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
            alt: "飯店大廳",
          },
        ],
      },
      {
        id: "d1-3",
        time: "16:00",
        place: "波羅市場 (Borough Market)",
        note: "吃晚餐的好地方",
        mapUrl: "https://goo.gl/maps/example2",
        content: [
          { type: "text", value: "倫敦最古老的市場之一，這裡是美食天堂！" },
          {
            type: "text",
            value:
              "必吃推薦：Richard Haward's Oysters (生蠔)、Paella (西班牙燉飯)。",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1515516901840-058a7a4f1832?auto=format&fit=crop&w=600&q=80",
            alt: "波羅市場美食",
          },
        ],
      },
    ],
  },

  // --- 第 4 天 (範本) ---
  {
    day: 4,
    title: "第 4 天標題",
    items: [
      {
        id: "d4-1",
        time: "09:00",
        place: "地點...",
        note: "備註",
        description: "...",
        mapUrl: "",
      },
    ],
  },

  // --- 第 5 天 ---
  { day: 5, title: "第 5 天標題", items: [] },
  // --- 第 6 天 ---
  { day: 6, title: "第 6 天標題", items: [] },
  // --- 第 7 天 ---
  { day: 7, title: "第 7 天標題", items: [] },
  // --- 第 8 天 ---
  { day: 8, title: "第 8 天標題", items: [] },
  // --- 第 9 天 ---
  { day: 9, title: "第 9 天標題", items: [] },
  // --- 第 10 天 ---
  { day: 10, title: "第 10 天標題", items: [] },
];
