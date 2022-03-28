import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost } from "../Actions/posts";
import { Button, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function List(props) {
    const dispatch = useDispatch();

    const [currentPost] = useState(null);

    const removePost = () => {
        dispatch(deletePost(currentPost.id))
            .then(() => {
                props.history.push("/posts");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const postList = useSelector((state) => state.postList);
    const { posts } = postList;

    function handleSubmit(e) {
        e.preventDefault();
        console.log("you ");
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    console.log(posts);

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
                    <h4>Post List</h4>
                    <Table>
                        <thead>
                            <tr>
                                <th>posts</th>
                                <th>edit</th>
                                <th>remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts &&
                                posts.map((posts, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{posts.title}</td>
                                            <td>
                                                <Button variant="success">
                                                    <Link
                                                        to={`/posts/${currentPost.id}`}
                                                        className="badge badge-warning"
                                                    >
                                                        Edit
                                                    </Link>
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    onClick={removePost}
                                                >
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
