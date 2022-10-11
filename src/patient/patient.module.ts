import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientDemoSchema } from './dto/patientDemo.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Patient',schema: PatientDemoSchema}]),],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule {}
