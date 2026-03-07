import { Button } from "@mui/material";

const MyButton = ({ variant, color, bgcolor, value, onClick, type, form }) => {
  const style = {
    fontWeight: "bold",
    fontSize: "16px",
    height: "fit-content",
    borderRadius: "10px",
    color: `${color}`,
    bgcolor: `${bgcolor}`,
    border: `1px solid ${color}`,
  };

  return (
    <Button variant={variant} sx={style} onClick={onClick} value={value} type={type} form={form}>
      {value}
    </Button>
  );
};

export default MyButton;
