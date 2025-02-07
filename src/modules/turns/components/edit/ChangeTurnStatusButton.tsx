import { Dialog, Typography, Stack } from "@mui/material";
import { 
    useRecordContext, 
    SimpleForm, 
    Edit, 
    Toolbar, 
    SaveButton, 
    useNotify,
    Button,
    SelectInput,
    useTranslate,
} from "react-admin";
import { LabelOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useTableButtonAction } from "../../../../common/hooks/useTableButtonAction";
import { Turn, TurnStates, TurnStateTranslations } from "../../types/turns";
import { getStatesIconsAndColors } from "../../../../common/utils";  // Importa el util para los iconos y colores

export const ChangeTurnStatusButton = () => {
    const record = useRecordContext<Turn>();
    const notify = useNotify();
    const translate = useTranslate();

    const { executeAction } = useTableButtonAction("turns", "UPDATE");

    const [editDialog, setEditDialog] = useState(false);
    
    const handleClose = () => setEditDialog(false);

    const handleSave = async (data: Turn) => {
        try {
            await executeAction({
                patientId: record?.id,
                date: record?.date,
                state: data.state,
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
                label="Cambiar estado"
                startIcon={<LabelOutlined />}
                onClick={() => setEditDialog(true)}
            />

            <Dialog open={editDialog} onClose={handleClose}>
                <Stack spacing={2} sx={{ padding: 3 }}>
                    <Typography variant="h6">
                        Cambiar Estado: {record?.patient?.fullname}
                    </Typography>

                    <Edit actions={false} resource="turns" id={record?.id} mutationMode="pessimistic">
                        <SimpleForm onSubmit={handleSave as any} toolbar={<Toolbar><SaveButton sx={{ width: "100%"}} /></Toolbar>}>
                            <SelectInput 
                                label="Estado" 
                                source="state" 
                                choices={TurnStates.map(state => {
                                    const stateInfo = getStatesIconsAndColors(state.name);
                                    return {
                                        id: state.name,
                                        name: translate(TurnStateTranslations[state.name]),
                                        icon: stateInfo.icon,
                                        color: stateInfo.color,
                                    };
                                })} 
                                optionText={(choice) => (
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <choice.icon sx={{ fontSize: 20, color: choice.color }} />
                                        <Typography style={{ color: choice.color }}>
                                            {choice.name}
                                        </Typography>
                                    </Stack>
                                )}
                                optionValue="id" 
                            />
                        </SimpleForm>
                    </Edit>
                </Stack>
            </Dialog>
        </>
    );
};
