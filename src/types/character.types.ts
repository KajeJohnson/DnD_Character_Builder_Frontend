import { Alignment } from "./characterOptions/alignments.types";
import { Class } from "./characterOptions/classes.types";
import { Equipments } from "./characterOptions/equipment.types";
import { Features } from "./characterOptions/features.types";
import { Languages } from "./characterOptions/languages.types";
import { Proficiencies } from "./characterOptions/proficiencies.types";
import { Race } from "./characterOptions/race.types";
import { Spell } from "./characterOptions/spells.types";
import { Traits } from "./characterOptions/traits.types";


export interface Character {
	_id?: string;
	userId?: string;
	characterName: string;
	createdAt?: string;
	updatedAt?: string;
	class: Class;
	level: number;
	race: Race;
	alignment: Alignment;
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
	proficiencyBonus: number;
	armorClass: number;
	speed: string;
	hitPoints: number;
	spells: Spell[];
	proficiencies: Proficiencies;
	languages: Languages;
	equipment: Equipments;
	features: Features;
	traits: Traits;
}