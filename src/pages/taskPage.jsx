import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTask.css"; // <-- IMPORTANT

const CreateTask = ({
  TaskData,
  handleTaskDataChange,
  handleCreate,
  EditIndex,
  setTaskData,
  initialTaskData,
  setEditIndex,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <div className="header">
        <h1 className="header-title">Task Management 📋</h1>
      </div>

      {/* Form */}
      <form
        className="form-container"
        onSubmit={(e) => handleCreate(e, navigate)}
      >
        <h1 className="form-title">
          {EditIndex === null ? "Create Task 📝" : "Update Task 📝"}
        </h1>

        {/* Title */}
        <label className="label">Title:</label>
        <input
          className="input"
          type="text"
          required
          placeholder="Enter Task Title"
          value={TaskData.Title}
          onChange={(e) => handleTaskDataChange("Title", e.target.value)}
        />

        {/* Description */}
        <label className="label">Description:</label>
        <textarea
          className="textarea"
          required
          placeholder="Enter Task Description"
          value={TaskData.Description}
          onChange={(e) => handleTaskDataChange("Description", e.target.value)}
        ></textarea>

        {/* Status */}
        <label className="label">Status:</label>
        <select
          className="select"
          required
          value={TaskData.Status}
          onChange={(e) => handleTaskDataChange("Status", e.target.value)}
        >
          <option value="" disabled hidden>
            Select Status
          </option>
          <option value="Pending">Pending</option>
          <option value="OnProcess">OnProcess</option>
          <option value="Completed">Completed</option>
        </select>

        {/* Buttons */}
        <div className="button-row">
          <button
            type="button"
            className="btn cancel-btn"
            onClick={() => {
              setTaskData(initialTaskData);
              setEditIndex(null);
              navigate("/home");
            }}
          >
            ⨂ Cancel
          </button>

          <button type="submit" className="btn submit-btn">
            {EditIndex === null ? "✙ Create" : "🔄 Update"}
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTask;
