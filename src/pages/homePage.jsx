import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // <-- IMPORTANT

const HomePage = ({ TaskTableData, handleEdit, handleDelete }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = TaskTableData.filter((task) =>
    task.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <div className="header">
        <h1 className="header-title">Task Management 📋</h1>
      </div>

      {/* Search + Create */}
      <div className="top-section">
        <div className="search-box">
          <p className="search-icon">⌕</p>
          <input
            type="text"
            placeholder="Search Task"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button className="create-btn" onClick={() => navigate("/task")}>
          ✙ Create Task
        </button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="thead-row">
              <th className="th">Title</th>
              <th className="th">Description</th>
              <th className="th">Status</th>
              <th className="th">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.length === 0 && (
              <tr>
                <td colSpan="4" className="no-data">
                  No matching tasks found 😕
                </td>
              </tr>
            )}

            {filteredTasks.map((data, idx) => (
              <tr key={idx} className="tbody-row">
                <td className="td">{data.Title}</td>
                <td className="td">{data.Description}</td>
                <td className="td">
                  {data.Status === "Pending" && "⌛ Pending"}
                  {data.Status === "OnProcess" && "🔄 In Progress"}
                  {data.Status === "Completed" && "✔ Completed"}
                </td>

                <td className="td action-cell">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(idx, navigate)}
                  >
                    Edit ✏️
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(idx)}
                  >
                    Delete 🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
