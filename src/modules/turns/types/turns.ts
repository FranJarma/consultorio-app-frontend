import { Patient } from "../../patients/types/patients";

export enum TurnStateEnum {
    PENDING = 'Pending',
    COMPLETED = 'Completed',
    CANCELLED = 'Cancelled',
}

export const TurnStates = [
    {
        name: TurnStateEnum.PENDING
    },
    {
        name: TurnStateEnum.COMPLETED
    },
    {
        name: TurnStateEnum.CANCELLED
    }
]

export const TurnStateTranslations = {
    [TurnStateEnum.PENDING]: "Pendiente",
    [TurnStateEnum.COMPLETED]: "Completado",
    [TurnStateEnum.CANCELLED]: "Cancelado",
};

export type Turn = {
    date: Date;
    id: string;
    patientId: string;
    state: TurnStateEnum;
    patient?: Patient;
}