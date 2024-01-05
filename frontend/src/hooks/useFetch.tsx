import axios from "axios";

const useFetch = async (uri : string) => {
    const res = await axios.get(uri);
    const data = res.data;

    return data;
}
 
export default useFetch;