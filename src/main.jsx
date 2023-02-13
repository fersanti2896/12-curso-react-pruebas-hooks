import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CallbackHook } from './06-memos/CallbackHook';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { FocusScreen } from './04-useRef/FocusScreen';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { Layout } from './05-useLayoutEffect/Layout';
import { MainApp } from './09-useContext/MainApp';
import { MemoHook } from './06-memos/MemoHook';
import { Memorize } from './06-memos/Memorize';
import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
import { Padre } from './07-tarea-memo/Padre';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { TodoApp } from './08-useReducer/TodoApp';

import './index.css'
import { getRoutes } from './Routes/Routes';
// import './08-useReducer/intro-reducer';

const router = getRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/> 
  </React.StrictMode>
)
