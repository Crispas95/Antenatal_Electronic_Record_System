import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class PatientVisits{
    @Prop()
    pregnancyLength: string

    @Prop()
    numberOfVisits: number
    
    @Prop()
    nextVisit: Date

    @Prop()
    remaingVisits: number
}

export const PatientVisitsSchema = SchemaFactory.createForClass(PatientVisits)