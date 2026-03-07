import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const TaskCard = ({ task }) => {
  const { name, progress, priority } = task;

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

  return (
    <div className="flex flex-[2_1_auto] w-full bg-white p-6 rounded-2xl justify-between items-center shadow">
      <div className="text-start w-30">
        <p className="text-gray-500">Task</p>
        <p className="font-bold">{name}</p>
      </div>
      <div className="text-start text-gray-500 w-20">
        <p>Priority</p>
        <p className={`font-bold ${priorityColor}`}>{priority}</p>
      </div>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#e7e3e3",
          color: "#5a5757",
          fontWeight: "bold",
          height: "fit-content",
        }}
      >
        To Do
      </Button>
      <CircularProgress
        variant="determinate"
        enableTrackSlot
        value={progress}
        sx={{ color: "red" }}
      />
      <div className="flex gap-4">
        <FaRegEdit className="size-8" />
        <MdDeleteOutline className="text-red-500 size-8" />
      </div>
    </div>
  );
};

export default TaskCard;
