import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

const StudentForm = () => {
    const [inputs, setInputs] = useState({
        username: "",
        note: ""
    });
    const url = `${import.meta.env.VITE_API_URL}/students`;

    const handleChange = (event : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event : FormEvent) => {
        event.preventDefault();
        await axios.post(url, inputs);
        window.location.reload();
    }

    return ( 
        <form className="border p-4 rounded-lg bg-white z-10 fixed w-[450px]" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-2xl font-bold border-b pb-2">เพิ่มนักเรียน</h1>
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
                    required
                ></textarea>
            </div>
            <div className="flex justify-end">
                <button 
                    className="bg-primary-normal text-white px-2 py-1 rounded-full hover:bg-primary-notThatLight transition flex gap-2 items-center "
                    type="submit"
                >
                    <span>เพิ่มนักเรียน</span>
                    <Icon icon="typcn:plus" color="white" />
                </button>
            </div>
        </form>
     );
}
 
export default StudentForm;