import Grid from '@mui/material/Grid2';
import { Create, required, SimpleForm, TextInput, AutocompleteInput, NumberInput } from "react-admin";
import { HEALTH_ENSURANCES } from '../../common/constants/healthEnsurances';
import MyBreadcrumbs from '../../common/components/ui/Breadcrumb';

export const PatientCreate = () => (
    <Create>
        <SimpleForm>
            <MyBreadcrumbs/>
            <h3>Datos del Paciente</h3>
            <Grid container spacing={1}>
                <Grid size={6}>
                    <TextInput source="fullname" label="Nombre Completo" validate={[required()]} />
                </Grid>
                <Grid size={6}>
                    <NumberInput source="dni" label="DNI" validate={[required()]} />
                </Grid>
                <Grid size={6}>
                    <TextInput source="address" label="Dirección" validate={[required()]} />
                </Grid>
                <Grid size={6}>
                    <TextInput source="profession" label="Profesión" validate={[required()]} />
                </Grid>
                <Grid size={6}>
                    <TextInput source="phone" label="Teléfono" validate={[required()]} />
                </Grid>
                <Grid size={6}>
                    <TextInput source="email" label="Email" validate={[required()]} />
                </Grid>
                <Grid size={6}>
                    <NumberInput source="age" label="Edad" validate={[required()]} />
                </Grid>
                <Grid size={6}>
                    <AutocompleteInput source="healthEnsurance" label="Obra Social" choices={HEALTH_ENSURANCES} validate={[required()]} />   
                </Grid>
            </Grid>
        </SimpleForm>
    </Create>
);