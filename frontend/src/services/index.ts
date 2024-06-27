import { User } from '@/types';

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

export const uploadAudioFileWithTranscript = async (file: Blob, transcript: string): Promise<User> => {
  const formData = new FormData();

  formData.append('file', file)
  formData.append('transcript', transcript)

  const options = {
    method: 'PATCH',
    body: formData,
  };

  const response = await fetch('http://localhost:3000/users/667a9c7331b65ecde0d6ac6b', options);
  const data = await response.json(); 

  return data
}