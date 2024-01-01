import ProfileCard from "../../components/Profile/ProfileCard";
import CoursesList from "./CoursesList";

const Student = () => {
    return (  
        <div className="flex-1 p-10 flex flex-col gap-7">
            <h1 className="text-xl font-semibold ml-5">
                ข้อมูลส่วนตัว
            </h1>
            <ProfileCard />
            <p className="text-xl font-semibold ml-5">
                คอร์สเรียน
            </p>
            <CoursesList />
        </div>
    );
}
 
export default Student;