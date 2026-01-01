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

  // --- 第 3 天 ---
  {
    day: 3,
    title: "2/8 火口湖 + 國家公園 + 小鎮",
    items: [
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
        place: "午餐～",
        note: "還在找",
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
        place: "晚餐自理或是鎮上找",
        note: "還在找",
        mapUrl: "https://goo.gl/maps/example2",
        content: [],
      },
    ],
  },

  // --- 第 4 天  ---
  {
    day: 4,
    title: "第 4 天標題",
    items: [
      {
        id: "d4-1",
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
        id: "d4-2",
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
        id: "d4-3",
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
        id: "d4-4",
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
        id: "d4-5",
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
            src: process.env.PUBLIC_URL + "/images/hotel_4.jpg",
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

          {
            type: "mapButton",
            url: "https://goo.gl/maps/vagnsstadir",
            label: "🛏️ 導航去 Vagnsstadir Guesthouse",
          },
        ],
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
