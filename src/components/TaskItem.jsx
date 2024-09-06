import React from "react";

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleComplete}
      />
      <span>
        {task.name}: {task.description}
      </span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
