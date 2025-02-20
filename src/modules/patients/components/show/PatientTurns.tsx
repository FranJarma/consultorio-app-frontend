import { Card, Stack, Typography } from "@mui/material";
import { Patient } from "../../types/patients";
import { useTranslate } from "react-admin";
import { formatDate, formatTime, getStatesIconsAndColors } from "../../../../common/utils";
import { InfoOutlined } from "@mui/icons-material";
import { NoDataFound } from "../../../../common/components/NoDataFound";

type PatientTurnsProps = {
    record: Patient;
    title?: string;
    renderCard?: boolean;
};


export const PatientTurns = ({ record, title, renderCard = true }: PatientTurnsProps) => {
    const translate = useTranslate();

    const TurnsInfo = () => {
        if (!record?.turns || record.turns.length === 0) {
            return (
                <Stack spacing={2} sx={{ padding: 5, width: "100%" }}>
                    <Typography variant="h6" color="secondary">
                        {title}
                    </Typography>
                    <NoDataFound entity="Turnos"/>
                </Stack>
            );
        }

        return (
            <Stack spacing={2} sx={{ padding: 5 }}>
                <Typography variant="h6" color="secondary">
                    {title}
                </Typography>
        
                {record.turns.map((turn, index) => {
                    const stateData = getStatesIconsAndColors(turn.state);
            
                    return (
                        <Stack
                            key={index}
                            direction="row"
                            spacing={2}
                            sx={{ 
                                alignItems: "center", 
                                justifyContent: "center", 
                                width: "100%", 
                                flexWrap: "wrap"
                            }}
                        >
                            <Typography variant="subtitle1" fontWeight="bold" sx={{ minWidth: 80 }}>
                                Turno {index + 1}:
                            </Typography>
            
                            <Typography variant="subtitle2" sx={{ flexGrow: 1, minWidth: 180 }}>
                                {formatDate(turn.date)} - {formatTime(turn.date)}
                            </Typography>
            
                            {stateData && (
                                <Stack 
                                    direction="row" 
                                    spacing={1} 
                                    sx={{ 
                                        alignItems: "center", 
                                        color: stateData.color, 
                                    }}
                                >
                                    <stateData.icon sx={{ fontSize: 20 }} />
                                    <Typography variant="subtitle2">{translate(stateData.key)}</Typography>
                                </Stack>
                            )}
                        </Stack>
                    );
                })}
            </Stack>
        );
    };

    return (
        renderCard ?
        <Card>
            <TurnsInfo/>
        </Card>
        : <TurnsInfo/>
    );
};
