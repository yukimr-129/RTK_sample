import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TaskItem from "./TaskItem"
import { selectCount, selectTodo } from "./todoSlice"
import { addTodo } from './todoSlice'

const TodoLIst = () => {
    const [title, setTitle] = useState('')
    const todos = useSelector(selectTodo)
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    console.log(count);
    console.log(todos);

    const onClickAdd = () => {
        dispatch(addTodo({title: title}))
        setTitle('')
    }
    return (
        <>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter'/>
            <button onClick={onClickAdd}>ADD</button>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                {todos.map((todo, index) => (
                    <TaskItem key={todo.id} todo={todo}/>
                ))}
            </div>
        </>
    )
}

export default TodoLIst