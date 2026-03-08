import TaskCard from "./TaskCard";
import AddTaskModal from "./muiComponents/AddTaskModal"
import { useState } from "react";
import MyButton from "./muiComponents/MyButton";
import DeleteModal from "./muiComponents/DeleteModal"
import useTasksStore from "../store/tasksStore";

const TaskList = () => {

  const { tasks } = useTasksStore(state => state);

  const [ addItem, setAddItem ] = useState(false);

    const handleAddItem = () => {
    setAddItem(true);
  }


  return (
    <div className="h-full bg-gray-200 flex flex-col rounded-2xl p-20 gap-15">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl font-bold">Task List</h1>
        <MyButton
          variant="contained"
          bgcolor="#5e24c9"
          onClick={handleAddItem}
        >+ Add Task</MyButton>
      </div>
      <div className="flex flex-col gap-5">
        {tasks?.map(task => <TaskCard key={task.id} task={task}></TaskCard>)}
      </div>
      <AddTaskModal open={addItem} setOpen={setAddItem} />
      
      {/* <EditTaskModal open={open} setOpen={setOpen} value="edit" /> */}
    </div>
  );
};

export default TaskList;
