// With God's Help

abstract class Person {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }
}

class Patient extends Person {
  patientID: string;
  phoneNumber: number;
  emergencyContact: number;
  medicalHistory: string[];
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    patientID: string,
    phoneNumber: number,
    emergencyContact: number,
    medicalHistory: string[]
  ) {
    super(firstName, lastName, age, address);
    this.patientID = patientID;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.medicalHistory = medicalHistory;
  }
  printDetails() {
    console.log(this.firstName, this.lastName, this.patientID);
  }
  updateMedicalHistory(medical: string) {
    this.medicalHistory.push(medical);
  }
}

class MedicalStaff extends Person {
  staffID: string;
  position: number;
  department: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    staffID: string,
    position: number,
    department: string
  ) {
    super(firstName, lastName, age, address);
    this.staffID = staffID;
    this.position = position;
    this.department = department;
  }
}
interface DoctorAvailability {
  Time: string[];
  Date: string[];
}
class Doctor extends MedicalStaff {
  doctorID: string;
  specialization: string;
  availability: DoctorAvailability;
  range: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    staffID: string,
    position: number,
    department: string,
    doctorID: string,
    specialization: string,
    availability: DoctorAvailability,
    range: string
  ) {
    super(firstName, lastName, age, address, staffID, position, department);
    this.doctorID = doctorID;
    this.specialization = specialization;
    this.availability = availability;
    this.range = range;
  }

  printDetails() {
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
  status: string;

  constructor(
    patient: Patient,
    doctor: Doctor,
    date: string,
    time: string,
    status: string
  ) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
    this.status = status;
  }
  printDetails() {
    console.log(
      this.patient.printDetails(),
      this.doctor.printDetails(),
      this.date,
      this.time
    );
  }
  completeAppointment() {
    this.status = "Completed!";
  }
  cancelAppointment() {
    this.status = "Canceled!";
  }
}

class MedicalRecord {
  private patient: Patient;
  private doctor: Doctor;
  diagnosis: string;
  private prescription: string;

  constructor(
    patient: Patient,
    doctor: Doctor,
    diagnosis: string,
    prescription: string
  ) {
    this.patient = patient;
    this.doctor = doctor;
    this.diagnosis = diagnosis;
    this.prescription = prescription;
  }
}
class Hospital {
  private patientList: Patient[];
  private doctorList: Doctor[];
  private appointmentList: Appointment[];
  private medicalRecordList: MedicalRecord[];
  private name: string;

  constructor(
    patientList: Patient[],
    doctorList: Doctor[],
    appointmentList: Appointment[],
    medicalRecordList: MedicalRecord[],
    name: string
  ) {
    this.patientList = patientList;
    this.doctorList = doctorList;
    this.appointmentList = appointmentList;
    this.medicalRecordList = medicalRecordList;
    this.name = name;
  }
  addPatient(patient: Patient) {
    this.patientList.push(patient);
  }
  addDoctor(doctor: Doctor) {
    this.doctorList.push(doctor);
  }
  addAppointment(appointment: Appointment) {
    try {
      const doctorRange = appointment.doctor.range.split("-");
      const minAge = Number(doctorRange[0]);
      const maxAge = Number(doctorRange[1]);
      const patientAge = appointment.patient.age;
      if (patientAge < minAge || patientAge > maxAge) {
        throw new Error(
          `Your doctor is getting people only from ages ${minAge} to ${maxAge}`
        );
      } else if (
        appointment.doctor.availability.Time.includes(appointment.time)
      ) {
        this.appointmentList.forEach((appointment1) => {
          if (
            appointment.date === appointment1.date &&
            appointment.time === appointment1.time
          )
            throw new Error(
              "An appointment already has been set in this time and date."
            );
        });
        this.appointmentList.push(appointment);
      } else {
        throw new Error(
          `Doctor ${
            appointment.doctor.firstName + " " + appointment.doctor.lastName
          } is not working in these times.`
        );
      }
    } catch (error: any) {
      console.error(error.message);
    }
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
  createMedicalRecord(medicalRecord: MedicalRecord) {
    this.medicalRecordList.push(medicalRecord);
  }
  getMedicalRecord() {
    return this.medicalRecordList;
  }
  getDoctorSchedule(doctorID: string) {
    interface ScheduleStructure {
      Date: string;
      Time: string;
    }
    const doctorSchedule: ScheduleStructure[] = [];
    this.appointmentList.forEach((appointment) => {
      if (appointment.doctor.doctorID === doctorID) {
        doctorSchedule.push({ Date: appointment.date, Time: appointment.time });
      }
    });
    return doctorSchedule;
  }
  getDoctorAvailability(doctorID: string) {
    try {
      const doctor = this.doctorList.find(
        (doctor) => doctor.doctorID === doctorID
      );
      if (doctor) return doctor.availability;
      throw new Error(`There is no doctor with this id ${doctorID}`);
    } catch (error: any) {
      console.error(error.message);
    }
  }
}

const patient1 = new Patient(
  "Asaf AI",
  "Perets",
  21,
  "167 Berekhya",
  "ID",
  537566658,
  999,
  ["Eyes"]
);
const patient2 = new Patient(
  "8A",
  "Gaming",
  5,
  "167 Berekhya",
  "ID",
  537566658,
  999,
  ["Eyes"]
);

const doctor1 = new Doctor(
  "Hani",
  "Fletzet",
  38,
  "Worldwide",
  "2",
  4,
  "Ashqelon",
  "1",
  "Eyes",
  {
    Time: ["8:00", "9:00", "10:00", "11:00"],
    Date: ["Sunday, Monday, Friday"],
  },
  "12-40"
);
const doctor2 = new Doctor(
  "Adon",
  "Shablul",
  38,
  "Worldwide",
  "2",
  4,
  "Ashqelon",
  "1",
  "Eyes",
  {
    Time: ["8:00", "9:00", "10:00", "11:00"],
    Date: ["Sunday, Monday, Friday"],
  },
  "3-18"
);
// const patient1 = new Patient("A", "B", "1");
// const patient2 = new Patient("A", "C", "2");
// const patient3 = new Patient("A", "D", "3");

// const doctor1 = new Doctor("B", "B", "1", "Eyes");
// const doctor2 = new Doctor("B", "C", "2", "Arms");
// const doctor3 = new Doctor("B", "D", "3", "Legs");

// const appointment1 = new Appointment(patient1, doctor3, "27.08.2023", "16:00");
const appointment2 = new Appointment(
  patient1,
  doctor1,
  "28.08.2023",
  "8:00",
  ""
);
const appointment3 = new Appointment(
  patient2,
  doctor2,
  "28.08.2023",
  "8:00",
  ""
);
const medicalRecord1 = new MedicalRecord(patient1, doctor1, "Eyes", "Bla Bla");

const patientList = [patient1, patient2];
const doctorList = [doctor1, doctor2];
const appointmentList = [appointment2, appointment3];
const medicalRecordList = [medicalRecord1];

const myHospital = new Hospital(
  patientList,
  doctorList,
  appointmentList,
  medicalRecordList,
  "8A's Hospital"
);

myHospital.addAppointment(
  new Appointment(patient1, doctor2, "29.08.2023", "14:00", "")
);

myHospital.showAllAppointmentsByDoctorID("3");
myHospital.showAllAppointmentsByPatientID("3");
myHospital.showAllAppointmentsByDate("27.08.2023");
myHospital.showAllAppointment();
// console.log(myHospital.doctorList);
// console.log(myHospital.patientList);
