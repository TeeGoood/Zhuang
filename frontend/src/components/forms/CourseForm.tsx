import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { redirect, useLocation, useParams } from "react-router-dom";

const CourseForm = () => {
    const {id} = useParams();
    const uri = `https://${import.meta.env.VITE_API_DOMAIN}/courses/${id}`;

    const [inputs, setInputs] = useState({
        name: "",
        courseLength: 0,
    });

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event : FormEvent) => {
        event.preventDefault();
        await axios.post(uri, inputs);
        window.location.reload();
    }

    return (  
        <form className="flex flex-col justify-center gap-4 border p-4 rounded-lg bg-white z-10 fixed w-[450px]" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-2xl font-bold border-b pb-2">เพิ่มคอร์ส</h1>

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
                        value={inputs.courseLength}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-primary-normal text-white px-2 py-1 rounded-full hover:bg-primary-notThatLight transition flex gap-2 items-center ">
                    <span>เพิ่มคลาส</span>
                    <Icon icon="typcn:plus" color="white" />
                </button>
            </div>
        </form>
    );
}
 
export default CourseForm;