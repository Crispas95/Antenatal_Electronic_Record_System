import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDemoDto } from './dto/create-patient.dto';
import { Patient, PatientDemoDocument } from './dto/patientDemo.schema';
import { UpdatePatientDemoDto } from './dto/update-patient.dto';


@Injectable()
export class PatientService {

  constructor (@InjectModel(Patient.name) private patientModel: Model<PatientDemoDocument>){}

  async findAll():Promise<PatientDemoDocument[]> {
    return this.patientModel.find().exec();
  }

  async findByName(name: string):Promise<PatientDemoDocument> {
    return  this.patientModel.findOne({name}).exec();
  }

  async findById(id: number):Promise<PatientDemoDocument>{
    return this.patientModel.findById(id);
  }

    
  async create(createPatientDemoDto: CreatePatientDemoDto):Promise<PatientDemoDocument> {
    const createPAtientRecord = new this.patientModel(createPatientDemoDto);
    return createPAtientRecord.save();
  }

  async update(id: number, updatePatientDemoDto: UpdatePatientDemoDto):Promise<PatientDemoDocument> {
    return this.patientModel
        .findByIdAndUpdate(id,updatePatientDemoDto,{new: true})
        .exec();
  }

  async remove(id: number):Promise<PatientDemoDocument> {
    return this.patientModel.findByIdAndDelete(id).exec();
  }
}
