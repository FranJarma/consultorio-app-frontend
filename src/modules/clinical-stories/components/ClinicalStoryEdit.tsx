import Grid from '@mui/material/Grid';
import { Edit, required, SimpleForm, TextInput, ReferenceInput, AutocompleteInput } from "react-admin";
import MyBreadcrumbs from '../../../common/components/ui/Breadcrumb';

export const ClinicalStoryEdit = () => (
    <Edit>
        <SimpleForm>
            <MyBreadcrumbs/>
            <h3>Datos de la Historia Clínica</h3>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <ReferenceInput source="patientId" reference="patients">
                        <AutocompleteInput label="Paciente" optionText="fullname" validate={[required()]} />
                    </ReferenceInput>
                </Grid>
                <Grid item xs={12}>
                    <TextInput multiline minRows={10} source="observations" label="Observaciones" validate={[required()]} />
                </Grid>
                <Grid item xs={12}>
                    <TextInput multiline minRows={10} source="treatmentPlan" label="Plan de Tratamiento" validate={[required()]} />
                </Grid>
            </Grid>
        </SimpleForm>
    </Edit>
);
