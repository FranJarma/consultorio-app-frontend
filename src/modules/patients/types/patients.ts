import { ClinicalStory } from "../../clinical-stories/types/clinical-stories";
import { HealthEnsurance } from "../../health-ensurances/types/health-ensurance";
import { Locality } from "../../localities/types/localities";
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
    healthEnsurance: HealthEnsurance;
    locality: Locality;
    turns: Turn[];
    clinicalStories: ClinicalStory[]
}