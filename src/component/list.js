import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    findName,
    getPosts,
    createPost,
    updatePost,
    deletePost,
} from "../Actions/posts";
import { Button, Table, Modal, Form } from "react-bootstrap";
import AddPosts from "./AddPosts";
import EditTest from "./EditTest";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function List(props) {
    const [searchName, setSearchName] = useState("");
    const [currentName, setCurrentName] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onChangeSearchName = (e) => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };
    const findByName = () => {
        refreshSearchData();
        dispatch(findName(searchName));
    };
    const refreshSearchData = () => {
        setCurrentName(null);
        setCurrentIndex(-1);
    };

    const postList = useSelector((state) => state.postList);
    const { posts } = postList;

    const initialState = {
        posts: "",
    };

    const [handleShow, setHandleShow] = useState(false);
    const [handleShowEdit, setHandleShowEdit] = useState(false);
    const [currentData, setCurrentData] = useState(initialState);

    const dispatch = useDispatch();

    useEffect(() => {
        data();
    }, [dispatch]);

    const data = () => {
        dispatch(getPosts());
    };
    const [name, setName] = useState("");
    useEffect(() => {
        const { name } = currentData;
        setName(name);
    }, [currentData]);

    const handleEditShow = (item) => {
        setHandleShowEdit(true);

        const formValue = {
            id: item.id,
            name: item.name,
        };
        setCurrentData(formValue);
    };
    function handleEditSubmit(e) {
        e.preventDefault();
        dispatch(updatePost(currentData.id, currentData));
        data();

        setHandleShowEdit(false);
    }

    const [addUser, setAddUser] = useState("");

    function handleAddSubmit(e) {
        e.preventDefault();
        dispatch(createPost(addUser)).then((res) => {
            data();
            setHandleShow(false);
            console.log(res);
        });
    }
    const delName = (item) => {
        dispatch(deletePost(item.id));
        data();
    };
    return (
        <div>
            <Modal show={handleShow} backdrop="static" keyboard={false}>
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
                            value={addUser ?? ""}
                            onChange={(e) => setAddUser(e.target.value)}
                            name="title"
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="danger"
                        onClick={() => setHandleShow(false)}
                    >
                        Close
                    </Button>
                    <Button
                        variant="warning"
                        form="addPost"
                        onClick={handleAddSubmit}
                        // onClick={data}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal backdrop="static" keyboard={false} show={handleShowEdit}>
                {" "}
                <Modal.Header closeButton>
                    <Modal.Title> Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="edit">
                        edit a user!
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={name ?? ""}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="danger"
                        onClick={() => setHandleShowEdit(false)}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        form="edit"
                        onClick={handleEditSubmit}
                    >
                        update Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div>
                <Button
                    style={{ float: "left" }}
                    variant="primary"
                    onClick={() => setHandleShow(true)}
                >
                    add
                </Button>
                <Button variant="default" size="sm" onClick={data}>
                    Refresh
                </Button>
                <input
                    style={{ float: "right" }}
                    type="text"
                    placeholder="Search by Name"
                    value={searchName}
                    onChange={onChangeSearchName}
                />
                <Button
                    variant="primary"
                    style={{ float: "right" }}
                    onClick={findByName}
                >
                    search
                </Button>
            </div>
            <br />
            <br />
            <br />
            <div>
                <h4>Post List</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Posts</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts &&
                            posts.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>
                                            <Button
                                                variant="success"
                                                size="sm"
                                                onClick={() =>
                                                    handleEditShow(item)
                                                }
                                            >
                                                edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => delName(item)}
                                            >
                                                Remove
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </div>
            {/* <AddPosts
                show={handleShow}
                onHide={() => setHandleShow(false)}
                refreshData={data}
            /> */}
            {/* <EditTest
                show={handleShow}
                onHide={() => setHandleShowEdit(false)}
                currentData={currentData}
            /> */}
        </div>
    );
}

export default List;
