import data from '../data/diagnose';
import { Diagnosis } from '../types';

 const diagnose: Diagnosis[] = data as Diagnosis[];

const getEntries = (): Diagnosis[] => {
    return diagnose;
}

export default {
    getEntries
}