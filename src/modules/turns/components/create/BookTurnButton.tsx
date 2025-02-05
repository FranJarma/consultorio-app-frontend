import { useState } from "react";
import { Dialog, Stack, Typography } from "@mui/material";
import { Button, Create, DateTimeInput, SaveButton, SimpleForm, Toolbar, useNotify, useRecordContext } from "react-admin";
import { CalendarTodayOutlined } from "@mui/icons-material";
import { useTableButtonAction } from "../../../../common/hooks/useTableButtonAction";
import { TurnStateEnum } from "../../types/turns";
import { Patient } from "../../../patients/types/patients";
import { getCurrentArgentinaISODate } from "../../../../common/utils";

export const BookTurnButton = () => {
    const record = useRecordContext<Patient>();
    if (!record) return null;

    const notify = useNotify();

    const { executeAction, isPending } = useTableButtonAction("turns", "CREATE");
    const [turnDate, setTurnDate] = useState<Date>(new Date());
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleExecute = async () => {
        if (!executeAction) return;

        const today = new Date();
        turnDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
    
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
            
            notify('Turno registrado correctamente', { type: "success" });
            setDialogOpen(false);
        } catch (error) {
            notify('Error al registrar turno', { type: "error" });
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
                        <Typography variant="h6">Agendar Turno: {record?.fullname}</Typography>
                        <DateTimeInput defaultValue={turnDate} label="Fecha del Turno" source="date" onChange={(event) => setTurnDate(new Date(event.target.value))} />
                    </SimpleForm>
                </Create>
            </Stack>
        </Dialog>
        </>
    );
};
