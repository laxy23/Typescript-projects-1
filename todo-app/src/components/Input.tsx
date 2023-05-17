import { useState } from "react";

interface InputProps {
  setTodoList: (list: string) => void;
}

function Input({ setTodoList }: InputProps) {
  const [value, setValue] = useState("");

  const addValue = () => {
    setTodoList(value);
    setValue("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={addValue}>Add</button>
    </div>
  );
}

export default Input;
