import "./App.css";
import List from "./component/list";
//import UsersInfo from "./component/UsersInfo";
//import axios from "axios";
//import { useEffect, useState } from "react";

function App() {
    // const [user, setUser] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await axios.get(
    //             "https://jsonplaceholder.typicode.com/users"
    //         );
    //         setUser(res.data);
    //     };
    //     fetchData();
    // }, []);
    // console.log(user);
    return (
        <div>
            <List />
        </div>
    );
}

export default App;
