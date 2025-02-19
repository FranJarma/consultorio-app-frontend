import Grid from '@mui/material/Grid2';
import { Create, required, SimpleForm, TextInput, AutocompleteInput, NumberInput, ReferenceInput } from "react-admin";
import MyBreadcrumbs from '../../common/components/ui/Breadcrumb';
import { HEALTH_ENSURANCES } from '../../common/constants/healthEnsurances';
import { LOCALITIES } from '../../common/constants/localities';

export const PatientCreate = () => (
    <Create>
        <SimpleForm>
            <MyBreadcrumbs/>
            <h3>Datos del Paciente</h3>
            <Grid container spacing={1}>
                <Grid size={{ xs: 12, md: 6}}>
                    <TextInput source="fullname" label="Nombre Completo" validate={[required()]} />
                </Grid>
                <Grid size={{ xs: 12, md: 6}}>
                    <TextInput source="dni" label="DNI" validate={[required()]} />
                </Grid>
                <Grid size={{ xs: 12, md: 6}}>
                    <TextInput source="address" label="Dirección" validate={[required()]} />
                </Grid>
                <Grid size={{ xs: 12, md: 6}}>
                    <TextInput source="profession" label="Profesión" validate={[required()]} />
                </Grid>
                <Grid size={{ xs: 12, md: 6}}>
                    <TextInput source="phone" label="Teléfono" validate={[required()]} />
                </Grid>
                <Grid size={{ xs: 12, md: 6}}>
                    <TextInput source="email" label="Email" />
                </Grid>
                <Grid size={{ xs: 12, md: 2}}>
                    <NumberInput source="age" label="Edad" validate={[required()]} />
                </Grid>
                <Grid size={{ xs: 12, md: 5}}>
                    <ReferenceInput source="healthEnsuranceId" reference="health-ensurances">
                        <AutocompleteInput label="Obra Social" validate={[required()]}/>
                    </ReferenceInput>
                </Grid>
                <Grid size={{ xs: 12, md: 5}}>
                    <ReferenceInput source="localityId" reference="localities">
                        <AutocompleteInput label="Localidad" validate={[required()]}/>
                    </ReferenceInput> 
                </Grid>
            </Grid>
        </SimpleForm>
    </Create>
);