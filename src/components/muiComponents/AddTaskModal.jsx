import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IoClose } from "react-icons/io5";
import MyButton from "./MyButton";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

export default function AddTaskModal({ open, setOpen }) {
  const [pick, setPick] = useState("High");

  const handleClose = () => setOpen(false);

  const handlePick = (e) => {
    setPick(e.target.value);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold", fontSize: "2rem" }}
            >
              Add Task
            </Typography>
            <IoClose className="text-4xl" onClick={handleClose} />
          </div>
          <form className="flex flex-col mb-10">
            <label htmlFor="">Task</label>
            <input type="text" className="my-input" />
          </form>
          <p>Priority</p>
          <div className="mb-15">
            <MyButton
              // pick
              variant={pick === "High" ? "contained" : "outlined"}
              value="High"
              color={pick === "High" ? "#fff" : "red"}
              bgcolor={pick === "High" && "red"}
              onClick={handlePick}
            />
            <MyButton
              variant={pick === "Medium" ? "contained" : "outlined"}
              value="Medium"
              color={pick === "Medium" ? "#fff" : "orange"}
              bgcolor={pick === "Medium" && "orange"}
              onClick={handlePick}
            />
            <MyButton
              variant={pick === "Low" ? "contained" : "outlined"}
              value="Low"
              color={pick === "Low" ? "#fff" : "green"}
              bgcolor={pick === "Low" && "green"}
              onClick={handlePick}
            />
          </div>

          <div className="flex justify-end mr-10">
            <MyButton
              variant="contained"
              value="ADD"
              bgcolor="#5e24c9"
              onClick={handlePick}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
