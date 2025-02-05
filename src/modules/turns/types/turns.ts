export enum TurnStateEnum {
    PENDING = 'Pending',
    COMPLETED = 'Completed',
    CANCELLED = 'Cancelled',
}

export type Turn = {
    date: Date;
    id: string;
    patientId: string;
    state: TurnStateEnum;
}