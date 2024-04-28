import { Suspense, useState } from 'react'

import './App.css'
import { Home } from './pages/Home'
import {AddTodos} from './pages/addTodos'
import { Login } from './pages/Login'


import {BrowserRouter , Routes , Route ,useNavigate} from 'react-router-dom';
import { SignUp } from './pages/SignUp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
       
        <Routes>
          <Route path='/AddTodos' element = {<Suspense fallback={"loading...."}><AddTodos /></Suspense>}></Route>
          <Route path='/' element = {<Suspense fallback={"loading...."}><Home /></Suspense>}></Route>
          <Route path='/Login' element = {<Suspense fallback={"loading...."}><Login /></Suspense>}></Route>
          <Route path='/SignUp' element = {<Suspense fallback={"loading...."}><SignUp /></Suspense>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
