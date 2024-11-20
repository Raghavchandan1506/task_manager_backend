import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    taskName:{
        type:String,
        required: true
    },
    isDone:{
        type:Boolean,
        required:true
    }
}, { timestamps: true });

export const todos = mongoose.model("todos", TaskSchema);
