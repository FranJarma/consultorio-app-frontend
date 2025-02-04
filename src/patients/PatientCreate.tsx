import { Create, DateInput, SelectInput, required, SimpleForm, TextInput } from "react-admin";

const healthInsuranceChoices = [
    { id: "osde", name: "OSDE" },
    { id: "swiss-medical", name: "Swiss Medical" },
    { id: "galeno", name: "Galeno" },
    { id: "medife", name: "Medife" },
    { id: "medicus", name: "Medicus" },
];

export const PatientCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="fullName" label="Nombre Completo" validate={[required()]} />
            <TextInput source="dni" label="DNI" validate={[required()]} />
            <TextInput source="address" label="Dirección" validate={[required()]} />
            <TextInput source="profession" label="Profesión" validate={[required()]} />
            <TextInput source="phone" label="Teléfono" validate={[required()]} />
            <TextInput source="email" label="Email" validate={[required()]} />
            <TextInput source="age" label="Edad" validate={[required()]} />
            <SelectInput source="healthInsurance" label="Obra Social" choices={healthInsuranceChoices} validate={[required()]} />   

            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);