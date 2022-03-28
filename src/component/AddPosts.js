import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../Actions/posts";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function AddPosts() {
    const dispatch = useDispatch();

    const initialPostState = {
        title: "",
    };
    const [post, setPost] = useState(initialPostState);
    const [setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };
    const savePost = () => {
        const { title } = post;
        dispatch(createPost(title))
            .then((data) => {
                setPost({
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
                    <Modal.Title>Add Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    add a Post!
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                        value={post.title}
                        onChange={handleInputChange}
                        name="title"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={savePost}>
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
