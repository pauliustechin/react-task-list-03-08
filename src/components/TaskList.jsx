import TaskCard from "./TaskCard";
import AddTaskModal from "./muiComponents/AddTaskModal"
import { useState } from "react";
import MyButton from "./muiComponents/MyButton";
import DeleteModal from "./muiComponents/DeleteModal"
import EditTaskModal from "./muiComponents/EditTaskModal"

const TaskList = () => {

  const [ open, setOpen ] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  return (
    <div className="h-full bg-gray-200 flex flex-col rounded-2xl p-20 gap-15">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl font-bold">Task List</h1>
        <MyButton
          variant="contained"
          value="+ Add Task"
          bgcolor="#5e24c9"
          onClick={handleClick}
        ></MyButton>
      </div>
      <div>
        <TaskCard></TaskCard>
      </div>
      <AddTaskModal open={open} setOpen={setOpen} />
      <DeleteModal />
      <EditTaskModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default TaskList;
