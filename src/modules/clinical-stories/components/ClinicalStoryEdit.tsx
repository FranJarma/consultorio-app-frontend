import Grid from '@mui/material/Grid';
import { AutocompleteInput, Edit, ImageField, ImageInput, ReferenceInput, required, SimpleForm, TextInput, useRecordContext } from "react-admin";
import MyBreadcrumbs from '../../../common/components/ui/Breadcrumb';

export const ClinicalStoryEdit = () => (
    <Edit>
        <SimpleForm>
            <MyBreadcrumbs/>
            <h3>Datos de la Historia Clínica</h3>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <ReferenceInput source="patientId" reference="patients">
                        <AutocompleteInput disabled label="Paciente" optionText="fullname" validate={[required()]} />
                    </ReferenceInput>
                </Grid>
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
    </Edit>
);
