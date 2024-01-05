import { classes, course, student } from "../types";

interface useFetchProps{
    uri : string;
    setState : React.Dispatch<React.SetStateAction<student>> | 
               React.Dispatch<React.SetStateAction<course>> |
               React.Dispatch<React.SetStateAction<classes>>
}
 
const useFetch = () => {
    
}
 
export default useFetch;