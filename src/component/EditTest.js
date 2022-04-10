import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, getPost } from "../Actions/posts";
import { Modal, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function EditTest({ show, onHide, refreshData, currentData }) {
    const { id } = useParams();

    const dispatch = useDispatch();

    const [post, setPost] = useState("");

    const posts = useSelector((state) => state.postList);

    useEffect(() => {
        const { post } = currentData;
        setPost(post);
    }, [currentData]);


    console.log(posts); 
    //console.log({ post: post });

    //  const updatePosts = () => {
    //     dispatch(updatePost(post.id, post))
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updatePost(currentData.id, currentData)).then((res) => {
            refreshData();
            console.log(res);
        });
    }

    return (
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title> Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="addPost">
                    edit a user!
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
                <Button variant="primary" form="addPost" onClick={handleSubmit}>
                    update Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditTest;
