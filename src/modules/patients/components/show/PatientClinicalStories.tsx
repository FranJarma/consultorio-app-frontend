import { Card, Stack, Typography } from "@mui/material";
import { Patient } from "../../types/patients";
import Accordion from "../../../../common/components/ui/Accordion";
import { formatDate } from "../../../../common/utils/date";

type PatientClinicalStoriesProps = {
    record: Patient;
}

export const PatientClinicalStories = ({ record }: PatientClinicalStoriesProps) => {
    if (!record || !record.clinicalStories) return null;

    return (
        <Card>
            <Stack spacing={2} sx={{ padding: 5, width: "100%" }}>
                <Typography sx={{ paddingBottom : 2 }} variant="h6" color="secondary">Historias Clínicas</Typography>
                {record.clinicalStories.map((clinicalStory, index) => (
                    <Accordion key={index} title={formatDate(clinicalStory.createdAt)}>
                        <Stack spacing={1}>
                            <Typography variant="subtitle1"><strong>Observaciones:</strong> {clinicalStory.observations}</Typography>
                            <Typography variant="subtitle1"><strong>Plan de Tratamiento:</strong> {clinicalStory.treatmentPlan}</Typography>
                            {clinicalStory.odontogramUrl && (
                                <>
                                    <Typography variant="subtitle1">
                                        <a href={clinicalStory.odontogramUrl} target="_blank">Ver Odontograma</a>
                                    </Typography>
                                </>
                            )}
                        </Stack>
                    </Accordion>
                ))}
            </Stack>
        </Card>
    );
};