import { Icon } from '@iconify/react'
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { student } from "@/types"
import NameCard from "./NameCard"
import SearchBar from "./SearchBar"
import Mode from "@/components/Form/Mode"

const SideBar = (
    {setMode} : 
    {setMode : React.Dispatch<React.SetStateAction<Mode>>}
) => {
    const [students, setStudents] = useState<student[]>()
    const {id} = useParams()
    const [keyword, setKeyword] = useState("")

    async function fetch(url:string) {
        const response = await axios.get(url)
        const data = response.data
        setStudents(data)
        console.log(data)
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/students`)
    },[])
    
    return (  
        <div className="w-64 px-7 py-5 border-r border-r-primary-light">
            <h1 className="text-3xl font-bold mb-7 flex items-center gap-3">
                <span className="text-primary-normal">Zhuang</span>
                <Icon 
                    icon="ph:student" color="#3559E0" 
                    width={30} 
                    height={30}
                />
            </h1>
            <SearchBar setKeyword={setKeyword}/>
            
            <div className="h-1/2 -overflow-hidden mt-5">
                <button 
                    className="bg-primary-normal text-white px-2 py-1 rounded-full hover:bg-primary-notThatLight transition flex gap-2 items-center mb-2" 
                    onClick={() => setMode(Mode.STUDENT)}
                >
                    <span >
                        เพิ่มนักเรียน
                    </span>
                    <Icon icon="typcn:plus" color="white" />
                </button>
                {students &&
                    students.map((student) => {
                        const studentId = student._id
                        const isActive = (id === studentId)
                        if(!student.username.includes(keyword)){
                            return
                        }

                        return (
                            <Link to={`/students/${studentId}`} key={studentId}>
                                <NameCard name={student.username} isActive={isActive} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
 
export default SideBar