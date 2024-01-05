import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

const StudentForm = () => {
    const [inputs, setInputs] = useState({
        username: "",
        fname: "",
        lname: ""
    });
    const uri = "http://localhost:9000/students";

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event : FormEvent) => {
        event.preventDefault();
        axios.post(uri, inputs);
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
                <label htmlFor="fname" className="text-slate-400">ชื่อ :</label>
                <input
                    type="text"
                    className="outline-none border rounded-lg px-2 py-1"
                    id="fname"
                    name="fname"
                    value={inputs.fname}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <label htmlFor="lname" className="text-slate-400">นามสกุล :</label>
                <input
                    type="text"
                    className="outline-none border rounded-lg px-2 py-1"
                    id="lname"
                    name="lname"
                    value={inputs.lname}
                    onChange={(e) => handleChange(e)}
                    required
                />
            </div>
            <div className="flex justify-end">
                <button 
                    className="bg-primary-normal text-white px-2 py-1 rounded-full hover:bg-primary-notThatLight transition flex gap-2 items-center "
                    type="submit">
                    <span>เพิ่มนักเรียน</span>
                    <Icon icon="typcn:plus" color="white" />
                </button>
            </div>
        </form>
     );
}
 
export default StudentForm;