export const NOTIFICATIONS_PAGE_SIZE = 20;
export const REQUIRED_ACTIONS_PAGE_SIZE = 20;
export const DEFAULT_DATE_TIME_FORMAT = "MM/DD/YYYY hh:mm A";
export const DEFAULT_DATE_FORMAT = "MM/DD/YYYY";

export const filterActivityOptions = [
  { name: "APPT_REQUEST", value: "APPT_REQUEST", label: "Appt Request" },
  { name: "FORM", value: "FORM", label: "Form" },
  { name: "APPOINTMENT", value: "APPOINTMENT", label: "Appointment" },
  { name: "PAYMENT", value: "PAYMENT", label: "Payment" },
  { name: "REVIEW", value: "REVIEW", label: "Review" },
  { name: "FEEDBACK", value: "FEEDBACK", label: "Feedback" }
];

export const actionFilterMap = {
  APPT_REQUEST: { text: "Appt Request", filters: ["AR", "AC", "ASF"] },
  FORM: { text: "Form", filters: ["UPFS", "FSRS", "FURAS", "FWAPS"] },
  APPOINTMENT: { text: "Appointment", filters: ["CR", "UMR"] },
  PAYMENT: { text: "Payment", filters: ["PR"] },
  REVIEW: { text: "Review", filters: ["URR"] },
  FEEDBACK: { text: "Feedback", filters: ["FR"] }
};

export const actionEventTypeMap = {
  UNFAVORABLE_REVIEW_RECEIVED: "URR",
  UNCLASSIFIED_MESSAGE_RECEIVED: "UMR",
  CALLBACK_REQUESTED: "CR",
  FEEDBACK_RECEIVED: "FR",
  APPOINTMENT_REQUESTED: "AR",
  APPOINTMENT_SYNC_FAILED: "ASF",
  APPOINTMENT_CONFLICTED: "AC",
  PAYMENT_RECEIVED: "PR",
  GENERAL_FORM_SUBMISSION_PRACTICE_ALERT: "FWAPS",
  FORM_SUBMISSION_REQUIRE_STAFF_SIGNATURE: "FSRS",
  UNKNOWN_PATIENT_FORM_SUBMITTED: "UPFS",
  GENERAL_FORM_SUBMISSION_UNKNOWN_REFERRAL_ALERT: "FURAS",
  GENERAL_FORM_SUBMISSION_REQUIRE_DOCTOR_SIGNATURE: "FRDS"
};

export const actionStatus = {
  PENDING: "pending",
  IGNORED: "ignored",
  COMPLETED: "completed"
};

export const actionDescriptionMap = {};

export const notificationFilterMap = {
  APPT_REQUEST: { text: "Appt Request", filters: ["CA", "ARA"] },
  FORM: { text: "Form", filters: ["FS"] },
  APPOINTMENT: { text: "Appointment", filters: ["AC"] },
  PAYMENT: { text: "Payment", filters: ["PR"] },
  REVIEW: { text: "Review", filters: ["RR"] },
  FEEDBACK: { text: "Feedback", filters: [] }
};

export const notificationEventTypeMap = {
  REVIEW_RECEIVED: "RR",
  APPOINTMENT_CONFIRMED: "AC",
  APPOINTMENT_REQUEST_ACCEPTED: "ARA",
  CONFLICTED_APPOINTMENT: "CA",
  PAYMENT_RECEIVED: "PR",
  FORM_SUBMITTED: "FS"
};

export const notificationStatus = {
  UNREAD: "unread",
  MARKED_AS_READ: "read"
};

export const notificationDescriptionMap = {};
