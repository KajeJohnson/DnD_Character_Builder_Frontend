import { axios } from "../libs/axios";
import { Character } from "../types/character.types";

export async function getUserCharacters(userId: string) {
  const response = await axios.get<Character[]>("/characters", {
    params: { userId },
    // params: { userId },
  });
  return response.data;
}

export async function addCharacter(data: Partial<Character>) {
  const response = await axios.post<Character>("/characters", data);
  return response.data;
}
