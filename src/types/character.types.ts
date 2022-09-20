import { Alignment } from "./characterOptions/alignments.types";
import { Class } from "./characterOptions/classes.types";
import { Race } from "./characterOptions/race.types";
import { Spell } from "./Spells.types";

export interface Character {
	_id: string;
	userId: string;
	characterName: string;
	createdAt: string;
	updatedAt: string;
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
	speed: number;
	hitPoints: number;
	attacks: string[];
	spells: Spell[];
	
}
