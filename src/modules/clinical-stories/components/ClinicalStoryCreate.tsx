import Grid from '@mui/material/Grid';
import { Create, required, SimpleForm, TextInput, ReferenceInput, AutocompleteInput, useGetOne, ImageInput, ImageField } from "react-admin";
import MyBreadcrumbs from '../../../common/components/ui/Breadcrumb';
import { Typography, Alert } from '@mui/material';
import { useFormContext } from "react-hook-form";
import { Patient } from '../../patients/types/patients';

const PatientDetails = () => {
    const { watch } = useFormContext();
    const patientId = watch("patientId");

    const { data: patient } = useGetOne<Patient>("patients", { id: patientId }, { enabled: !!patientId });

    if (!patientId) return null;

    return (
        <Grid item xs={12}>
            <Alert severity="info" variant="outlined">
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={4}>
                        <Typography variant="body2"><strong>Domicilio:</strong> {patient?.address || 'No disponible'}</Typography>
                    </Grid>
                    <Grid item xs={12} xl={4}>
                        <Typography variant="body2"><strong>Localidad:</strong> {patient?.locality?.name || 'No disponible'}</Typography>
                    </Grid>
                    <Grid item xs={12} xl={4}>
                        <Typography variant="body2"><strong>Teléfono:</strong> {patient?.phone || 'No disponible'}</Typography>
                    </Grid>
                    <Grid item xs={12} xl={4}>
                        <Typography variant="body2"><strong>Profesión:</strong> {patient?.profession || 'No disponible'}</Typography>
                    </Grid>
                    <Grid item xs={12} xl={4}>
                        <Typography variant="body2"><strong>Obra Social:</strong> {patient?.healthEnsurance?.name || 'No disponible'}</Typography>
                    </Grid>
                    <Grid item xs={12} xl={4}>
                        <Typography variant="body2"><strong>Edad:</strong> {patient?.age || 'No disponible'}</Typography>
                    </Grid>
                </Grid>
            </Alert>
        </Grid>
    );
};

export const ClinicalStoryCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <MyBreadcrumbs />
                <h3>Datos de la Historia Clínica</h3>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <ReferenceInput source="patientId" reference="patients">
                            <AutocompleteInput label="Paciente" optionText="fullname" validate={[required()]} />
                        </ReferenceInput>
                    </Grid>
                    <PatientDetails />
                    <Grid item xs={12}>
                        <TextInput multiline minRows={10} source="observations" label="Observaciones" validate={[required()]} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput multiline minRows={10} source="treatmentPlan" label="Plan de Tratamiento" validate={[required()]} />
                    </Grid>
                    <Grid item xs={12}>
                        <ImageInput source="odontogram" label="Foto del Odontograma" accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }} validate={[required()]}>
                            <ImageField source="src" title="title"/>
                        </ImageInput>
                    </Grid>
                </Grid>
            </SimpleForm>
        </Create>
    );
};
