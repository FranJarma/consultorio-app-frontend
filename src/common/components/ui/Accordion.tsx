import { useState, ReactNode } from "react";
import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordionProps = {
  title: string;
  children: ReactNode;
  sx?: any;
}

const Accordion = ({ title, children, sx }: AccordionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <MuiAccordion sx={sx} component="div" expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body2">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
