import {
    List,
    TopToolbar,
    SearchInput,
    ExportButton,
    TextInput,
    FunctionField,
    useTranslate,
    Link,
    WrapperField,
    Datagrid,
} from "react-admin";
import MyBreadcrumbs from "../../common/components/ui/Breadcrumb";
import TableButtons from "../../common/components/ui/TableButtons";
import CustomDateField from "../../common/components/ui/CustomDateField";
import { getStatesIconsAndColors } from "../../common/utils";
import { Box, Typography } from "@mui/material";
import { ChangeDateTurnButton, ChangeTurnStatusButton } from "./components/edit";

const ListActions = () => (
    <TopToolbar>
        <ExportButton />
    </TopToolbar>
);

const filters = [
    <SearchInput source="q" alwaysOn />,
    <TextInput label="Paciente" source="patient" />,
];

export const TurnList = () => {
    const translate = useTranslate();

    return (
        <>
            <MyBreadcrumbs style={{ paddingTop: 48 }} />
            <List actions={<ListActions />} filters={filters} storeKey={false}>
                <Datagrid rowClick={false}>
                    <FunctionField
                        label="Paciente"
                        render={(record) =>
                            record.patient ? (
                                <Link to={`/patients/${record.patient.id}/show`}>
                                    {record.patient.fullname}
                                </Link>
                            ) : (
                                "-"
                            )
                        }
                    />
                    <CustomDateField source="date" label="Fecha" />
                    <FunctionField
                        source="state"
                        label="Estado del turno"
                        render={(record) => {
                            const stateInfo = getStatesIconsAndColors(record.state);
                            const Icon = stateInfo.icon;

                            return (
                                <Box style={{ color: stateInfo.color }} display="flex" alignItems="center" gap={1}>
                                    <Icon />
                                    <Typography>{translate(stateInfo.key)}</Typography>
                                </Box>
                            );
                        }}
                    />
                    <WrapperField label="Acciones">
                        <TableButtons>
                            <ChangeDateTurnButton/>
                            <ChangeTurnStatusButton/>
                        </TableButtons>
                    </WrapperField>
                </Datagrid>
            </List>
        </>
    );
};
