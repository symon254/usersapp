import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../Actions/users";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function AddPosts() {
    const dispatch = useDispatch();

    const initialUserState = {
        title: "",
    };
    const [user, setUser] = useState(initialUserState);
    const [setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const saveUser = () => {
        const { title } = user;
        dispatch(createUser(title))
            .then((data) => {
                setUser({
                    title: data.title,
                });
                setSubmitted(true);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("you ");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    add a User!
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                        value={user.title}
                        onChange={handleInputChange}
                        name="name"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={saveUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div>
                <Button
                    onClick={handleShow}
                    style={{ float: "left" }}
                    variant="primary"
                >
                    Add
                </Button>
            </div>
            <br />
        </Form>
    );
}

export default AddPosts;
