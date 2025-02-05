import { Button } from "react-admin";

type TableButtonProps = {
  label: string;
  icon?: React.ReactNode;
};

export const TableButton = ({ label, icon }: TableButtonProps) => {

  return (
    <>
      <Button label={label} startIcon={icon} />
    </>
  );
};
