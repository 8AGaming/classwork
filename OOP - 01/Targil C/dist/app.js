"use strict";
// With God's Help
class Person {
    firstName;
    lastName;
    age;
    address;
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
}
class Patient extends Person {
    patientID;
    phoneNumber;
    emergencyContact;
    medicalHistory;
    constructor(firstName, lastName, age, address, patientID, phoneNumber, emergencyContact, medicalHistory) {
        super(firstName, lastName, age, address);
        this.patientID = patientID;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    }
    printDetails() {
        console.log(this.firstName, this.lastName, this.patientID);
    }
    updateMedicalHistory(medical) {
        this.medicalHistory.push(medical);
    }
}
class MedicalStaff extends Person {
    staffID;
    position;
    department;
    constructor(firstName, lastName, age, address, staffID, position, department) {
        super(firstName, lastName, age, address);
        this.staffID = staffID;
        this.position = position;
        this.department = department;
    }
}
class Doctor extends MedicalStaff {
    doctorID;
    specialization;
    availability;
    range;
    constructor(firstName, lastName, age, address, staffID, position, department, doctorID, specialization, availability, range) {
        super(firstName, lastName, age, address, staffID, position, department);
        this.doctorID = doctorID;
        this.specialization = specialization;
        this.availability = availability;
        this.range = range;
    }
    printDetails() {
        console.log(this.firstName, this.lastName, this.doctorID, this.specialization);
    }
}
class Appointment {
    patient;
    doctor;
    date;
    time;
    status;
    constructor(patient, doctor, date, time, status) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
        this.status = status;
    }
    printDetails() {
        console.log(this.patient.printDetails(), this.doctor.printDetails(), this.date, this.time);
    }
    completeAppointment() {
        this.status = "Completed!";
    }
    cancelAppointment() {
        this.status = "Canceled!";
    }
}
class MedicalRecord {
    patient;
    doctor;
    diagnosis;
    prescription;
    constructor(patient, doctor, diagnosis, prescription) {
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.prescription = prescription;
    }
}
class Hospital {
    patientList;
    doctorList;
    appointmentList;
    medicalRecordList;
    name;
    constructor(patientList, doctorList, appointmentList, medicalRecordList, name) {
        this.patientList = patientList;
        this.doctorList = doctorList;
        this.appointmentList = appointmentList;
        this.medicalRecordList = medicalRecordList;
        this.name = name;
    }
    addPatient(patient) {
        this.patientList.push(patient);
    }
    addDoctor(doctor) {
        this.doctorList.push(doctor);
    }
    addAppointment(appointment) {
        try {
            const doctorRange = appointment.doctor.range.split("-");
            const minAge = Number(doctorRange[0]);
            const maxAge = Number(doctorRange[1]);
            const patientAge = appointment.patient.age;
            if (patientAge < minAge || patientAge > maxAge) {
                throw new Error(`Your doctor is getting people only from ages ${minAge} to ${maxAge}`);
            }
            else if (appointment.doctor.availability.Time.includes(appointment.time)) {
                this.appointmentList.forEach((appointment1) => {
                    if (appointment.date === appointment1.date &&
                        appointment.time === appointment1.time)
                        throw new Error("An appointment already has been set in this time and date.");
                });
                this.appointmentList.push(appointment);
            }
            else {
                throw new Error(`Doctor ${appointment.doctor.firstName + " " + appointment.doctor.lastName} is not working in these times.`);
            }
        }
        catch (error) {
            console.error(error.message);
        }
    }
    showAllAppointment() {
        this.appointmentList.forEach((appointment) => console.log(appointment));
    }
    showAllAppointmentsByDoctorID(doctorID) {
        const filtered = this.appointmentList.filter((appointment) => appointment.doctor.doctorID === doctorID);
        filtered.forEach((appointment) => console.log(appointment));
    }
    showAllAppointmentsByPatientID(patientID) {
        const filtered = this.appointmentList.filter((appointment) => appointment.patient.patientID === patientID);
        filtered.forEach((appointment) => console.log(appointment));
    }
    showAllAppointmentsByDate(date) {
        const filtered = this.appointmentList.filter((appointment) => appointment.date === date);
        filtered.forEach((appointment) => console.log(appointment));
    }
    createMedicalRecord(medicalRecord) {
        this.medicalRecordList.push(medicalRecord);
    }
    getMedicalRecord() {
        return this.medicalRecordList;
    }
    getDoctorSchedule(doctorID) {
        const doctorSchedule = [];
        this.appointmentList.forEach((appointment) => {
            if (appointment.doctor.doctorID === doctorID) {
                doctorSchedule.push({ Date: appointment.date, Time: appointment.time });
            }
        });
        return doctorSchedule;
    }
    getDoctorAvailability(doctorID) {
        try {
            const doctor = this.doctorList.find((doctor) => doctor.doctorID === doctorID);
            if (doctor)
                return doctor.availability;
            throw new Error(`There is no doctor with this id ${doctorID}`);
        }
        catch (error) {
            console.error(error.message);
        }
    }
}
const patient1 = new Patient("Asaf AI", "Perets", 21, "167 Berekhya", "ID", 537566658, 999, ["Eyes"]);
const patient2 = new Patient("8A", "Gaming", 5, "167 Berekhya", "ID", 537566658, 999, ["Eyes"]);
const doctor1 = new Doctor("Hani", "Fletzet", 38, "Worldwide", "2", 4, "Ashqelon", "1", "Eyes", {
    Time: ["8:00", "9:00", "10:00", "11:00"],
    Date: ["Sunday, Monday, Friday"],
}, "12-40");
const doctor2 = new Doctor("Adon", "Shablul", 38, "Worldwide", "2", 4, "Ashqelon", "1", "Eyes", {
    Time: ["8:00", "9:00", "10:00", "11:00"],
    Date: ["Sunday, Monday, Friday"],
}, "3-18");
// const patient1 = new Patient("A", "B", "1");
// const patient2 = new Patient("A", "C", "2");
// const patient3 = new Patient("A", "D", "3");
// const doctor1 = new Doctor("B", "B", "1", "Eyes");
// const doctor2 = new Doctor("B", "C", "2", "Arms");
// const doctor3 = new Doctor("B", "D", "3", "Legs");
// const appointment1 = new Appointment(patient1, doctor3, "27.08.2023", "16:00");
const appointment2 = new Appointment(patient1, doctor1, "28.08.2023", "8:00", "");
const appointment3 = new Appointment(patient2, doctor2, "28.08.2023", "8:00", "");
const medicalRecord1 = new MedicalRecord(patient1, doctor1, "Eyes", "Bla Bla");
const patientList = [patient1, patient2];
const doctorList = [doctor1, doctor2];
const appointmentList = [appointment2, appointment3];
const medicalRecordList = [medicalRecord1];
const myHospital = new Hospital(patientList, doctorList, appointmentList, medicalRecordList, "8A's Hospital");
myHospital.addAppointment(new Appointment(patient1, doctor2, "29.08.2023", "14:00", ""));
myHospital.showAllAppointmentsByDoctorID("3");
myHospital.showAllAppointmentsByPatientID("3");
myHospital.showAllAppointmentsByDate("27.08.2023");
myHospital.showAllAppointment();
// console.log(myHospital.doctorList);
// console.log(myHospital.patientList);
