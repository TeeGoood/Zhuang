import { useState } from "react";
import UpdateButton from "./UpdateButton";
import UpdateClassForm from "./forms/UpdateClassForm";
import Mode from "../forms/Mode";
import UpdateStudentForm from "./forms/UpdateStudentForm";
import UpdateCourseForm from "./forms/UpdateCourseForm";


const UpdateWrapper = ({path, mode, oldData} : {
    path: string,
    mode: Mode,
    oldData: any,
}) => {
    const [toggle, setToggle] = useState(false);
    let form;

    switch(mode){
        case Mode.STUDENT:
            form = <UpdateStudentForm path={path} student={oldData} setToggle={setToggle}/>;
            break;
        case Mode.COURSE:
            form = <UpdateCourseForm path={path} course={oldData} setToggle={setToggle}/>;
            break;
        case Mode.CLASS:
            form = <UpdateClassForm path={path} classes={oldData} setToggle={setToggle}/>;
            break;
    }
    
    return (  
        <>
            <UpdateButton setToggle={setToggle} />
            {toggle && form}
        </>
    );
}
 
export default UpdateWrapper;