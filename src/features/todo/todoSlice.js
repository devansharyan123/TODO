import { createSlice, nanoid } from '@reduxjs/toolkit';

// Load the initial state from localStorage or use a default state if not available
const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [{ id: 1, title: "hello world" }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState, //reducers are used to lay down properties
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload // to extract the value we are providing to the reducer to store
            };
            state.todos.push(todo); //to edit the reducer if the value has changed

            // Save the updated state to localStorage
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo: (state, actions) => {
            state.todos = state.todos.filter((todo) => todo.id !== actions.payload);

            // Save the updated state to localStorage
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
