import { axios } from "../libs/axios";
import { Spell, Spells } from "../types/characterOptions/spells.types";

export async function getSpells() {
	const response = await axios
        .get<Spells[]>(`https://www.dnd5eapi.co/api/spells`)
        .then((response) => response.data);
	return response;
}
