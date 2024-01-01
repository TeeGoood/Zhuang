import { Outlet } from "react-router-dom"
import SideBar from "./components/sidebar"

function App() {
  return (
    <div className="flex max-w-6xl mx-auto h-screen font-primary text-primary-dark">
      <SideBar />
      <Outlet />
    </div>
  )
}

export default App
