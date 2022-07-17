import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    idCount: 4,
    todos: [
        {
            id: 1,
            title: 'Task 1',
            completed: true,
        },
        {
            id: 2,
            title: 'Task 2',
            completed: false,
        },
        {
            id: 3,
            title: 'Task 3',
            completed: true,
        },
        {
            id: 4,
            title: 'Task 4',
            completed: false,
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action);
            state.idCount ++;
            const ids = state.todos.map((todo, i) => {
                return todo.id
            })
            const maxId = ids.length !== 0 ? Math.max(...ids) + 1 : 1
            const newTodo = {id: maxId, ...action.payload};
            state.todos =  [...state.todos, {...newTodo, completed: false}]
        },
        removeTodo: (state, action) => {
            console.log(action.payload);
            state.idCount --;
            state.todos = state.todos.filter((val, i) => {
                return val.id !== action.payload
            })
        },
        updatecompleteTodo: (state, action) => {
            const todo = state.todos.find((val ,i) => {
                return val.id === action.payload.id
            })

            if(todo) {
                todo.completed = !todo.completed
            }

        }
    }
})

export const {addTodo, removeTodo, updatecompleteTodo} = todoSlice.actions

export const selectTodo = (state) => state.todo.todos
export const selectCount = (state) => state.todo.idCount

export default todoSlice.reducer

