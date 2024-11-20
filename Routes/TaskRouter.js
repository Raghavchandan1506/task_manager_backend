import { Router } from "express";
import { createTask, deleteTask, getAllTasks, updateTask } from "../Controllers/TaskController.js";

const router = Router();

router.post("/createTask",createTask)

router.get("/allTasks",getAllTasks)

router.put("/updateTask/:id",updateTask)

router.delete("/deleteTask/:id",deleteTask)


export default router