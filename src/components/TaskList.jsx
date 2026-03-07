import TaskCard from "./TaskCard";
import AddTaskModal from "./muiComponents/AddTaskModal"
import { useState } from "react";
import MyButton from "./muiComponents/MyButton";
import DeleteModal from "./muiComponents/DeleteModal"
import EditTaskModal from "./muiComponents/EditTaskModal"
import useTasksStore from "../store/tasksStore";

const TaskList = () => {

  const { tasks } = useTasksStore(state => state);

  const [ openAdd, setOpenAdd ] = useState(false);
  // const [ open, setOpen ] = useState(false);

  const handleClick = () => {
    setOpenAdd(true);
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
        {tasks?.map(task => <TaskCard key={task.id} task={task}></TaskCard>)}
      </div>
      <AddTaskModal onClick={handleClick} open={openAdd} setOpen={setOpenAdd} />
      <DeleteModal />
      {/* <EditTaskModal open={open} setOpen={setOpen} value="edit" /> */}
    </div>
  );
};

export default TaskList;
