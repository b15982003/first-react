import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { itineraryData } from "./OsakaData";

// --- 子組件：單個行程項目 ---
const ItineraryItem = ({ item }) => {
  
  // 處理點擊導航的函式 (避免觸發 Link 跳轉)
  const handleMapClick = (e) => {
    e.preventDefault(); // 阻止 Link 的預設跳轉行為
    e.stopPropagation(); // 阻止事件冒泡
    window.open(item.mapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Link to={`/detail/${item.id}`} className="text-decoration-none text-reset">
      <div className="card mb-3 shadow-sm border-0 item-hover">
        <div className="card-body d-flex gap-3 align-items-start">
          
          {/* 左側：時間軸 */}
          <div className="d-flex flex-column align-items-center" style={{ minWidth: "70px" }}>
            <span className="badge bg-primary rounded-pill p-2">{item.time}</span>
            <div style={{ width: "2px", height: "40px", background: "#e9ecef", marginTop: "8px" }}></div>
          </div>

          {/* 中間：地點資訊 */}
          <div className="flex-grow-1">
            <h5 className="card-title fw-bold text-dark mb-1 d-flex align-items-center flex-wrap gap-2">
              <span>📍 {item.place}</span>
              
              {/* 🔥 新增：如果有 mapUrl 才顯示導航按鈕 */}
              {item.mapUrl && (
                <button 
                  onClick={handleMapClick}
                  className="btn btn-sm btn-outline-primary py-0 px-2 rounded-pill"
                  style={{ fontSize: "0.8rem" }}
                >
                  🗺️ 導航
                </button>
              )}
            </h5>
            <p className="card-text text-muted small">{item.note}</p>
          </div>

          {/* 右側：箭頭 */}
          <div className="align-self-center text-muted">&gt;</div>
        </div>
      </div>
    </Link>
  );
};

// --- 子組件：Tab 按鈕 ---
const TabButton = React.forwardRef(({ day, isActive, onClick }, ref) => {
  return (
    <button
      ref={ref} 
      onClick={onClick}
      className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
        isActive ? "btn-primary" : "btn-outline-secondary"
      }`}
      style={{ whiteSpace: "nowrap", flexShrink: 0 }}
    >
      Day {day}
    </button>
  );
});

// --- 主頁面組件 ---
const Home = () => {
  const [currentDay, setCurrentDay] = useState(() => {
    const savedDay = sessionStorage.getItem("trip_current_day");
    return savedDay ? parseInt(savedDay, 10) : 1;
  });

  const tabRefs = useRef({}); 

  const currentItinerary = itineraryData.find((d) => d.day === currentDay);

  useEffect(() => {
    sessionStorage.setItem("trip_current_day", currentDay);

    const activeTab = tabRefs.current[currentDay];
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth", 
        block: "nearest",   
        inline: "center",  
      });
    }
  }, [currentDay]);

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <header className="bg-white shadow-sm p-3 sticky-top">
        <div className="container" style={{ maxWidth: "600px" }}>
          <h4 className="m-0 fw-bold text-primary d-flex align-items-center">
            📅 日本關西之旅
          </h4>
        </div>
      </header>

      <div className="container py-3" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <Link
            to="/note"
            className="btn btn-warning w-100 fw-bold text-dark shadow-sm d-flex justify-content-between align-items-center p-3 text-decoration-none"
          >
            <span>📝 應帶物品及注意事項</span>
            <span>&gt;</span>
          </Link>
        </div>

        {/* Tabs 區域 */}
        <div className="bg-white p-3 rounded shadow-sm mb-3">
          <div
            className="d-flex gap-2 overflow-auto pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {itineraryData.map((item) => (
              <TabButton
                key={item.day}
                // 3. 將每個按鈕的 ref 存入 tabRefs 物件中，key 為 day
                ref={(el) => (tabRefs.current[item.day] = el)}
                day={item.day}
                isActive={currentDay === item.day}
                onClick={() => setCurrentDay(item.day)}
              />
            ))}
          </div>
        </div>

        {/* 列表內容區域 */}
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="mb-4 border-bottom pb-2">
            <h2 className="h4 fw-bold text-dark">{currentItinerary.title}</h2>
            <p className="text-muted small m-0">今日行程規劃</p>
          </div>

          <div>
            {currentItinerary.items.map((item) => (
              <ItineraryItem key={item.id} item={item} />
            ))}
          </div>

          <div style={{ height: "50px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
