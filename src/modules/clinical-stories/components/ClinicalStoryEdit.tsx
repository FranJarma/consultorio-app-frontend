import Grid from '@mui/material/Grid';
import { Edit, ImageField, ImageInput, required, SimpleForm, TextInput, useRecordContext } from "react-admin";
import MyBreadcrumbs from '../../../common/components/ui/Breadcrumb';
import { Patient } from '../../patients/types/patients';

const ClinicalStoryTitle = () => {
    const record = useRecordContext<Patient>();
    return <h3>Datos de la Historia Clínica: {record ? record.fullname : ''}</h3>;
};

export const ClinicalStoryEdit = () => (
    <Edit>
        <SimpleForm>
            <MyBreadcrumbs/>
            <ClinicalStoryTitle />
            <Grid container spacing={1}>
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
