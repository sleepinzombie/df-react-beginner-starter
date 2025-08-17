# React Beginner Exercise: Build a Simple Todo App with Priorities

## Objective

Create a small React app where users can **add tasks with a name and priority**, display the tasks, and mark tasks as completed. This exercise covers:

- Controlled components
- Multiple inputs with a single handler
- Event handling (`onChange`, `onClick`, `onSubmit`)
- State updates and functional updates
- Lifting state up (if splitting components)

---

## Requirements

### 1. Task Form

- Two inputs:
  - **Task Name** (text)
  - **Priority** (select: Low, Medium, High)
- Use a **single handler** for both inputs
- Controlled components: form values stored in React state

### 2. Adding Tasks

- On form submit:
  - Prevent default form behavior
  - Add the task to a **tasks array** in state
  - Reset the form inputs

### 3. Task List

- Display all tasks below the form
- Each task shows:
  - **Name**
  - **Priority**
  - **Complete button**

### 4. Mark Complete

- Clicking "Complete" removes the task from the list
- Use **functional state updates** for safe removal

---

## Hints

- Use `useState` for form data and tasks list
- Use `e.preventDefault()` in form submit handler
- For multiple form inputs, name the inputs according to state keys and use `[name]: value` in the handler
- When updating tasks array, use functional updates:

```js
setTasks((prevTasks) => [...prevTasks, newTask]);
```
