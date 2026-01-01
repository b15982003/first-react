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
    title: "2/7 溫泉 + 雷克雅維克市區",
    items: [
      {
        id: "d2-1",
        time: "10:00",
        place: "Sky Lagoon 天空之湖",
        note: "冰島最新無邊際溫泉",
        mapUrl: "https://maps.app.goo.gl/BYtrKM5shUXETcKQ7",
        content: [
          {
            type: "text",
            value: "🌟 需帶物品: 帶毛巾、泳衣、拖鞋 防水手機套 盥洗用具",
          },
          { type: "text", value: "🌟 冰島必體驗的「七步儀式 (The Ritual)」：" },
          {
            type: "text",
            value:
              "這是 Sky Lagoon 最著名的特色，門票已包含，進場後請務必按照順序體驗一次！",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/sky_land.jpg",
            alt: "Sky Lagoon 無邊際美景",
          },
          {
            type: "text",
            value:
              "1. Lagoon：先在溫泉放鬆暖身。\n 2. Cold Plunge：跳進 10°C 冷水池 (超冷但能收縮毛孔)。\n3. Sauna：面對大海的桑拿房，視野絕佳。\n4. Cold Mist：走進冷霧室降溫。\n5. Sky Body Scrub：用提供的海鹽磨砂膏去角質。\n6. Steam：蒸氣室幫助吸收精華。\n7. Shower & Elixir：沖洗乾淨，結束儀式。",
          },
          { type: "text", value: "⚠️ 注意事項：" },
          {
            type: "text",
            value:
              "● 手機防水袋：雖然這裡不像藍湖那麼傷手機，但水氣很重，想拍照一定要帶防水袋。",
          },
          {
            type: "text",
            value:
              "● 信用卡手環：入場會發手環，可用來開關置物櫃與買飲料（綁定信用卡），不需要帶錢包下水。",
          },
          {
            type: "text",
            value: "● 泳衣：這裡沒有租借泳衣的服務（或者很貴），請務必自備。",
          },
          {
            type: "text",
            value:
              "● 12歲以下禁止入場：Sky Lagoon 定位是成人放鬆場所，如果有小孩要注意規定。",
          },
        ],
      },
      {
        id: "d2-2",
        time: "13:00",
        place: "Icelandic Street Food （午餐）",
        note: "高CP值！羊肉湯無限續碗",
        mapUrl: "https://maps.app.goo.gl/znzh6VDW46j5jmqz7",
        content: [
          {
            type: "text",
            value:
              "這是冰島最佛心的餐廳之一，主打傳統家常菜。店面不大但氣氛非常溫馨，老闆經常會請客人吃免費的甜點。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/iceland_street_food.jpg",
            alt: "招牌麵包湯",
          },

          { type: "text", value: "🥘 必點三寶 (Menu Highlights)：" },
          {
            type: "text",
            value:
              "1. 傳統羊肉湯 (Lamb Soup)：\n冰島國菜！用大量蔬菜與羊肉燉煮，沒有羊騷味，非常暖胃。",
          },
          {
            type: "text",
            value:
              "2. 海鮮湯 (Shellfish Soup)：\n奶油湯底，喝起來像龍蝦湯，裡面有干貝和蝦子，口味較濃郁。",
          },
          {
            type: "text",
            value:
              "3. 漁夫料理 (Fisherman's Favorite / Plokkfiskur)：\n這不是湯，是「魚泥燉馬鈴薯」，口感像馬鈴薯泥但充滿鱈魚鮮味，配上黑裸麥麵包 (Rye Bread) 超好吃！",
          },

          { type: "text", value: "💡 內行吃法攻略：" },
          {
            type: "text",
            value:
              "● 麵包碗 vs 普通碗：\n食量大的人點「麵包碗 (Bread Bowl)」，湯喝完可以把碗（麵包）吃掉。\n只想喝湯的人點「普通碗」，比較便宜且不會太撐。",
          },
          {
            type: "text",
            value:
              '● 無限續碗 (Free Refills)：\n這是重點！喝完第一碗後，可以直接拿著空碗去櫃檯說 "Refill please"。你可以換口味！例如第一碗喝羊肉，第二碗續海鮮。',
          },
          {
            type: "text",
            value:
              "● 免費甜點：\n櫃檯通常有放免費的「布朗尼」或「鬆餅」可以自取，別客氣！",
          },
        ],
      },
      {
        id: "d2-3",
        time: "15:00",
        place: "逛市區 (小逛)",
        note: "隨便逛逛",
        mapUrl: "https://goo.gl/maps/example2",
        content: [],
      },
      {
        id: "d2-4",
        time: "15:30",
        place: "Costco & 小豬超市",
        note: "採買",
        mapUrl: "https://maps.app.goo.gl/taPYwREtbRJhdj1J8",
        content: [],
      },
      {
        id: "d2-5",
        time: "16:00",
        place: "Gesthús Selfoss 住宿",
        note: "前往住宿",
        mapUrl: "https://maps.app.goo.gl/GgPCLWVgYWxB3RNB6",
        content: [
          {
            type: "text",
            value:
              "位於 Selfoss 市中心的獨棟小木屋，是今晚的落腳處。這裡最大的優點是有廚房可以自己煮晚餐，省錢又溫馨！",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/second_hotel.jpg",
            alt: "Gesthús Selfoss 小木屋外觀",
          },

          { type: "text", value: "⚠️ 入住注意事項 (Check-in Note)：" },
          {
            type: "text",
            value:
              "1. 櫃檯非 24 小時：若預計超過 20:00 抵達，請務必查看 Email 或提前聯繫旅館取得「鑰匙盒密碼」。",
          },
          {
            type: "text",
            value:
              "2. 硫磺水：熱水有地熱味是正常的，請勿飲用熱水；冷水可直接生飲。",
          },

          { type: "text", value: "🛁 設施使用：" },
          {
            type: "text",
            value:
              "● 公共熱水池 (Hot Tubs)：\n開放時間約 17:00-23:00 (依現場公告)。記得帶泳衣，運氣好可以邊泡湯邊看極光！",
          },
          {
            type: "text",
            value: "● 廚房：\n房內有電磁爐與鍋具。記得自備油、鹽與食材。",
          },

          { type: "text", value: "🛒 周邊補給：" },
          {
            type: "text",
            value:
              "超市 Kronan 和 Bonus 就在附近 (開車 2 分鐘)。建議先去買明天的早餐和今晚的食材。",
          },
        ],
      },
      {
        id: "d2-6",
        time: "19:00",
        place: "晚餐自煮",
        note: "吃晚餐",
        mapUrl: "",
        content: [],
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
