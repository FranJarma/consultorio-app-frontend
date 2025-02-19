import {
  List,
  TextField,
  NumberField,
  TopToolbar,
  SearchInput,
  SelectColumnsButton,
  FilterButton,
  CreateButton,
  ExportButton,
  TextInput,
  EditButton,
  ShowButton,
  WrapperField,
  Datagrid,
} from "react-admin";
import MyBreadcrumbs from "../../common/components/ui/Breadcrumb";
import TableButtons from "../../common/components/ui/TableButtons";
import { BookTurnButton } from "../turns/components/create/BookTurnButton";
import { DeleteConfirmButton } from "../../common/components/ui/DeleteConfirmButton";

const ListActions = () => (
  <TopToolbar>
      <SelectColumnsButton />
      <FilterButton />
      <CreateButton />
      <ExportButton />
  </TopToolbar>
);

const filters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="DNI" source="dni" />,
  <TextInput label="Obra Social" source="healthEnsurance" />,
  <TextInput label="Localidad" source="locality" />,
  <TextInput label="Profesión" source="profession" />,
  <TextInput label="Dirección" source="address" />,
  <TextInput label="Edad" source="age" />,
];

export const PatientList = () => {

  return (
      <>
          <MyBreadcrumbs style={{ paddingTop: 48 }} />
          <List actions={<ListActions />} filters={filters} storeKey={false}>
              <Datagrid rowClick={false}>
                  <TextField source="fullname" label="Nombre del Paciente" />
                  <TextField source="dni" label="DNI" />
                  <TextField source="healthEnsurance.name" label="Obra Social" />
                  <TextField source="address" label="Dirección" />
                  <TextField source="locality.name" label="Localidad" />
                  <TextField source="profession" label="Profesión" />
                  <NumberField source="age" label="Edad" />
                  <WrapperField label="Acciones">
                      <TableButtons>
                          <EditButton />
                          <ShowButton />
                          <BookTurnButton />
                          <DeleteConfirmButton model="paciente" titleProp="fullname"/>
                      </TableButtons>
                  </WrapperField>
              </Datagrid>
          </List>
      </>
  );
};
