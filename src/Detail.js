// src/DetailPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { itineraryData } from "./Data"; // 引入資料

const Detail = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  // 從資料中搜尋對應 ID 的項目
  const allItems = itineraryData.flatMap((day) => day.items);
  const item = allItems.find((i) => i.id === itemId);

  if (!item) return <div className="p-5 text-center">找不到該行程資料</div>;

  return (
    <div className="bg-light min-vh-100 p-3">
      <div className="container bg-white rounded shadow-sm p-4" style={{ maxWidth: "600px" }}>
        {/* 返回按鈕 */}
        <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mb-4">
          ← 返回行程表
        </button>

        <span className="badge bg-primary mb-2">{item.time}</span>
        <h1 className="fw-bold mb-3">{item.place}</h1>
        <p className="lead text-dark">{item.note}</p>

        <hr />

        <h5 className="fw-bold mt-4">詳細資訊</h5>
        <p className="text-muted">{item.description}</p>

        {/* 圖片區塊 */}
        <div className="bg-secondary bg-opacity-10 rounded d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
          <span className="text-muted">圖片區塊</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;