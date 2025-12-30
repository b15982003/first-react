// 這裡用 export const 讓別的檔案可以 import 它
export const itineraryData = Array.from({ length: 16 }, (_, dayIndex) => ({
  day: dayIndex + 1,
  title: `第 ${dayIndex + 1} 天行程`,
  items: [
    { 
      id: `d${dayIndex+1}-i1`, 
      time: "09:00", 
      place: "飯店早餐 🥐", 
      note: "享用當地美食", 
      description: "這是關於早餐的詳細介紹內容，這裡可以寫非常多字，也不會影響 App.js 的整潔度。" 
    },
    { 
      id: `d${dayIndex+1}-i2`, 
      time: "10:30", 
      place: `景點 A (Day ${dayIndex + 1}) 📸`, 
      note: "參觀拍照", 
      description: "這是景點 A 的詳細歷史介紹與參觀重點..." 
    },
    { 
      id: `d${dayIndex+1}-i3`, 
      time: "12:30", 
      place: "午餐 🍔", 
      note: "知名餐廳", 
      description: "這家餐廳必點的菜色有..." 
    },
    { 
      id: `d${dayIndex+1}-i4`, 
      time: "15:00", 
      place: `景點 B (Day ${dayIndex + 1}) 🛍️`, 
      note: "購物或散步", 
      description: "這裡非常好買，建議停留 2 小時..." 
    },
    { 
      id: `d${dayIndex+1}-i5`, 
      time: "18:00", 
      place: "晚餐 🍜", 
      note: "夜市或景觀餐廳", 
      description: "晚上的氣氛非常好，可以看到夜景..." 
    },
  ],
}));