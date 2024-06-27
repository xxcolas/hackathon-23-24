export type User = {
  email: string;
  firstname: string;
  priority: Priority;
  type: "PATIENT" | "PRACTITIONER";
  description: string;
  descriptions: string[];
  tel: string;
  _id: string;
  messages: Message[];
};
export type Priority = "low" | "medium" | "high" | "undefined";
export type Message = {
  text: string;
  sender: "PATIENT" | "PRACTITIONER";
  date: string;
  type: "text";
  file?: any;
  transcript?: string;
};
export type AuthToken = {
  id: string;
  iat: number;
};
