import { axios } from "../libs/axios";
import { Alignments } from "../types/characterOptions/alignments.types";
import { Classes } from "../types/characterOptions/classes.types";
import { Equipments } from "../types/characterOptions/equipment.types";
import { Features } from "../types/characterOptions/features.types";
import { Languages } from "../types/characterOptions/languages.types";
import { Proficiencies } from "../types/characterOptions/proficiencies.types";
import { Races } from "../types/characterOptions/race.types";
import { Spells } from "../types/characterOptions/spells.types";
import { Traits } from "../types/characterOptions/traits.types";

export async function fetchAlignments() {
	const response = await axios
        .get<Alignments>(`https://www.dnd5eapi.co/api/alignments`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchClasses() {
        const response = await axios
        .get<Classes>(`https://www.dnd5eapi.co/api/classes/`)
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

export async function fetchLanguages() {
	const response = await axios
        .get<Languages>(`https://www.dnd5eapi.co/api/languages`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchProficiencies() {
	const response = await axios
        .get<Proficiencies>(`https://www.dnd5eapi.co/api/proficiencies`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchRaces() {
	const response = await axios
        .get<Races>(`https://www.dnd5eapi.co/api/races`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchSpells() {
	const response = await axios
        .get<Spells>(`https://www.dnd5eapi.co/api/spells`)
        .then((response) => response.data.results);
	return response;
}

export async function fetchTraits() {
	const response = await axios
        .get<Traits>(`https://www.dnd5eapi.co/api/traits`)
        .then((response) => response.data.results);
	return response;
}