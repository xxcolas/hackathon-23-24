export type User = {
  email: string;
  username: string;
  priority: Priority;
};
export type Priority = "low" | "medium" | "high" | undefined;

export type AuthToken = {
  id: string;
  iat: number;
};
