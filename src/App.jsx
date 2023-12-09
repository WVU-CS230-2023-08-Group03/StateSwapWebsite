
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Messaging from './components/Messaging';
/*

*/

function App() {



  return (
    <>
 <div>
      <BrowserRouter>

        <Routes>
          <Route path = "/Account" element = {<SignInUp />} exact/>
          <Route path = "/Message" element = {<Messaging/>} /> 
          <Route path = "/" element = {<SignInUp />} exact/>

        </Routes>
      </BrowserRouter>
    </div>
     
    </>
  )
}

export default App
