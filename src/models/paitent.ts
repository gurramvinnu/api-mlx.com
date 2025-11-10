export interface Patient {
    Guid: string;
    FirstName: string;
    MiddleName: string | null;
    LastName: string;
    Gender: string;
    Dob: Date;
    MobileNumber: string;
    AlternativeMobileNumber: string | null;
    Email: string;
    AddressLine1: string;
    AddressLine2: string | null;
    City: string;
    State: string;
    Zipcode: string;
    Country: string;
    Race: string | null;
    Ethnicity: string | null;
    IsHomeboundPatient: boolean;
    IsHardStick: boolean;
    PatientNotes: string | null;
}