import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteModal from "./muiComponents/DeleteModal";
import MyButton from "./muiComponents/MyButton";

const TaskCard = ({ task }) => {
  const { id, name, progress, priority } = task;

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

  const [deleteItem, setDeleteItem] = useState(false);

  const handleDeleteItem = () => {
    setDeleteItem(true);
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
      <MyButton
        variant="contained"
        bgcolor="#e7e3e3"
        color="#5a5757"
      >To Do</MyButton>
      <CircularProgress
        variant="determinate"
        enableTrackSlot
        value={progress}
        sx={{ color: "red" }}
      />
      <div className="flex gap-4">
        <FaRegEdit className="size-8" />
        <MdDeleteOutline
          className="text-red-500 size-8"
          onClick={handleDeleteItem}
        />
        <DeleteModal open={deleteItem} setOpen={setDeleteItem} id={id} />
      </div>
    </div>
  );
};

export default TaskCard;
