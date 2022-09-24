import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class PatientDemographic{
    @Prop()
    fullName : string;

     @Prop()
     dateOfBirth : Date;

     @Prop()
     gender : string
     
     @Prop()
     homeDistrict : string

     @Prop()
     traditionalAuthority: string

     @Prop()
     village: string

     @Prop()
     numberOfChildren: string

     @Prop()
     maritalStatus: string

}

export const PatientDemographicSchema = SchemaFactory.createForClass(PatientDemographic)