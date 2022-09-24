import { Document } from "mongoose";

export interface IpatientVisits extends Document{
    readonly pregnancyLength : string;
    readonly numberOfVisits: number;
    readonly nextVisits: Date;
    readonly remainingVisits: number
}