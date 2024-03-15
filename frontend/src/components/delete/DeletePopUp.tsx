import { Icon } from "@iconify/react/dist/iconify.js"
import axios from "axios"

const DeletePopUp = (
    {name, url, setToggle} : {
        name: string,
        url: string,
        setToggle: React.Dispatch<React.SetStateAction<boolean>>,
    }
) => {
    console.log(`${import.meta.env.VITE_API_URL}${url}`)

    const handleButtonClicked = async (url : string) => {
        try{
            await axios.delete(`${import.meta.env.VITE_API_URL}${url}`)
        }
        catch(err){
            console.log(err)
        }
        finally{
            window.location.reload()
        }
    }

    return (  
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <div 
                className="fixed bg-slate-600 opacity-50 top-0 bottom-0 left-0 right-0"
                onClick={() => setToggle(false)}
            ></div>
            <div className="bg-white py-4 px-6 fixed rounded-2xl w-80 h-32 flex flex-col justify-between">
                <h1 className="text-2xl font-bold border-b">เเน่ใจว่าจะลบ "{name}"</h1>
                <div className="flex gap-4 justify-end">
                    <button 
                        className="text-white bg-danger-normal rounded flex items-center gap-2 px-2 hover:bg-danger-light transition"
                        onClick={() => handleButtonClicked(url)}
                    >
                        <Icon icon="mdi:bin" color="white" />
                        <span>ลบ</span>
                    </button>
                    <button 
                        className="border border-slate-300 rounded px-2 py-1 hover:bg-slate-300 transition"
                        onClick={() => setToggle(false)}
                    >
                        ยกเลิก
                    </button>
                </div>
            </div>
        </div>
    )
}
 
export default DeletePopUp