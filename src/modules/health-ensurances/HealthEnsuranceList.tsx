import {
    List,
    TopToolbar,
    SearchInput,
    ExportButton,
    TextInput,
    WrapperField,
    Datagrid,
    TextField,
    CreateButton,
    EditButton,
} from "react-admin";
import MyBreadcrumbs from "../../common/components/ui/Breadcrumb";
import TableButtons from "../../common/components/ui/TableButtons";

const ListActions = () => (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>
);

const filters = [
    <SearchInput source="q" alwaysOn />,
];

export const HealthEnsuranceList = () => {
    return (
        <>
            <MyBreadcrumbs style={{ paddingTop: 48 }} />
            <List actions={<ListActions />} filters={filters} storeKey={false}>
                <Datagrid rowClick={false} bulkActionButtons={false}>
                    <TextField label="Nombre" source="name"/>
                    <WrapperField label="Acciones">
                        <TableButtons>
                            <EditButton/>
                        </TableButtons>
                    </WrapperField>
                </Datagrid>
            </List>
        </>
    );
};
