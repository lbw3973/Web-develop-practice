import { useState, useRef } from "react";
import TodoAdd from "@/components/TodoAdd";
import TodoItem from "@/components/TodoItem";

function TodoList() {
  const [todoData, setTodoData] = useState([
    { id: 1, date: "2022-07-28", content: "강의하기", checked: true },
  ]);

  return (
    <div>
      {todoData.map((itemData) => {
        return <TodoItem key={itemData.id} itemData={itemData} />;
      })}
    </div>
  );
}

export default TodoList;
