import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { CreatePatientDemoDto } from './dto/create-patient.dto';
import { PatientDemoDocument } from './dto/patientDemo.schema';
import { UpdatePatientDemoDto } from './dto/update-patient.dto';
import { PatientService } from './patient.service';


@Controller('patient')
export class PatientController { 
  constructor ( private readonly patientService: PatientService){}


@Get()
async findAll():Promise<PatientDemoDocument[]>{
  return  await this.patientService.findAll()
}
@Get(':id')
async findByName(@Param('name')name: string): Promise<PatientDemoDocument>{
  const patient = await this.patientService.findByName(name);

  if(!patient){
    throw new NotFoundException;
  } else{
    return patient;
  }
}

@Get(':id')
async findById(@Param('id') id : number): Promise<PatientDemoDocument>{
  const patient = await this.patientService.findById(id);

  if(!patient){
    throw new NotFoundException;
  } else{
      return patient;
  }
}
@Post()
async create(@Body() createPatientDemoDto: CreatePatientDemoDto):Promise<PatientDemoDocument>{
  return this.patientService.create(createPatientDemoDto);
}

 @Patch(':id')
 async update(@Param('id')id,@Body() updatePatientDemoDto: UpdatePatientDemoDto):Promise<PatientDemoDocument>{
   const patient = await this.patientService.findById(id);

   if(!patient){
    throw new NotFoundException;
   }else{
    return this.patientService.update(id,updatePatientDemoDto);
   }
   
 }

 @Delete(':id')
 async remove (@Param('id') id: number):Promise<PatientDemoDocument>{
  const patient = await this.patientService.findById(id);

  if(!!patient){
   return this.patientService.remove(id);
  }else{
    throw new NotFoundException;
  }
  
 }
}
 