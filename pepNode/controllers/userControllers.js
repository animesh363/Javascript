const getUsers = (req, res) => {
    res.send("This is GET request of user");
};

const createUser = (req, res) => {
    res.send("This is POST request of user");
};

export default {
    getUsers,
    createUser
};