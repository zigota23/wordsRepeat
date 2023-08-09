import { Typography } from "@mui/joy";
import { FC } from "react";

interface IProps {
  name: string;
}

const VDMText: FC<IProps> = ({ name }) => {
  return (
    <>
      <Typography
        level="body1"
        fontSize={22}
        sx={{
          textAlign: "center",
          marginInline: "auto",
          marginBottom: 1,
          marginTop: 2,
        }}
      >{`Do you want delete "${name}" vocabulary ?`}</Typography>

      <Typography
        level="body2"
        sx={{ width: "70%", textAlign: "center", marginInline: "auto" }}
      >
        All word in this vocabulary will be too
      </Typography>
    </>
  );
};

export default VDMText;
