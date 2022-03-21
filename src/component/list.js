import React from "react";

//import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    //getList,
    getUsers,
} from "../Actions/users";

function List() {
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

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch;
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    console.log(users);

    return (
        <div>
            <div>
                <h4>User List</h4>
                <ul className="list-group">
                    {users &&
                        users.map((users, index) => (
                            <li className={"list-group-item "} key={index}>
                                {users.name}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default List;
