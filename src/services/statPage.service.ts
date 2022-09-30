import { axios } from "../libs/axios";
import { EquipmentType } from "../types/characterOptions/equipment.types";
import { Feature } from "../types/characterOptions/features.types";
import { Language } from "../types/characterOptions/languages.types";
import { Proficiency } from "../types/characterOptions/proficiencies.types";
import { Spell } from "../types/characterOptions/spells.types";
import { Trait } from "../types/characterOptions/traits.types";


export async function fetchEquipment(equipName: string) {
    const response = await axios
        .get<EquipmentType>(`https://www.dnd5eapi.co/api/equipment/${equipName}`)
        .then((response) => response.data);
    return response;
}

export async function fetchTrait(traitName: string) {
    const response = await axios
        .get<Trait>(`https://www.dnd5eapi.co/api/traits/${traitName}`)
        .then((response) => response.data);
    return response;
}

export async function fetchFeature(featName: string) {
    const response = await axios
        .get<Feature>(`https://www.dnd5eapi.co/api/features/${featName}`)
        .then((response) => response.data);
    return response;
}

export async function fetchSpell(spellName: string) {
    const response = await axios
        .get<Spell>(`https://www.dnd5eapi.co/api/spells/${spellName}`)
        .then((response) => response.data);
    return response;
}

export async function fetchProficiency(profName: string) {
    const response = await axios
        .get<Proficiency>(`https://www.dnd5eapi.co/api/proficiencies/${profName}`)
        .then((response) => response.data);
    return response;
}

export async function fetchLanguage(langName: string) {
    const response = await axios
        .get<Language>(`https://www.dnd5eapi.co/api/languages/${langName}`)
        .then((response) => response.data);
    return response;
}