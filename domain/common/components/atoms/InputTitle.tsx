import React from "react";
import Typography from "./Typography";

interface Props {
  title: string;
}

const InputTitle = ({ title }: Props) => {
  return <Typography size={"1.5rem"}>{title}</Typography>;
};

export default InputTitle;
