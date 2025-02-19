import Grid from '@mui/material/Grid';
import { Edit, required, SimpleForm, TextInput } from "react-admin";
import MyBreadcrumbs from '../../../common/components/ui/Breadcrumb';

export const HealthEnsuranceEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <MyBreadcrumbs />
                <h3>Datos de la Obra Social</h3>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextInput source="name" label="Nombre" validate={[required()]} />
                    </Grid>
                </Grid>
            </SimpleForm>
        </Edit>
    );
};
