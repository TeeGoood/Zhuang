import { Outlet } from "react-router-dom"
import SideBar from "@/components/Sidebar"
import FormWrapper from "@/components/Form"
import Mode from "@/components/Form/Mode"
import { useState } from "react"

function App() {
  const [mode , setMode] = useState(Mode.NORMAL)
  
  return (
    <div className="flex max-w-6xl mx-auto font-primary text-primary-dark">
      <SideBar setMode={setMode} />
      <Outlet context={setMode} />
      <FormWrapper mode={mode} setMode={setMode} />
    </div>
  )
}

export default App
