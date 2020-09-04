import ArrayFieldTemplate from "../ArrayFieldTemplate";
import ErrorList from "../ErrorList";
import Fields from "../Fields";
import FieldTemplate from "../FieldTemplate";
import ObjectFieldTemplate from "../ObjectFieldTemplate";
import Widgets from "../Widgets";
import { ThemeProps } from "@rjsf/core";

const Theme: ThemeProps = {
  ArrayFieldTemplate,
  fields: Fields,
  FieldTemplate,
  ObjectFieldTemplate,
  widgets: Widgets,
  ErrorList,
};

export default Theme;
