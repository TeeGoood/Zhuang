import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { student } from "../../../types";

const UpdateStudentForm = ({path, student, setToggle} : {
    path : string,
    student : student,
    setToggle : React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [inputs, setInputs] = useState({
        username: student.username,
        note: student.note
    });
    const url = `${import.meta.env.VITE_API_URL}${path}`;

    const handleChange = (event : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event : FormEvent) => {
        event.preventDefault();
        await axios.put(url, inputs);
        window.location.reload();
    }

    const handleBackgroundClicked = () => {
        setToggle(false);
    }
    
    return (  
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div 
                className="fixed top-0 bottom-0 left-0 right-0 bg-slate-600 opacity-50"
                onClick={handleBackgroundClicked}
            >
            </div>
            <form className="border p-4 rounded-lg bg-white z-10 fixed w-[450px] font-normal text-base" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="text-2xl font-bold border-b pb-2">เเก้ไขข้อมูล '{student.username}'</h1>
                <div className="grid grid-cols-[100px_1fr] p-4 gap-2">
                    <label htmlFor="username" className="text-slate-400">ชื่อเล่น :</label>
                    <input
                        type="text"
                        className="outline-none border rounded-lg px-2 py-1"
                        id="username"
                        name="username"
                        value={inputs.username}
                        onChange={(e) => handleChange(e)}
                        required

                    />
                    <label htmlFor="note" className="text-slate-400">หมายเหตุ :</label>
                    <textarea
                        className="outline-none border rounded-lg px-2 py-1 h-40"
                        id="note"
                        name="note"
                        value={inputs.note}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button 
                        className="bg-primary-normal text-white px-2 py-1 rounded-full hover:bg-primary-notThatLight transition flex gap-2 items-center "
                        type="submit"
                    >
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
    );
}
 
export default UpdateStudentForm;