import { v4 as uuidv4 } from 'uuid';

const users = []

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.petName} added to the database!`);
}

export const getUsers = (req, res) => {
    console.log(users);
    res.json(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);
}

export const patchUser = (req, res) => {
    const { id } = req.params;
    const { petName } = req.body; 

    if(petName) {
        user.petName = petName;
    }

    const user = users.find((user) => user.id === id); 
}