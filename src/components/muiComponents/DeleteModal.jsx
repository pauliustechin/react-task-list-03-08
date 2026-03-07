import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MyButton from "./MyButton";


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

export default function Delete({ open, setOpen }) {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center mb-10 text-center">
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
              value="Delete"
              bgcolor="#5e24c9"
            />
            <MyButton
              variant="outlined"
              value="Cancel"
              bgcolor="#fff"
              color="#8b8686"
              onClick={handleClose}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
