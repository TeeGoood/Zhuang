import { Icon } from "@iconify/react/dist/iconify.js";
import Header from "../../components/Header";
import ProfileCard from "../../components/Profile/ProfileCard";
import CoursesList from "./CoursesList";
import Mode from "../../components/forms/Mode";
import { useOutletContext, useParams } from "react-router-dom";
import { student } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";

const Student = () => {
    const setMode : React.Dispatch<React.SetStateAction<Mode>> = useOutletContext();
    const [student, setStudent] = useState<student>();
    const {id} = useParams();
    const uri = `http://${import.meta.env.VITE_API_DOMAIN}/students/${id}`;

    useEffect(() => {
        fetchStudent(uri);
    },[id]);

    const fetchStudent = async (uri : string) => {
        try{
            const response = await axios.get(uri);
            const data = response.data;
            setStudent(data[0]);
            console.log(data[0]);
        }
        catch(err){
            console.log(err);
        }
    }

    return (  
        <div className="flex-1 p-10 flex flex-col gap-7">
            {student && 
                <>
                    <Header text={"ข้อมูลส่วนตัว"} />
                    <ProfileCard student={student} />
                    <div className="flex justify-between">
                        <Header text={"คอร์สเรียน"} />
                        <button 
                            className="bg-primary-normal text-white px-2 rounded-full hover:bg-primary-notThatLight transition flex gap-2 items-center" onClick={() => setMode(Mode.COURSE)}
                        >
                            <span >
                                เพิ่มคอร์ส
                            </span>
                            <Icon icon="typcn:plus" color="white" />
                        </button>
                    </div>
                    <CoursesList courses={student.courses} />
                </>
            }
        </div>
    );
}
 
export default Student;