import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './components/counter/Counter.jsx'
import Editor from './components/editor/Editor.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UniqueID from './components/uniqueId/UniqueID.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Form from './components/form/Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/form' element={<Form />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/uniqueid' element={<UniqueID />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
)
