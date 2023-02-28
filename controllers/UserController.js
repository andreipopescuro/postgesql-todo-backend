import prismaConnection from "../utils/prismaConnection.js";

export const createUser = async (req, res) => {
  try {
    const newUser = await prismaConnection.user.create({
      data: { name: "Unknown" },
    });
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await prismaConnection.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const users = await prismaConnection.user.findMany({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const updateUser = (req, res) => {};
export const deleteUser = (req, res) => {};
