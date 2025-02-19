import Grid from '@mui/material/Grid';
import { Create, required, SimpleForm, TextInput } from "react-admin";
import MyBreadcrumbs from '../../../common/components/ui/Breadcrumb';

export const LocalityCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <MyBreadcrumbs />
                <h3>Datos de la Localidad</h3>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextInput source="name" label="Nombre" validate={[required()]} />
                    </Grid>
                </Grid>
            </SimpleForm>
        </Create>
    );
};
