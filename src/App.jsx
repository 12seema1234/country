import { useState } from 'react'
import { Routes ,Route} from 'react-router-dom'
import Header from './Components/Header'
import classes from './index.css'
import DetailPage from './Pages/DetailPage'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Header/>
    
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path="pages/:alpha3Code" element={<DetailPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
