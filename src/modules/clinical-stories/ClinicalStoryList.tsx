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
    TextField,
    CreateButton,
    EditButton,
    UrlField,
    ShowButton,
} from "react-admin";
import MyBreadcrumbs from "../../common/components/ui/Breadcrumb";
import TableButtons from "../../common/components/ui/TableButtons";
import CustomDateField from "../../common/components/ui/CustomDateField";
import { CustomFileField } from "../../common/components/ui/CustomFileField";
import { ClinicalStory } from "./types/clinical-stories";

const ListActions = () => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton />
    </TopToolbar>
);

const filters = [
    <SearchInput source="q" alwaysOn />,
    <TextInput label="Paciente" source="patient" />,
];

export const ClinicalStoryList = () => {
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
                    <TextField label="Observaciones" source="observations"/>
                    <TextField label="Plan de Tratamiento" source="treatmentPlan"/>
                    <FunctionField
                        label="Odontograma"
                        render={(record: ClinicalStory) =>
                            record.odontogramUrl ? (
                                <a href={`${import.meta.env.VITE_SIMPLE_REST_URL}${record.odontogramUrl}`} 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Ver Odontograma
                                </a>
                            ) : (
                                "-"
                            )
                        }
                    />
                    <CustomDateField label="Fecha de Creación" source="createdAt" />
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
