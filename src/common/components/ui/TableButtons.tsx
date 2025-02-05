import * as React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type TableButtonsProps = {
  children: React.ReactNode;
};

const TableButtons = ({ children }: TableButtonsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setAnchorEl(null);
    }
  };

  return (
    <div>
      <IconButton onMouseEnter={handleMouseEnter}>
        <MoreVertIcon />
      </IconButton>
      <Menu 
        anchorEl={anchorEl} 
        open={open} 
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ onMouseLeave: handleMouseLeave }}
      >
        {React.Children.map(children, (child, index) => (
          <MenuItem key={index}>{child}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default TableButtons;