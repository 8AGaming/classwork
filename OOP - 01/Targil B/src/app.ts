// With God's Help

class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Patient extends Person {
  patientID: string;
  constructor(firstName: string, lastName: string, patientID: string) {
    super(firstName, lastName);
    this.patientID = patientID;
  }
  printPatientDetails() {
    console.log(this.firstName, this.lastName, this.patientID);
  }
}

class Doctor extends Person {
  doctorID: string;
  specialization: string;

  constructor(
    firstName: string,
    lastName: string,
    doctorID: string,
    specialization: string
  ) {
    super(firstName, lastName);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }

  printAllDoctorDetails() {
    console.log(
      this.firstName,
      this.lastName,
      this.doctorID,
      this.specialization
    );
  }
}

class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;

  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  showAllAppointmentDetails() {
    console.log(
      this.patient.printPatientDetails(),
      this.doctor.printAllDoctorDetails(),
      this.date,
      this.time
    );
  }
}

class Hospital {
  patientList: Patient[];
  doctorList: Doctor[];
  appointmentList: Appointment[];
  name: string;

  constructor(
    patientList: Patient[],
    doctorList: Doctor[],
    appointmentList: Appointment[],
    name: string
  ) {
    this.patientList = patientList;
    this.doctorList = doctorList;
    this.appointmentList = appointmentList;
    this.name = name;
  }
  addPatient(patient: Patient) {
    this.patientList.push(patient);
  }
  addDoctor(doctor: Doctor) {
    this.doctorList.push(doctor);
  }
  addAppointment(appointment: Appointment) {
    this.appointmentList.push(appointment);
  }
  showAllAppointment() {
    this.appointmentList.forEach((appointment) => console.log(appointment));
  }
  showAllAppointmentsByDoctorID(doctorID: string) {
    const filtered = this.appointmentList.filter(
      (appointment) => appointment.doctor.doctorID === doctorID
    );
    filtered.forEach((appointment) => console.log(appointment));
  }
  showAllAppointmentsByPatientID(patientID: string) {
    const filtered = this.appointmentList.filter(
      (appointment) => appointment.patient.patientID === patientID
    );
    filtered.forEach((appointment) => console.log(appointment));
  }
  showAllAppointmentsByDate(date: string) {
    const filtered = this.appointmentList.filter(
      (appointment) => appointment.date === date
    );
    filtered.forEach((appointment) => console.log(appointment));
  }
}

const patient1 = new Patient("A", "B", "1");
const patient2 = new Patient("A", "C", "2");
const patient3 = new Patient("A", "D", "3");

const doctor1 = new Doctor("B", "B", "1", "Eyes");
const doctor2 = new Doctor("B", "C", "2", "Arms");
const doctor3 = new Doctor("B", "D", "3", "Legs");

const appointment1 = new Appointment(patient1, doctor3, "27.08.2023", "16:00");
const appointment2 = new Appointment(patient2, doctor2, "27.08.2023", "16:10");
const appointment3 = new Appointment(patient3, doctor1, "29.08.2023", "16:20");

const patientList = [patient1, patient2, patient3];
const doctorList = [doctor1, doctor2, doctor3];
const appointmentList = [appointment1, appointment2, appointment3];

const myHospital = new Hospital(
  patientList,
  doctorList,
  appointmentList,
  "8A's Hospital"
);

myHospital.addAppointment(
  new Appointment(patient3, doctor3, "20.09.2023", "08:00")
);
myHospital.addDoctor(new Doctor("Hello", "Hello", "4", "Back"));
myHospital.addPatient(new Patient("Phone", "Guy", "4"));

myHospital.showAllAppointmentsByDoctorID("3");
myHospital.showAllAppointmentsByPatientID("3");
myHospital.showAllAppointmentsByDate("27.08.2023");
myHospital.showAllAppointment();
console.log(myHospital.doctorList);
console.log(myHospital.patientList);
