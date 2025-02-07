import { DateField, DateFieldProps } from "react-admin";

const CustomDateField = (props: DateFieldProps) => (
  <DateField {...props} options={{ year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" }} />
);

export default CustomDateField;
