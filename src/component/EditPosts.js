import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updatePost, deletePost, getPost } from "../Actions/posts";

const EditPosts = (props) => {
    const { id } = useParams();

    const initialPostState = {
        id: null,
        title: "",
    };
    const [currentPost, setCurrentPost] = useState(initialPostState);
    const [message, setMessage] = useState("");
    const posts = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(id));
        console.log(id);
    }, [dispatch, id]);
    useEffect(() => {
        if (posts) {
            setCurrentPost({ ...posts });
        }
    }, [posts]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentPost({ ...currentPost, [name]: value });
    };

    const updateContent = () => {
        dispatch(updatePost(currentPost.id, currentPost))
            .then((response) => {
                console.log(response);
                setMessage("The post was updated successfully!");
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const removePost = () => {
        dispatch(deletePost(currentPost.id))
            .then(() => {
                props.history.push("/posts");
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div>
            {currentPost ? (
                <div className="edit-form">
                    <h4>Post</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={currentPost.title || ""}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>

                    <button
                        className="badge badge-danger mr-2"
                        onClick={removePost}
                    >
                        Delete
                    </button>
                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateContent}
                    >
                        Update
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};
export default EditPosts;
