import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../Actions/posts";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function AddPosts({ show, onHide, refreshData }) {
    const dispatch = useDispatch();

    const [post, setPost] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createPost(post)).then((res) => {
            refreshData();
            console.log(res);
        });
    }

    return (
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="addPost">
                    add a Post!
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        name="title"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="warning" form="addPost" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddPosts;
