import axios from "axios";
import { Race } from "../components/test";
import { Class } from "../types/characterOptions/classes.types";
import { Alignment } from "../types/characterOptions/alignments.types";

export async function fetchRace(raceName: string) {
	const response = await axios
        .get<Race>(`https://www.dnd5eapi.co/api/class/${raceName}`)
        .then((response) => response.data);
	return response;
}

export async function fetchClass(className: string) {
	const response = await axios
        .get<Class>(`https://www.dnd5eapi.co/api/class/${className}`)
        .then((response) => response.data);
	return response;
}

export async function fetchAlignment(alignmentName: string) {
	const response = await axios
        .get<Alignment>(`https://www.dnd5eapi.co/api/class/${alignmentName}`)
        .then((response) => response.data);
	return response;
}