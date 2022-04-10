import React from "react";
import List from "./component/List";
import AddPosts from "./component/AddPosts";
import { Navbar, Nav, Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EditPosts from "./component/EditPosts";
function App() {
    return (
        <div>
            <Router>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/posts"> Post-JSON</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to={"/add"} className="nav-link">
                                Add
                            </Link>
                            <Link to={"/posts"} className="nav-link">
                                Posts
                            </Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="container mt-3">
                    <Routes>
                        <Route path={"/posts"} element={<List />} />
                        {/* <Route path="/add" element={<AddPosts />} />
                        <Route path="/posts/:id" element={<EditPosts />} /> */}
                    </Routes>
                </div>
            </Router>
            {/* <List /> */}
        </div>
    );
}

export default App;
