import { axios } from "../libs/axios";
import { Equipments } from "../types/characterOptions/equipment.types";
import { Features } from "../types/characterOptions/features.types";
import { Languages } from "../types/characterOptions/languages.types";
import { Proficiencies } from "../types/characterOptions/proficiencies.types";
import { Spells } from "../types/characterOptions/spells.types";
import { Traits } from "../types/characterOptions/traits.types";

export async function fetchSpells() {
	const response = await axios
        .get<Spells>(`https://www.dnd5eapi.co/api/spells`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchProficiencies() {
	const response = await axios
        .get<Proficiencies>(`https://www.dnd5eapi.co/api/proficiencies`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchLanguages() {
	const response = await axios
        .get<Languages>(`https://www.dnd5eapi.co/api/languages`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchEquipments() {
	const response = await axios
        .get<Equipments>(`https://www.dnd5eapi.co/api/equipment`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchFeatures() {
	const response = await axios
        .get<Features>(`https://www.dnd5eapi.co/api/features`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchTraits() {
	const response = await axios
        .get<Traits>(`https://www.dnd5eapi.co/api/traits`)
        .then((response) => response.data.results);
	return response;
}