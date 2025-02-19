export type ClinicalStory = {
    createdAt: Date;
    date: Date;
    id: string;
    patientId: string;
    observations?: string;
    odontogramUrl: string;
    treatmentPlan?: string;
}