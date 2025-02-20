import {
    List,
    TopToolbar,
    SearchInput,
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

export const LocalityList = () => {
    return (
        <>
            <MyBreadcrumbs style={{ paddingTop: 48 }} />
            <List actions={<ListActions />} storeKey={false}>
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
