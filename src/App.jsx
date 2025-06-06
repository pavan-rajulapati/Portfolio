import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App