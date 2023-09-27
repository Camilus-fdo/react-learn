import { useState, useEffect } from "react"
import TodoItem from "../../components/dashboard/TodoItem"
import AddItem from "../../components/dashboard/AddItem"
import EditItem from "../../components/dashboard/EditItem"

export default function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({})
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  })
  const [todo, setTodo] = useState("")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleAddInputChange = (e) => {
    setTodo(e.target.value)
  }

  function handleAddFormSubmit(e) {
    e.preventDefault()
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }
    setTodo("")
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }
  
  return (
    <>
      <div class="container">
        <div class="row">
          <div>Simple CRUD for Learning</div>
          <div className="todo-form__wrapper">
            {isEditing ? (
              <EditItem
                currentTodo={currentTodo}
                setIsEditing={setIsEditing}
                onEditInputChange={handleEditInputChange}
                onEditFormSubmit={handleEditFormSubmit}
              />
            ) : (
              <AddItem 
                todo={todo}
                onAddInputChange={handleAddInputChange}
                onAddFormSubmit={handleAddFormSubmit}
              />
            )}
            <div>
              {todos.map((todo) => (
                <TodoItem 
                  key={todo.id} 
                  todo={todo}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}/>
                ))}
                  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
