import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const TaskCard = () => {
  return (
    <div className="flex w-full bg-white p-6 rounded-2xl justify-between items-center shadow">
      <div className="text-start">
        <p className="text-gray-500">Task</p>
        <p className="font-bold">Go to gym</p>
      </div>
      <div className="text-start text-gray-500">
        <p>Priority</p>
        <p className="font-bold text-red-600">High</p>
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
      <CircularProgress variant="determinate" value={50} />
      <div className="flex gap-4">
        <FaRegEdit className="size-8"/>
        <MdDeleteOutline className="text-red-500 size-8" />
      </div>
    </div>
  );
};

export default TaskCard;
