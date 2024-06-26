export type User = {
  email: string;
  priority: Priority;
  type: "PATIENT" | "PRACTITIONER";
  description: string;
  descriptions: string[];
  tel: string;
  _id: string;
  messages: {}[];
};
export type Priority = "low" | "medium" | "high" | "undefined";

export type AuthToken = {
  id: string;
  iat: number;
};
