import { Card, Stack, Typography } from "@mui/material";
import { Patient } from "../../types/patients";

type PatientInfoProps = {
    record: Patient;
}

export const PatientInfo = ({ record }: PatientInfoProps) => {
    return (
        <Card>
            <Stack spacing={2} sx={{ width: '100%', padding: 5, height: '400px' }}>
                <Typography variant="h6" color="secondary">Datos del Paciente</Typography>
                {[
                    { label: "Nombre Paciente", value: record.fullname },
                    { label: "Edad", value: record.age },
                    { label: "DNI", value: record.dni },
                    { label: "Obra Social", value: record.healthEnsurance.name },
                    { label: "Localidad", value: record.locality.name },
                    { label: "Profesión", value: record.profession },
                    { label: "Dirección", value: record.address }
                ].map(({ label, value }) => (
                    <Stack key={label} direction="row" spacing={1} sx={{ alignItems: 'center'}}>
                        <Typography variant="subtitle1" fontWeight="bold">{label}:</Typography>
                        <Typography variant="subtitle2">{value || "No disponible"}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Card>
    );
};