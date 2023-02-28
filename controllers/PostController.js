import prismaConnection from "../utils/prismaConnection.js";

export const createPost = async (req, res) => {
  try {
    const createPostd = await prismaConnection.note.create({
      data: {
        title: req.body.title,
        authorId: req.params.userId,
      },
    });
    res.status(200).json(createPostd);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const getPosts = async (req, res) => {
  try {
    const allPosts = await prismaConnection.note.findMany({
      where: { authorId: req.params.userId },
    });
    res.status(200).json(allPosts);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const deletePosts = async (req, res) => {
  try {
    const deletedPosts = await prismaConnection.note.deleteMany({
      where: { authorId: req.params.userId },
    });
    res.status(200).json(deletedPosts);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await prismaConnection.note.delete({
      where: {
        id: req.params.postId,
      },
    });
    res.status(200).json(deletedPost);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const updatePost = async (req, res) => {
  try {
    const updatedTitle = await prismaConnection.note.update({
      where: { id: req.params.postId },
      data: {
        title: req.body.title,
      },
    });
    res.status(200).json(updatedTitle);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
