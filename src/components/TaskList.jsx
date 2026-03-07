import { Button } from "@mui/material";
import TaskCard from "./TaskCard";

const TaskList = () => {
  return (
    <div className="h-full bg-gray-200 flex flex-col rounded-2xl p-20 gap-15">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl font-bold">Task List</h1>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#5721af",
            fontWeight: "bold",
            fontSize: "16px",
            height: "fit-content",
            borderRadius: "10px",
          }}
        >
          + Add Task
        </Button>
      </div>
      <div>
        <TaskCard></TaskCard>
      </div>
    </div>
  );
};

export default TaskList;
