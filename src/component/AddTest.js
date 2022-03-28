import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../Actions/users";
const AddTest = () => {
    const initialState = {
        id: null,
        title: "",
        description: "",
    };
    const [tutorial, setTutorial] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTutorial({ ...tutorial, [name]: value });
    };
    const saveTutorial = () => {
        const { title, description } = tutorial;
        dispatch(createUser(title, description))
            .then((data) => {
                setTutorial({
                    id: data.id,
                    title: data.title,
                    description: data.description,
                });
                setSubmitted(true);
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const newTutorial = () => {
        setTutorial(initialState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newTutorial}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={tutorial.title}
                            onChange={handleInputChange}
                            name="title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={tutorial.description}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </div>
                    <button onClick={saveTutorial} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};
export default AddTest;
