import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

const ClassForm = () => {
    const {id} = useParams();
    const uri = `${import.meta.env.VITE_API_URL}/classes/${id}`;
    const [inputs, setInputs] = useState({
        date: "",
        paid: false,
        note: "-"
    });

    const handleChange = (event : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
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
            <h1 className="text-2xl font-bold border-b pb-2">เพิ่มคลาส</h1>

            <div className="grid grid-cols-[100px_1fr] p-2 gap-2">
                <label htmlFor="date" className="text-slate-400">วันที่ : </label>
                <div className="flex">
                    <input
                        type="date"
                        className="outline-none"
                        id="date"
                        name="date"
                        value={inputs.date}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <label htmlFor="paid" className="text-slate-400">เรียบร้อย :</label>
                <div className="flex gap-4">
                    <span className={`${inputs.paid ? "text-approval-normal" : "text-danger-normal"}`}>
                        {inputs.paid ? "เรียบร้อย" : "ไม่เรียบร้อย"}
                    </span>
                    <div className="relative w-6 h-6">
                        <input
                            type="checkbox"
                            className="appearance-none bg-slate-100 rounded-full w-full h-full peer cursor-pointer"
                            id="paid"
                            name="paid"
                            checked={inputs.paid}
                            onChange={() => setInputs(values => ({...values, paid: !values.paid}))}
                        />
                        <Icon
                            icon="lets-icons:check-fill"
                            color="#76e542"
                            className="absolute top-0 -ml-[3px] -mt-[3px] hidden peer-checked:block pointer-events-none"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
                <label htmlFor="note" className="text-slate-400">
                    หมายเหตุ
                </label>
                <textarea 
                    className="outline-none border rounded-lg px-2 py-1 h-40"
                    id="note" 
                    name="note"
                    value={inputs.note}
                    onChange={(e) => handleChange(e)} 
                ></textarea>
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
 
export default ClassForm;