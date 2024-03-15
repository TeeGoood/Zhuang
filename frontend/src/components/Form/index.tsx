import { FC } from "react"
import ClassForm from "./ClassForm"
import Mode from "./Mode"
import CourseForm from "./CourseForm"
import StudentForm from "./StudentForm"

interface FormWrapperProps{
    mode: Mode
    setMode: React.Dispatch<React.SetStateAction<Mode>>
}

const FormWrapper : FC<FormWrapperProps> = ({mode , setMode}) => {
    function formGetter( mode : Mode){
        switch(mode){
            case Mode.CLASS:
                return <ClassForm />
            case Mode.COURSE:
                return <CourseForm />
            case Mode.STUDENT:
                return <StudentForm />
        }
    }

    function handleBackgroundClick(){
        setMode(Mode.NORMAL)
    }
    

    return (  
        <div className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${mode === Mode.NORMAL && "hidden"}`}>
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-600 opacity-50" onClick={handleBackgroundClick}></div>
            {formGetter(mode)}
        </div>
    )
}
 
export default FormWrapper