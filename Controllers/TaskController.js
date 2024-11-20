import { model } from "mongoose";
import { ApiError } from "../Utils/apiErrors.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { todos } from "../Models/TaskModel.js";
import { ApiResponse } from "../Utils/apiResponse.js";

const createTask = asyncHandler(async (req, res) => {
  const { taskName, isDone } = req.body;

  const todo = await todos.create({
    taskName,
    isDone,
  });
  const createdTask = await todos.findById(todo._id);

  if (!createdTask) {
    throw new ApiError(500, "Unable to create new task");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdTask, "Task created successfully"));
});

const getAllTasks = asyncHandler(async (req, res) => {
  const allTodos = await todos.find({});

  if (!allTodos) {
    throw new ApiError(500, "No tasks to show");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, allTodos, "Task created successfully"));
});

const updateTask = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const obj = { $set: { ...body } };
  const updateTodo = await todos.findByIdAndUpdate(id, obj);

  if (!updateTodo) {
    throw new ApiError(500, "failed to update task");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Task updated successfully"));
});

const deleteTask = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const deleteTodo = await todos.findByIdAndDelete(id);

  if (!deleteTodo) {
    throw new ApiError(500, "failed to delete task");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Task deleted successfully"));
});

export { createTask, getAllTasks, updateTask, deleteTask };
