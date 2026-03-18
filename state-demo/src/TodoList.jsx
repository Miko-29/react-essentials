import { useState } from "react";

export const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", done: false},
    { id: 2, text: "Build an app", done: false },
  ]);

  console.log("Rendering with items", items);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: "Deply to production",
      done: false
    };
    // items.push(newItem) we can't use push because it will not trigger a re-render, so we must use setItem to change the array so react knows something has changed
    // setItems([...items, newItem]);
    setItems(items.concat(newItem));
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleDone = (id) => {
    setItems(items.map((item) => {
        if(item.id === id){
            return {...item, done: !item.done}
        }
        return item;
    }))
  }

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <span style={{textDecoration: item.done ? "line-through" : "none"}}>{item.text}</span>
              <button onClick={() => toggleDone(item.id)}>{item.done ? "Undo" : "Done"}</button>
              <button onClick={() => removeItem(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <button onClick={addItem}>Add item</button>
    </div>
  );
};
