import { Dialog, Typography, Stack } from "@mui/material";
import { 
    useRecordContext, 
    DateTimeInput, 
    SimpleForm, 
    Edit, 
    Toolbar, 
    SaveButton, 
    useNotify,
    Button,
} from "react-admin";
import { DateRangeOutlined, EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useTableButtonAction } from "../../../../common/hooks/useTableButtonAction";
import { Turn } from "../../types/turns";

export const ChangeDateTurnButton = () => {
    const record = useRecordContext<Turn>();
    const notify = useNotify();

    const { executeAction } = useTableButtonAction("turns", "UPDATE");

    const [editDialog, setEditDialog] = useState(false);
    
    const handleClose = () => setEditDialog(false);

    const handleSave = async (data: Turn) => {
        const today = new Date();
        const turnDate = new Date(data.date);

        if (turnDate < today) {
            notify("No se permiten fechas pasadas", { type: "error" });
            return;
        }

        try {
            await executeAction({
                patientId: record?.id,
                date: turnDate,
                state: record?.state,
            });
            
            notify('Turno registrado correctamente', { type: "success" });
            setEditDialog(false);
        } catch (error) {
            notify('Error al registrar turno', { type: "error" });
        }
    };

    return (
        <>
            <Button
                label="Cambiar fecha"
                startIcon={<DateRangeOutlined />}
                onClick={() => setEditDialog(true)}
            />

            <Dialog open={editDialog} onClose={handleClose}>
                <Stack spacing={2} sx={{ padding: 3 }}>
                    <Typography variant="h6">
                        Cambiar Fecha: {record?.patient?.fullname}
                    </Typography>

                    <Edit actions={false} resource="turns" id={record?.id} mutationMode="pessimistic">
                        <SimpleForm onSubmit={handleSave as any} toolbar={<Toolbar><SaveButton sx={{ width: "100%"}} /></Toolbar>}>
                            <DateTimeInput source="date" label="Fecha del Turno" />
                        </SimpleForm>
                    </Edit>
                </Stack>
            </Dialog>
        </>
    );
};
