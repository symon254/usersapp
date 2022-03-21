import axios from "axios";
export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
    responseType: "json",
    headers: {
        "Content-type": "application/json",
    },
});
