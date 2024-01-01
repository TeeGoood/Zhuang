import { Outlet } from "react-router-dom"
import NavBar from "./components/nav/NavBar"

function App() {
  return (
    <div className="flex max-w-6xl mx-auto h-screen">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
