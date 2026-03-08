import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MyButton from "./MyButton";
import useTasksStore from "../../store/tasksStore";

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
  padding:10
};

export default function Delete({ open, setOpen, id }) {

  const { deleteTask } = useTasksStore((state) => state)
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    deleteTask(id);
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-center items-center mb-10">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Are you sure you want to delete this task?
            </Typography>
          </div>
          <div className="flex justify-center gap-10">
            <MyButton
              variant="contained"
              bgcolor="#5e24c9"
              onClick={handleDelete}
            >Delete</MyButton>
            <MyButton
              variant="outlined"
              bgcolor="#fff"
              color="#8b8686"
              onClick={handleClose}
            >Cancel</MyButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
