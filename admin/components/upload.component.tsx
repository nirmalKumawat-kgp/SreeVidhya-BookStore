import React from "react";
import {
  Box,
  Label,
  DropZone,
  DropZoneProps,
  DropZoneItem,
} from "@adminjs/design-system";
import { BasePropertyProps } from "adminjs";

const UploadPhoto: React.FC<BasePropertyProps> = (props) => {
  const { onChange, property, record } = props;

  const handleDropZoneChange: DropZoneProps["onChange"] = (files) => {
    onChange(property.name, files[0]);
  };

  const uploadedPhoto = record.params.bookImage;

  const photoToUpload = record.params[property.name];
  return (
    <Box marginBottom="xxl">
      <Label>{property.label}</Label>
      <DropZone onChange={handleDropZoneChange} />
      {uploadedPhoto && !photoToUpload && <DropZoneItem src={uploadedPhoto} />}
    </Box>
  );
};
export default UploadPhoto;
