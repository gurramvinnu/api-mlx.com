import type { Patient } from "../../models/paitent.js";

class PatientMapper {
mapToPatient(dbRecord: any): Patient {
        return {
            Guid: dbRecord.guid,
            FirstName: dbRecord.first_name,
            MiddleName: dbRecord.middle_name || null,
            LastName: dbRecord.last_name,
            Gender: dbRecord.gender,
            Dob: new Date(dbRecord.dob),
            MobileNumber: dbRecord.mobile_number,
            AlternativeMobileNumber: dbRecord.alternative_mobile_number || null,
            Email: dbRecord.email,
            AddressLine1: dbRecord.address_line1,
            AddressLine2: dbRecord.address_line2 || null,
            City: dbRecord.city,
            State: dbRecord.state,
            Zipcode: dbRecord.zipcode,
            Country: dbRecord.country,
            Race: dbRecord.race || null,
            Ethnicity: dbRecord.ethnicity || null,
            IsHomeboundPatient: dbRecord.is_homebound_patient,
            IsHardStick: dbRecord.is_hard_stick,
            PatientNotes: dbRecord.patient_notes || null,
        };
    }
}
export default  PatientMapper;