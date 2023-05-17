import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [list, setList] = useState<(string | undefined)[]>([]);

  const handleClick = (list: string) => {
    setList((prevList) => [...prevList, list]);
  };
  const handleDelete = (item: string) => {
    setList(list.filter((listItem) => listItem !== item));
  };
  return (
    <>
      <h1 className="text-center">To Do App</h1>
      <Input setTodoList={handleClick} />
      <List list={list} handleDelete={handleDelete} />
    </>
  );
}

export default App;
