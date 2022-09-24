import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class PatientVisits{
    @Prop()
    pregnancyLength: number

    @Prop()
    numberOfVisits: number
    
    @Prop()
    nextVisit: Date

    @Prop()
    remainVisits: Date
}

export const PatientVisitsSchema = SchemaFactory.createForClass(PatientVisits)