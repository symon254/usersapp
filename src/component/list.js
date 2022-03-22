import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Actions/users";
import { Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function List() {
    const dispatch = useDispatch();

    // const removeUser = () => {
    //     dispatch(deleteUser(currentUser.id))
    //         .then(() => {
    //             props.history.push("/Users");
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };

    const userList = useSelector((state) => state.userList);
    const { users } = userList;

    function handleSubmit(e) {
        e.preventDefault();
        console.log("you ");
    }

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    console.log(users);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Button style={{ float: "left" }} variant="primary">
                        add
                    </Button>
                    <input style={{ float: "right" }} />
                    <Button variant="primary" style={{ float: "right" }}>
                        search
                    </Button>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <h4>User List</h4>

                    <Table>
                        <thead>
                            <tr>
                                <th>users</th>
                                <th>edit</th>
                                <th>remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((users, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{users.title}</td>
                                            <td>
                                                <Button variant="success">
                                                    edit
                                                </Button>
                                            </td>
                                            <td>
                                                <Button variant="danger">
                                                    remove
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                </div>
            </Form>
        </div>
    );
}

export default List;
