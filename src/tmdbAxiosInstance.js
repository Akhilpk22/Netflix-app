import  Axios  from "axios";

const tmdbAxiosInstance=Axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default tmdbAxiosInstance;