import { todoTypes } from "../";

export const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoTypes.getTodos:
      return {
        ...state,
        todos: [...action.payload],
      };

    case todoTypes.setSearchedTodos:
      return {
        ...state,
        todos: [...action.payload],
      };

    case todoTypes.add:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case todoTypes.update:
      return {
        ...state,
        todos: state.todos?.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
                description: action.payload.description,
                states: action.payload.states,
              }
            : todo
        ),
      };

    case todoTypes.delete:
      return {
        ...state,
        todos: state.todos?.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
