export const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const updateLocalStorage = (newState) =>
  localStorage.setItem("tasks", JSON.stringify(newState));

export const taskReducer = (state, action) => {
  let copyTasks = [...state];
  let taskIndex = copyTasks.findIndex((t) => t.id === action.payload.id);

  switch (action.type) {
    case "ADD_TASK":
      console.log([...state, action.payload]);
      updateLocalStorage([...state, action.payload]);
      return [...state, action.payload];

    case "REMOVE_TASK":
      const newState = state.filter((t) => t.id !== action.payload.id);
      updateLocalStorage(newState);
      return newState;

    case "COMPLETE_TASK":
      taskIndex = copyTasks.findIndex((t) => t.id === action.payload.id);
      if (taskIndex !== -1) {
        console.log(!copyTasks[taskIndex].checked);
        const updatedTask = { ...copyTasks[taskIndex] };
        updatedTask.checked = !updatedTask.checked;
        copyTasks[taskIndex] = updatedTask;
      }
      updateLocalStorage(copyTasks);
      return copyTasks;

    case "EDIT_TASK":
      taskIndex = copyTasks.findIndex((t) => t.id === action.payload.task.id);
      if (taskIndex !== -1) {
        const updatedTask = { ...copyTasks[taskIndex] };
        updatedTask.content = action.payload.newContent;
        copyTasks[taskIndex] = updatedTask;
      }
      updateLocalStorage(copyTasks);
      return copyTasks;

    default:
      return state;
  }
};
