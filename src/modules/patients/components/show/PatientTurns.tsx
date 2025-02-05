import { Card, Stack, Typography } from "@mui/material";
import { Patient } from "../../types/patients";
import { useTranslate } from "react-admin";
import { formatDate, formatTime, getStatesIconsAndColors } from "../../../../common/utils";

type PatientTurnsProps = {
    record: Patient;
};

export const PatientTurns = ({ record }: PatientTurnsProps) => {
    const translate = useTranslate();

    return (
        <Card>
            <Stack spacing={2} sx={{ padding: 5 }}>
                <Typography variant="h5" color="secondary">
                    Turnos
                </Typography>

                {record?.turns?.map((turn, index) => {
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

                            <Typography sx={{ flexGrow: 1, minWidth: 180 }}>
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
                                    <Typography>{translate(stateData.key)}</Typography>
                                </Stack>
                            )}
                        </Stack>

                    );
                }) ?? "-"}
            </Stack>
        </Card>
    );
};
