export const itineraryData = [
  // --- 第 1 天 ---
  {
    day: 1,
    title: "3/27（五） 抵達與市區探索",
    items: [
      {
        id: "d1-1",
        time: "09:00",
        place: "台中包車北上",
        note: "",
        mapUrl: "https://maps.app.goo.gl/DBeQLv2YBndAZ8Ap7",
        content: [],
      },
      {
        id: "d1-2",
        time: "15:40",
        place: "桃園國際機場 一航廈",
        note: "訂單編號：GJ3Z5B/X8BTHL，飛機：D7378 全亞洲航空",
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
        id: "d1-3",
        time: "19:20",
        place: "大阪 關西（KIX) T1",
        note: "訂單編號：GJ3Z5B/X8BTHL，飛機：D7378 全亞洲航空",
        mapUrl: "https://maps.app.goo.gl/ssMgfkDvm22ttTFh8",
        content: [
          { type: "text", value: "🛬 關西機場入境與交通攻略：" },
          {
            type: "text",
            value:
              "1. Visit Japan Web (VJW)：\n請務必在起飛前完成填寫，並將「入境審查」及「海關申報」的 QR Code 截圖備用（機場 Wi-Fi 有時不穩）。",
          },
          {
            type: "text",
            value:
              "2. 交通轉乘 (2F)：\n入境是在 1F，請搭電梯上 2F 走過天橋到「關西空港站」。\n- **前往梅田/藍天大廈**：推薦搭乘 **JR Haruka**（約 50 分鐘）直達大阪站，或搭乘**利木津巴士**（直達梅田區）。",
          },
          {
            type: "text",
            value:
              "3. 領錢與網路：\n2F 車站入口旁有多台 ATM (如 7-Bank) 可用台灣金融卡領日幣。若有租借實體 WiFi 機，櫃檯多在 1F 或 2F。",
          },
          {
            type: "text",
            value:
              "4. IC 卡提醒：\n若有 iPhone，建議直接在 Apple Wallet 加入 **ICOCA** 或 **Suica** 並用 Apple Pay 加值，不用排隊買實體卡。",
          },
          {
            type: "text",
            value:
              "提醒：KIX T1 近期持續翻新中，動線可能隨時變動，請跟隨「鐵道 (Train)」的黃色指標前進即可。",
          },
        ],
      },
      {
        id: "d1-4",
        time: "20:00",
        place: "住宿",
        note: "Private residence 瑞 -ZUI",
        mapUrl: "https://maps.app.goo.gl/ZdmHnp98uaGhkUzr6",
        content: [],
      },
    ],
  },
  {
    day: 2,
    title: "3/28（六） F1",
    items: [
      {
        id: "d2-1",
        time: "07:30",
        place: "接駁車前往鈴鹿賽道",
        note: "京都車站",
        mapUrl: "",
        content: [
          { type: "text", value: "鈴鹿賽道接駁車（Shuttle Bus）：" },
          {
            type: "text",
            value:
              "1. 排隊心理準備：\n從近鐵「白子站 (Shiroko)」搭乘接駁車的人潮極多，尖峰時段排隊 1-2 小時是常態，建議比預計時間再早 1 小時出發。",
          },
          {
            type: "text",
            value:
              "2. 支付方式：\n接駁車通常可使用 ICOCA / Suica 刷卡，請務必在出發前先在手機加值足夠金額，避免在車站現場排隊加值機。",
          },
          {
            type: "text",
            value:
              "3. 物資備齊再上車：\n賽道內的食物和飲料通常會排隊到天荒地老。建議在車站附近的便利商店先買好補給品（水、簡單飯糰）。",
          },
          {
            type: "text",
            value:
              "4. 必帶裝備：\n- 行動電源：查即時排名跟拍賽車超耗電。\n- 輕便雨衣：鈴鹿天氣陰晴不定，看台禁止撐傘以免遮擋視線。",
          },
          {
            type: "text",
            value:
              "5. 回程預警：\n活動結束後的「散場接駁」排隊更恐怖。如果不想排隊，建議提前 15 分鐘離開，或是留下來逛賽道賣店，等 2 小時後人潮散去再走。",
          },
          {
            type: "text",
            value:
              "溫馨提醒：記得確認當天近鐵的「特急」車票是否已預約，櫻花季期間前往鈴鹿的特急券非常熱門！",
          },
        ],
      },
      {
        id: "d2-2",
        time: "20:00",
        place: "住宿",
        note: "Private residence 瑞 -ZUI",
        mapUrl: "https://maps.app.goo.gl/ZdmHnp98uaGhkUzr6",
        content: [],
      },
      {
        id: "d2-3",
        time: "17:00",
        place: "晚餐：串とテール煮 様様",
        note: "九條總本店",
        mapUrl: "https://maps.app.goo.gl/3WLx5tSRY2VGuebeA",
        content: [
          {
            type: "text",
            value: "推薦：品嚐招牌串燒與牛尾煮，感受在地居酒屋氛圍。",
          },
        ],
      },
    ],
  },
  {
    day: 3,
    title: "3/29（日） F1",
    items: [
      {
        id: "d3-1",
        time: "07:30",
        place: "接駁車前往鈴鹿賽道",
        note: "京都車站",
        mapUrl: "",
        content: [
          { type: "text", value: "鈴鹿賽道接駁車（Shuttle Bus）：" },
          {
            type: "text",
            value:
              "1. 排隊心理準備：\n從近鐵「白子站 (Shiroko)」搭乘接駁車的人潮極多，尖峰時段排隊 1-2 小時是常態，建議比預計時間再早 1 小時出發。",
          },
          {
            type: "text",
            value:
              "2. 支付方式：\n接駁車通常可使用 ICOCA / Suica 刷卡，請務必在出發前先在手機加值足夠金額，避免在車站現場排隊加值機。",
          },
          {
            type: "text",
            value:
              "3. 物資備齊再上車：\n賽道內的食物和飲料通常會排隊到天荒地老。建議在車站附近的便利商店先買好補給品（水、簡單飯糰）。",
          },
          {
            type: "text",
            value:
              "4. 必帶裝備：\n- 行動電源：查即時排名跟拍賽車超耗電。\n- 輕便雨衣：鈴鹿天氣陰晴不定，看台禁止撐傘以免遮擋視線。",
          },
          {
            type: "text",
            value:
              "5. 回程預警：\n活動結束後的「散場接駁」排隊更恐怖。如果不想排隊，建議提前 15 分鐘離開，或是留下來逛賽道賣店，等 2 小時後人潮散去再走。",
          },
          {
            type: "text",
            value:
              "溫馨提醒：記得確認當天近鐵的「特急」車票是否已預約，櫻花季期間前往鈴鹿的特急券非常熱門！",
          },
        ],
      },
      {
        id: "d3-2",
        time: "20:00",
        place: "平安湯",
        note: "在地溫泉",
        mapUrl: "https://maps.app.goo.gl/Jkpqk7iUKYDcAKQJ6",
        content: [
          { type: "text", value: "♨️ 京都在地錢湯：平安湯 入浴守則：" },
          {
            type: "text",
            value:
              "1. 收費與備品：\n在地澡堂（錢湯）收費大約在 490~500 日圓。現場通常「不提供」免費洗髮精、沐浴乳或毛巾，建議自備小籃子裝盥洗用品，或在櫃檯購買（小瓶裝很便宜）。",
          },
          {
            type: "text",
            value:
              "2. 先進場、後入浴：\n進門先在鞋櫃脫鞋並取下木牌。平安湯是傳統的「番台」或小櫃檯式。入內後請先在更衣間脫光，僅帶著一條小毛巾進浴室。",
          },
          {
            type: "text",
            value:
              "3. 洗淨身體是鐵律：\n進入浴池泡湯前，請務必先在旁邊的座位坐著將全身洗乾淨。坐在小板凳上沖水，盡量避免水噴濺到旁邊的人。",
          },
          {
            type: "text",
            value:
              "4. 毛巾不入水：\n小毛巾是用來擦汗或擋身體的，**絕對不能泡進浴池裡**。大家通常會疊好放在頭頂或是池畔。",
          },
          {
            type: "text",
            value:
              "5. 長髮與刺青：\n長頭髮請務必紮起來，不可在池中漂浮。雖然現在很多錢湯對刺青較寬容，但平安湯屬在地澡堂，若有大面積刺青，建議低調入浴。",
          },
          {
            type: "text",
            value:
              "6. 泡完後的最高享受：\n更衣間通常有販售瓶裝「咖啡牛奶」，泡完湯後站著手叉腰喝一瓶，是日本錢湯文化的靈魂！",
          },
          {
            type: "text",
            value:
              "⚠️ 提醒：平安湯的營業時間通常是 15:00 - 01:00，週四可能公休，建議出發前確認。附近巷弄安靜，深夜離開時請壓低音量。",
          },
        ],
      },
      {
        id: "d3-3",
        time: "21:00",
        place: "住宿",
        note: "Private residence 瑞 -ZUI",
        mapUrl: "https://maps.app.goo.gl/ZdmHnp98uaGhkUzr6",
        content: [],
      },
    ],
  },
  {
    day: 4,
    title: "3/30（一）琵琶湖自駕之旅",
    items: [
      {
        id: "d4-1",
        time: "09:00",
        place: "租車取車",
        note: "補租車資訊",
        mapUrl: "",
        content: [
          { type: "text", value: "自駕提醒：" },
          {
            type: "text",
            value: "1. 檢查駕照：出發前確認帶好台灣駕照正本與日文譯本。",
          },
          { type: "text", value: "2. 車況檢查：取車時錄影存證車身原有刮痕。" },
          {
            type: "text",
            value: "3. 導航設定：可用 MapCode 或輸入電話號碼定位。",
          },
        ],
      },
      {
        id: "d4-2",
        time: "11:30",
        place: "琵琶湖-白鬚神社",
        note: "湖中鳥居",
        mapUrl: "https://maps.app.goo.gl/my4mV58CbhGWeLRU6",
        content: [
          { type: "text", value: "景點筆記：" },
          {
            type: "text",
            value: "1. 著名的湖中鳥居，拍照時請注意安全，不要隨意穿越馬路。",
          },
          {
            type: "text",
            value: "2. 神社對面有停車場，建議停好車再步行過去觀景台。",
          },
        ],
      },
      {
        id: "d4-3",
        time: "14:00",
        place: "Biwako Valley Ropeway",
        note: "琵琶湖景觀台",
        mapUrl: "https://maps.app.goo.gl/WR7mgb77SwfB5C1DA",
        content: [
          { type: "text", value: "纜車重點：" },
          { type: "text", value: "1. 搭乘高速纜車上山，可俯瞰整個琵琶湖。" },
          { type: "text", value: "2. 山頂氣溫較低，建議多帶一件薄外套。" },
          {
            type: "text",
            value: "3. 若天氣不佳雲層太厚，可考慮調整行程順序。",
          },
        ],
      },
      {
        id: "d4-4",
        time: "16:30",
        place: "近江八幡市",
        note: "古城水鄉散策",
        mapUrl: "https://maps.app.goo.gl/2RoE6R78D23YgZQf6",
        content: [
          {
            type: "text",
            value: "推薦活動：漫步在八幡堀運河旁，感受時代劇般的建築氛圍。",
          },
        ],
      },
      {
        id: "d4-5",
        time: "19:30",
        place: "サウナの梅湯",
        note: "在地澡堂",
        mapUrl: "https://maps.app.goo.gl/XL3NCgJcck8BDKVTA",
        content: [
          { type: "text", value: "♨️ 梅湯入浴指南：" },
          {
            type: "text",
            value: "1. 京都超人氣的文青錢湯，由年輕人經營，充滿活力。",
          },
          { type: "text", value: "2. 店內販售的原創周邊非常精美，適合收藏。" },
          {
            type: "text",
            value: "3. 同樣需自備盥洗用品，現場也有小份量包裝可購買。",
          },
          { type: "text", value: "4. 泡完澡後記得來一瓶當地的汽水或牛奶。" },
        ],
      },
      {
        id: "d4-6",
        time: "20:00",
        place: "住宿",
        note: "Private residence 瑞 -ZUI",
        mapUrl: "https://maps.app.goo.gl/ZdmHnp98uaGhkUzr6",
        content: [],
      },
    ],
  },
  {
    day: 5,
    title: "3/31（二）京都散策與移居大阪",
    items: [
      {
        id: "d5-1",
        time: "09:00",
        place: "下鴨神社",
        note: "特色御守",
        mapUrl: "https://maps.app.goo.gl/RjwRVVsbeBgcb9tD8",
        content: [
          { type: "text", value: "重點：尋找著名的蕾絲御守或特色水守。" },
        ],
      },
      {
        id: "d5-2",
        time: "11:00",
        place: "午餐：貝だし麺きた田",
        note: "京都車站 C6 出口",
        mapUrl: "https://maps.app.goo.gl/RtpM1RH6t8otPaV99",
        content: [
          {
            type: "text",
            value: "筆記：主打貝類湯頭拉麵，推薦品嚐限量的貝類飯。",
          },
        ],
      },
      {
        id: "d5-3",
        time: "12:00",
        place: "teamLab Biovortex Kyoto",
        note: "預計停留 4 小時",
        mapUrl: "https://maps.app.goo.gl/ZVUT9ojERm5ZkjDx5",
        content: [
          {
            type: "text",
            value: "提醒：沈浸式光影藝術體驗，建議預先確認預約場次。",
          },
        ],
      },
      {
        id: "d5-4",
        time: "18:00",
        place: "移動行李至大阪 / Spa World (大阪）",
        note: "弁天町站",
        mapUrl: "https://maps.app.goo.gl/xaTMeRt5iXgUYrSUA",
        content: [
          { type: "text", value: "1. 傍晚將行李移動至大阪住宿點。" },
          {
            type: "text",
            value:
              "2. 體驗重點：世界各國主題溫泉，分歐洲區與亞洲區（按月輪替男女）。",
          },
          {
            type: "text",
            value: "3. 設施：除溫泉外還有水上樂園、岩盤浴與美食區。",
          },
          {
            type: "text",
            value: "4. 備品：現場提供毛巾與沐浴用品，空手前往即可。",
          },
          {
            type: "text",
            value: "5. 提醒：若有大面積刺青可能無法入場，建議先確認官網規範。",
          },
        ],
      },
      {
        id: "d5-5",
        time: "21:00",
        place: "住宿",
        note: "【LE】Samurai House Kuromon 黒門",
        mapUrl:
          "https://maps.app.goo.gl/xJgXZegussyC5p1Z6](https://maps.app.goo.gl/xJgXZegussyC5p1Z6)",
        content: [],
      },
    ],
  },
  {
    day: 6,
    title: "4/1（三）暫無行程",
    items: [
      {
        id: "d6-1",
        time: "00:00",
        place: "無",
        note: "",
        mapUrl: "",
        content: [],
      },
      {
        id: "d6-2",
        time: "21:00",
        place: "住宿",
        note: "【LE】Samurai House Kuromon 黒門",
        mapUrl:
          "[https://maps.app.goo.gl/xJgXZegussyC5p1Z6](https://maps.app.goo.gl/xJgXZegussyC5p1Z6)",
        content: [],
      },
    ],
  },
  {
    day: 7,
    title: "4/2（四）有馬溫泉",
    items: [
      {
        id: "d7-1",
        time: "10:30",
        place: "有馬溫泉老街散策",
        note: "日本三大名湯之一",
        mapUrl: "https://maps.app.goo.gl/Rk2bjjkXayAhFkYeA",
        content: [
          { type: "text", value: "溫泉體驗與必訪重點：" },
          {
            type: "text",
            value:
              "1. 金之湯與銀之湯：金之湯富含鐵質與鹽分，呈現紅褐色；銀之湯則是透明的碳酸泉。",
          },
          {
            type: "text",
            value:
              "2. 太閣足湯：金之湯外面有免費足湯可泡，記得隨身帶一條小毛巾。",
          },
          {
            type: "text",
            value: "3. 必吃美食：手工碳酸煎餅、元祖湯花饅頭、有馬限定汽水。",
          },
          {
            type: "text",
            value:
              "4. 溫泉街漫步：湯本坂是充滿復古氣息的商店街，有很多特色手工藝品店。",
          },
          {
            type: "text",
            value:
              "5. 交通提醒：從大阪可搭乘直達高速巴士，或搭乘電車前往，車程約 1 小時。",
          },
        ],
      },
      {
        id: "d7-2",
        time: "15:00",
        place: "甲子園歷史館",
        note: "",
        mapUrl: "https://maps.app.goo.gl/MeBUsrCkhE9AD5uX6",
        content: [],
      },
      {
        id: "d7-3",
        time: "21:00",
        place: "住宿",
        note: "【LE】Samurai House Kuromon 黒門",
        mapUrl:
          "[https://maps.app.goo.gl/xJgXZegussyC5p1Z6](https://maps.app.goo.gl/xJgXZegussyC5p1Z6)",
        content: [],
      },
    ],
  },
  {
    day: 8,
    title: "4/3（五）姬路城與神戶百萬夜景",
    items: [
      {
        id: "d8-1",
        time: "09:00",
        place: "姬路城賞櫻",
        note: "入園費 2,500 日圓",
        mapUrl: "https://maps.app.goo.gl/9ES9tfamaHsAAbfC9",
        content: [
          {
            type: "text",
            value: "重點：日本國寶級名城，櫻花季人潮眾多，建議準時開園進入。",
          },
          {
            type: "text",
            value: "美食：順路品嚐 Bakery 燈 Lamp 麵包店的人氣漢堡。",
          },
        ],
      },
      {
        id: "d8-2",
        time: "13:00",
        place: "神戶三宮或神戶港",
        note: "逛街",
        mapUrl: "https://maps.app.goo.gl/tV1aSFfJEuCkWu4x5",
        content: [
          { type: "text", value: "1. 三宮中心街：神戶最熱鬧的購物區。" },
          {
            type: "text",
            value: "2. 神戶港 Harborland：欣賞神戶塔與港口風景。",
          },
        ],
      },
      {
        id: "d8-3",
        time: "16:00",
        place: "神戶異人館區",
        note: "復古異國建築",
        mapUrl: "https://maps.app.goo.gl/yJipr7bLMgoe9y8Y8",
        content: [
          {
            type: "text",
            value: "走訪風見雞館、萌黃之館，體驗神戶獨特的洋風氛圍。",
          },
        ],
      },
      {
        id: "d8-4",
        time: "18:00",
        place: "摩耶山纜車",
        note: "週五特別營運至 20:50",
        mapUrl: "https://maps.app.goo.gl/1JpBn3hT7E4UMuvZ6",
        content: [
          {
            type: "text",
            value: "1. 營業時間：週五、六、日及國定假日延長營運。",
          },
          { type: "text", value: "   - 往山上最終發車：20:30" },
          {
            type: "text",
            value: "   - 往山下最終發車：20:50 (纜車) / 21:00 (索道)",
          },
          { type: "text", value: "2. 票價資訊 (全程往返 Cable + Ropeway)：" },
          { type: "text", value: "   - 成人：1,560 日圓" },
          { type: "text", value: "   - 兒童：780 日圓" },
          {
            type: "text",
            value:
              "3. 重點：掬星台是日本三大夜景之一，海拔較高，氣溫會比市區低 5-10 度。",
          },
          {
            type: "text",
            value:
              "4. 提醒：若遇到強風，纜車可能會停駛，出發前建議先看官網公告。",
          },
        ],
      },
      {
        id: "d8-5",
        time: "20:00",
        place: "晚餐：神戶牛排",
        note: "待找",
        mapUrl: "",
        content: [
          {
            type: "text",
            value: "來到神戶必嚐的奢華體驗，建議事先預約熱門餐廳。",
          },
        ],
      },
      {
        id: "d8-6",
        time: "22:00",
        place: "在地湯屋",
        note: "找",
        mapUrl: "",
        content: [],
      },
      {
        id: "d8-7",
        time: "22:00",
        place: "住宿",
        note: "【LE】Samurai House Kuromon 黒門",
        mapUrl:
          "[https://maps.app.goo.gl/xJgXZegussyC5p1Z6](https://maps.app.goo.gl/xJgXZegussyC5p1Z6)",
        content: [],
      },
    ],
  },
  {
    day: 9,
    title: "4/4（六）大鳥神社與返台",
    items: [
      {
        id: "d9-1",
        time: "09:30",
        place: "大鳥神社",
        note: "特色：透明御守",
        mapUrl: "https://maps.app.goo.gl/tNcHFAvR1WhNTXKSA",
        content: [
          {
            type: "text",
            value:
              "1. 透明御守：這款御守非常熱門，建議早上前往以確保還有現貨。",
          },
          {
            type: "text",
            value:
              "2. 交通：神社位於堺市，從大阪市區搭乘 JR 阪和線至鳳站步行即可到達。",
          },
        ],
      },
      {
        id: "d9-2",
        time: "11:30",
        place: "準備前往關西機場",
        note: "預留 Check-in 時間",
        mapUrl: "",
        content: [
          {
            type: "text",
            value: "建議在登機前 2.5 至 3 小時抵達機場，避開櫻花季收假人潮。",
          },
        ],
      },
      {
        id: "d9-3",
        time: "15:20",
        place: "關西機場 (KIX)",
        note: "訂單編號：SP6W8T，飛機：GK55 捷星航空",
        mapUrl: "",
        content: [
          { type: "text", value: "辦理行李托運，最後巡禮免稅店購買伴手禮。" },
        ],
      },
      {
        id: "d9-4",
        time: "17:20",
        place: "桃園機場 (TPE)",
        note: "抵達家鄉",
        mapUrl: "",
        content: [{ type: "text", value: "順利結束 9 天 8 夜的關西之旅。" }],
      },
    ],
  },
];
