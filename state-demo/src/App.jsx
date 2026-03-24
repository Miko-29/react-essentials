import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { UserDashboard } from "./UserDashboard";
import { SimpleCounter } from "./SimpleCounter";
import { PrevStateCounter } from "./PrevStateCounter";
import { BatchingCounter } from "./BatchingCounter";
import { UserProfile } from "./UserProfile";
import { TodoList } from "./TodoList";
import { ShoppingCart } from "./ShoppingCart";
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer";
import { CounterWithInit } from "./CounterWithInit";
import { CustomCounter } from "./CustomCounter";

function App() {
  return (
    <>
      <h1>Codevolution React Course</h1>
      {/* <Counter />
      <Counter />
      <LoginCard/>
      <UserDashboard isPremium={true}/> */}

      {/* <SimpleCounter/> */}
      {/* <PrevStateCounter /> */}
      {/* <BatchingCounter /> */}
      {/* <UserProfile /> */}
      {/* <TodoList/> */}
      {/* <ShoppingCart/> */}
      {/* <CounterWithReducer/> */}
      {/* <ShoppingCartWithReducer /> */}
      {/* <CounterWithInit /> */}
      <CustomCounter />
    </>
  );
}

export default App;
