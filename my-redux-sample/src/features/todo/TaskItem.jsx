import { useDispatch } from "react-redux"
import { removeTodo, updatecompleteTodo} from './todoSlice'

const TaskItem = ({todo}) => {
    const dispatch = useDispatch()

    const toggleCheckBox = () => {
        dispatch(updatecompleteTodo(todo))
    }

    const onClickDelete = () => {
        dispatch(removeTodo(todo.id))
    }

    return (
        <>

            <div style={{display: 'flex', marginBottom: '20px'}}>
                <input type="checkbox" onClick={toggleCheckBox} defaultChecked={todo.completed}/>
                <span>{todo.title}</span>
                <button onClick={onClickDelete}>DELETE</button>
            </div>
        </>
    )
}

export default TaskItem