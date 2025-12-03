import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const mockData = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getItem(),
    },
    {
      id: 1,
      isDone: false,
      content: "웨이트하기",
      date: new Date().getItem(),
    },
    {
      id: 2,
      isDone: false,
      content: "유산소하기",
      date: new Date().getItem(),
    },
  ];
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
