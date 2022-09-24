import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class PatientDemographicDto{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsDate()
    @IsNotEmpty()
    readonly dataOfBirth: Date;

    @IsString()
    @IsNotEmpty()
    readonly gender: string;

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    readonly homeDistrict: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly traditionalAuthority: string

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly village: string

    @IsNumber()
    @MaxLength(2)
    @IsNotEmpty()
    readonly numberOfChildren: string

    @IsString()
    @IsNotEmpty()
    readonly maritalStatus: string

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(12)
    readonly phoneNumber: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    readonly address: string

}