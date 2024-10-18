import data1 from '../data/patients';
import { Patient, NonIncludedPatientssn, NewPatientEntry } from '../types';
import { v1 as uuid } from 'uuid';

const getEntries = (): Patient[] => {
    return data1;
}

const getNonIncludedPatientssn = (): NonIncludedPatientssn[] => {
    return data1.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
}

const findById = (id: string): Patient | undefined => {
    const entry  = data1.find(d => d.id === id);
    return entry;
};

const addPatient = (entry: NewPatientEntry): Patient => {
    const newPatientEntry = {
        id: uuid(),
        ...entry    
    };
    data1.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getEntries,
    getNonIncludedPatientssn,
    findById,
    addPatient
}