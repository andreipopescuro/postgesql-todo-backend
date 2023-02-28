import prismaConnection from "../utils/prismaConnection.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await prismaConnection.note.findFirst({
      where: {
        id: req.params.postId,
      },
      include: {
        Todos: {
          select: {
            id: true,
            title: true,
            done: true,
          },
        },
      },
    });
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const createTodo = async (req, res) => {
  try {
    const todo = await prismaConnection.todo.create({
      data: {
        noteId: req.params.postId,
        title: req.body.title,
      },
    });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await prismaConnection.todo.delete({
      where: {
        id: req.params.todoId,
      },
    });
    res.status(200).json(deletedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await prismaConnection.todo.update({
      where: {
        id: req.params.id,
      },
      data: {
        done: !req.body.done,
      },
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
export const deleteTodos = async (req, res) => {
  try {
    const deletedTodos = await prismaConnection.todo.deleteMany({
      where: {
        noteId: req.params.postId,
      },
    });
    res.status(200).json(deletedTodos);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
