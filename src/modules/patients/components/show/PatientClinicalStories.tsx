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
            <Stack spacing={2} sx={{ padding: 5, width: '100%' }}>
                <Typography sx={{ paddingBottom : 2 }} variant="h5" color="secondary">Historias Clínicas</Typography>
                {record.clinicalStories.map((clinicalStory, index) => (
                    <Accordion key={index} title={formatDate(clinicalStory.createdAt)}>
                        <Stack spacing={1}>
                            <Typography><strong>Observaciones:</strong> {clinicalStory.observations}</Typography>
                            <Typography><strong>Plan de Tratamiento:</strong> {clinicalStory.treatmentPlan}</Typography>
                        </Stack>
                    </Accordion>
                ))}
            </Stack>
        </Card>
    );
};