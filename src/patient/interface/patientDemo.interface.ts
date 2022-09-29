import { Document } from "mongoose";

export interface IpatientDemographic extends Document{
    readonly fullName: string;
    readonly dateOfBirth: Date;
    readonly gender: string;
    readonly homeDisrict: string;
    readonly traditionalAuthority: string;
    readonly village: string;
    readonly numberOfChildren: string;
    readonly maritalStatus: string;
    readonly phoneNumber: number;
    readonly address: string

}