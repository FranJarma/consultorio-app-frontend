import { useState } from "react";
import { Dialog, Stack, Typography } from "@mui/material";
import { Button, Create, DateTimeInput, SaveButton, SimpleForm, Toolbar, useNotify, useRecordContext, useRefresh } from "react-admin";
import { CalendarTodayOutlined } from "@mui/icons-material";
import { useTableButtonAction } from "../../../../common/hooks/useTableButtonAction";
import { TurnStateEnum } from "../../types/turns";
import { Patient } from "../../../patients/types/patients";
import { PatientTurns } from "../../../patients/components/show";

export const BookTurnButton = () => {
    const record = useRecordContext<Patient>();
    if (!record) return null;

    const notify = useNotify();
    const refresh = useRefresh();

    const { executeAction, isPending } = useTableButtonAction("turns", "CREATE");
    const [turnDate, setTurnDate] = useState<Date>(new Date());
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleExecute = async () => {
        if (!executeAction) return;
    
        const today = new Date();
        if (turnDate < today) {
            notify("No se permiten fechas pasadas", { type: "error" });
            return;
        }
    
        try {
            await executeAction({
                patientId: record.id,
                date: turnDate,
                state: TurnStateEnum.PENDING,
            });
        
            notify("Turno registrado correctamente", { type: "success" });
            setDialogOpen(false);
            refresh();
        } catch (error: any) {
            notify(error?.message || "Error al registrar turno", { type: "error" });
        }
    };
    
    

    const CustomToolbar = () => (
        <Toolbar>
          <SaveButton disabled={isPending} sx={{ flex: 1 }} label="Confirmar Turno" />
        </Toolbar>
    );

    return (
        <>
        <Button
            label="Agendar Turno"
            startIcon={<CalendarTodayOutlined />}
            onClick={() => setDialogOpen(true)}
        />
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <Stack spacing={2} sx={{ padding: 3 }}>
                <Create resource="turns">
                    <SimpleForm toolbar={<CustomToolbar />} onSubmit={handleExecute}>
                        <Typography variant="body1"><strong>Agendar Turno:</strong> {record?.fullname}</Typography>
                        <br/>
                        <Typography variant="body2"><strong>Turnos asignados:</strong></Typography>
                        <PatientTurns record={record} renderCard={false}/>
                        <DateTimeInput defaultValue={turnDate} label="Fecha del Turno" source="date" onChange={(event) => setTurnDate(new Date(event.target.value))} />
                    </SimpleForm>
                </Create>
            </Stack>
        </Dialog>
        </>
    );
};
