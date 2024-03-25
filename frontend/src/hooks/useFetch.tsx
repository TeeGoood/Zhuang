import axios from "axios";

const useFetch = async (url : string) => {
    const res = await axios.get(url);
    const data = res.data;

    return data;
}
 
export default useFetch;