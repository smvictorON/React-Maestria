import { useReducer, useState } from 'react'

const HookUseReducer = () => {
  //primeiro parte é como o state, porém dentro do useReducer eu posso passar a função
  //que vai ser executar para mudar o state e tambem o valor inicial do estado
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  }, 0)

  const [taskText, setTaskText] = useState("")

  const initialTasks = [
    { id: 1, text: "fazer algo" },
    { id: 2, text: "fazer algo2" },
    { id: 3, text: "fazer algo3" },
  ]

  const taskReducer = (state, action) => {
    switch(action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText
        }

        setTaskText("")

        return [...state, newTask]
      case "DELETE":
        return state.filter(task => task.id !== action.id)
      default:
        return state
    }
  }

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchTasks({type: "ADD"})
  }

  const removeTask = (id) => {
    dispatchTasks({type: "DELETE", id: id})
  }

  return (
    <>
      <h2>HookUseReducer</h2>
      <p>{number}</p>
      <button onClick={dispatch}>Alterar</button>

      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
        <input type="submit" value="Gravar"/>
      </form>

      {tasks.map(task => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
      ))}
    </>
  )
}

export default HookUseReducer