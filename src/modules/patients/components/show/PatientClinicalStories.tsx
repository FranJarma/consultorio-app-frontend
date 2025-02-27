import { Card, Stack, Typography } from "@mui/material";
import { Patient } from "../../types/patients";
import Accordion from "../../../../common/components/ui/Accordion";
import { formatDate } from "../../../../common/utils/date";
import { InfoOutlined } from "@mui/icons-material";
import { NoDataFound } from "../../../../common/components/NoDataFound";
import { OdontogramLink } from "../../../../common/components/OdontogramLink";

type PatientClinicalStoriesProps = {
    record: Patient;
}

export const PatientClinicalStories = ({ record }: PatientClinicalStoriesProps) => {
    if (!record || !record.clinicalStories) return null;

    return (
        <Card>
            <Stack spacing={2} sx={{ padding: 5, width: "100%" }}>
                <Typography sx={{ paddingBottom : 2 }} variant="h6" color="secondary">Historias Clínicas</Typography>
                {record.clinicalStories.length > 0 ? (
                    record.clinicalStories.map((clinicalStory, index) => (
                        <Accordion key={index} title={formatDate(clinicalStory.createdAt)}>
                            <Stack spacing={1}>
                                <Typography variant="subtitle1"><strong>Observaciones:</strong> {clinicalStory.observations}</Typography>
                                <Typography variant="subtitle1"><strong>Plan de Tratamiento:</strong> {clinicalStory.treatmentPlan}</Typography>
                                {clinicalStory.odontogramUrl && (
                                    <>
                                        <Typography variant="subtitle1">
                                            <OdontogramLink odontogramUrl={clinicalStory.odontogramUrl}/>
                                        </Typography>
                                    </>
                                )}
                            </Stack>
                        </Accordion>
                    ))
                ) : (
                    <NoDataFound entity="Historias Clínicas"/>
                )}
            </Stack>
        </Card>
    );
};