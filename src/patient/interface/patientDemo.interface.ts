import { Document } from "mongoose";

export interface IpatientDemographic extends Document{
    readonly fullName: string;
    readonly dateOfBirth: string;
    readonly gender: string;
    readonly homeDistrict: string;
    readonly traditionalAuthority: string;
    readonly village: string;
    readonly numberOfChildren: string;
    readonly maritalStatus: string;
    readonly phoneNumber: number;
    readonly address: string

}