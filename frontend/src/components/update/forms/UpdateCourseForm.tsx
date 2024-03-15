import { ChangeEvent, FormEvent, useState } from "react"
import { course } from "@/types"
import axios from "axios"
import { Icon } from "@iconify/react/dist/iconify.js"

const UpdateCourseForm = ({path, course, setToggle} : {
    path : string,
    course : course,
    setToggle : React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const url = `${import.meta.env.VITE_API_URL}${path}`
    const [inputs, setInputs] = useState({
        name: course.name,
        courseLength: course.courseLength,
    })

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event : FormEvent) => {
        event.preventDefault()
        await axios.put(url, inputs)
        window.location.reload()
    }

    const handleBackgroundClicked = () => {
        setToggle(false)
    }

    return (  
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div 
                className="fixed top-0 bottom-0 left-0 right-0 bg-slate-600 opacity-50"
                onClick={handleBackgroundClicked}
            ></div>
            <form className="flex flex-col justify-center gap-4 border p-4 rounded-lg bg-white z-10 fixed w-[450px]" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="text-2xl font-bold border-b pb-2">{`เเก้ไขข้อมูลคอร์ส '${course.name}'`}</h1>

                <div className="grid grid-cols-[100px_1fr] gap-2">
                    <label htmlFor="name" className="text-slate-400">ชื่อคอร์ส : </label>
                    <input
                        type="text"
                        className="outline-none px-2 py-1 border rounded-lg"
                        id="date"
                        name="name"
                        value={inputs.name}
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="courseLength" className="text-slate-400">จำนวนครั้ง :</label>
                    <div className="flex">
                        <input 
                            type="number" 
                            min={1} 
                            className="border px-2 py-1 rounded-lg w-20"
                            id="courseLength"
                            name="courseLength"
                            value={Number(inputs.courseLength)}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="bg-primary-normal text-white px-2 py-1 rounded-full hover:bg-primary-notThatLight transition flex gap-2 items-center ">
                        <span>เเก้ไขข้อมูล</span>
                        <Icon 
                            icon="pepicons-pencil:pen" 
                            color="white"
                            className="w-7 h-7 p-1" 
                        />
                    </button>
                </div>
            </form>
        </div>
    )
}
 
export default UpdateCourseForm