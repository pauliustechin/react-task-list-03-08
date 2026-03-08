import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteModal from "./muiComponents/DeleteModal";
import EditTaskModal from "./muiComponents/EditTaskModal";
import MyButton from "./muiComponents/MyButton";
import useTasksStore from "../store/tasksStore";

const TaskCard = ({ task }) => {
  const { id, name, progress, priority } = task;
  const { editTask } = useTasksStore((task) => task);

  let priorityColor = "green";
  switch (priority) {
    case "High":
      priorityColor = "text-red-600";
      break;
    case "Medium":
      priorityColor = "text-orange-400";
      break;
    case "Low":
      priorityColor = "text-green-400";
      break;
    default:
      priorityColor = "#fff";
  }

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const handleDeleteTask = () => {
    setDeleteModal(true);
  };

  const handleEditTask = () => {
    setEditModal(true);
  };

  const handleProgress = () => {
    let nextProgress = 0;
    switch (progress) {
      case 0:
        nextProgress = 50;
        break;
      case 50:
        nextProgress = 100;
        break;
      case 100:
        nextProgress = 0;
        break;
      default:
        console.log("Something went wrong");
    }

    editTask(id, { progress: nextProgress });
  };

  return (
    <div className="flex w-full bg-white p-6 rounded-2xl justify-between items-center shadow">
      <div className="text-start w-30">
        <p className="text-gray-500">Task</p>
        <p className="font-bold">{name}</p>
      </div>
      <div className="text-start text-gray-500 w-20">
        <p>Priority</p>
        <p className={`font-bold ${priorityColor}`}>{priority}</p>
      </div>
      <div className="w-40">
        <MyButton
          variant="contained"
          bgcolor="#e7e3e3"
          color="#5a5757"
          onClick={handleProgress}
        >
          {progress === 0 ? "To do" : progress === 50 ? "In progress" : "Done"}
        </MyButton>
      </div>

      <CircularProgress
        variant="determinate"
        enableTrackSlot
        value={progress}
        sx={{ color: "red" }}
      />
      <div className="flex gap-4">
        <FaRegEdit className="size-8" onClick={handleEditTask} />
        <EditTaskModal open={editModal} setOpen={setEditModal} id={id} />
        <MdDeleteOutline
          className="text-red-500 size-8"
          onClick={handleDeleteTask}
        />
        <DeleteModal open={deleteModal} setOpen={setDeleteModal} id={id} />
      </div>
    </div>
  );
};

export default TaskCard;
