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
            url: "https://maps.app.goo.gl/ChpsG1fjpNcb3g328",
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
        id: "toilet",
        time: "00:00",
        place: "冰島廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://maps.app.goo.gl/LxGK8ATzwSxNdiS18?g_st=il",
        content: [],
      },
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
        place: "Costco & 小豬超市(3 日份）",
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

  // --- 第 3 天 ---
  {
    day: 3,
    title: "2/8 火口湖 + 國家公園 + 小鎮",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "冰島廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://maps.app.goo.gl/LxGK8ATzwSxNdiS18?g_st=il",
        content: [],
      },
      {
        id: "d3-1",
        time: "09:00",
        place: "Kerið 火口湖",
        note: "紅土與藍綠湖水的視覺衝擊",
        mapUrl: "https://maps.app.goo.gl/ooXtdcx18YFa3KuNA",
        content: [
          {
            type: "text",
            value:
              "這是冰島「黃金圈」路線上最特別的景點之一。不同於一般的灰色火山岩，Kerið 擁有獨特的紅色火山岩壁，搭配底部深藍綠色的湖水，視覺對比非常強烈！",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/keri.png",
            alt: "Kerið 火口湖全景",
          },

          { type: "text", value: "🌋 景點歷史與地質小教室：" },
          {
            type: "text",
            value: "● 形成時間：約 6,500 年前（以火山來說非常年輕）。",
          },
          {
            type: "text",
            value:
              "● 形成原因：大多數火口湖是「火山爆發」炸出來的，但 Kerið 被認為是火山噴發後，內部的岩漿庫被掏空，導致頂部「向內塌陷」而形成的，所以保留了非常完整的圓形火山口。",
          },
          {
            type: "text",
            value:
              "● 顏色秘密：湖水呈現不透明的藍綠色 (Aquamarine)，是因為溶解了土壤中的礦物質，且水源來自地下水而非雨水。",
          },

          { type: "text", value: "⚠️ 參觀注意事項 (Precautions)：" },
          {
            type: "text",
            value:
              "1. 需付門票費：\n這是在私人土地上，是冰島少數「需要收費」的自然景點。每人約 400-500 ISK (現場刷卡即可)。",
          },
          {
            type: "text",
            value:
              "2. 沒有廁所：\n這裡「完全沒有廁所」！請務必在飯店或經過加油站時先解決，下一個有廁所的點要到 Geysir 間歇泉。",
          },
          {
            type: "text",
            value:
              "3. 走路小心：\n您可以沿著火山口上緣走一圈，也可以走樓梯下到湖邊。但坡度較陡，風大時請站穩，冬天步道結冰時務必穿冰爪。",
          },
        ],
      },
      {
        id: "d3-2",
        time: "11:00",
        place: "Thingvellir National Park (辛格韋德利國家公園)",
        note: "UNESCO 世界遺產 / 權力遊戲取景地",
        mapUrl: "https://maps.app.goo.gl/j4BdZnkZhwWqW3AE9",
        content: [
          {
            type: "text",
            value:
              "這裡是黃金圈的核心，也是冰島最神聖的地方。你將行走在「北美板塊」與「歐亞板塊」正在分離的裂谷 (Almannagjá) 中，親眼見證地球擴張的痕跡（每年分開約 2 公分）。",
          },
          {
            type: "text",
            value:
              "知名美劇《權力遊戲 Game of Thrones》通往鷹巢城的血門 (Bloody Gate) 也是在此取景！",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/tr_na_park.jpg",
            alt: "行走在兩大板塊裂縫之間",
          },

          { type: "text", value: "📜 歷史與文化地位：" },
          {
            type: "text",
            value:
              "● 世界上最古老的議會：\n西元 930 年，冰島人在這裡成立了議會 (Althingi)，是世界上現存最古老的民主議會發源地。直到 1798 年前，冰島人都會聚集在此制定法律、解決糾紛。",
          },
          {
            type: "text",
            value:
              "● 法律石 (Lögberg)：\n公園內插著冰島國旗的地方，就是當年的「法律石」。當時的法律演講人會站在這裡，大聲宣讀法律條文給群眾聽。",
          },

          { type: "text", value: "🚶 必走路線推薦：" },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/flow_1.jpg",
            alt: "Öxarárfoss 瀑布",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/CtrKVmCSkGQYhmDBA",
            label: "導航去 Öxarárfoss 瀑布",
          },
          {
            type: "text",
            value:
              "建議將車停在 P1 停車場 (遊客中心)，從觀景台俯瞰整個平原，然後沿著裂谷步道往下走，經過法律石，最後走到 Öxarárfoss 瀑布（來回約 1.5 - 2 小時）。",
          },

          { type: "text", value: "⚠️ 必讀注意事項 (Precautions)：" },
          {
            type: "text",
            value:
              "1. 停車費 (必繳)：\n這裡的停車場 (P1, P2, P5) 都要收費！停好車後請立刻去機器繳費或下載 Parka App 線上繳費 (輸入車號)。經常有人巡邏開單，罰款很重。",
          },
          {
            type: "text",
            value:
              "2. 付費廁所：\n遊客中心的廁所是需要付費刷卡的 (約 200 ISK)。",
          },
          {
            type: "text",
            value:
              "3. 禁飛空拍機：\n為了保護生態與遊客安全，國家公園核心區域通常禁止使用空拍機（除非有申請許可）。",
          },
          {
            type: "text",
            value:
              "4. 風口效應：\n走在板塊裂縫中，風勢會被地形壓縮增強，體感溫度會比外面更低，帽子手套要戴好。",
          },

          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/aZFxV5cq5rU32Q3y6",
            label: "🅿️ 導航去 P1 停車場 (視野最好)",
          },
        ],
      },
      {
        id: "d3-3",
        time: "12:00",
        place: "午餐：前一天小豬超市購買",
        note: "",
        mapUrl: "https://goo.gl/maps/example2",
        content: [],
      },
      {
        id: "d3-4",
        time: "14:00",
        place: "小鎮逛逛：Selfoss",
        note: "探訪全新打造的「舊乳品廠」市中心",
        mapUrl: "https://maps.app.goo.gl/5NNfi7Un1r5xSQPS9",
        content: [
          {
            type: "text",
            value:
              "Selfoss 是冰島南部的補給重鎮。近年來這裡重新打造了「新市中心 (Miðbær Selfoss)」，將色彩繽紛的歷史建築復刻重建，是現在冰島網美最愛的打卡點之一！",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/selfoss_center.jpg",
            alt: "色彩繽紛的 Selfoss 新市中心",
          },

          { type: "text", value: "🏘️ 逛街與美食亮點：" },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/milk_factory.webp",
            alt: "舊乳品廠",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/xbXhbU21kexNwhAKA",
            label: "導航去 Mjólkurbúið",
          },
          {
            type: "text",
            value:
              "1. 舊乳品廠美食街 (Mjólkurbúið Mathöll)：\n必去！這棟橘色的顯眼建築以前是乳製品工廠，現在變成了超時尚的美食廣場。裡面有 8 間餐廳（漢堡、塔可、義大利麵都有）和酒吧，氣氛極佳，非常適合晚餐。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/bakery.jpg",
            alt: "Kökulist 麵包店",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/w7TT9S6NaSeRRgKL8",
            label: "導航去 Kökulist 麵包店",
          },
          {
            type: "text",
            value:
              "2. Kökulist 麵包店：\n當地非常有名的烘焙坊，推薦他們的巨大肉桂捲 (Snúður) 和傳統糕點，適合買來當明天的車上點心。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/sweater.png",
            alt: "毛衣店",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/cjM9HdcgDBQJBZso7",
            label: "導航去 毛衣店",
          },
          {
            type: "text",
            value:
              "3. 冰島毛衣店 (Handknitting Association)：\n如果你想買正宗的冰島羊毛衣 (Lopapeysa) 但沒在雷克雅維克買到，這裡也有一間分店，由當地奶奶手織，品質保證。",
          },

          { type: "text", value: "🛒 最後補給警告 (Important)：" },
          {
            type: "text",
            value:
              "離開 Selfoss 往東走（前往維克、冰河湖方向）之後，大型超市會變得非常少且貴。強烈建議在這裡的 Kronan 或 Bonus 把未來 2-3 天的零食、水、食材一次買齊。",
          },
        ],
      },
      {
        id: "d3-5",
        time: "17:00",
        place: "Gesthús Selfoss 住宿",
        note: "前往住宿",
        mapUrl: "https://maps.app.goo.gl/rEyZNKHNdDHHXkjr8",
        content: [
          {
            type: "text",
            value:
              "今晚繼續住在這間溫馨的小木屋。連泊最大的好處就是不用每天「打包行李」，今晚可以好好放鬆，把這裡當成自己在冰島的家。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hot_spring.jpg",
            alt: "民宿的公共熱水池",
          },

          { type: "text", value: "🏡 連泊之夜建議行程：" },
          {
            type: "text",
            value:
              "1. 自煮大餐 (Cooking)：\n既然剛剛在 Selfoss 市區超市買好食材了，今晚就在小木屋廚房煎牛排、煮火鍋吧！比去外面餐廳吃動輒 3-4000 台幣划算太多。",
          },
          {
            type: "text",
            value:
              "2. 戶外熱水池 (Hot Tub)：\n如果昨天太累沒泡到，今天一定要去試試！在 0 度的氣溫下泡在 40 度的熱水裡，運氣好抬頭還能看到星星或極光，是人生一大享受。",
          },
          {
            type: "text",
            value:
              "3. 洗衣時間 (Laundry)：\n行程來到第三天，如果貼身衣物帶不夠，可以利用公共區域的付費洗衣機/烘衣機把衣服洗起來。",
          },

          { type: "text", value: "🌌 極光觀測提醒：" },
          {
            type: "text",
            value:
              "雖然 Selfoss 有一點光害，但這間民宿位於城鎮邊緣樹林旁，光害相對較低。如果極光預測 APP 顯示 KP 值 > 3，記得走出屋外看看天空！",
          },
        ],
      },
      {
        id: "d3-6",
        time: "18:00",
        place: "晚餐自煮或是鎮上餐廳",
        note: "",
        mapUrl: "https://goo.gl/maps/example2",
        content: [],
      },
      {
        id: "d3-7",
        time: "19:00",
        place: "N1 加油",
        note: "",
        mapUrl: "https://maps.app.goo.gl/W1uiiKYDmjDRK142A",
        content: [
          {
            type: "text",
            value:
              "冰島加油站（如 N1、Olís）多數採「自助式」且無人值守。這不僅是補給燃料，更是體驗冰島公路旅行的一環。以下是操作流程與千萬要注意的陷阱。",
          },
          { type: "text", value: "⛽ 自助加油標準流程：" },
          {
            type: "text",
            value:
              "1. 插入信用卡 \n2. 輸入 4 位數 PIN 碼 (必備!) \n3. 選擇「固定金額」 (關鍵步驟) \n4. 輸入油槍號碼 \n5. 提槍加油 \n6. 若需收據通常需再次插卡",
          },
          { type: "text", value: "⚠️ 三大保命注意事項：" },
          {
            type: "text",
            value:
              "1. 勿選「加滿 (Fill Up/Full Tank)」：\n選加滿會被機器圈存高額預授權金 (約台幣 5000-7000 元)，解凍退款需數天到一週。建議選擇「固定金額」(如 5000 kr)，加不完只會扣實際金額，不會吃虧。",
          },
          {
            type: "text",
            value:
              "2. 必備 4 位數 PIN 碼：\n冰島無人機器強制要求輸入 PIN。出發前請務必向銀行開通「預借現金密碼」(4碼)。若無 PIN 碼，只能改用 Apple Pay (部分機器支援) 或至商店購買 N1 預付卡 (Prepaid Card)。",
          },
          {
            type: "text",
            value:
              "3. 認明油槍顏色：\n⚫ 黑色 = 柴油 (Diesel)\n🟢 綠色 = 95 汽油 (Bensín)\n千萬別只看顏色，務必核對文字，加錯油會導致引擎報銷且保險不理賠！",
          },
          { type: "text", value: "💡 省錢小撇步：" },
          {
            type: "text",
            value:
              "檢查租車鑰匙上有沒有掛著加油站的「感應扣 (Fob)」。操作時先拿感應扣在機器上嗶一下，再插信用卡，通常每公升能省 3 ISK 左右喔！",
          },
        ],
      },
    ],
  },
  // --- 第 4 天 ---
  {
    day: 4,
    title: "2/9 黃金圈",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "冰島廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://maps.app.goo.gl/LxGK8ATzwSxNdiS18?g_st=il",
        content: [],
      },
      {
        id: "d4-1",
        time: "09:00",
        place: "Brúarfoss 蒂芬妮藍瀑布",
        note: "冰島最藍的瀑布 / 新開放捷徑",
        mapUrl: "https://maps.app.goo.gl/XFVW3v7qNHeEm3jw5",
        content: [
          {
            type: "text",
            value:
              "Brúarfoss 被稱為「冰島最藍的瀑布」。水源來自 Langjökull 冰川，因為水中懸浮著細微的火山礦物質與冰川沉積物，讓水流呈現出夢幻的乳藍色 (Milky Blue)。",
          },
          {
            type: "text",
            value:
              "它的形狀不是垂直落下，而是像馬蹄形一樣匯聚，水流在中間形成白色的漩渦，非常迷人。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/flow_5.jpg",
            alt: "擁有 Tiffany 藍水色的 Brúarfoss",
          },

          { type: "text", value: "🚗 交通大解密 (重要！)：" },
          {
            type: "text",
            value:
              "以前這裡被稱為「秘境」，是因為要徒步來回 2-3 小時。但現在「不需要」了！\n請務必導航到新的官方停車場 (Brúarfoss Parking)，停好車後沿著平坦的步道走 5 分鐘，就能直接看到瀑布與木橋。",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/yL55AF3Q34PKwdA18",
            label: "導航去 官方停車場",
          },

          { type: "text", value: "📜 名字由來：" },
          {
            type: "text",
            value:
              "Brú 意思是「橋」，Foss 是「瀑布」。相傳古代這裡有一座天然石拱橋，但在 16 世紀時，一位管家為了阻止乞丐進入附近富裕的教區，下令把石橋打斷，因此得名。",
          },

          { type: "text", value: "⚠️ 參觀注意事項：" },
          {
            type: "text",
            value:
              "1. 停車費：\n新停車場需要收費 (約 750 ISK)，請使用 Parka App 或現場掃描 QR Code 付款。",
          },
          {
            type: "text",
            value:
              "2. 鐵橋拍照：\n最佳拍攝點就是橫跨瀑布的那座木橋。但橋面通常濕滑（冬天會結冰），請務必抓好扶手，手機也要拿穩，掉下去就撿不回來了。",
          },
          {
            type: "text",
            value:
              "3. 冰爪 (Crampons)：\n雖然路程變短了，但冬天步道依然會積雪結冰，建議穿著簡易冰爪比較安全。",
          },
        ],
      },
      {
        id: "d4-2",
        time: "10:00",
        place: "Gullfoss 黃金瀑布",
        note: "冰島最壯觀雙層瀑布 / 必喝羊肉湯 (二十分鐘車程)",
        mapUrl: "https://maps.app.goo.gl/hX1YZPes2YocSb356",
        content: [
          {
            type: "text",
            value:
              "Gullfoss 意為「金色的瀑布」。它的特徵是分為兩層（上層 11 公尺，下層 21 公尺），最後以 90 度角垂直衝入狹窄的古佛斯峽谷中。水量豐沛時激起的水霧，在陽光照射下經常出現巨大的彩虹，這就是「黃金」之名的由來。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/flow_6.jpg",
            alt: "氣勢磅礡的雙層黃金瀑布",
          },

          { type: "text", value: "👩‍🌾 傳奇歷史：一位女子救了瀑布" },
          {
            type: "text",
            value:
              "20 世紀初，外國投資客想買下這裡蓋水力發電廠。地主的女兒 Sigríður Tómasdóttir 為了保護這片美景，不惜赤腳徒步走到雷克雅維克抗議，甚至揚言跳入瀑布以死明志。最終她成功保住了瀑布，被視為冰島第一位環境保護者。",
          },

          { type: "text", value: "📸 觀賞攻略 (Viewpoints)：" },
          {
            type: "text",
            value:
              "這裡有上下兩個觀景台：\n1. 上層觀景台 (Upper Deck)：就在停車場旁，可以俯瞰整個瀑布與峽谷的壯闊全景，視野最好。\n2. 下層步道 (Lower Path)：可以走到瀑布邊緣感受水氣。⚠️ 注意：冬天 (11月-3月) 因為步道結冰太危險，通往下層的路通常會「封閉」，請勿跨越圍欄。",
          },

          { type: "text", value: "🥶 參觀注意事項：" },
          {
            type: "text",
            value:
              "1. 風超級大：\n這裡是著名的風口，體感溫度會比平地低很多，帽子、圍巾、手套一定要戴好，手機也要拿穩。",
          },
          {
            type: "text",
            value:
              "2. 冰爪必備：\n從停車場走到觀景台的路面非常容易結冰，穿冰爪走起來會輕鬆安全很多。",
          },
          {
            type: "text",
            value:
              "3. 廁所與付費：\n雖然瀑布免費，但遊客中心 (Gullfoss Cafe) 的廁所是「付費」的 (刷卡)。",
          },

          {
            type: "text",
            value:
              "🍲 美食推薦：\n如果逛完覺得冷，旁邊的 Gullfoss Cafe 有賣非常好喝的「傳統羊肉湯 (Kjötsúpa)」，料多實在，喝一碗全身都會暖起來！",
          },
        ],
      },
      {
        id: "d4-3",
        time: "12:00",
        place: "Strokkur 間歇泉 (Geysir 地熱區)",
        note: "每 8-10 分鐘噴發一次 / 英文 Geyser 的發源地",
        mapUrl: "https://maps.app.goo.gl/VyeWxDH1mDaSqzZH9",
        content: [
          {
            type: "text",
            value:
              "這裡不僅能看到著名的間歇泉噴發，更是英語單字「Geyser (間歇泉)」的語源地（源自冰島語 Geysir）。雖然老大哥「Great Geysir」已經休眠，但旁邊的小老弟「Strokkur」非常盡責，每隔 6-10 分鐘就會噴發一次，水柱高達 15-20 公尺，絕不讓遊客失望。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/up_flow_7.jpg",
            alt: "Strokkur 間歇泉噴發瞬間",
          },

          { type: "text", value: "📸 拍攝攻略 (Pro Tips)：" },
          {
            type: "text",
            value:
              "1. 泡泡出現就要按：\n噴發前，出水口的水會忽上忽下，當看見一個巨大的「藍色水泡 (Blue Bubble)」隆起時，那就是要噴發了！請按住手機的「連拍模式 (Burst)」不要放。",
          },
          {
            type: "text",
            value:
              "2. 準備錄影：\n如果不想賭運氣，架好腳架或手持錄影，通常等待時間不會超過 10 分鐘。",
          },

          { type: "text", value: "⚠️ 安全警告 (Safety First)：" },
          {
            type: "text",
            value:
              "1. 絕對注意風向！\n圍觀時請一定要站在「上風處」。如果你站在下風處，噴發下來的熱水和蒸汽會瞬間把你淋濕，且水溫很高（約 80-100度），非常危險且狼狽。",
          },
          {
            type: "text",
            value:
              "2. 地面結冰：\n噴泉周圍的水氣落地後，在冬天會瞬間結成「薄冰」。這一區非常滑，走路請像企鵝一樣小步走，或穿上冰爪。",
          },
          {
            type: "text",
            value:
              "3. 勿觸摸水流：\n流經步道旁的小溪流看起來很像溫泉，但其實溫度極高，請勿用手試水溫。",
          },

          { type: "text", value: "🍔 吃喝逛街 (Geysir Center)：" },
          {
            type: "text",
            value:
              "對面的遊客中心 (Geysir Center) 是黃金圈最大的休息站。裡面有：\n● 餐廳：提供披薩、漢堡、傳統羊肉湯等，選擇比 Gullfoss 多。\n● 紀念品店：這裡的冰島羊毛衣 (66 North, Icewear) 和紀念品款式非常齊全，很好逛！",
          },
        ],
      },
      {
        id: "d4-4",
        time: "12:00",
        place: "午餐: Geysir Glima restaurant",
        note: "還在找",
        mapUrl: "https://maps.app.goo.gl/SyBjpfqbbQi3ckrL7",
        content: [
          {
            type: "text",
            value:
              "參觀完壯觀的 Strokkur 間歇泉後，這間位於 Geysir Center 內的餐廳是最佳的休息站。它採用 Bistro (小酒館) 風格，提供道地的冰島料理與舒適的落地窗景。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/rest_4.jpg",
            alt: "Geysir Glima 餐廳內部與景觀",
          },
          { type: "text", value: "🍽️ 餐廳特色與推薦美食：" },
          {
            type: "text",
            value:
              "1. 必點湯品 (Must Try)：\n這裡最出名的是「傳統羊肉湯 (Kjötsúpa)」與「海鮮魚湯」。遊客評價湯品料多實在，在寒風中看完間歇泉後，來一碗熱湯是絕佳享受。",
          },
          {
            type: "text",
            value:
              "2. 冰島傳統風格：\nGlíma 是冰島傳統「摔跤」運動的名字。餐廳內展示了相關的歷史照片與獎盃，充滿濃厚的冰島文化氛圍。",
          },
          {
            type: "text",
            value:
              "3. 景觀座位：\n運氣好的話可以坐在靠窗位置，邊享用午餐，邊欣賞窗外每幾分鐘就噴發一次的間歇泉美景。",
          },
          { type: "text", value: "⚠️ 用餐注意事項：" },
          {
            type: "text",
            value:
              "1. 點餐方式 (Canteen Style)：\n這裡是採「自助式食堂」模式。你需要先在櫃台排隊點餐、結帳，然後自己端盤子找位子。尖峰時段人潮眾多，建議避開正午 12:00-13:00。",
          },
          {
            type: "text",
            value:
              "2. 價格提醒 (Price)：\n身為黃金圈核心景點，價格偏「觀光客價」。主餐價格約在 2,500 - 4,000 ISK (約台幣 600-1000元) 之間。若想省錢，點一碗湯配麵包是CP值較高的選擇。",
          },
          {
            type: "text",
            value:
              "3. 其他選擇：\n如果只想簡單吃，餐廳旁邊還有附設的速食區 (Fast Food) 提供漢堡和披薩，或者去旁邊的便利商店買三明治。",
          },
        ],
      },
      {
        id: "d4-5",
        time: "14:00",
        place: "Secret Lagoon 秘密溫泉",
        note: "冰島最古老的天然泳池 (始於 1891)",
        mapUrl: "https://maps.app.goo.gl/eoS8bM62xkNmPGap9",
        content: [
          {
            type: "text",
            value:
              "Secret Lagoon (冰島語：Gamla Laugin，意為「老池子」) 是冰島現存最古老的游泳池。不同於藍湖的科技感，這裡保留了百年前最原始的樣貌：天然的苔蘚岩壁、四周冒著白煙的地熱孔，還有飄浮在水面上的蒸氣，氛圍非常夢幻。",
          },
          {
            type: "text",
            value: "⚠️ 重要提醒 帶毛巾、泳衣、拖鞋 防水手機套 盥洗用具",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/secret_lagoon_spring.jpg",
            alt: "充滿蒸氣與自然氛圍的 Secret Lagoon",
          },

          { type: "text", value: "♨️ 體驗亮點：" },
          {
            type: "text",
            value:
              "● 漂浮麵條 (Pool Noodles)：\n池邊有免費提供的泡沫浮條。夾在腋下或枕在頭下，讓身體自然漂浮在溫暖的泉水中，看著天空發呆，是這裡最道地的玩法。",
          },
          {
            type: "text",
            value:
              "● 小間歇泉表演：\n不用跑遠，溫泉池畔就有一個迷你的小間歇泉，每隔幾分鐘就會噴發一次，泡在水裡就能欣賞。",
          },
          {
            type: "text",
            value:
              "● 邊泡邊喝：\n更衣室旁有小酒吧，您可以買啤酒或蘋果酒 (Cider) 帶進池子裡喝（請小心不要打破杯子）。",
          },

          { type: "text", value: "⚠️ 重要提醒 (Must Read)：" },
          {
            type: "text",
            value:
              "1. 必須預約：\n雖然名字叫「秘密」，但現在遊客很多，建議提前 1-2 週上網預約時段，以免現場客滿無法入場。",
          },
          {
            type: "text",
            value:
              "2. 洗澡規定：\n下水前必須在淋浴間「全身赤裸」洗淨身體（有提供沐浴乳），這是對這座百年老池水質的基本尊重。",
          },

          { type: "text", value: "🚗 長途駕駛預警 (Critical)：" },
          {
            type: "text",
            value:
              "如果您今晚的住宿是在 Vagnsstadir (靠近冰河湖)，請注意：\n從這裡開車到民宿需要 **3.5 - 4 小時** (約 300 公里)。\n建議溫泉不要泡太久 (約 1-1.5 小時)，最晚 17:00 要上路，不然抵達民宿時會非常晚且疲累。",
          },
        ],
      },
      {
        id: "d4-6",
        time: "17:00",
        place: "South Central Apartments 住宿",
        note: "位於郊區的溫馨公寓 / 極光觀測點",
        mapUrl: "https://maps.app.goo.gl/ema26tqWASuBM3ja6",
        content: [
          {
            type: "text",
            value:
              "這是一間位於 Brautarholt 鄉間的獨立公寓，距離 Selfoss 市區約 20 分鐘車程。最大的優點是光害極低，走出房門就有機會看到極光！房內附有小廚房，非常適合自煮晚餐。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_4.jpeg",
            alt: "South Central Apartments 外觀",
          },

          { type: "text", value: "⚠️ 入住必讀 (Check-in Info)：" },
          {
            type: "text",
            value:
              "1. 自助入住：\n這裡沒有櫃檯。請務必檢查 Email，屋主會寄送「鑰匙盒密碼 (Keybox Code)」。抵達時直接輸入密碼拿鑰匙即可。",
          },
          {
            type: "text",
            value:
              "2. 補給警告：\n附近完全沒有商店！請務必在 Selfoss 市區的超市 (Kronan/Bonus) 先買好晚餐和明天的早餐食材，否則晚上會餓肚子。",
          },

          { type: "text", value: "🛁 設施亮點：" },
          {
            type: "text",
            value:
              "● 地熱地板：浴室地板熱熱的，冬天洗澡很舒服。\n● 私人廚房：有電磁爐、微波爐、冰箱，可以煎牛排或煮義大利麵。",
          },
        ],
      },
      {
        id: "d4-7",
        time: "18:30",
        place: "晚餐",
        note: "自煮",
        mapUrl: "",
        content: [],
      },
    ],
  },

  // --- 第 5 天  ---
  {
    day: 5,
    title: "2/10 最美瀑布 + 前往冰川",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "冰島廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://maps.app.goo.gl/LxGK8ATzwSxNdiS18?g_st=il",
        content: [],
      },
      {
        id: "d5-1",
        time: "09:30",
        place: "Háifoss 雙子瀑布",
        note: "冰島第四高瀑布 / 絕美峽谷",
        mapUrl: "https://maps.app.goo.gl/huZeo2xmnQU133Hh9",
        content: [
          {
            type: "text",
            value:
              "Háifoss 意為「高的瀑布」，高達 122 公尺。當你站在峽谷邊緣往下看時，那種深不見底的震撼感完全不同於其他瀑布。而且這裡買一送一，旁邊緊鄰著另一個瀑布叫「Granni (鄰居)」，兩條白練同時墜入深谷，畫面非常經典。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/flow_2.png",
            alt: "Háifoss 與 Granni 雙瀑布",
          },

          { type: "text", value: "📜 歷史與傳說：" },
          {
            type: "text",
            value:
              "傳說這座瀑布下的山洞裡住著一個女巨人 (Ogress)。曾經有一群旅人在河邊丟石頭玩，打中了女巨人的家，她憤怒地出來想把旅人抓走。雖然這只是傳說，但也為這片荒涼的峽谷增添了神秘感。",
          },

          { type: "text", value: "⚠️ 必讀！路況與安全警告 (Critical)：" },
          {
            type: "text",
            value:
              "1. 惡名昭彰的 332 號路：\n通往停車場的最後 7 公里是碎石路 (Gravel Road)，路況非常顛簸，充滿坑洞。請務必開 4WD (四輪驅動) 車輛前往，並放慢速度以免爆胎。",
          },
          {
            type: "text",
            value:
              "2. 冬季 (2月) 風險：\n您是 2 月前往，這條路很有可能被積雪封閉或變得泥濘不堪。出發前「務必」查看 road.is 路況圖。如果顯示紅色 (Closed) 或 藍色 (Slippery/Wet Snow)，請果斷放棄，不要冒險闖入，會卡在荒野中。",
          },
          {
            type: "text",
            value:
              "3. 懸崖無護欄：\n這裡保持著非常原始的狀態，懸崖邊緣幾乎沒有護欄。這邊風勢通常很大（位於高地邊緣），拍照時請絕對不要太靠近邊緣，以免被強風吹落。",
          },
        ],
      },
      {
        id: "d5-2",
        time: "12:00",
        place: "Mia's Country Van - Local Fish & Chips 午餐",
        note: "紅色點點餐車 / 冰島最好吃的 Fish & Chips",
        mapUrl: "https://maps.app.goo.gl/FJXpKv3qjqruhvhT9",
        content: [
          {
            type: "text",
            value:
              "這是一個不起眼但驚為天人的路邊小吃。老闆娘 Mia 用當天新鮮捕獲的鱈魚 (Cod)，裹上加入冰島啤酒的麵糊現炸，外皮酥脆、魚肉鮮嫩多汁，完全顛覆你對炸魚薯條油膩的印象！",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/red_car.jpg",
            alt: "可愛的紅色點點餐車",
          },

          { type: "text", value: "🍟 必吃推薦 (Menu)：" },
          {
            type: "text",
            value:
              "這裡只賣一樣東西：Local Fish & Chips (炸魚薯條)。但決勝點在於「調味」！",
          },
          {
            type: "text",
            value:
              "● 醬料三選一：\n強烈推薦「Icelandic Tartar (冰島塔塔醬)」，帶有一點酸黃瓜和咖哩的香氣，非常解膩。另外還有甜辣醬 (Sweet Chilli) 和蒜味美乃滋。",
          },
          {
            type: "text",
            value:
              "● 獨門風味鹽 (Salts)：\n櫃檯前放著好幾種老闆特製的鹽（例如：熔岩鹽 Lava Salt、海藻鹽 Seaweed Salt）。拿到炸魚後，記得灑一點「海藻鹽」在薯塊上，味道會提升一個檔次！",
          },

          { type: "text", value: "⚠️ 重要營業提醒 (Must Read)：" },
          {
            type: "text",
            value:
              "1. 營業時間極短：\n通常只開 12:00 - 16:00 (賣完會提早收)。請務必把這個行程排在中午，太晚來吃不到。",
          },
          {
            type: "text",
            value:
              "2. 週五公休疑慮：\n根據近期回報，他們有時候「週五會公休」。如果您剛好是週五經過，建議先查看他們的 Facebook 或 Google Map 最新動態，以免撲空。",
          },
          {
            type: "text",
            value:
              "3. 戶外用餐與廁所：\n這裡只有戶外野餐桌 (風大會很冷)，且「沒有廁所」。建議在抵達前或離開後，去旁邊的 Skógafoss 遊客中心借廁所。",
          },
        ],
      },
      {
        id: "d5-3",
        time: "12:00",
        place: "Krónan Vík 超市 (3天份)",
        note: "",
        mapUrl: "https://maps.app.goo.gl/7wv1NQPYoijekxmUA",
        content: [],
      },
      {
        id: "d5-4",
        time: "13:00",
        place: "Fjaðrárgljúfur 羽毛峽谷",
        note: "Justin Bieber MV 取景地 / 世界最美峽谷",
        mapUrl: "https://maps.app.goo.gl/qn8gsB9qrF4V36aZ9",
        content: [
          {
            type: "text",
            value:
              "Fjaðrárgljúfur (發音超難，意為：羽毛河峽谷) 是冰島南部最像「魔戒」場景的地方之一。蜿蜒的 Fjaðrá 河流歷經兩百萬年的侵蝕，將原本平坦的高地切出一道道深邃、蜿蜒的峽谷，兩側懸崖陡峭且長滿苔蘚（冬天會被白雪覆蓋）。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/flow_3.jpg",
            alt: "蜿蜒曲折的羽毛峽谷",
          },

          { type: "text", value: "🎥 爆紅原因：" },
          {
            type: "text",
            value:
              "這裡原本是私房秘境，直到 2015 年 Justin Bieber 的《I'll Show You》MV 在此取景（他在峽谷裡玩滑板、滾草地），這裡瞬間爆紅。但也因為遊客太多踩壞植被，曾一度關閉修復，現在已重新開放，請務必走在棧道上。",
          },

          { type: "text", value: "🚶 參觀路線 (Hiking)：" },
          {
            type: "text",
            value:
              "停車場在下方，沿著右側的上坡步道往上走，沿途有 3-4 個觀景台。走到最底端的觀景台（瀑布處）景色最壯觀，來回步行約 1 小時。",
          },

          { type: "text", value: "⚠️ 冬季安全警告 (Winter Safety)：" },
          {
            type: "text",
            value:
              "1. 必穿冰爪 (Crampons)：\n通往觀景台的路是上坡，冬天結冰時非常非常滑！沒有穿冰爪幾乎無法行走，甚至會滑下山坡，請務必在停車場就穿好。",
          },
          {
            type: "text",
            value:
              "2. 禁止越線：\n為了讓苔蘚重生，步道兩旁都有圍繩。請當個合格的旅人，絕對不要跨越繩索去懸崖邊拍照（雖然 Bieber 有做，但那是錯誤示範）。",
          },
          {
            type: "text",
            value:
              "3. 禁飛空拍機：\n此處通常設有「禁止空拍機」的告示牌，起飛前請確認現場規定。",
          },
        ],
      },
      {
        id: "d5-5",
        time: "15:00",
        place: "Svartifoss 玄武岩瀑布",
        note: "需健行 / 冰島教堂的靈感來源",
        mapUrl: "https://maps.app.goo.gl/5QoQeptVszHP2g8R6",
        content: [
          {
            type: "text",
            value:
              "Svartifoss (黑瀑布) 位於史卡夫塔山 (Skaftafell) 國家公園內。白色的水流從黑色的六角形玄武岩柱牆上飛流直下，這種黑白強烈對比的幾何美感，是大自然鬼斧神工的傑作。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/flow_4.jpg",
            alt: "懸掛著黑色玄武岩柱的 Svartifoss",
          },

          { type: "text", value: "⛪ 文化連結：" },
          {
            type: "text",
            value:
              "覺得眼熟嗎？雷克雅維克地標「哈爾格林姆大教堂 (Hallgrímskirkja)」的設計師，就是受到這裡的玄武岩柱啟發，才設計出那著名的管風琴狀外觀。",
          },

          { type: "text", value: "🥾 健行資訊 (Hiking Info)：" },
          {
            type: "text",
            value:
              "● 難度：中等 (持續上坡)。\n● 時間：從遊客中心出發，單程約 1.5 公里，來回需預留 1.5 - 2 小時。\n● 路線：沿著遊客中心旁的路標 (Svartifoss) 走，前半段是緩坡，後半段能俯瞰冰河沖積平原。",
          },

          { type: "text", value: "⚠️ 冬季安全警告 (Winter Only)：" },
          {
            type: "text",
            value:
              "1. 必備冰爪 (Crampons)：\n冬天步道會結冰，尤其是靠近瀑布的下坡路段非常滑。沒有穿冰爪請勿嘗試下去瀑布底部。",
          },
          {
            type: "text",
            value:
              "2. 光線注意：\n這條路沒有路燈。如果您抵達時已經黃昏，建議放棄或改期，摸黑下山非常危險。",
          },
          {
            type: "text",
            value:
              "3. 停車費：\nSkaftafell 遊客中心停車場需收費 (約 750-1000 ISK)，請使用 Parka App 或現場機器繳費。",
          },
        ],
      },
      {
        id: "d5-6",
        time: "19:00",
        place: "N1 加油",
        note: "",
        mapUrl: "https://maps.app.goo.gl/W1uiiKYDmjDRK142A",
        content: [
          {
            type: "text",
            value:
              "冰島加油站（如 N1、Olís）多數採「自助式」且無人值守。這不僅是補給燃料，更是體驗冰島公路旅行的一環。以下是操作流程與千萬要注意的陷阱。",
          },
          { type: "text", value: "⛽ 自助加油標準流程：" },
          {
            type: "text",
            value:
              "1. 插入信用卡 \n2. 輸入 4 位數 PIN 碼 (必備!) \n3. 選擇「固定金額」 (關鍵步驟) \n4. 輸入油槍號碼 \n5. 提槍加油 \n6. 若需收據通常需再次插卡",
          },
          { type: "text", value: "⚠️ 三大保命注意事項：" },
          {
            type: "text",
            value:
              "1. 勿選「加滿 (Fill Up/Full Tank)」：\n選加滿會被機器圈存高額預授權金 (約台幣 5000-7000 元)，解凍退款需數天到一週。建議選擇「固定金額」(如 5000 kr)，加不完只會扣實際金額，不會吃虧。",
          },
          {
            type: "text",
            value:
              "2. 必備 4 位數 PIN 碼：\n冰島無人機器強制要求輸入 PIN。出發前請務必向銀行開通「預借現金密碼」(4碼)。若無 PIN 碼，只能改用 Apple Pay (部分機器支援) 或至商店購買 N1 預付卡 (Prepaid Card)。",
          },
          {
            type: "text",
            value:
              "3. 認明油槍顏色：\n⚫ 黑色 = 柴油 (Diesel)\n🟢 綠色 = 95 汽油 (Bensín)\n千萬別只看顏色，務必核對文字，加錯油會導致引擎報銷且保險不理賠！",
          },
          { type: "text", value: "💡 省錢小撇步：" },
          {
            type: "text",
            value:
              "檢查租車鑰匙上有沒有掛著加油站的「感應扣 (Fob)」。操作時先拿感應扣在機器上嗶一下，再插信用卡，通常每公升能省 3 ISK 左右喔！",
          },
        ],
      },
      {
        id: "d5-7",
        time: "17:00",
        place: "Vagnsstadir Guesthouse 住宿",
        note: "住宿 車程三小時",
        mapUrl: "https://maps.app.goo.gl/V2ShdBc2nwh2MxHr5",
        content: [
          {
            type: "text",
            value:
              "這是一間位於著名的「環島一號公路」旁的老牌青旅民宿。雖然設施比較簡單樸實，但乾淨溫馨。因為四周完全沒有光害，只要天氣好，走出房門就能看到滿天星空和極光飛舞。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_5.jpg",
            alt: "Vagnsstadir 民宿外觀",
          },

          { type: "text", value: "🏡 住宿特色：" },
          {
            type: "text",
            value:
              "● 極佳位置：\n往東開車 20 分鐘就到傑古沙龍冰河湖。如果您預約了明天一早的冰洞團，住這裡非常方便。",
          },
          {
            type: "text",
            value:
              "● 公共廚房：\n提供設備齊全的廚房（有爐具、冰箱、餐具）。這裡附近沒有餐廳，強烈建議晚餐自己煮。",
          },
          {
            type: "text",
            value:
              "● 房型：\n有含衛浴的套房，也有共用衛浴的雅房。預訂時請確認您的訂單類型。",
          },

          { type: "text", value: "🛒 超級重要！補給警告 (Food Supply)：" },
          {
            type: "text",
            value:
              "這附近是「食物沙漠」！\n最近的超市在西邊的 Kirkjubæjarklaustur (開車 1 小時) 或東邊的 Höfn (開車 50 分鐘)。\n請務必在抵達前，先在路過的超市買好今天的晚餐和明天的早餐食材，否則晚上會餓肚子喔！",
          },

          { type: "text", value: "⚠️ 入住提醒：" },
          {
            type: "text",
            value:
              "櫃檯通常只開到晚上 21:00 或 22:00。如果您因為在路上拍極光會晚到，記得先打電話或 Email 告知民宿，以免被鎖在門外。",
          },
        ],
      },
    ],
  },
  // --- 第 6 天 ---
  {
    day: 6,
    title: "2/11 冰川健行 + 小景點",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "冰島廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://maps.app.goo.gl/LxGK8ATzwSxNdiS18?g_st=il",
        content: [],
      },
      {
        id: "d6-1",
        time: "09:00",
        place: "冰川健行 (Skaftafell)",
        note: "走在千萬年的藍冰之上 / 絕對不可錯過的體驗",
        mapUrl: "",
        content: [
          {
            type: "text",
            value:
              "這是冰島之旅的重頭戲！穿上專業裝備，踏上歐洲最大的瓦特納冰原 (Vatnajökull) 的分支——通常是 Falljökull 或 Svínafellsjökull 冰舌。這裡的景色不像地球，你會感覺自己變成了《星際效應》裡的馬修麥康納，走在充滿裂縫的冰凍星球上。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/ice_walk.png",
            alt: "震撼的冰川健行隊伍",
          },

          { type: "text", value: "🧊 冰川地質與歷史小教室：" },
          {
            type: "text",
            value:
              "● 為什麼冰是藍色的？\n冰川冰不是普通的結冰，它是數千年來的積雪經過自身重量極度擠壓形成的。擠壓過程排出了氣泡，使得冰體密度極高，只反射藍光，吸收了其他光譜。",
          },
          {
            type: "text",
            value:
              "● 正在消失的歷史：\n你腳下踩的冰可能已有數百上千年歷史。但受到全球暖化影響，冰川正在以驚人的速度後退。嚮導常會指出「幾年前冰川還在這裡」的位置，讓人深刻感受到氣候變遷的震撼。",
          },

          { type: "text", value: "⚠️ 絕對重要的注意事項 (Safety First)：" },
          {
            type: "text",
            value:
              "1. 絕對禁止獨自前往 (MUST have a guide)：\n冰川看似平坦，實則佈滿深不見底的「冰裂縫 (Crevasses)」，有些被薄雪覆蓋難以察覺。沒有專業嚮導帶領而擅自走上冰川是自殺行為。一定要參加 Tour。",
          },
          {
            type: "text",
            value:
              "2. 鞋子是關鍵 (Boots are essential)：\n一定要穿「高筒、硬底」的登山鞋。因為要綁上冰爪 (Crampons)，軟底鞋或球鞋會被冰爪勒壞，且支撐力不足容易扭傷。如果沒有，現場通常可以付費租借。",
          },
          {
            type: "text",
            value:
              "3. 穿著建議：\n洋蔥式穿法。防水防風外套、防水褲（一定要，因為可能會坐在冰上拍照）、手套、毛帽、太陽眼鏡（冰面反光極強）。",
          },
          {
            type: "text",
            value:
              "4. 聽從指令：\n嚮導會教你如何使用冰爪走路（要像大猩猩一樣張開腳走），請務必遵守路線，不要為了拍照脫隊。",
          },

          { type: "text", value: "📸 怎麼拍出神級大片 (Photography Tips)：" },
          {
            type: "text",
            value:
              "● 陰天比晴天更藍：\n別擔心天氣不好！陰雨天沒有強烈陽光反射，冰川的「藍色」反而會更深邃、更明顯。",
          },
          {
            type: "text",
            value:
              "● 人物比例尺：\n拍攝隊伍走成一列的畫面，或是人站在巨大冰裂縫旁，利用人物當比例尺，才能顯出冰川的壯闊。",
          },
          {
            type: "text",
            value:
              "● 道具運用：\n嚮導發的「冰鎬 (Ice Axe)」是最好的拍照道具。舉著它、把它插在冰上，照片立刻專業度破表。",
          },
          {
            type: "text",
            value:
              "● 低角度：\n蹲下來貼近冰面拍，可以拍出冰層的紋理和火山灰交錯的細節。",
          },
          {
            type: "text",
            value:
              "● 手機拿好：\n手凍僵時很容易手滑，手機掉進冰裂縫是絕對撿不回來的。強烈建議用有掛繩的手機殼。",
          },
        ],
      },
      {
        id: "d6-2",
        time: "12:00",
        place: "午餐: Fjallsárlón Frost Restaurant",
        note: "",
        mapUrl: "https://maps.app.goo.gl/TnnP9rRpy7dhcTEG9",
        content: [
          {
            type: "text",
            value:
              "Frost Restaurant 位於 Fjallsárlón 冰河湖畔，是一間主打現代北歐風格的景觀餐廳。這裡擁有巨大的全景落地窗，讓遊客能邊享用熱食，邊欣賞震撼的 Vatnajökull 冰川全景。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/rest_6.jpg",
            alt: "Frost Restaurant 的冰川全景座位",
          },
          { type: "text", value: "🥘 餐點特色 (Self-Service Buffet)：" },
          {
            type: "text",
            value:
              "1. 自助式熱食 (Buffet Style)：\n不同於一般單點餐廳，這裡主打「自助式」取餐。常見菜色包括咖哩雞、焗烤魚排、燉羊肉以及素食選項 (如扁豆燉菜)。對於趕時間的旅人來說，不需要等待太久即可開動。",
          },
          {
            type: "text",
            value:
              "2. 暖心湯品與輕食：\n如果不餓，強烈推薦點一碗「熱湯 (Soup of the day)」配麵包（約 2,000 ISK）。招牌的番茄湯或冰島肉湯，配上窗外的寒冷冰川，是許多遊客的最愛。另外也有三明治與蛋糕可供選擇。",
          },
          { type: "text", value: "✨ 獨家亮點：" },
          {
            type: "text",
            value:
              "1. 避開人潮的秘境：\n大部分團客都會擠在 Jökulsárlón 吃飯，這裡相對安靜許多。你可以悠閒地喝杯咖啡，享受不被干擾的冰河美景。",
          },
          {
            type: "text",
            value:
              "2. 絕佳視野 (The View)：\n餐廳設計採階梯式或大面寬窗戶，幾乎每個座位都能看到冰川。這被認為是冰島南部景觀最好的午餐地點之一。",
          },
          { type: "text", value: "ℹ️ 實用資訊：" },
          {
            type: "text",
            value:
              "・營業時間：主要供應午餐與下午茶 (通常為 09:30 - 16:00/17:00)，晚餐時段可能未營業，出發前請再次確認。\n・價格區間：每人約 2,000 - 4,000 ISK，屬中等價位。\n・無需訂位：採自助入座，直接抵達即可。",
          },
        ],
      },
      {
        id: "d6-3",
        time: "14:00",
        place: "Diamond Beach 鑽石冰沙灘",
        note: "黑沙灘上的璀璨鑽石 / 攝影師必拍",
        mapUrl: "https://maps.app.goo.gl/oewfu8CUyGxHUVdT9",
        content: [
          {
            type: "text",
            value:
              "這裡可能是世界上最唯美的沙灘。從傑古沙龍冰河湖漂流出海的巨大冰山，被海浪打碎後又被沖回岸上。晶瑩剔透的藍冰與深邃的黑色火山沙灘形成強烈對比，在陽光下每一塊冰都像是在呼吸的鑽石。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/ice_sand.jpg",
            alt: "黑沙灘上閃閃發光的巨大冰塊",
          },

          { type: "text", value: "💎 鑽石從哪裡來？" },
          {
            type: "text",
            value:
              "這些冰塊原本是瓦特納冰原的一部分，崩解後掉入旁邊的傑古沙龍冰河湖 (Jökulsárlón)，隨著潮汐漂流到北大西洋，最後被海浪「退貨」推回這片黑沙灘上。所以每一塊「鑽石」都有千年的歷史！",
          },

          { type: "text", value: "📸 攝影攻略 (Photo Tips)：" },
          {
            type: "text",
            value:
              "● 尋找透光冰塊：\n找一塊乾淨透明的冰塊，調整角度讓陽光穿透它，能拍出金黃色或深藍色的光澤。",
          },
          {
            type: "text",
            value:
              "● 長曝光 (Long Exposure)：\n如果有腳架，試著用慢快門 (0.5 - 2秒) 拍攝海浪刷過冰塊的瞬間，海水會變成絲綢般的霧狀，畫面會非常夢幻。",
          },
          {
            type: "text",
            value:
              "● 低角度：\n盡量把相機放低貼近沙灘，這樣能讓冰塊看起來更巨大、更有氣勢。",
          },

          { type: "text", value: "⚠️ 致命的安全警告 (Life Saving Info)：" },
          {
            type: "text",
            value:
              "1. 絕對不要爬上冰塊：\n冰塊非常滑，而且極不穩定！有些看似穩固的冰塊可能在海浪一來時瞬間翻轉 (Flipping)，把人壓在下面或捲入海中。",
          },
          {
            type: "text",
            value:
              "2. 小心瘋狗浪 (Sneaker Waves)：\n北大西洋的海浪深不可測。即使看起來風平浪靜，偶爾會突然來一個特別大的浪打上岸。拍照時永遠不要背對大海，並隨時保持警覺，不要為了構圖站得太靠近海水。",
          },
        ],
      },
      {
        id: "d6-4",
        time: "17:00",
        place: "住宿：Vagnsstadir Guesthouse",
        note: "距離冰河湖最近的高CP值住宿",
        mapUrl: "https://maps.app.goo.gl/142SUCJ9wL5HWULt6",
        content: [
          {
            type: "text",
            value:
              "Vagnsstadir Guesthouse 是這一帶性價比最高的選擇之一。因為傑古沙龍冰河湖附近的飯店（如 Fosshotel）通常非常昂貴，而這裡提供了乾淨、溫馨且價格合理的住宿環境，非常適合只想有個舒服地方睡覺的旅人。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_6.jpg",
            alt: "簡單乾淨的房間內部",
          },

          { type: "text", value: "🏡 設施與服務：" },
          {
            type: "text",
            value:
              "● 公共廚房 (Kitchen)：\n這是大加分項！廚房設備齊全，有爐台、烤箱、微波爐和各種餐具。你可以把從超市買來的食材煮成豐盛的晚餐，省下大筆外食費。",
          },
          {
            type: "text",
            value:
              "● 早餐 (Breakfast)：\n雖然大多數房型不含早餐，但現場可以加購自助式早餐。以冰島物價來說，這裡的早餐吃到飽算是物有所值。",
          },
          {
            type: "text",
            value:
              "● 衛浴：\n請留意您預訂的房型。如果是「共用衛浴 (Shared Bathroom)」，浴室通常維持得很乾淨，且數量足夠，不用太擔心排隊問題。",
          },

          { type: "text", value: "🌌 觀星與極光 (Aurora)：" },
          {
            type: "text",
            value:
              "因為周圍幾公里內幾乎沒有鄰居和路燈，光害極低。晚上吃飽飯後，建議穿上外套走到戶外，只要天空無雲，看見極光的機率非常高！",
          },

          { type: "text", value: "🚗 周邊景點距離：" },
          {
            type: "text",
            value:
              "● 西邊 (往回走)：距離 Jökulsárlón 冰河湖約 20 公里 (開車 15-20 分鐘)。\n● 東邊 (往下走)：距離龍蝦小鎮 Höfn 約 50 公里 (開車 40-50 分鐘)。",
          },
        ],
      },
      {
        id: "d6-5",
        time: "18:00",
        place: "晚餐",
        note: "自煮",
        mapUrl: "",
        content: [],
      },
    ],
  },
  // --- 第 7 天 ---
  {
    day: 7,
    title: "2/12 冰川冰洞健行 + 中景點",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "冰島廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://maps.app.goo.gl/LxGK8ATzwSxNdiS18?g_st=il",
        content: [],
      },
      {
        id: "d7-1",
        time: "09:30",
        place: "藍冰洞健行 (Ice Cave Tour)",
        note: "冬季限定夢幻藍冰 / 需跟團",
        mapUrl: "",
        content: [
          {
            type: "text",
            value:
              "這是冬季來冰島的重頭戲！乘坐改裝的超級吉普車 (Super Jeep) 穿越荒原，深入瓦特納冰川邊緣的天然冰洞。陽光穿透厚實的冰層，呈現出水晶般的寶石藍色。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/ice_hold.jpg",
            alt: "夢幻的藍冰洞內部",
          },

          { type: "text", value: "📸 拍照與穿搭攻略：" },
          {
            type: "text",
            value:
              "● 穿亮色系：\n強烈建議穿「黃色、紅色」等暖色系外套，在藍色的冰洞裡對比最美，拍照最搶眼。",
          },
          {
            type: "text",
            value:
              "● 廣角鏡頭：\n冰洞空間通常有限，手機開廣角模式更能拍出氣勢。",
          },

          { type: "text", value: "⚠️ 必讀！行前準備 (Preparation)：" },
          {
            type: "text",
            value:
              "1. 鞋子檢查：\n一定要穿「高筒登山鞋」！因為要綁冰爪。絕對不能穿雪靴 (UGG) 或平底球鞋，現場會被拒絕參加或強制租鞋。",
          },
          {
            type: "text",
            value:
              "2. 關於暈車：\n去程的吉普車路段非常顛簸，易暈車者請提前吃藥。",
          },
          {
            type: "text",
            value:
              "3. 廁所提醒：\n整個行程約 3 小時「完全沒有廁所」，請務必在出發前於停車場解決。",
          },
        ],
      },
      {
        id: "d7-2",
        time: "13:00",
        place: "午餐: Freysnes",
        note: "",
        mapUrl: "https://maps.app.goo.gl/XGxfCd74Pw95c3kZ7",
        content: [
          {
            type: "text",
            value:
              "Freysnes 不僅僅是一個加油站，它是 Skaftafell 國家公園對面最重要的「遊客食堂」。這裡是前往冰川健行前後的最佳補給點，提供出乎意料美味的熱食與家常料理。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/rest_7.jpg",
            alt: "Freysnes 加油站餐廳外觀",
          },
          { type: "text", value: "🍖 必吃美食推薦：" },
          {
            type: "text",
            value:
              "1. 招牌羊排 (Lamb Chops/Shank)：\n這裡的羊肉料理被許多遊客評為「驚喜之作」。肉質軟嫩無騷味，配上馬鈴薯與醬汁，是高CP值的選擇 (約 3,200 - 4,000 ISK)。",
          },
          {
            type: "text",
            value:
              "2. 傳統燉肉與魚排：\n自助餐台常供應冰島傳統燉羊肉 (Lamb Stew) 或蘑菇醬魚球 (Fish balls)。如果你想嘗試道地的冰島家常菜，這裡是絕佳機會。",
          },
          {
            type: "text",
            value:
              "3. 快速漢堡 (Burgers)：\n如果趕時間，他們的羊肉漢堡或牛肉漢堡也是現點現做，份量十足且多汁，甚至有提供藜麥做的素食漢堡。",
          },
          { type: "text", value: "📍 地理位置與戰略意義：" },
          {
            type: "text",
            value:
              "1. 冰川健行前後的基地：\n它就位於 Skaftafell 遊客中心正對面。大部分參加冰川健行 (Glacier Hike) 的團都會約在這裡集合或解散，是補充熱量最方便的地方。",
          },
          {
            type: "text",
            value:
              "2. 補貨最後機會：\nFreysnes 附設的商店 (Shop) 是這附近唯一的超市。如果你接下來要往東去 Jökulsárlón 或往西回 Vik，中間幾乎沒有商店，建議在這裡補齊水與零食。",
          },
          { type: "text", value: "💡 實用資訊：" },
          {
            type: "text",
            value:
              "・營業時間：通常為 09:00 - 20:00 (夏季可能延長)，建議晚餐不要太晚來以免廚房休息。\n・價格：主餐約 2,000 - 4,000 ISK，以冰島物價來說相當親民。\n・小缺點：尖峰時刻 (中午 12-1 點) 旅行團巴士多，可能需要排隊。",
          },
        ],
      },
      {
        id: "d7-3",
        time: "15:00",
        place: "Skógafoss 彩虹瀑布",
        note: "白日夢冒險王取景地 / 氣勢磅礡",
        mapUrl: "https://maps.app.goo.gl/WBWbEMwbHYEcyZRG8",
        content: [
          {
            type: "text",
            value:
              "Skógafoss (史科加瀑布) 高 60 公尺、寬 25 公尺，是冰島最壯觀的瀑布之一。因為水量巨大，激起的水霧在陽光下經常形成「雙道彩虹」，所以又有「彩虹瀑布」的美名。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/flow_7.jpg",
            alt: "氣勢磅礡的 Skógafoss 與遊客渺小的對比",
          },

          { type: "text", value: "🎥 電影場景大解密 (Walter Mitty Spot)：" },
          {
            type: "text",
            value:
              "還記得電影《白日夢冒險王》中，主角 Walter Mitty 在喜馬拉雅山尋找肖恩，並跟隨兩個當地人走過一個巨大瀑布的畫面嗎？其實那就是在這裡拍的！雖然電影裡說是喜馬拉雅山，但背景就是 Skógafoss。",
          },

          { type: "text", value: "📸 如何拍出「白日夢冒險王」風格？" },
          {
            type: "text",
            value:
              "1. 人物渺小感 (The Scale)：\n電影的精髓在於「大自然與渺小人類」的對比。攝影師要站遠一點（停車場附近），用「長焦鏡頭」或手機的 3x/5x 變焦，壓縮背景，讓瀑布看起來像一面巨大的水牆，人物站在瀑布底部顯得非常渺小。",
          },
          {
            type: "text",
            value:
              "2. 孤獨感 (Isolation)：\n盡量避開兩旁的遊客，等待人潮散去的一瞬間。或者讓主角穿著鮮豔（如紅色、黃色）的外套，站在畫面正中央，營造出一種「獨自面對巨大挑戰」的孤獨英雄感。",
          },
          {
            type: "text",
            value:
              "3. 剪影效果 (Silhouette)：\n如果是下午逆光時分，可以讓主角站在水霧前，拍出黑色的剪影，背景是金色的水氣，非常有電影海報的質感。",
          },

          { type: "text", value: "⚠️ 濕身警告 (Warning)：" },
          {
            type: "text",
            value:
              "越靠近瀑布，水氣越大，基本上跟淋雨沒兩樣！\n● 裝備：務必穿好雨衣、防水褲。\n● 相機保護：鏡頭一定會濕，拍一張就要擦一次，請準備好拭鏡布或將相機包裹防雨套。",
          },

          { type: "text", value: "🧗 另一種視角：登頂步道" },
          {
            type: "text",
            value:
              "瀑布右側有一條 527 階的樓梯，可以爬到瀑布頂端。雖然爬樓梯有點累 (約 15-20 分鐘)，但上面有一個突出的觀景台，可以俯瞰瀑布墜落的瞬間，以及遠方的海岸線，視野非常開闊。",
          },
        ],
      },
      {
        id: "d7-4",
        time: "16:30",
        place: "Reynisfjara 黑沙灘",
        note: "世界最美沙灘之一 / 玄武岩壁",
        mapUrl: "https://maps.app.goo.gl/eg6eG5YuARsmSJYd7",
        content: [
          {
            type: "text",
            value:
              "Reynisfjara 是冰島南岸最著名的景點。這裡的沙子之所以是黑色的，是因為 Katla 火山噴發後的熔岩遇到海水迅速冷卻，經過數千年的海浪沖刷磨碎，變成了今日細緻的黑色沙礫。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/black_beach.jpg",
            alt: "壯觀的玄武岩牆與黑沙灘",
          },

          { type: "text", value: "傳說與地質奇景：" },
          {
            type: "text",
            value:
              "● 雷尼斯岩柱 (Reynisdrangar)：\n看向海中，聳立著幾根巨大的尖銳岩石。傳說中有兩隻巨怪 (Trolls) 試圖將一艘三桅船拖上岸，但動作太慢，來不及在日出前躲起來，結果被陽光照射到，瞬間變成了石頭，永遠佇立在海中。",
          },
          {
            type: "text",
            value:
              "● 玄武岩柱牆 (Gardar)：\n沙灘旁有一大片整齊排列的六角形玄武岩柱，像是一座巨大的管風琴，又像是通往天際的階梯。這是冰島最熱門的拍照背景之一。",
          },
          {
            type: "text",
            value:
              "● 哈爾薩內夫海蝕洞 (Hálsanefshellir)：\n在玄武岩牆旁邊有一個巨大的海蝕洞，也是著名的打卡點（注意：漲潮時不可進入）。",
          },

          { type: "text", value: "🎥 電影朝聖：" },
          {
            type: "text",
            value:
              "這裡是《權力遊戲 (Game of Thrones)》第 7 季中「東海望 (Eastwatch-by-the-Sea)」的取景地，也是《星際大戰：俠盜一號》的星球場景。那種荒涼、異世界的氛圍完全不需要特效。",
          },

          { type: "text", value: "⚠️ 致命警告 (Life-Threatening Warning)：" },
          {
            type: "text",
            value: "請嚴肅看待這裡的「瘋狗浪 (Sneaker Waves)」。",
          },
          {
            type: "text",
            value:
              "1. 什麼是瘋狗浪？\n即使看起來風平浪靜，偶爾會突然出現一道「比平常遠得多的海浪」，且這道浪「沒有聲音」，力量大到能瞬間把成人捲入冰冷的海水中。幾乎每年都有遊客在此喪命。",
          },
          {
            type: "text",
            value:
              "2. 交通號誌系統：\n停車場設有警示燈。亮綠燈表示安全；黃燈表示需注意；紅燈表示極度危險，禁止靠近水邊。",
          },
          {
            type: "text",
            value:
              "3. 黃金保命規則：\n● 絕對不要背對大海 (Never turn your back on the ocean)。\n● 拍照時至少離水邊 30 公尺以上。\n● 如果看到玄武岩洞穴地板是濕的，代表海浪打得進來，請勿進入。",
          },
        ],
      },
      {
        id: "d7-5",
        time: "17:00",
        place: "住宿：Hótel Eldhestar",
        note: "地熱之都 / 馬術飯店",
        mapUrl: "https://maps.app.goo.gl/YWyYKYMZS3S2GJWN8",
        content: [
          {
            type: "text",
            value:
              "位於 Hveragerði (溫泉鎮) 的知名飯店，周圍地熱資源豐富。這裡也是冰島最大的馬場之一，到處都能看到可愛的冰島馬。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_7.jpg",
            alt: "Hótel Eldhestar 外觀",
          },
          { type: "text", value: "🏡 住宿亮點：" },
          {
            type: "text",
            value:
              "● 地理位置佳：位於環島公路旁，距離雷克雅維克僅 30 分鐘車程，是很好的中繼站。",
          },
          {
            type: "text",
            value: "● 戶外熱水桶：飯店有許多露天的地熱浴池，水溫非常舒服。",
          },
        ],
      },
      {
        id: "d7-6",
        time: "18:30",
        place: "晚餐",
        note: "自煮",
        mapUrl: "",
        content: [],
      },
    ],
  },
  // --- 第 8 天 ---
  {
    day: 8,
    title: "2/13 斯奈山半島與雷克雅維克市區",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "冰島廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://maps.app.goo.gl/LxGK8ATzwSxNdiS18?g_st=il",
        content: [],
      },
      {
        id: "d8-1",
        time: "07:00",
        place: "早餐",
        note: "飯店",
        content: [],
      },
      {
        id: "d8-2",
        time: "08:00",
        place: "買午餐: 小豬超市",
        note: "",
        mapUrl: "https://maps.app.goo.gl/WSzXJ9ggJ8X1zuuF7",
        content: [],
      },
      {
        id: "d8-3",
        time: "09:30",
        place: "Ytri Tunga 海豹沙灘",
        note: "斯奈山半島 / 金沙灘 / 野生海豹棲息地",
        mapUrl: "https://maps.app.goo.gl/zEM7XnYMUcEjXduD7",
        content: [
          {
            type: "text",
            value:
              "今天將前往被稱為「冰島縮影」的斯奈山半島。之所以叫縮影，是因為這裡在小小的區域內，集結了火山、冰川、峽灣、黑沙灘等幾乎所有冰島的地形特色。",
          },
          {
            type: "text",
            value:
              "🚗 行車提醒：\n從 Hveragerði 出發，會經過雷克雅維克外圍，穿越海底隧道 (Hvalfjörður Tunnel)，這條隧道不收費，長約 6 公里，請注意速限 (70 km/h) 測速照相非常多！",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/nice_island.jpg",
            alt: "斯奈山半島",
          },
          {
            type: "text",
            value:
              "不同於冰島常見的黑沙灘，Ytri Tunga 是一片美麗的「金黃色沙灘」。這裡是冰島觀賞野生海豹 (Seals) 最容易到達的地方之一。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/sea_post.jpg",
            alt: "躺在岩石上的野生海豹",
          },

          { type: "text", value: "🦭 觀賞攻略：" },
          {
            type: "text",
            value:
              "● 尋找海豹：\n海豹通常喜歡躺在離岸邊不遠的黑色礁石上曬太陽。請準備長焦鏡頭或望遠鏡。如果在沙灘上沒看到，試著往岩石區走走，牠們的保護色跟石頭很像。",
          },
          {
            type: "text",
            value:
              "● 保持距離：\n雖然牠們看起來很萌，但請保持至少 50 公尺的距離，不要大聲喧嘩或試圖觸摸，以免嚇跑牠們或被咬傷。",
          },
        ],
      },
      {
        id: "d8-4",
        time: "12:00",
        place: "Kirkjufell 教堂山",
        note: "權力遊戲場景 / 攝影師必拍",
        mapUrl: "https://maps.app.goo.gl/tv1rD3C7aHEQSn8C6",
        content: [
          {
            type: "text",
            value:
              "Kirkjufell (463m) 因外型像草帽（或教堂屋頂）而得名。這裡是全冰島被拍攝次數最多的山，也是《權力遊戲》第 7 季中獵狗看到的「箭頭山 (Arrowhead Mountain)」。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/moun_2.jpg",
            alt: "教堂山與瀑布的經典構圖",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/moun.jpg",
            alt: "權力遊戲 第 7 季中獵狗看到的「箭頭山",
          },

          { type: "text", value: "📸 經典機位 (Photo Spot)：" },
          {
            type: "text",
            value:
              "不要只拍山！最經典的角度是對面的「Kirkjufellsfoss 瀑布」。\n停好車後，走過小橋到瀑布上方，將三道小瀑布作為前景，教堂山作為背景，這是明信片級的構圖。",
          },

          { type: "text", value: "⚠️ 冬季安全 (Safety)：" },
          {
            type: "text",
            value:
              "瀑布周圍的步道在 2 月份通常會結成「溜冰場」，非常滑！請務必在下車時就穿好冰爪 (Crampons)，否則很難走到最佳拍攝點。",
          },
        ],
      },
      {
        id: "d8-5",
        time: "13:00",
        place: "午餐: 小豬超市",
        note: "",
        mapUrl: "https://maps.app.goo.gl/WSzXJ9ggJ8X1zuuF7",
        content: [],
      },
      {
        id: "d8-6",
        time: "15:00",
        place: "Reykjavík 市區巡禮",
        note: "哈爾格林姆教堂 / 太陽航海者 / Harpa(可去可不去）",
        mapUrl: "https://maps.app.goo.gl/55VFkAMSFRbkVxst7",
        content: [
          {
            type: "text",
            value:
              "傍晚抵達首都雷克雅維克。如果是 2 月，此時已經天黑，剛好可以欣賞城市的夜景。",
          },
          { type: "text", value: "🏙️ 必逛地標：" },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/church.jpg",
            alt: "哈爾格林姆大教堂",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/z6wKyVpWS7Fra1sJ7",
            label: "導航去 哈爾格林姆大教堂",
          },
          {
            type: "text",
            value:
              "這是雷克雅維克最著名的地標，高 74.5 公尺，無論你在市區的哪個角落，幾乎都能看到它的塔頂。這座教堂耗時 41 年才完工 (1945-1986)，是以冰島著名的 17 世紀聖詩詩人 Hallgrímur Pétursson 命名的。",
          },

          { type: "text", value: "🌋 建築設計的秘密 (Design & Inspiration)：" },
          {
            type: "text",
            value:
              "● 向大自然致敬：\n建築師 Guðjón Samúelsson 的設計靈感直接來自冰島的自然景觀——特別是冷卻熔岩形成的「六角形玄武岩柱」(就是您在黑沙灘和 Svartifoss 看到的那些)。\n● 視覺效果：\n教堂兩側高聳的階梯狀飛翼，不僅象徵著火山岩，也像是一座巨大的管風琴，將人們的視線引向高聳的塔樓。",
          },

          { type: "text", value: "🎹 內部亮點：" },
          {
            type: "text",
            value:
              "教堂內部走簡約風格，但最吸睛的是入口上方那座巨大的「管風琴」。它高 15 公尺，重達 25 噸，擁有 5,275 根音管。如果運氣好遇到有人在練習，那莊嚴的聲音會震撼全場。",
          },

          { type: "text", value: "📸 必拍角度 (Photo Spots)：" },
          {
            type: "text",
            value:
              "1. 正面仰拍：\n站在正門口的廣場中央往上拍，可以拍出建築對稱的幾何美感。\n2. 萊夫·埃里克森雕像 (Leif Erikson)：\n教堂前方有一座顯眼的維京人雕像，他是發現北美洲的第一個歐洲人（比哥倫布還早 500 年）。這是美國為了紀念冰島議會成立 1000 週年送的禮物。試著把雕像和教堂一起拍進去，非常有氣勢。\n3. 彩虹街視角 (Skólavörðustígur)：\n沿著正對教堂的「彩虹街」往下走一點回頭拍，可以用彩虹色的地面引導視線延伸到教堂，這是最經典的網美構圖。",
          },

          { type: "text", value: "⚠️ 參觀實用資訊 (Visitor Info)：" },
          {
            type: "text",
            value:
              "1. 門票：\n參觀教堂「一樓大廳」是免費的。\n2. 登塔 (Tower)：\n如果要搭電梯上頂樓看 360 度市景，需要購票 (成人約 1,400 ISK, 兒童約 200 ISK)。售票處在入口左側商店。\n3. 開放時間 (Winter)：\n冬季 (10月-4月) 通常開放至 17:00 (塔樓最後入場 16:30)。週日早上因有彌撒，塔樓通常會關閉至 12:15 左右。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/sun_lan.jpg",
            alt: "Sun Voyager (太陽航海者)",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/ShCa7aG9qav5EwKy5",
            label: "導航去 Sun Voyager (太陽航海者)",
          },
          {
            type: "text",
            value:
              "● Sun Voyager (太陽航海者)：\n海邊的一個維京船骨架雕塑，象徵著對太陽、夢想和未知的渴望。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/h_musum.jpg",
            alt: "Harpa 音樂廳",
          },
          {
            type: "mapButton",
            url: "https://maps.app.goo.gl/w2sC3gyXGcvF24789",
            label: "導航去 Harpa 音樂廳",
          },
          {
            type: "text",
            value:
              "● 蜂巢玻璃 (The Facade)：\n由丹麥建築師 Henning Larsen 與冰島著名的光影藝術家 Olafur Eliasson 聯手設計。外牆由 714 片形狀不一的幾何玻璃組成，設計靈感同樣來自冰島的「玄武岩柱」。",
          },
          {
            type: "text",
            value:
              "● 光影變化：\n這些玻璃像魚鱗一樣，會隨著天氣和光線改變顏色。白天是清透的藍綠色，映照著海港；晚上則會有 LED 燈光秀，模擬北極光的流動，非常迷幻。",
          },

          { type: "text", value: "📸 攝影與參觀攻略：" },
          {
            type: "text",
            value:
              "1. 免費入場：\nHarpa 的公共區域（大廳、走廊、樓梯）是「完全免費」開放的！非常推薦走進去逛逛，順便避寒。",
          },
          {
            type: "text",
            value:
              "2. 內部幾何美學：\n走進去後，抬頭看天花板和側面，充滿了鏡面反射和幾何線條。試著站在樓梯上拍剪影，或是透過蜂巢玻璃拍外面的海港，照片非常有層次感。",
          },
          {
            type: "text",
            value:
              "3. 艾爾德堡 (Eldborg)：\n最大的主廳叫「火焰堡 (Eldborg)」，內部是鮮紅色的設計，象徵岩漿。雖然平常不對外開放（除非買票看表演或參加導覽），但從門縫窺探一眼那震撼的紅色也是一種樂趣。",
          },

          { type: "text", value: "🛍️ 逛街與廁所：" },
          {
            type: "text",
            value:
              "一樓有很棒的設計選物店 (Epal)，販售北歐風格的家居用品。這裡的廁所也是免費且乾淨的，是市區逛街很棒的中繼站。",
          },
        ],
      },
      {
        id: "d8-7",
        time: "19:00",
        place: "晚餐：Laxárbakki restaurant",
        note: "",
        mapUrl: "https://maps.app.goo.gl/51sUz8UqCgyftbyP6",
        content: [
          {
            type: "text",
            value:
              "Laxárbakki 坐落在 Laxá 鮭魚河畔，是一間結合民宿與餐廳的溫馨木屋。雖然外觀像一般的公路休息站，但這裡提供的「傳統冰島家常菜」卻讓無數遊客驚艷，被評價為旅途中最暖胃的一餐。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/rest_8.jpeg",
            alt: "Laxárbakki 餐廳內部的溫馨木質裝潢",
          },
          { type: "text", value: "🍲 必點菜單 (Menu Highlights)：" },
          {
            type: "text",
            value:
              "1. 冰島魚肉燉菜 (Plokkfiskur)：\n這是這裡的絕對招牌！將新鮮鱈魚、馬鈴薯與奶油白醬燉煮在一起，口感綿密濃郁，再鋪上起司焗烤。許多評論大讚這是「整趟冰島之旅最好吃的魚料理」。",
          },
          {
            type: "text",
            value:
              "2. 傳統羊肉湯 (Lamb Soup)：\n料多實在的羊肉湯，肉質軟嫩且沒有羊騷味，搭配無限續加的麵包與奶油，是寒冷天氣下的救贖。",
          },
          {
            type: "text",
            value:
              "3. 招牌漢堡與薯條：\n如果你想吃點美式口味，這裡的牛肉漢堡多汁且份量大，配上酥脆的粗薯條，簡單卻滿足。",
          },
          { type: "text", value: "🏠 用餐氛圍：" },
          {
            type: "text",
            value:
              "1. 河畔景觀：\n餐廳擁有大片窗戶，可以直接眺望 Laxá 河與遠處的雪山。運氣好的話，夏天能看到有人在河裡釣鮭魚，冬天則有機會在晚餐時看見極光。",
          },
          {
            type: "text",
            value:
              "2. 溫馨木屋感：\n內部全由木頭打造，充滿「阿嬤家」般的溫暖感。這裡也是家族經營的旅館，服務人員通常非常親切友善。",
          },
          { type: "text", value: "ℹ️ 實用資訊：" },
          {
            type: "text",
            value:
              "・地理位置：位於雷克雅維克往北約 1 小時車程處，剛過海底隧道後不久，非常適合當作「離開市區後的第一站」或「回程前的最後一餐」。\n・營業時間：餐廳晚餐時段通常為 16:00 - 21:00 (淡旺季可能調整)，建議不要太晚抵達。\n・價格：主餐約 2,500 - 3,500 ISK，物有所值。",
          },
        ],
      },
      {
        id: "d8-hotel",
        time: "20:30",
        place: "住宿：Esjan (Esjan Buses)",
        note: "住進改裝巴士裡 / 眺望 Esja 山",
        mapUrl: "https://maps.app.goo.gl/MZdEJR2yMZQtSKFg8",
        content: [
          {
            type: "text",
            value:
              "今晚的住宿非常特別！Esjan 位於雷克雅維克北邊的 Kjalarnes (開車約 20-25 分鐘)，是一間由「廢棄公車」改裝而成的旅館。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_8.jpg",
            alt: "Esjan 改裝巴士旅館外觀",
          },

          { type: "text", value: "🚌 住宿體驗：" },
          {
            type: "text",
            value:
              "● 房間：\n雖然是巴士改裝，但內部裝潢溫馨，有暖氣、小廚房區域 (通常有微波爐、熱水壺) 和舒適的床鋪。",
          },
          {
            type: "text",
            value:
              "● 衛浴：\n有些房型(巴士)內有衛浴，有些可能需要使用旁邊的公共衛浴棟，入住時請確認。",
          },
          {
            type: "text",
            value:
              "● 極光：\n因為遠離市區光害，且背靠 Esja 山、面海，這裡是極佳的極光觀測點！晚上記得拉開窗簾看看。",
          },

          {
            type: "text",
            value:
              "⚠️ 補給提醒：\n這裡附近沒有便利商店，請務必在雷克雅維克市區買好明天的早餐和晚上的零食再過來。",
          },
        ],
      },
    ],
  },
  // --- 第 9 天 ---
  {
    day: 9,
    title: "2/14 自由行 & 雷克雅維克深度遊 & 機場住宿",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "冰島廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://maps.app.goo.gl/LxGK8ATzwSxNdiS18?g_st=il",
        content: [],
      },
      {
        id: "d9-1",
        time: "10:00",
        place: "雷克雅維克",
        note: "購買紀念品 / 餵鴨子 / 市政廳",
        mapUrl: "https://maps.app.goo.gl/8efVRw6TV5ejhH7Y9",
        content: [
          {
            type: "text",
            value:
              "把握在冰島的最後時光，漫步在主要購物街 Laugavegur。這裡有許多設計小店、戶外用品店 (66°North, Icewear) 和紀念品店。",
          },
          {
            type: "text",
            value:
              "接著走到市政廳旁的 Tjörnin (托寧湖)。湖上有很多天鵝和鴨子，冬天湖面結冰時，當地人甚至會在上面溜冰。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/lake.jpg",
            alt: "雷克雅維克街景與托寧湖",
          },

          { type: "text", value: "🛍️ 必買伴手禮推薦：" },
          {
            type: "text",
            value:
              "1. Omnom 巧克力：\n冰島本土的高級巧克力，包裝非常有設計感，適合送禮。\n2. 魚子醬牙膏 (Kalle's)：\n超市就買得到，雖然其實是瑞典的，但在冰島很普及，味道很特別。\n3. 冰島海鹽 (Saltverk)：\n用像石頭一樣的黑色火山鹽或樺樹煙燻鹽，很適合煮菜。",
          },
        ],
      },
      {
        id: "d9-2",
        time: "00:00",
        place: "N1 加油",
        note: "",
        mapUrl: "https://maps.app.goo.gl/W1uiiKYDmjDRK142A",
        content: [
          {
            type: "text",
            value:
              "冰島加油站（如 N1、Olís）多數採「自助式」且無人值守。這不僅是補給燃料，更是體驗冰島公路旅行的一環。以下是操作流程與千萬要注意的陷阱。",
          },
          { type: "text", value: "⛽ 自助加油標準流程：" },
          {
            type: "text",
            value:
              "1. 插入信用卡 \n2. 輸入 4 位數 PIN 碼 (必備!) \n3. 選擇「固定金額」 (關鍵步驟) \n4. 輸入油槍號碼 \n5. 提槍加油 \n6. 若需收據通常需再次插卡",
          },
          { type: "text", value: "⚠️ 三大保命注意事項：" },
          {
            type: "text",
            value:
              "1. 勿選「加滿 (Fill Up/Full Tank)」：\n選加滿會被機器圈存高額預授權金 (約台幣 5000-7000 元)，解凍退款需數天到一週。建議選擇「固定金額」(如 5000 kr)，加不完只會扣實際金額，不會吃虧。",
          },
          {
            type: "text",
            value:
              "2. 必備 4 位數 PIN 碼：\n冰島無人機器強制要求輸入 PIN。出發前請務必向銀行開通「預借現金密碼」(4碼)。若無 PIN 碼，只能改用 Apple Pay (部分機器支援) 或至商店購買 N1 預付卡 (Prepaid Card)。",
          },
          {
            type: "text",
            value:
              "3. 認明油槍顏色：\n⚫ 黑色 = 柴油 (Diesel)\n🟢 綠色 = 95 汽油 (Bensín)\n千萬別只看顏色，務必核對文字，加錯油會導致引擎報銷且保險不理賠！",
          },
          { type: "text", value: "💡 省錢小撇步：" },
          {
            type: "text",
            value:
              "檢查租車鑰匙上有沒有掛著加油站的「感應扣 (Fob)」。操作時先拿感應扣在機器上嗶一下，再插信用卡，通常每公升能省 3 ISK 左右喔！",
          },
        ],
      },
      {
        id: "d9-3",
        time: "12:30",
        place: "午餐：Brauð & Co 肉桂捲(可選）",
        note: "雷克雅維克最香的麵包店",
        mapUrl: "https://maps.app.goo.gl/qNvzBrFyYSZEzebNA",
        content: [
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/bakery_1.jpg",
            alt: "Brauð & Co 肉桂捲",
          },
          {
            type: "text",
            value:
              "這間色彩繽紛的塗鴉屋是全冰島最出名的麵包店。還沒走進去就能聞到濃濃的肉桂香。一定要點一個剛出爐的「肉桂捲 (Cinnamon Roll)」，外皮酥脆、內部濕潤，配上一杯對面 Reykjavik Roasters 的咖啡，完美！",
          },
        ],
      },
      {
        id: "d9-4",
        time: "14:30",
        place: "Perlan 珍珠樓 (可選）",
        note: "360度觀景台 / 人造冰洞",
        mapUrl: "https://maps.app.goo.gl/V7FA3mXWAw6kvD4k6",
        content: [
          {
            type: "text",
            value:
              "Perlan 建在巨大的熱水儲存槽之上，擁有觀看雷克雅維克全景的最佳視野。如果你前幾天錯過了藍冰洞，這裡裡面有一個長達 100 公尺的「人造冰洞 (Ice Cave)」展覽，是用真的冰雪打造的，非常逼真。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/build.jpg",
            alt: "玻璃穹頂的珍珠樓",
          },
          { type: "text", value: "🌟 必看展覽 (Wonders of Iceland)：" },
          {
            type: "text",
            value:
              "● 真實室內冰洞 (Ice Cave)：\n這不是塑膠做的！館方用 350 噸來自藍山的積雪，打造了一條長達 100 公尺、溫度維持在 -10°C 的真實冰洞。你可以穿上館方提供的保暖背心，親手觸摸真正的冰川冰。",
          },
          {
            type: "text",
            value:
              "● Áróra 極光天文館 (Planetarium)：\n這是冰島唯一的天文館，播放 8K 高畫質的極光秀。躺在舒適的椅子上，看著穹頂螢幕上舞動的極光，效果非常震撼，而且保證看得到！。",
          },
          {
            type: "text",
            value:
              "● 拉特拉爾角懸崖 (Látrabjarg Cliff)：\n這是一座 10 公尺高的仿真海鳥懸崖，上面有栩栩如生的帕芬鳥 (Puffin) 模型，讓你不用跑到西峽灣也能近距離觀察這些可愛的海鸚鵡。",
          },

          { type: "text", value: "🔭 360度觀景台 (Observation Deck)：" },
          {
            type: "text",
            value:
              "位於 4 樓的戶外觀景台環繞整個建築一圈，可以無死角俯瞰雷克雅維克市區、海港、甚至遠方的斯奈山冰川。這裡也是拍雷克雅維克全景照的最佳地點。",
          },

          { type: "text", value: "🍽️ 餐飲推薦：" },
          {
            type: "text",
            value:
              "● 旋轉餐廳 (Perlan Restaurant)：\n位於 5 樓玻璃穹頂下，地板會緩慢旋轉（約 2 小時轉一圈），邊吃飯邊看風景非常浪漫。",
          },
          {
            type: "text",
            value:
              "● 冰淇淋店 (Ice Cream Parlour)：\n位於 4 樓，這裡的自製冰淇淋非常有名，推薦試試看！。",
          },

          { type: "text", value: "ℹ️ 實用資訊：" },
          {
            type: "text",
            value:
              "● 門票：\n觀景台、冰洞、天文館的票可以分開買，也可以買套票 (All-in-one)，建議買套票比較划算。\n● 交通：\n提供免費停車場。如果沒開車，可搭乘 18 號公車抵達。",
          },
        ],
      },
      {
        id: "d9-5",
        time: "18:00",
        place: "情人節晚餐：Messinn(可選）",
        note: "平價美味的鐵鍋魚料理",
        mapUrl: "https://maps.app.goo.gl/b94a9Hyhv3MHeNkt8",
        content: [
          {
            type: "text",
            value:
              "今天是 2/14 情人節，推薦這間氣氛好、食物好吃且價格合理的餐廳。他們的招牌是「鐵鍋魚 (Pan-fried Arctic Char)」，北極紅點鮭魚肉質細嫩，搭配馬鈴薯和奶油醬汁，用熱騰騰的鐵鍋直接上桌。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/m_restaurant.webp",
            alt: "Messinn",
          },
          {
            type: "text",
            value: "⚠️ 提醒：情人節這天餐廳通常會客滿，強烈建議提早訂位。",
          },
        ],
      },
      {
        id: "d9-6",
        time: "23:30",
        place: "還車 (Return Car)",
        note: "檢查車況 / 歸還鑰匙",
        mapUrl: "https://goo.gl/maps/car-rental-return",
        content: [
          {
            type: "text",
            value:
              "前往您租車公司指定的還車地點（通常在機場旁的 Rental Car Area）。",
          },
          { type: "text", value: "⚠️ 還車檢查清單：" },
          {
            type: "text",
            value:
              "1. 外觀檢查：\n和工作人員一起確認車身有無新增刮痕或凹痕。如果您有保全險 (SCDW, GP)，通常流程會很快。",
          },
          {
            type: "text",
            value:
              "2. 拍照存證：\n在交出鑰匙前，建議用手機拍下車子四周、里程數和油表的照片，作為還車時車況良好的證據。",
          },
          {
            type: "text",
            value:
              "3. 接駁車：\n還完車後，搭乘免費的機場接駁巴士 (Airport Shuttle) 前往航廈 (Terminal) 或飯店。",
          },
        ],
      },
      {
        id: "d9-hotel",
        time: "23:55",
        place: "住宿：Aurora Hotel at KEF Airport",
        note: "走路 5 分鐘進航廈 / 早班機救星",
        mapUrl: "https://maps.app.goo.gl/FmSgu83Dh2GSBLhv6",
        content: [
          {
            type: "text",
            value:
              "這間飯店最大的優勢就是「位置」！它是唯一一間位於機場航廈步行距離內的飯店。對於明天一早要搭飛機的人來說，不用半夜趕接駁車，可以睡到最後一刻。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_9.jpg",
            alt: "Aurora Hotel 外觀",
          },
          { type: "text", value: "🏨 住宿亮點：" },
          {
            type: "text",
            value:
              "● 步行即達：\n走出飯店大門，拉著行李走約 200-300 公尺就到出境大廳，超級方便。",
          },
          {
            type: "text",
            value:
              "● 早餐時間：\n為了配合早班機旅客，早餐通常從凌晨 04:00 或 04:30 就開始供應（請依現場公告為準）。",
          },
          {
            type: "text",
            value:
              "● 租車公司：\n大部分租車公司都在機場旁，您可以在還完車後，直接走過來入住。",
          },
        ],
      },
    ],
  },
  // --- 第 10 天 ---
  {
    day: 10,
    title: "2/15 告別冰島，哈囉倫敦！",
    items: [
      {
        id: "d10-1",
        time: "05:00",
        place: "凱夫拉維克國際機場 (KEF ✈️ LHR)",
        note: "訂單編號：BEZMGQ，飛機：FI455 Icelandair",
        mapUrl: "https://maps.app.goo.gl/ACwFGjhu8SAiJ8rV6",
        content: [
          {
            type: "text",
            value: "走路到機場（4 分鐘）",
          },
          {
            type: "text",
            value: "飛機時間：07:30-10:50",
          },
          {
            type: "text",
            value:
              "早安！因為昨晚住在機場旁的 Aurora Hotel，今天早上不需要趕接駁車。直接拉著行李走路約 300 公尺 (4-5 分鐘) 就能抵達 Keflavík 機場的出境大廳。",
          },
          { type: "text", value: "✈️ 飛行提醒：" },
          {
            type: "text",
            value:
              "● 申根區離境：\n冰島是申根區，英國「不是」。所以在冰島機場通關時，會經過護照查驗 (Passport Control) 蓋離境章。抵達英國後也需要再過一次英國海關。",
          },
          {
            type: "text",
            value:
              "● 時差：\n冰島 (GMT) 和英國 (GMT) 冬季時間是「沒有時差」的！不用調整手錶，非常方便。",
          },
        ],
      },
      {
        id: "d10-2",
        time: "12:00",
        place: "Ibis Earls Court (寄放行李)",
        note: "位於西倫敦的便捷住宿",
        mapUrl: "https://maps.app.goo.gl/pEgMRe3ggBsmLuVg8",
        content: [
          {
            type: "text",
            value:
              "抵達倫敦後，先前往飯店寄放行李。Ibis Earls Court 位於西倫敦，交通非常方便。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_10.jpg",
            alt: "Ibis Earls Court",
          },
          { type: "text", value: "🚇 交通攻略 (How to get there)：" },
          {
            type: "text",
            value:
              "● 最近地鐵站：West Brompton (綠色 District Line)。\n從地鐵站出來走路約 3-5 分鐘即可抵達飯店。",
          },
          {
            type: "text",
            value:
              "● 從機場來：\n如果是從 Heathrow (LHR) 機場，搭地鐵 Piccadilly Line 到 Earl's Court 站，再轉 District Line 一站到 West Brompton (或直接從 Earl's Court 走過來約 10 分鐘)。",
          },
        ],
      },
      {
        id: "d10-3",
        time: "15:00",
        place: "Big Ben 大笨鐘 & 國會大廈",
        note: "倫敦最經典地標 / 2022年修復完成",
        mapUrl: "https://maps.app.goo.gl/XMyPbo7UesezoERd7",
        content: [
          {
            type: "text",
            value:
              "Big Ben 是倫敦的地標，也是英國國會大廈 (Palace of Westminster) 的鐘樓。它剛剛經歷了長達 5 年的維修，終於在 2022 年拆除鷹架，露出煥然一新的金光閃閃面貌（原本是黑黑舊舊的）。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/clock.jpeg",
            alt: "金光閃閃的大笨鐘與紅色雙層巴士",
          },

          { type: "text", value: "📜 歷史小知識：" },
          {
            type: "text",
            value:
              '其實 "Big Ben" 指的是塔裡面那顆重達 13 噸的「大鐘」，而不是塔本身。這座塔在 2012 年為了紀念伊莉莎白二世登基鑽石禧年，正式改名為「伊莉莎白塔 (Elizabeth Tower)」。',
          },

          { type: "text", value: "📸 最佳拍照點：" },
          {
            type: "text",
            value:
              "1. 西敏橋上 (Westminster Bridge)：最經典角度，但也最多人。\n2. 對岸的橋洞下：走過橋到南岸，找一個橋墩的拱門當相框，拍大笨鐘非常有氛圍。\n3. 紅色電話亭：在大笨鐘對街 (Great George St) 有幾個紅色電話亭，可以拍出「電話亭+大笨鐘」的完美倫敦意象。",
          },
        ],
      },
      {
        id: "d10-4",
        time: "16:30",
        place: "London Eye 倫敦眼",
        note: "千禧之輪 / 俯瞰泰晤士河",
        mapUrl: "https://maps.app.goo.gl/K5fV6dpDRYBCijmn9",
        content: [
          {
            type: "text",
            value:
              "就在大笨鐘的斜對岸（走過西敏橋就到了）。倫敦眼原本是為了慶祝西元 2000 年千禧年而蓋的「暫時性建築」，預計 5 年後拆除，結果太受歡迎而保留至今，現在是全球最熱門的付費觀光景點之一。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/big_eyes.jpg",
            alt: "巨大的倫敦眼摩天輪",
          },

          { type: "text", value: "🎡 搭乘攻略：" },
          {
            type: "text",
            value:
              "● 轉一圈時間：約 30 分鐘。\n● 票價：現場買很貴且要排隊，強烈建議「提前上網買票」 (Standard Ticket 約 £30-35)。\n● 景色：天氣好時可以看到溫莎城堡。傍晚去最美，可以同時看到日落和亮燈後的夜景。",
          },

          { type: "text", value: "⚠️ 治安提醒 (Safety)：" },
          {
            type: "text",
            value:
              "西敏橋 (Westminster Bridge) 連接大笨鐘和倫敦眼，這裡遊客如織，是倫敦「扒手」最猖獗的地方！在橋上拍照時，包包一定要背前面，手機拿好，不要讓陌生人靠太近。",
          },
        ],
      },
      {
        id: "d10-hotel",
        time: "19:00",
        place: "住宿：Ibis Earls Court",
        note: "地鐵 West Brompton 站旁",
        mapUrl: "https://maps.app.goo.gl/pEgMRe3ggBsmLuVg8",
        content: [
          {
            type: "text",
            value:
              "結束第一天的倫敦探險，搭地鐵回到西倫敦的家。這間飯店是典型的商務旅館，房間雖不大但乾淨齊全。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_10.jpg",
            alt: "Ibis Earls Court 飯店外觀",
          },
          { type: "text", value: "🏪 周邊機能：" },
          {
            type: "text",
            value:
              "● 超市：附近稍微走幾分鐘有 Tesco Express 或 Sainsbury's Local。\n● 晚餐：Earl's Court 地鐵站附近有很多餐廳（Nando's 烤雞、義大利麵、酒吧等），比飯店周邊熱鬧很多。",
          },
        ],
      },
    ],
  },
  // --- 第 11 天 ---
  {
    day: 11,
    title: "2/16 皇室風華與倫敦塔傳奇",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://www.toiletmap.org.uk/",
        content: [],
      },
      {
        id: "d11-1",
        time: "09:00",
        place: "Westminster Abbey 西敏寺",
        note: "歷代國王加冕地 / 達爾文牛頓長眠處",
        mapUrl: "https://maps.app.goo.gl/GPpEnUJ1agGHUVCK7",
        content: [
          {
            type: "text",
            value:
              "這座哥德式建築是英國地位最高的教堂。自 1066 年以來，幾乎每一位英國君主（包含伊莉莎白二世和現在的查爾斯三世）都在此舉行加冕典禮。這裡也是威廉王子與凱特的婚禮舉辦地。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/church_2.jpg",
            alt: "壯麗的西敏寺外觀",
          },
          { type: "text", value: "📜 歷史看點：" },
          {
            type: "text",
            value:
              "除了皇室，這裡也是英國「偉人」的長眠地。你可以找到牛頓 (Newton)、達爾文 (Darwin)、狄更斯 (Dickens) 以及霍金 (Hawking) 的墓碑或紀念碑。踩在這些歷史巨人的名字上，感覺非常奇妙。",
          },
          {
            type: "text",
            value:
              "⚠️ 參觀提醒：教堂內部神聖，雖然現在開放拍照，但請保持安靜。語音導覽機 (Audio Guide) 通常包含在門票內，有中文解說，非常值得聽。",
          },
        ],
      },
      {
        id: "d11-2",
        time: "10:45",
        place: "Buckingham Palace 白金漢宮",
        note: "衛兵交接儀式 / 英國王室居所",
        mapUrl: "https://maps.app.goo.gl/fSc9SBZYG5Bj3HJ38",
        content: [
          {
            type: "text",
            value:
              "從西敏寺穿過聖詹姆斯公園 (St James's Park) 走路約 15 分鐘即可抵達。您設定 10:45 是非常聰明的時間，因為著名的「衛兵交接 (Changing of the Guard)」通常在 11:00 正式開始，必須提早去卡位！",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/queen.jpg",
            alt: "穿著紅衣黑帽的皇家衛兵",
          },
          { type: "text", value: "💂‍♂️ 觀賞攻略：" },
          {
            type: "text",
            value:
              "● 時間：冬季通常是「週一、三、五、日」舉行。正式儀式 11:00 開始，但建議 **10:15 - 10:30** 就先去卡位。",
          },
          {
            type: "text",
            value:
              "● 取消風險：如果當天「下大雨」，儀式會臨時取消！請當天早上查看官方 Twitter (@ChangingGuard) 確認。",
          },
          {
            type: "text",
            value:
              "● 最佳位置：維多利亞女王紀念碑 (The Victoria Memorial) 的台階上，視野最高。",
          },

          { type: "text", value: "🚩 國王在家嗎？看旗幟！" },
          {
            type: "text",
            value:
              "抬頭看宮殿上方的旗幟：\n● 君主旗 (紅黃藍配色)：國王 **在** 家。\n● 英國國旗 (米字旗)：國王 **不在** 家。",
          },

          { type: "text", value: "⚠️ 極重要注意事項 (Must Read)：" },
          {
            type: "text",
            value:
              "1. 廁所警告：\n白金漢宮周圍「完全沒有公廁」！最近的付費廁所在聖詹姆斯公園裡 (走約 10 分鐘)。請務必在地鐵站或咖啡廳先解決生理需求。",
          },
          {
            type: "text",
            value:
              "2. 扒手警戒：\n交接儀式時人潮極度擁擠，是倫敦扒手最喜歡下手的時刻。請將背包背在前面，手機錢包絕對不離手。",
          },
          {
            type: "text",
            value:
              "3. 勿觸碰衛兵：\n他們是配有真槍實彈的現役軍人。請保持距離，不要試圖觸碰或阻擋行進路線，否則會被喝斥。",
          },
        ],
      },
      {
        id: "d11-3",
        time: "12:30",
        place: "午餐：Borough Market",
        note: "倫敦最古老美食市集 / 哈利波特取景地",
        mapUrl: "https://maps.app.goo.gl/UMkQttaxTSE633ee8",
        content: [
          {
            type: "text",
            value:
              "看完衛兵，搭地鐵 (Jubilee Line) 到 London Bridge 站。Borough Market 是倫敦最棒的美食戰場，已有千年歷史！",
          },
          {
            type: "text",
            value:
              "這裡是倫敦最古老的食品市場，歷史可追溯到 11 世紀（超過 1000 年！）。位於倫敦橋下，綠色的維多利亞式鐵路拱橋是它的標誌。這裡匯集了全英國最頂級的食材與街頭小吃，連名廚 Jamie Oliver 都是常客。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/market.jpg",
            alt: "Borough Market",
          },
          { type: "text", value: "😋 必吃五大天王 (Must Eats)：" },
          {
            type: "text",
            value:
              "1. Richard Haward's Oysters：\n產地直送的生蠔，非常新鮮且便宜（一顆約 £1.5 - £2），立食體驗非常道地。",
          },
          {
            type: "text",
            value:
              "2. Bread Ahead Bakery：\n必買「爆漿甜甜圈 (Doughnuts)」，經典的香草卡士達 (Vanilla Custard) 或海鹽焦糖 (Salted Caramel) 口味，咬下去內餡會炸出來，超級滿足。",
          },
          {
            type: "text",
            value:
              "3. Brindisa：\n門口大排長龍就是在買這個！「西班牙臘腸捲 (Chorizo Roll)」，剛煎好的臘腸配上烤甜椒和芝麻葉，香氣逼人。",
          },
          {
            type: "text",
            value:
              "4. Kappacasein Dairy：\n起司控的天堂。必點「烤起司三明治 (Cheese Toastie)」或直接淋在馬鈴薯上的熱熔起司 (Raclette)。",
          },
          {
            type: "text",
            value:
              "5. Monmouth Coffee：\n就在市場對面，是倫敦最早的精品咖啡店之一。手沖咖啡 (Filter Coffee) 非常有名。",
          },

          { type: "text", value: "⚠️ 參觀小撇步 (Tips)：" },
          {
            type: "text",
            value:
              "● 公休日：\n週一市場大部分攤位休息（只有少數營業），週三至週六攤位最齊全。週日則只開到下午 4 點。",
          },
          {
            type: "text",
            value:
              "● 座位：\n市場內座位非常少，大部分都是「立食」或拿到旁邊的教堂庭院吃。建議輕裝簡便，不要背太大的包包。",
          },
          {
            type: "text",
            value:
              "● 廁所：\n市場內設有免費公廁，維持得還算乾淨，這在倫敦很難得。",
          },
        ],
      },
      {
        id: "d11-4",
        time: "14:30",
        place: "London Tower 倫敦塔",
        note: "世界遺產 / 皇冠珠寶 / 倫敦最血腥的歷史",
        mapUrl: "https://maps.app.goo.gl/CmV74oasEmBpv5Yi8",
        content: [
          {
            type: "text",
            value:
              "吃飽後走過倫敦橋就到北岸的倫敦塔。別被名字騙了，它不是塔，而是一座巨大的「城堡」。它曾是皇宮、堡壘、軍火庫，最著名的是作為「監獄」和「刑場」。",
          },
          {
            type: "text",
            value:
              "別被名字騙了，它不是一座塔，而是一座巨大的「城堡要塞」。由「征服者威廉 (William the Conqueror)」於 1078 年建造，最初是為了鎮壓倫敦市民。近千年來，它曾是皇宮、軍火庫、造幣廠，但最著名的身份是「國家監獄」和「刑場」。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/london_h.jpg",
            alt: "倫敦塔的城牆與白塔",
          },

          { type: "text", value: "🩸 著名的血腥歷史 (Dark History)：" },
          {
            type: "text",
            value:
              "● 安妮·博林 (Anne Boleyn)：\n亨利八世的第二任妻子，因為生不出兒子被誣陷通姦，最後在塔內的綠地 (Tower Green) 被斬首。傳說她的幽靈至今仍會捧著頭在塔內遊蕩。",
          },
          {
            type: "text",
            value:
              "● 塔中王子 (Princes in the Tower)：\n愛德華四世的兩個小兒子（12歲和9歲）被關進塔裡後神秘失蹤，兩百年後工人在樓梯下發現兩具兒童骨骸，至今仍是英國史上最大懸案。",
          },

          { type: "text", value: "💎 必看亮點 (Highlights)：" },
          {
            type: "text",
            value:
              "1. 皇冠珠寶 (The Crown Jewels)：\n這裡收藏著現任國王加冕時使用的聖愛德華皇冠、帝國皇冠（上面有 317 克拉的「庫里南二號」鑽石）以及鑲嵌著世界最大白鑽「非洲之星 (530克拉)」的權杖。排隊看這個絕對值得！",
          },
          {
            type: "text",
            value:
              "2. 白塔 (White Tower)：\n城堡正中央最古老的建築，現在是皇家軍械庫，展示亨利八世巨大的盔甲和各式中世紀武器。",
          },
          {
            type: "text",
            value:
              "3. 皇家守衛 (Yeoman Warders)：\n身穿藍紅制服、胸前有皇冠標誌，俗稱 Beefeaters (吃牛肉的人)。他們不僅是守衛，更是最幽默的導覽員。強烈建議參加他們免費的導覽團 (約 60 分鐘)，聽他們講鬼故事非常精彩。",
          },

          { type: "text", value: "🦅 渡鴉傳說 (The Ravens)：" },
          {
            type: "text",
            value:
              "塔內飼養著 6-7 隻巨大的黑色渡鴉。傳說「如果渡鴉飛離倫敦塔，白塔將會倒塌，英國將會滅亡」。所以皇室非常迷信，設有專門的「渡鴉官」照顧牠們，甚至還剪了羽毛防止牠們飛太遠。",
          },

          { type: "text", value: "⚠️ 參觀小撇步：" },
          {
            type: "text",
            value:
              "● 購票：這是一個非常熱門的景點，強烈建議提前上網買票，可以省去現場排隊購票的時間。",
          },
          {
            type: "text",
            value:
              "● 順序：一進場建議「先衝皇冠珠寶館 (Jewel House)」，因為那裡的隊伍通常最長。",
          },
        ],
      },
      {
        id: "d11-5",
        time: "16:30",
        place: "Tower Bridge 倫敦塔橋",
        note: "倫敦最美地標 / 注意不是 London Bridge",
        mapUrl: "https://maps.app.goo.gl/PwUYFNKuXLdHxgBu9",
        content: [
          {
            type: "text",
            value:
              "這就是那座童謠裡「跨下來」的橋（雖然童謠唱的是 London Bridge，但大家腦中浮現的都是這座）。它是倫敦最美的地標，兩座哥德式塔樓非常壯觀。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/town_london.jpg",
            alt: "Tower Bridge 倫敦塔橋",
          },
          { type: "text", value: "📸 拍照攻略：" },
          {
            type: "text",
            value:
              "1. 橋上人行道：走在橋上拍藍色的懸索。\n2. 泰晤士河南岸 (Potters Fields Park)：過了橋往右走，在草地上可以拍到整座橋的全景，是最佳合照點。",
          },
          {
            type: "text",
            value:
              "⚠️ 區分：\n請注意，剛剛在市場旁邊那座平平無奇的水泥橋叫「London Bridge (倫敦橋)」，這座有兩個尖塔的華麗橋樑才是「Tower Bridge (倫敦塔橋)」。",
          },
        ],
      },
      {
        id: "d11-6",
        time: "18:00",
        place: "Regent Street 攝政街",
        note: "購物天堂 / 絕美弧形街道 / Hamleys",
        mapUrl: "https://maps.app.goo.gl/p8HRUEzB3BTfbbGN6",
        content: [
          {
            type: "text",
            value:
              "搭地鐵到 Oxford Circus 站。這裡是倫敦最氣派的購物街，兩旁是優雅的喬治亞式建築，著名的「弧形街道」非常適合街拍。",
          },
          { type: "text", value: "🧸 必逛：Hamleys (玩具王國)" },
          {
            type: "text",
            value:
              "世界最古老、最大的玩具店，整整 7 層樓！這裡賣的不是玩具，是「快樂」。店員會在門口吹泡泡、變魔術、玩無人機。不管幾歲進去都會變成孩子。想買柏靈頓熊 (Paddington Bear) 或樂高 (Lego) 倫敦限定版，來這裡就對了。",
          },

          { type: "text", value: "🛍️ 必逛：Liberty London (百年百貨)" },
          {
            type: "text",
            value:
              "嚴格來說它在攝政街旁邊的巷子 (Great Marlborough St)，但絕對必去！這是一棟黑白色的「都鐸式木造建築」，已有百年歷史。裡面賣的是最高級的布料、絲巾和設計師選物。光是欣賞那古老的木造樓梯和採光天井就值得了。",
          },

          { type: "text", value: "🇬🇧 英國本土名牌旗艦店：" },
          {
            type: "text",
            value:
              "1. Burberry：\n全球旗艦店就在這裡，款式最齊全，想買經典風衣或圍巾的可以來朝聖。\n2. Jo Malone：\n攝政街上有旗艦店，價格通常比台灣便宜，是送禮首選。\n3. Barbour：\n英國皇室御用的防水外套品牌，非常有英倫紳士感。\n4. The Body Shop / Lush：\n這些源自英國的香氛保養品牌，在當地的價格非常親民。",
          },

          { type: "text", value: "⚠️ 購物重要提醒 (Tax Refund)：" },
          {
            type: "text",
            value:
              "這點非常重要！自從英國脫歐後，英國政府已經**「取消」了外國遊客的增值稅退稅 (VAT Refund)**。也就是說，現在在倫敦買名牌包或高價品，是**不能退稅**的（直接含稅價）。雖然英鎊匯率有時不錯，但少了 12-20% 的退稅，大額消費前請先按計算機比價一下。",
          },
        ],
      },
      {
        id: "d11-hotel",
        time: "21:00",
        place: "住宿：Ibis Earls Court",
        note: "地鐵 District Line 直達",
        mapUrl: "https://maps.app.goo.gl/9BQHvaN1RTE35wSbA",
        content: [
          {
            type: "text",
            value:
              "逛累了嗎？從 Piccadilly Circus 或 Oxford Circus 搭地鐵返回西倫敦休息。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_10.jpg",
            alt: "Ibis Earls Court",
          },
          {
            type: "text",
            value:
              "🚇 回程建議：\n如果是從 Piccadilly Circus 出發，搭乘深藍色 Piccadilly Line 直達 Earl's Court 站，再走回飯店，不用轉車最方便。",
          },
        ],
      },
    ],
  },
  // --- 第 12 天 ---
  {
    day: 12,
    title: "2/17 皇室花園與泰晤士河巡航",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://www.toiletmap.org.uk/",
        content: [],
      },
      {
        id: "d12-1",
        time: "10:00",
        place: "Kensington Palace 肯辛頓宮",
        note: "維多利亞女王出生地 / 黛安娜王妃故居",
        mapUrl: "https://maps.app.goo.gl/9b4L4SABYKwheWgG8",
        content: [
          {
            type: "text",
            value:
              "這座宮殿位於海德公園的西側，不僅是維多利亞女王出生和長大的地方，也是黛安娜王妃生前的居所。現在則是威廉王子與凱特王妃在倫敦的家（雖然他們主要住溫莎）。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/queen_2.jpg",
            alt: "肯辛頓宮與花園",
          },

          { type: "text", value: "👑 必看亮點：" },
          {
            type: "text",
            value:
              "● 國王與皇后的國事廳 (State Apartments)：\n華麗的喬治亞式建築，尤其是「國王樓梯 (King's Staircase)」上的壁畫非常生動。",
          },
          {
            type: "text",
            value:
              "● 維多利亞的童年 (Victoria: A Royal Childhood)：\n展出了女王小時候的玩具、衣服，以及她發現自己成為女王的那間房間。",
          },
          {
            type: "text",
            value:
              "● 下沉式花園 (Sunken Garden)：\n這是黛安娜王妃生前最愛的地方。花園裡有一座紀念她的銅像，周圍種滿了她喜歡的白花。",
          },

          {
            type: "text",
            value:
              "☕ 橘園下午茶 (The Orangery)：\n如果時間允許，宮殿旁的橘園餐廳非常漂亮，適合喝杯咖啡。",
          },
        ],
      },
      {
        id: "d12-2",
        time: "13:00",
        place: "Moco Museum 現代藝術博物館",
        note: "2024年新開幕 / Banksy & KAWS",
        mapUrl: "https://maps.app.goo.gl/kZtamyocZjnkKXju9",
        content: [
          {
            type: "text",
            value:
              "Moco Museum 是來自阿姆斯特丹和巴塞隆納的超人氣現代美術館，倫敦館於 2024 年才剛在 Marble Arch 開幕。這裡展出的不是古典油畫，而是最潮的街頭藝術與數位藝術。",
          },
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/musum_2.jpg",
            alt: "Moco Museum",
          },

          { type: "text", value: "🎨 必看三大展區：" },
          {
            type: "text",
            value:
              "1. 街頭藝術大師 (Moco Masters)：\n這裡有最完整的 **Banksy (班克斯)** 收藏，包含著名的《氣球女孩 (Girl with Balloon)》。還有 **Jean-Michel Basquiat**、**Keith Haring** 和 **KAWS** 的經典公仔，潮流感十足。",
          },
          {
            type: "text",
            value:
              "2. 現代大師 (Modern Masters)：\n展出 **Andy Warhol (安迪沃荷)** 的普普藝術作品，以及 **Yayoi Kusama (草間彌生)** 的波點南瓜與畫作。",
          },
          {
            type: "text",
            value:
              "3. 數位沉浸體驗 (Digital Immersive)：\n地下一樓有超好拍的「無限鏡屋 (Infinity Room)」與數位藝術裝置。雖然規模比不上 teamLab，但在倫敦市中心能拍到這種夢幻照片非常難得。",
          },

          { type: "text", value: "📸 參觀小撇步 (Tips)：" },
          {
            type: "text",
            value:
              "● 拍照友善：這是一間「鼓勵拍照」的博物館，請準備好手機容量，每個角落都很好拍。",
          },
          {
            type: "text",
            value:
              "● 羅比威廉斯特展：\n如果運氣好，還能看到英國歌王 Robbie Williams 的跨界藝術展《Radical Honesty》，探討心理健康與成名代價。",
          },
          {
            type: "text",
            value:
              "● 停留時間：\n展館共三層樓，但空間不算大，約 **60-90 分鐘** 就可以輕鬆逛完。",
          },
        ],
      },
      {
        id: "d12-3",
        time: "15:30",
        place: "St. Paul's Cathedral 聖保羅座堂",
        note: "世界第二大圓頂 / 黛安娜婚禮舉辦地",
        mapUrl: "https://maps.app.goo.gl/q8c3u92bF6mwN9aJ8",
        content: [
          {
            type: "text",
            value:
              "這座巴洛克風格的傑作由克里斯多佛·雷恩爵士 (Sir Christopher Wren) 在 1666 年倫敦大火後重建。高達 111 公尺的巨大圓頂，曾統治倫敦天際線長達 250 年。這裡也是 1981 年查爾斯王子與黛安娜王妃舉行世紀婚禮的地方。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/church_3.jpg",
            alt: "宏偉的聖保羅座堂圓頂與內部",
          },

          { type: "text", value: "🧗 必做挑戰：攻頂三部曲 (The Dome Climb)" },
          {
            type: "text",
            value:
              "如果您體力允許，強烈建議挑戰爬 528 階樓梯到頂端，風景絕對值得：\n1. 耳語廊 (Whispering Gallery) [257階]：\n位於圓頂內部的迴廊。因為特殊的聲學設計，對著牆壁講悄悄話，對面的人（距離 30 公尺）真的聽得到！\n2. 石迴廊 (Stone Gallery) [376階]：\n第一層戶外觀景台，可以近距離看圓頂的結構。\n3. 金迴廊 (Golden Gallery) [528階]：\n最高點的觀景台，視野極佳，可以俯瞰泰晤士河、千禧橋和碎片塔 (The Shard)。",
          },

          { type: "text", value: "⚰️ 地下墓穴 (The Crypt)：" },
          {
            type: "text",
            value:
              "教堂地下室是歐洲最大的墓穴之一。這裡安葬了兩位英國最偉大的軍事英雄：擊敗拿破崙的威靈頓公爵 (Wellington) 和納爾遜將軍 (Nelson)。建築師雷恩爵士也長眠於此，他的墓誌銘寫著：「如果你在尋找他的紀念碑，就看看你的周圍吧 (Si monumentum requiris, circumspice)」。",
          },

          { type: "text", value: "⚠️ 極重要時間警告 (Last Entry)：" },
          {
            type: "text",
            value:
              "教堂的**最後入場時間通常是 16:00** (16:30 閉館)。\n您安排 **15:30** 抵達非常驚險！建議前面的 Moco Museum 行程盡量準時結束，最好能提早一點到，否則可能來不及登頂，只能參觀一樓。",
          },
        ],
      },
      {
        id: "d12-4",
        time: "17:30",
        place: "Uber Boat (Blackfriars → Putney)",
        note: "RB6 航線 / 泰晤士河夕陽巡航",
        mapUrl: "https://maps.app.goo.gl/9gbBF7QFcca6beAo7",
        content: [
          {
            type: "text",
            value:
              "參觀完聖保羅座堂，走路 5-8 分鐘到河邊的 Blackfriars Pier。我們要搭乘 Uber Boat (Thames Clippers) 的 **RB6 航線** 回西倫敦。",
          },

          { type: "text", value: "⛴️ 航程亮點：" },
          {
            type: "text",
            value:
              "這是一條「通勤航線」，通常只有平日上下班時間才有船 (往西開)。\n您將從水上穿越倫敦市中心，經過倫敦眼、國會大廈 (Big Ben)、巴特西發電站 (Battersea Power Station)，最後抵達 Putney Bridge。全程約 50 分鐘，沿途夜景美不勝收。",
          },

          { type: "text", value: "🎫 如何搭乘：" },
          {
            type: "text",
            value:
              "不需要預約！直接用 Oyster Card 或感應信用卡 (Contactless) 刷卡上船即可。也可以用 Uber App 買票。",
          },

          { type: "text", value: "🚌 抵達後交通：" },
          {
            type: "text",
            value:
              "在 Putney Pier 下船後，過橋到 Putney Bridge 地鐵站 (District Line)，搭一站就到 West Brompton (飯店)，或是搭公車 (如 74, 430 號) 也很方便。",
          },
        ],
      },
      {
        id: "d12-hotel",
        time: "19:00",
        place: "住宿：Ibis Earls Court",
        note: "西倫敦舒適之夜",
        mapUrl: "https://maps.app.goo.gl/9BQHvaN1RTE35wSbA",
        content: [
          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/hotel_10.jpg",
            alt: "Ibis Earls Court",
          },
          {
            type: "text",
            value:
              "回到飯店休息。如果晚餐還沒吃，Putney Bridge 附近有很多不錯的河岸餐廳，或是回到 Earl's Court 附近覓食。",
          },
        ],
      },
    ],
  },
  // --- 第 13 天 ---
  {
    day: 13,
    title: "2/18 KKDay 巨石陣一日遊",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://www.toiletmap.org.uk/",
        content: [],
      },
      {
        id: "d13-1",
        time: "07:30",
        place: "集合出發 (Meeting Point)",
        note: "通常在 Victoria Coach Station 或 Earl's Court",
        mapUrl: "https://maps.app.goo.gl/FqFz7VNxCSEb4qg78",
        content: [
          {
            type: "text",
            value:
              "請務必再次確認您的電子憑證 (Voucher) 上的集合時間與地點。一日遊巴士通常非常準時，遲到是不等人的。",
          },
          {
            type: "text",
            value:
              "💡 隨身準備：\n因為車程很長，建議隨身攜帶水和一些零食充飢。車上通常有 USB 充電孔，但建議還是帶著行動電源。",
          },
        ],
      },
      {
        id: "d13-2",
        time: "00:00",
        place: "Windsor Castle 溫莎堡",
        note: "女王週末的家 / 英國皇室象徵",
        mapUrl: "https://maps.app.goo.gl/tSknjTjMio9pgEzJ9",
        content: [
          {
            type: "text",
            value:
              "這是世界上有人居住的最大城堡，也是已故伊莉莎白女王最喜歡的「週末別墅」。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/queen_3.jpg",
            alt: "壯觀的溫莎堡外觀",
          },

          { type: "text", value: "⚠️ 週三不開放警告 (Closed on Wednesdays)：" },
          {
            type: "text",
            value:
              "由於您是週三前往，城堡內部（國事廳、聖喬治禮拜堂）可能關閉。導遊通常會帶領進行「小鎮巡禮」。",
          },

          { type: "text", value: "🚶 替代行程建議：" },
          {
            type: "text",
            value:
              "1. 溫莎小鎮漫步：\n欣賞城堡宏偉的外牆與圓塔 (Round Tower)。\n2. 伊頓公學 (Eton College)：\n走過泰晤士河上的橋，對岸就是威廉與哈利王子的母校，也是著名的貴族男校。\n3. 歪屋 (The Crooked House)：\n就在城堡對面，一棟傾斜得很誇張的茶屋，非常有趣。",
          },
        ],
      },
      {
        id: "d13-3",
        time: "00:00",
        place: "Stonehenge 巨石陣",
        note: "世界文化遺產 / 千古之謎",
        mapUrl: "https://maps.app.goo.gl/geS14y9rY2pk38EY9",
        content: [
          {
            type: "text",
            value:
              "在一片荒蕪的索爾茲伯里平原 (Salisbury Plain) 上，矗立著這些重達 25 噸的巨石。它們是怎麼搬來的？是為了天文觀測還是宗教祭祀？至今仍是謎團。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/big_rock.jpg",
            alt: "神秘的巨石陣",
          },

          { type: "text", value: "❓ 千古謎團 (The Mysteries)：" },
          {
            type: "text",
            value:
              "1. 怎麼搬運的？\n這些巨石分為兩種：巨大的撒森岩 (Sarsen) 和較小的藍石 (Bluestones)。考古發現，那些藍石竟然是從 **240 公里外** 的威爾斯 (Wales) 運來的！在沒有輪子和起重機的史前時代，這幾乎是不可能的任務。",
          },
          {
            type: "text",
            value:
              "2. 用途是什麼？\n至今沒有定論。有人說是為了「祭祀祖先」，有人說是「古代天文台」，也有人認為是「治療中心」。最神奇的是，巨石陣的主軸線完美對齊了 **夏至的日出** 與 **冬至的日落**。",
          },

          { type: "text", value: "🎧 參觀攻略 (Must Do)：" },
          {
            type: "text",
            value:
              "● 語音導覽 (Audio Guide)：\n這是參觀的靈魂！強烈建議下載官方 App 或現場領取導覽機（通常包含在門票內）。聽著解說繞行一圈，你才會知道這堆石頭背後的血淚與智慧，否則只會覺得這是一堆石頭。",
          },
          {
            type: "text",
            value:
              "● 遊客中心 (Visitor Centre)：\n這裡有展示新石器時代的屋子和從遺跡挖出的工具，通常是搭接駁車 (Shuttle Bus) 前往巨石陣前的第一站。",
          },

          { type: "text", value: "⚠️ 實用提醒 (Important Tips)：" },
          {
            type: "text",
            value:
              "1. 穿著保暖：\n巨石陣位於平原中央，**「風非常大」** 且完全沒有遮蔽物。2 月份去體感溫度會非常低，請務必戴好毛帽、圍巾和防風外套。",
          },
          {
            type: "text",
            value:
              "2. 保持距離：\n為了保護古蹟，遊客只能沿著圍欄外的步道參觀，**不能觸摸石頭**（除非是特殊預約的日出/日落團）。雖然有點距離，但現場看還是很壯觀的。",
          },
        ],
      },
      {
        id: "d13-4",
        time: "00:00",
        place: "Bath 巴斯古城",
        note: "羅馬浴場 / 珍·奧斯汀故居",
        mapUrl: "https://maps.app.goo.gl/xbD3Hzpf2xrhzqbH7",
        content: [
          {
            type: "text",
            value:
              "巴斯是英國唯一擁有「天然溫泉」的城市。早在西元 43 年，羅馬人就在此建立了浴場和神廟。整座城市由當地特有的「巴斯岩 (Bath Stone)」建成，呈現溫暖的蜂蜜色，非常優雅。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/romt_spring.jpg",
            alt: "冒著熱氣的羅馬浴場",
          },

          { type: "text", value: "🏛️ 必去景點 (Must Visit)：" },
          {
            type: "text",
            value:
              "1. 羅馬浴場 (The Roman Baths)：\n這是巴斯的心臟。你可以看到冒著熱氣的綠色溫泉水（注意：不能泡！只能看）。語音導覽做得非常好，會還原當時羅馬人的社交生活。",
          },
          {
            type: "text",
            value:
              "2. 巴斯修道院 (Bath Abbey)：\n就在浴場隔壁，以其巨大的扇形拱頂和「雅各的天梯 (Jacob's Ladder)」浮雕聞名。如果還有體力，可以參加登塔導覽 (Tower Tour) 俯瞰全城。",
          },
          {
            type: "text",
            value:
              "3. 普爾特尼橋 (Pulteney Bridge)：\n這是一座世界上少數「橋上蓋滿商店」的橋樑（類似佛羅倫斯的老橋），也是電影《悲慘世界》中賈維自盡場景的取景地（雖然電影裡是塞納河，但其實是在這拍的）。",
          },
          {
            type: "text",
            value:
              "4. 皇家新月樓 (Royal Crescent)：\n由 30 棟房子連成一個巨大的半月形，前方是大片草地，是英國喬治亞式建築的巔峰之作。很多古裝劇（如《柏捷頓家族》）都在此取景。",
          },

          { type: "text", value: "😋 必吃美食：" },
          {
            type: "text",
            value:
              "● Sally Lunn's Bun：\n巴斯最古老的房子 (建於 1482 年) 賣的巨大圓麵包，口感像布里歐，配上鹹奶油或肉桂奶油非常好吃。",
          },

          {
            type: "text",
            value:
              "🍪 伴手禮：Bath Bun (巴斯圓麵包) 或 Sally Lunn's 的巨大麵包。",
          },
        ],
      },
      {
        id: "d13-hotel",
        time: "00:00",
        place: "返回 Ibis Earls Court",
        note: "結束充實的一天",
        mapUrl: "https://maps.app.goo.gl/9BQHvaN1RTE35wSbA",
        content: [
          {
            type: "text",
            value:
              "巴士通常會在晚上 7:30 - 8:00 左右回到倫敦市區（通常是 Victoria 或 Gloucester Road 附近）。",
          },
          {
            type: "text",
            value:
              "今晚可能會比較累，建議在下車點附近吃個晚餐，或是買外帶回飯店休息。",
          },
        ],
      },
    ],
  },
  // --- 第 14 天 ---
  {
    day: 14,
    title: "2/19 走進魔法世界：哈利波特片場",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://www.toiletmap.org.uk/",
        content: [],
      },
      {
        id: "d14-1",
        time: "10:45",
        place: "集合出發 (Meeting Point)",
        note: "搭乘專車前往華納兄弟片場 車程 1h 30m",
        content: [],
      },
      {
        id: "d14-2",
        time: "12:30",
        place: "Warner Bros. Studio Tour London",
        note: "霍格華茲大廳 / 斜角巷 / 9¾月台",
        mapUrl: "https://maps.app.goo.gl/Bo4Mv7vXF9u8RL1m9",
        content: [
          {
            type: "text",
            value:
              "歡迎回家！這裡是《哈利波特》電影系列誕生的地方。不同於遊樂園，這裡展示了電影幕後的魔法工藝，包含真實的佈景、服裝、特效模型。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/harry.jpg",
            alt: "霍格華茲大廳 (Great Hall)",
          },

          { type: "text", value: "📸 5大必拍場景 (Must Snap)：" },
          {
            type: "text",
            value:
              "1. 霍格華茲大廳 (Great Hall)：\n大門開啟的那一瞬間最感動！地板是真正的約克石鋪成的。注意看教師席，鄧不利多、石內卜的服裝都在那裡。",
          },
          {
            type: "text",
            value:
              "2. 9¾ 月台 (Platform 9¾)：\n這裡停著真正的「霍格華茲特快車」。一定要去推那個「消失在牆壁裡的手推車」，這是經典中的經典。",
          },
          {
            type: "text",
            value:
              "3. 古靈閣 (Gringotts)：\n最壯觀的新展區！先看金碧輝煌的銀行大廳，再看被巨龍摧毀後的廢墟，巨龍還會噴火（其實是煙霧特效），非常震撼。",
          },
          {
            type: "text",
            value:
              "4. 斜角巷 (Diagon Alley)：\n走在奧利凡德魔杖店、衛斯理兄弟笑話店的櫥窗前，細節多到看不完。這裡是電影中哈利第一次接觸魔法世界的地方。",
          },
          {
            type: "text",
            value:
              "5. 霍格華茲城堡模型 (The Model)：\n這是整個參觀的壓軸。電影中所有城堡外觀的空拍鏡頭都是拍這座巨大的模型。搭配燈光與音樂，許多人會在這裡感動落淚。",
          },

          { type: "text", value: "🍺 必做體驗：" },
          {
            type: "text",
            value:
              "參觀中途會來到戶外區 (Backlot)，這裡有一間餐廳。一定要買杯「奶油啤酒 (Butterbeer)」，它不含酒精，喝起來像焦糖奶油汽水。喝完的塑膠杯洗一洗可以帶回家當紀念品！",
          },
          {
            type: "text",
            value:
              "在搭車回倫敦前，這是最後也是最大的一站！這裡有許多「倫敦市區買不到」的獨家商品。",
          },
          { type: "text", value: "🛍️ 內行玩家必買清單：" },
          {
            type: "text",
            value:
              "1. 客製化入學信 (Personalized Acceptance Letter)：\n這最值得！信封上會印著「你的名字」和「你家地址」，跟哈利收到的一模一樣，封蠟也是真的。",
          },
          {
            type: "text",
            value:
              "2. 片場限定服飾 (Studio Tour Exclusive)：\n請認明衣服背後有寫 Studio Tour London 金字的 Spirit Jersey (長袖寬版上衣)，這是你有來過片場的證明，市區商店沒有賣。",
          },
          {
            type: "text",
            value:
              "3. 巧克力蛙與柏蒂全口味豆：\n經典伴手禮，雖然哪裡都有，但這裡的包裝最齊全。",
          },
          {
            type: "text",
            value:
              "4. 探險護照 (Passport)：\n這是免費的！別忘了檢查有沒有在各區蓋滿鋼印，這也是無價的回憶。",
          },
          { type: "text", value: "⚠️ 參觀攻略 (Tips)：" },
          {
            type: "text",
            value:
              "● 領取護照：入場前記得在服務台拿免費的「探險護照 (Passport)」，可以在各區蓋鋼印（尋寶遊戲）。\n● 戶外保暖：騎士公車和水蠟樹街 (德思禮家) 都在戶外，2月的倫敦很冷，外套別寄放。\n● 紀念品：最後的商店非常大，建議預留 30-45 分鐘逛。",
          },
        ],
      },
      {
        id: "d14-3",
        time: "17:00",
        place: "回程 (Return Journey)",
        note: "帶著魔杖與回憶返回倫敦",
        content: [],
      },
      {
        id: "d14-hotel",
        time: "19:00",
        place: "住宿：Ibis Earls Court",
        note: "整理戰利品",
        mapUrl: "https://maps.app.goo.gl/9BQHvaN1RTE35wSbA",
        content: [
          {
            type: "text",
            value:
              "回到飯店。如果晚餐還沒吃，可以在 Earl's Court 附近找間酒吧，配著炸魚薯條，聊聊今天的魔法體驗。",
          },
        ],
      },
    ],
  },
  // --- 第 15 天 ---
  {
    day: 15,
    title: "2/20 倫敦西區：SOHO 探索與獅子王",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://www.toiletmap.org.uk/",
        content: [],
      },
      {
        id: "d15-1",
        time: "15:00",
        place: "SOHO 蘇活區 & China Town",
        note: "倫敦最潮街區 / 肯納比街 / 中國城",
        mapUrl: "https://maps.app.goo.gl/Vaoy7sn7NiPxQpjh8",
        content: [
          {
            type: "text",
            value:
              "SOHO 是倫敦最有活力的區域，充滿了獨立小店、酒吧、劇院和美食。這裡也是英國 LGBTQ+ 文化的中心，氣氛自由奔放。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/soho.jpg",
            alt: "熱鬧的 SOHO 街道與霓虹燈",
          },

          {
            type: "text",
            value:
              "這裡是倫敦最有活力的心臟地帶！SOHO 曾經是 17 世紀的貴族狩獵場（SOHO 是獵人發現獵物時的喊叫聲），後來變成了波希米亞藝術家、莫札特 (Mozart) 和馬克思 (Marx) 的居住地，現在則是潮流與美食的中心。",
          },
          { type: "text", value: "🛍️ SOHO 必逛與必買：" },
          {
            type: "text",
            value:
              "1. Liberty London (利伯提百貨)：\n這是倫敦最美的百貨！建於 1924 年，外觀是黑白色的都鐸式建築，木材來自兩艘真正的皇家海軍戰艦 (HMS Impregnable & Hindustan)。\n★ 必買：經典的 Liberty 印花布料 (Tana Lawn) 與絲巾，是英國著名的伴手禮。",
          },
          {
            type: "text",
            value:
              "2. Carnaby Street (肯納比街)：\n60 年代「搖滾倫敦 (Swinging London)」的發源地，披頭四和滾石樂團常來這混。現在是色彩繽紛的步行街，頭頂的裝飾每季都會換，必拍！。",
          },
          {
            type: "text",
            value:
              "3. Old Compton Street：\n這裡是倫敦 LGBTQ+ 的中心，街道上掛滿彩虹旗，有很多特色酒吧和咖啡廳，氣氛非常自由奔放。",
          },

          { type: "text", value: "🏮 China Town (倫敦華埠)：" },
          {
            type: "text",
            value:
              "位於 SOHO 旁，著名的「爵祿街 (Gerrard Street)」是核心。這裡原本在東倫敦，1950 年代才搬遷至此。入口的巨大牌樓和滿天的紅燈籠是最大特色。",
          },
          {
            type: "text",
            value:
              "★ 必買必吃：\n1. 亞洲超市 (Loon Fung / SeeWoo)：想念家鄉味可以在這買泡麵或零食。\n2. 點心與燒鴨：文興酒家 (Four Seasons) 的燒鴨聞名全倫敦。\n3. 鯛魚燒 (Taiyaki)：中國城現在很流行這種網美甜點。",
          },

          { type: "text", value: "📸 網美必拍熱點 (Photo Spots)：" },
          {
            type: "text",
            value:
              "● Liberty 百貨正門：拍那個古老的木造鐘樓和花店入口。\n● Carnaby Street 的空中拱門：寫著 Welcome to Carnaby Street 的巨型標誌。\n● 中國城牌樓 (The Gates)：加上整排紅燈籠，非常有過年氣氛。\n● 蘇活廣場 (Soho Square) 的小木屋：廣場中間有一座可愛的都鐸式園丁小屋，很有童話感。",
          },
        ],
      },
      {
        id: "d15-2",
        time: "17:30",
        place: "晚餐：劇前晚餐 (Pre-theatre Dinner)(可選）",
        note: "建議在劇院附近用餐",
        mapUrl: "https://goo.gl/maps/chinatown-london",
        content: [
          {
            type: "text",
            value:
              "音樂劇 19:30 開演，建議在 17:30 左右先吃晚餐，以免開演前太趕。SOHO 區餐廳非常多：",
          },
          {
            type: "text",
            value:
              "1. Burger & Lobster (Soho店)：\n經典的龍蝦大餐，離劇院區不遠。\n2. Flat Iron (鐵斗牛排)：\nCP 值極高的牛排，隨餐附送爆米花和餐後冰淇淋。\n3. 文興酒家 (Four Seasons)：\n在中國城，以「燒鴨」聞名全倫敦，想念中式口味的首選。",
          },
        ],
      },
      {
        id: "d15-3",
        time: "19:30",
        place: "音樂劇：The Lion King (獅子王)",
        note: "Lyceum Theatre / 視覺震撼 / 必看經典",
        mapUrl: "https://maps.app.goo.gl/71eribWt2ZuuDGaY7",
        content: [
          {
            type: "text",
            value:
              "在歷史悠久的 Lyceum Theatre (建於 1841 年) 欣賞迪士尼最成功的音樂劇。這不僅是聽歌，更是一場視覺盛宴。當《Circle of Life》響起，動物們從觀眾席走上舞台的那一刻，絕對會起雞皮疙瘩。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/lion.jpg",
            alt: "獅子王音樂劇壯觀舞台",
          },

          { type: "text", value: "⚠️ 極重要觀劇須知 (Must Know)：" },
          {
            type: "text",
            value:
              "1. 嚴禁遲到：\n開演後通常會鎖門，要等到第一個適合的斷點（通常是 15-20 分鐘後）才能入場，錯過開場的《Circle of Life》就等於白來了！",
          },
          {
            type: "text",
            value:
              "2. 安檢預留時間：\n入場需要檢查包包。建議 **19:00 前** 抵達劇院，還可以順便逛逛紀念品店或去酒吧買飲料。",
          },
          {
            type: "text",
            value:
              "3. 手機靜音：\n這非常重要。請將手機調成飛航模式或完全靜音，螢幕亮度調到最暗，以免影響他人。",
          },
          {
            type: "text",
            value:
              "4. 禁止拍照錄影：\n演出期間「全程禁止」拍照錄影。工作人員抓得很嚴，甚至會用雷射筆照你警告。",
          },

          { type: "text", value: "👗 服裝與飲食：" },
          {
            type: "text",
            value:
              "● 穿著：Smart Casual (休閒但不隨便) 即可。不需要穿晚禮服，但請避免穿拖鞋、球衣或太破爛的短褲。\n● 飲食：劇院酒吧買的酒水可以帶進去喝（會幫你倒在塑膠杯裡），但禁止攜帶味道濃郁的熱食。",
          },

          { type: "text", value: "🚻 廁所攻略：" },
          {
            type: "text",
            value:
              "中場休息 (Interval) 只有 15 分鐘，女廁通常排爆。建議開演前先上，或是中場燈一亮立刻衝去。",
          },
        ],
      },
      {
        id: "d15-hotel",
        time: "22:15",
        place: "返回 Ibis Earls Court",
        note: "散場交通 / 小心扒手",
        mapUrl: "https://maps.app.goo.gl/9BQHvaN1RTE35wSbA",
        content: [
          { type: "text", value: "散場時人潮洶湧，請注意隨身財物。" },
          {
            type: "text",
            value:
              "🚇 回程建議：\n從劇院走到 Covent Garden 或 Temple 地鐵站，搭乘 District Line (綠線) 或 Piccadilly Line (深藍線) 返回 Earl's Court。",
          },
          {
            type: "text",
            value:
              "如果太累，也可以叫 Uber，但散場時段劇院門口車子很難停，建議稍微走遠一點（例如走到 Strand 大馬路上）再叫車。",
          },
        ],
      },
    ],
  },
  // --- 第 16 天 ---
  {
    day: 16,
    title: "2/21 自由行 & 完美的句點：最後衝刺與告別倫敦",
    items: [
      {
        id: "toilet",
        time: "00:00",
        place: "廁所地圖",
        note: "或是 google map 輸入 public toile",
        mapUrl: "https://www.toiletmap.org.uk/",
        content: [],
      },
      {
        id: "d16-1",
        time: "10:00",
        place: "退房與寄放行李 (Check-out)",
        note: "Ibis Earls Court",
        content: [
          {
            type: "text",
            value:
              "辦理退房手續。建議將大件行李寄放在飯店櫃台 (Luggage Storage)，輕裝出門逛街，下午回來拿了直接去機場，非常順路。",
          },
        ],
      },
      {
        id: "d16-2",
        time: "11:00",
        place: "Harrods 哈洛德百貨（可選）",
        note: "倫敦地標級百貨 / 皇家認證",
        mapUrl: "https://goo.gl/maps/harrods",
        content: [
          {
            type: "text",
            value:
              "把握最後機會！從 Earls Court 搭地鐵 Piccadilly Line (深藍線) 只要幾站就到 Knightsbridge 站。",
          },

          {
            type: "image",
            src: process.env.PUBLIC_URL + "/images/d16-harrods.jpg",
            alt: "Harrods 百貨華麗外觀",
          },

          { type: "text", value: "🛍️ 最後伴手禮推薦：" },
          {
            type: "text",
            value:
              "1. Harrods 紀念品部 (Gift Shop)：\n位於地下一樓。必買經典的 PVC 提袋 (Shopper Bag) 和穿著衛兵制服的哈洛德熊 (Harrods Bear)。",
          },
          {
            type: "text",
            value:
              "2. 食品廳 (Food Hall)：\n裝潢美得像宮殿。推薦買茶葉罐 (Earl Grey No.42)、奶油酥餅 (Shortbread) 或是松露巧克力。",
          },

          { type: "text", value: "🍽️ 奢華早午餐：" },
          {
            type: "text",
            value:
              "既然是最後一天，可以在 Harrods 裡面的 Tea Room 享用一頓優雅的早午餐，或是去附近的 Harvey Nichols 百貨頂樓餐廳。",
          },
        ],
      },
      {
        id: "d16-3",
        time: "14:00",
        place: "V&A Museum 或 海德公園（可選）",
        note: "最後的漫步",
        mapUrl: "https://goo.gl/maps/va-museum",
        content: [
          {
            type: "text",
            value:
              "逛完街如果還有時間，可以沿著 Brompton Road 走到附近的 V&A 博物館（世界最美博物館咖啡廳就在這），或是去海德公園散散步，享受倫敦最後的悠閒午後。",
          },
        ],
      },
      {
        id: "d16-4",
        time: "17:00",
        place: "前往機場 (Head to Airport)",
        note: "返回飯店拿行李 -> 希斯洛機場",
        content: [
          {
            type: "text",
            value: "回到 Ibis Earls Court 領取行李，準備前往機場。",
          },
          { type: "text", value: "🚇 交通方式 (最方便)：" },
          {
            type: "text",
            value:
              "直接在 **Earl's Court 站** 搭乘地鐵 **Piccadilly Line (深藍線)** 往西向 (Westbound) 直達 Heathrow Airport (LHR)。",
          },
          {
            type: "text",
            value:
              "⏱️ 車程預估：約 45-50 分鐘。這條線直達，不用轉車搬行李，非常適合。",
          },
        ],
      },
      {
        id: "d16-5",
        time: "21:15",
        place: "London 倫敦希斯洛機場 (LHR) 三航廈",
        note: "訂單編號：FYYKJY，飛機：CI082 中華航空",
        mapUrl: "https://maps.app.goo.gl/31aGFA558YxPgahg8",
        content: [
          {
            type: "text",
            value: "班機時間 21:15，建議在 **18:15 前** 抵達機場櫃檯報到。",
          },
          { type: "text", value: "⚠️ 機場提醒：" },
          {
            type: "text",
            value:
              "1. 退稅 (VAT Refund)：\n再次提醒，英國目前「沒有」遊客退稅服務。請不要花時間找退稅櫃台了。",
          },
          {
            type: "text",
            value: "2. 安檢：\n希斯洛機場安檢通常人很多，請預留足夠時間排隊。",
          },
          {
            type: "text",
            value:
              "3. 液體限制：\n手提行李的液體每瓶不能超過 100ml，且必須裝在透明夾鏈袋中（雖然部分航廈已升級掃描儀，但建議還是照舊規矩打包最保險）。",
          },
          {
            type: "text",
            value: "抵達桃園機場時間 18:15 一共飛行 13 小時",
          },
        ],
      },
    ],
  },
];
