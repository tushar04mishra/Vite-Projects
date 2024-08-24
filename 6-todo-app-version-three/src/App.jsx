import AppName from "./compponents/AppName";
import AddTodo from "./compponents/AddTodo";
import TodoItems from "./compponents/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./compponents/WelcomeMessage";
function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2024",
  //   },
  //   {
  //     name: "Go To College",
  //     dueDate: "4/10/2024",
  //   },
  //   {
  //     name: "Like this video",
  //     dueDate: "right now",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added: ${itemName} Date: ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item deleted: ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
