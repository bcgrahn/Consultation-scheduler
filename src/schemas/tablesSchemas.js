// Define the schemas for different collections
const consultationDetailsScheme = {
  consultationId: Number,               
  lecturerId: String,                 
  date: String,
  timeMinutes: String,                //Number
  maximumNumberOfStudents: String,   //Number
  status: String,
  startTime: String,
  endTime: String,
};

const consultationPeriodsScheme = {
  lecturerId: String,                           
  dayOfWeek: String,
  startTime: String,
  endTime: String,
  durationMinutes: Number,
  maximumNumberOfConsultationsPerDay: Number,
  numberOfStudents: Number,
};

const lecturerDetailsScheme = {
  lecturerId: String,                         
  emailAddress: String,
  firstName: String,
  lastName: String,
  password: String,                         
};

const studentDetailsScheme = {
  studentNumber: String,
  emailAddress: String,
  firstName: String,
  lastName: String,
  password: String,                       
};

const studentBookingScheme = {
  consultationId: Number,
  studentNumber: String,
  role: String,
};

// Export the variables
module.exports = {
  consultationDetailsScheme,
  consultationPeriodsScheme,
  lecturerDetailsScheme,
  studentDetailsScheme,
  studentBookingScheme,
};
