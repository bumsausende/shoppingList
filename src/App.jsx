import { useState, useEffect } from "react";
import "./App.css";
import { ShoppingItems } from "./components/ShoppingItems";

export const App = () => {
  return (
    <div className="App">
      <h1>EINKAUFEN JUNGE!</h1>
      <ShoppingItems />
    </div>
  );
};
