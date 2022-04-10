const [editUser, setEditUser] = useState("");

useEffect(() => {
    const { editUser } = currentData;
    setEditUser(editUser);
}, [currentData]);
function handleEditSubmit(e) {
    e.preventDefault();
    dispatch(updatePost(currentData.id, currentData)).then((res) => {
        refreshData();
        console.log(res);
    });
}
<Modal backdrop="static" keyboard={false} show={handleShow}>
    <Modal.Header closeButton>
        <Modal.Title> Edit User</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form id="edit">
            edit a user!
            <input
                type="text"
                className="form-control"
                id="title"
                required
                value={editUser}
                onChange={(e) => setEditUser(e.target.value)}
                name="title"
            />
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="danger" onClick={() => setHandleShow(false)}>
            Close
        </Button>
        <Button variant="primary" form="edit" onClick={handleEditSubmit}>
            update Changes
        </Button>
    </Modal.Footer>
</Modal>;

const [editUser, setEditUser] = useState("");

useEffect(() => {
    const { editUser } = currentData;
    setEditUser(editUser);
}, [currentData]);
function handleEditSubmit(e) {
    e.preventDefault();
    dispatch(updatePost(currentData.id, currentData)).then((res) => {
        data();
        console.log(res);
    });
}
