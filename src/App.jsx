import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element=(<page1/>) />
        <Route path="/page2" element=(<page2/>) />
        <Route path="/page3" element=(<page3/>) />
      </Routes>
    </Router>
    </>
  )
}

export default App
