#  Todo App – Learning Redux Toolkit

This is a **Todo Application built while learning Redux Toolkit** with React.  
I built this project as a **learning exercise**, not just to make a Todo app, but to clearly understand **how global state management works** in React.

Earlier, I built the same Todo app using **Context API**.  
This time, I rebuilt it using **Redux Toolkit** to understand the differences, benefits, and real-world usage of Redux.
---

##  Purpose of This Project
As a student learning frontend development, my goals were:
- To understand **why Redux is needed**
- To learn **how Redux Toolkit simplifies Redux**
- To compare **Context API vs Redux Toolkit**
- To practice **writing clean, structured code**
- To build confidence in **state management concepts**

This project helped me move from *“copying code”* to *“understanding the flow”*.
---

##  What I Learned From This Project

### 1 Global State Management
- How to create **one global store** for the entire app
- Why state should not be managed separately in many components
- How Redux makes state **predictable and centralized**

---

### 2 Redux Toolkit Basics
I learned and used the following Redux Toolkit concepts:
- `configureStore()` – to create the global store
- `createSlice()` – to define state and reducer logic together
- `initialState` – to define the default state
- Reducer functions – to update state using actions
- Auto-generated actions – no need to write action creators manually
Redux Toolkit made Redux **simpler and less boilerplate-heavy**.
---

### 3 React Redux Hooks
I learned how components interact with Redux using hooks:

- `useSelector()` – to read data from the store
- `useDispatch()` – to send actions to reducers

Important understanding:
> Components **do not change state directly**.  
> They only dispatch actions.
---

### 4 Redux Data Flow (Core Concept)
I understood Redux works in **one direction only**:

UI → dispatch(action)
     → reducer updates state
     → store holds updated data
     → useSelector reads new state
     → UI updates automatically

This predictable flow made debugging and understanding much easier.

## Context API vs Redux Toolkit (What I Realized)
Context API	Redux Toolkit
Good for small apps	Better for medium/large apps
Manual logic handling	Standard structure
Can cause re-renders	Optimized updates
Less scalable	More scalable

Because I already knew Context API, learning Redux became easier and clearer.

## Tech Stack Used
 React (Vite)
 Redux Toolkit
 React Redux
 Tailwind CSS
 ---
 ## screenshot 
 <img width="799" height="386" alt="image" src="https://github.com/user-attachments/assets/b7a19071-64ed-4514-95b0-1c11441eff10" />



--
## Folder Structure (Learning-Oriented)
```
src/
├── app/
│   └── store.js        → Global Redux store
│
├── Features/
│   └── todo/
│       └── todoSlice.jsx → State & reducer logic
│
├── components/
│   ├── AddTodo.jsx     → Dispatches actions
│   └── Todos.jsx      → Reads state using useSelector
│
├── App.jsx
└── main.jsx            → Provider wraps App
```
This structure helped me understand separation of concerns.
---
## Key Takeaways (Student Perspective)
Redux is not hard if you understand the flow
Redux Toolkit removes unnecessary complexity
State logic should live outside components
Rebuilding the same project using different tools improves understanding

## Updates : 

- Added **Redux Toolkit** for state management.  
- Implemented **Add Todo**, **Edit Todo**, and **Delete Todo** functionality.  
- Added **input validation** to prevent empty todos.  
- Improved **UI with Tailwind CSS**:  
  - Clean card-style layout for todo list  
  - Responsive design  
  - Styled buttons for Add, Edit, Delete actions  
- Added **inline editing** for todos with Save button.  
- Added **simple comments** in code for better understanding and learning.

## About Me
## Lazik Latief
Frontend Developer 

I am currently learning React, Redux Toolkit, and modern frontend development by building projects and revisiting concepts until they are clear.
