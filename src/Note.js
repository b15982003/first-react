
import React from "react";
import { useNavigate } from "react-router-dom";
import { packingList, precautions } from "./NoteData";

const Notes = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* 頂部導航列 */}
      <header className="bg-white shadow-sm p-3 sticky-top">
        <div className="container" style={{ maxWidth: "600px" }}>
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-sm btn-outline-secondary me-3" 
              onClick={() => navigate(-1)}
            >
              ← 返回
            </button>
            <h5 className="m-0 fw-bold text-dark">
              📝 備註與清單
            </h5>
          </div>
        </div>
      </header>

      <div className="container py-4" style={{ maxWidth: "600px" }}>
        
        {/* --- 第一區塊：應帶物品 (卡片清單樣式) --- */}
        <section className="mb-5">
          <h4 className="fw-bold text-primary mb-3">🎒 應帶物品 Check List</h4>
          
          {packingList.map((group) => (
            <div key={group.id} className="card border-0 shadow-sm mb-3">
              <div className="card-header bg-primary text-white fw-bold">
                {group.category}
              </div>
              <ul className="list-group list-group-flush">
                {group.items.map((item, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center">
                    <input 
                      className="form-check-input me-3" 
                      type="checkbox" 
                      id={`check-${group.id}-${index}`} 
                    />
                    <label className="form-check-label w-100 stretched-link" htmlFor={`check-${group.id}-${index}`}>
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* --- 第二區塊：注意事項 (警告框樣式) --- */}
        <section>
          <h4 className="fw-bold text-danger mb-3">⚠️ 重要注意事項</h4>
          
          <div className="d-flex flex-column gap-3">
            {precautions.map((note) => (
              <div key={note.id} className="alert alert-warning border-0 shadow-sm m-0">
                <h5 className="alert-heading fw-bold fs-6">
                  📌 {note.title}
                </h5>
                <p className="mb-0 small text-dark opacity-75">
                  {note.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 底部留白 */}
        <div style={{ height: "50px" }}></div>
      </div>
    </div>
  );
};

export default Notes;