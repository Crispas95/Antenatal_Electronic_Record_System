import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientDemoSchema } from './patient/dto/patientDemo.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/antenatalDB'),
    MongooseModule.forFeature([{name: 'Patient',schema: PatientDemoSchema}]),  // updated
  ],
})
export class AppModule {}
