import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'

function App() {


  return (
		<div className="App">
			<Nav/>
			<Outlet />
		</div>
  )
}

export default App
