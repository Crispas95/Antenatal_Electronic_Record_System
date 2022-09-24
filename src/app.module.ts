import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientDemographicSchema } from './Database/patientDB/database.demographic.schema';
import { PatientVisitsSchema } from './Database/patientDB/database.visits';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/antenatalDB'),
    PatientModule,
    MongooseModule.forFeature([{name: 'PatientDemographic',schema: PatientDemographicSchema}]),
    MongooseModule.forFeature([{name:'PatientVisit', schema: PatientVisitsSchema}])
  ],
})
export class AppModule {}
