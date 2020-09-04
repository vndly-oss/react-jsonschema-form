import Button from "@chakra-ui/core/dist/Button";
import React from "react";

const AddButton = props => (
  <Button variant="outline" leftIcon="add" {...props}>
    Add Item
  </Button>
);

export default AddButton;
