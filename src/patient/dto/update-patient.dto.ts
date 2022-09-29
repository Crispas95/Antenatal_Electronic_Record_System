import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDemoDto} from './create-patient.dto';

export class UpdatePatientDemoDto extends PartialType(CreatePatientDemoDto) {}
