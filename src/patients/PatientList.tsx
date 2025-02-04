import {
    List,
    DatagridConfigurable,
    TextField,
    NumberField,
    TopToolbar,
    SearchInput,
    SelectColumnsButton,
    FilterButton,
    CreateButton,
    ExportButton,
    TextInput,
  } from "react-admin";
  
  const ListActions = () => (
    <TopToolbar>
      <SelectColumnsButton />
      <FilterButton />
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  );
  
  const filters = [
    <SearchInput source="q" alwaysOn  />,
    <TextInput label="DNI" source="dni" />,
    <TextInput label="Obra Social" source="healthEnsurance" />,
    <TextInput label="Localidad" source="locality" />,
    <TextInput label="Profesión" source="profession" />,
    <TextInput label="Dirección" source="address" />,
    <TextInput label="Edad" source="age" />,
  ];
  
  export const PatientList = () => (
    <List actions={<ListActions />} filters={filters}>
      <DatagridConfigurable rowClick="edit">
        <TextField source="fullname" label="Nombre del Paciente" />
        <TextField source="dni" label="DNI" />
        <TextField source="healthEnsurance" label="Obra Social" />
        <TextField source="locality" label="Localidad" />
        <TextField source="profession" label="Profesión" />
        <TextField source="address" label="Dirección" />
        <NumberField source="age" label="Edad" />
      </DatagridConfigurable>
    </List>
  );
  