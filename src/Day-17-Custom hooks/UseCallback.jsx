import { memo, useCallback, useState } from "react";

const TodoButton = memo((props: any) => {
  console.log("button render");

  return (
    <button onClick={props.onAdd}>
      Add Todo
    </button>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  // const addTodo = () => {
  //   console.log("add");
  // };

  const addTodo = useCallback(() => {
    console.log("add");

    setTodos((prev) => {
      return [...prev, "new todo"];
    });
  }, []);

  return (
    <div>
      <h2>{count}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
      </button>
      <TodoButton onAdd={addTodo} />
      <div>
        {todos.map((todo, index) => {
          return (
            <p key={index}>
              {todo}
            </p>
          );
        })}
      </div>
    </div>
  );
}