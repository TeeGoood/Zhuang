import CourseCard from "./CourseCard"

const CoursesList = ({courses} : {courses : string[]}) => {
    return (  
        <div className="grid grid-cols-1 gap-4 pb-6 lg:grid-cols-2">
            {courses &&
                courses.map((courseId) => {
                    return <CourseCard courseId={courseId} key={courseId}/>
                })
            }
        </div>
    )
}
 
export default CoursesList