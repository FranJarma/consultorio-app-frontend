import { ClinicalStory } from "../../clinical-stories/types/clinical-stories";
import { Turn } from "../../turns/types/turns";

export type Patient = {
    id: string;
    fullname: string;
    dni: number;
    address: string;
    profession: string;
    phone: string;
    email: string;
    age: number;
    healthEnsurance: string;
    locality: string;
    turns: Turn[];
    clinicalStories: ClinicalStory[]
}