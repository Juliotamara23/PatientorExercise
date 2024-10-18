import express from 'express';
import diagnoseService from '../services/diagnoseSerivice';
import patientsSerivice from '../services/patientsSerivice';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/diagnoses', (_req, res) => { 
  res.send(diagnoseService.getEntries());
});

router.get('/patients', (_req, res) => {  
  res.send(patientsSerivice.getNonIncludedPatientssn());
});

router.get('/:id', (_req, res) =>{
  const patient = patientsSerivice.findById(_req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
})

router.post('/patients', (_req, res) => {
  const { name, dateOfBirth, gender, occupation } = _req.body;
  const newPatientEntry = patientsSerivice.addPatient({name, dateOfBirth, gender, occupation});
  res.json(newPatientEntry);
})

router.post('/patients', (_req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(_req.body);

    const addedEntry = patientsSerivice.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
})

export default router;