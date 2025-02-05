import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";

export function getStatesIconsAndColors(state: string) {
    
    const states = {
        pending: { key: "custom.states.pending", color: "orange", icon: HourglassEmptyIcon },
        completed: { key: "custom.states.completed", color: "green", icon: CheckCircleIcon },
        cancelled: { key: "custom.states.cancelled", color: "red", icon: CancelIcon },
    } as const;

    return states[state.toLowerCase() as keyof typeof states] || 
           { translated: state, color: "grey", icon: DoneIcon };
}
