import Grid from '@mui/material/Grid2';
import { Edit, required, SimpleForm, TextInput, AutocompleteInput, NumberInput, EditProps, useRecordContext, ReferenceInput } from "react-admin";
import { Patient } from './types/patients';
import MyBreadcrumbs from '../../common/components/ui/Breadcrumb';

const PatientEditTitle = () => {
    const record = useRecordContext<Patient>();
    return <h3>Nombre Paciente: {record ? `${record.fullname}` : ''}</h3>;
}

export const PatientEdit = (props: EditProps) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <MyBreadcrumbs/>
                <PatientEditTitle/>
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
        </Edit>
    );
};
