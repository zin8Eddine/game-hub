import axios from "axios"


 export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"ddf390ff9dde41a6ba2eb60571653f8b",
    }
})