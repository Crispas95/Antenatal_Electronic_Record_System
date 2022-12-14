import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientDemoSchema } from './patient/dto/patientDemo.schema';
import { PatientModule } from './patient/patient.module';
import { SampleModule } from './sample/sample.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/antenatalDB'),
    PatientModule,
    UsersModule,
    AuthModule
  ],
})
export class AppModule {}
