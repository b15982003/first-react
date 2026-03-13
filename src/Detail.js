// src/Detail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { itineraryData } from "./OsakaData";

const Detail = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  let foundItem = null;
  for (const day of itineraryData) {
    const item = day.items.find((i) => i.id === itemId);
    if (item) {
      foundItem = item;
      break;
    }
  }

  if (!foundItem) {
    return <div className="p-5 text-center">找不到該行程資料</div>;
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-column align-items-center py-4">
      {/* 頂部導航 */}
      <div className="container" style={{ maxWidth: "800px" }}>
        <button
          className="btn btn-outline-secondary mb-3"
          onClick={() => navigate(-1)}
        >
          ← 返回行程表
        </button>

        <div className="bg-white p-4 p-md-5 rounded shadow-sm">
          {/* 標題區 */}
          <span className="badge bg-primary fs-6 mb-2">{foundItem.time}</span>
          <h1 className="fw-bold mb-3">{foundItem.place}</h1>
          <p className="text-muted border-start border-4 border-warning ps-3">
            📝 {foundItem.note}
          </p>

          <hr className="my-4" />
          <div className="detail-content">
            {foundItem.content ? (
              foundItem.content.map((block, index) => {
                // 情況 A: 如果是文字
                if (block.type === "text") {
                  return (
                    <p
                      key={index}
                      className="fs-5 text-dark lh-lg mb-4"
                      style={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {block.value}
                    </p>
                  );
                }

                // 情況 B: 如果是圖片
                if (block.type === "image") {
                  return (
                    <div key={index} className="mb-4 text-center">
                      <img
                        src={block.src}
                        alt={block.alt || "行程圖片"}
                        className="img-fluid rounded shadow-sm"
                        style={{
                          width: "100%",
                          maxWidth: "600px",
                          height: "auto",
                        }}
                      />
                      {block.alt && (
                        <p className="text-center text-muted small mt-2">
                          ▲ {block.alt}
                        </p>
                      )}
                    </div>
                  );
                }

                // 情況 C: Google Map 按鈕
                if (block.type === "mapButton") {
                  return (
                    <div key={index} className="mb-4 text-center">
                      <a
                        href={block.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary rounded-pill px-4 py-2 shadow-sm fw-bold"
                        style={{ textDecoration: "none" }}
                      >
                        📍 {block.label || "開啟地圖"}
                      </a>
                    </div>
                  );
                }
                return null;
              })
            ) : (
              // 如果該項目還沒有 content 資料，顯示舊的 description (向下相容)
              <p className="text-muted">
                {foundItem.description || "暫無詳細內容"}
              </p>
            )}
          </div>

          {/* 底部導航按鈕 (選填：如果有 Google Map) */}
          {foundItem.mapUrl && (
            <div className="mt-5 text-center">
              <a
                href={foundItem.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg px-5 rounded-pill shadow"
              >
                📍 開啟 Google Map 導航
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
