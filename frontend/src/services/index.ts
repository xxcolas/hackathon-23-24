import { User } from "../types";

export const loginWithPassword = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    return Promise.resolve({} as User);
  } catch (error) {
    return Promise.reject(error);
  }
};
