import CourseCard from "./CourseCard";

const CoursesList = () => {
    return (  
        <div className="grid grid-cols-2 gap-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    );
}
 
export default CoursesList;