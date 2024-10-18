import { Gender, NewPatientEntry } from "./types";

const isString = (text: unknown): text is string => {
    return typeof text === "string" || text instanceof String;
  };

const isDateBirth = (dateOfBirth: string): boolean => {
    return Boolean(Date.parse(dateOfBirth));
};

const isGender = (params: string): params is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(params);
};

const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
      throw new Error("Incorrect or missing name");
    }
    return name;
  };

const parseDateOfBirth = (dateOfBirth: unknown): string => {
    if (!dateOfBirth || !isString(dateOfBirth) || !isDateBirth(dateOfBirth)) {
      throw new Error("Incorrect or missing date of birth: " + dateOfBirth);
    }
    return dateOfBirth;
};

const parseGender = (gender: unknown): Gender => {
    if (!isString(gender) || !isGender(gender)) {
      throw new Error("Incorrect or missing gender: " + gender);
    }
    return gender;
};

const parseOccupation = (occupation: unknown): string => {
    if (!occupation || !isString(occupation)) {
      throw new Error("Incorrect or missing occupation");
    }
    return occupation;
};

const toNewPatientEntry = (object: unknown): NewPatientEntry => {

    if (!object || typeof object !== "object") {
      throw new Error("Incorrect or missing data");
    }

    if ('name' in object && 'dateOfBirth' in object && 'gender' in object && 'occupation' in object) {
        const newEntry: NewPatientEntry = {
            name: parseName(object.name),
            dateOfBirth: parseDateOfBirth(object.dateOfBirth),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation)
        }
        return newEntry;
    }

    throw new Error("Incorrect data: some fields are missing");
};

export default toNewPatientEntry;
