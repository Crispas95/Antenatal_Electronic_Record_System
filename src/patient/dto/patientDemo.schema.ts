import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PatientDemoDocument = Patient & Document;

@Schema()
export class Patient{
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

     @Prop()
     phoneNUmber: number

     @Prop()
     address?: string

}

export const PatientDemoSchema = SchemaFactory.createForClass(Patient)