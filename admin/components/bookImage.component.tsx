import React from "react";
import {
  Box,
  Label,
  DropZone,
  DropZoneProps,
  DropZoneItem,
} from "@adminjs/design-system";
import { BasePropertyProps } from "adminjs";
const BookImage: React.FC<BasePropertyProps> = (props) => {
  const { onChange, property, record } = props;

  const imgSrc = record.params["bookImage"];

  return <Box>{imgSrc ? <img src={imgSrc} width="50px" /> : "noImage"}</Box>;
};
export default BookImage;
