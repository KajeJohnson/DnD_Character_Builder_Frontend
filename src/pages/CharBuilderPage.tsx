import { useEffect, useState } from "react";
import { Race } from "../types/characterOptions/race.types";
import { Class } from "../types/characterOptions/classes.types";
import { Alignment } from "../types/characterOptions/alignments.types"
import SpellListBuilder from "../components/SpellListBuilder";
import ProficiencyListBuilder from "../components/ProfListBuilder";
import LanguageListBuilder from "../components/LanguageListBuilder";
import EquipmentListBuilder from "../components/EquipmentListBuilder";
import FeatureListBuilder from "../components/FeatureListBuilder";
import TraitListBuilder from "../components/TraitListBuilder";
import { Character } from "../types/character.types";
import { fetchAlignments, fetchClasses, fetchRaces } from "../services/builder.service";
import { Spell } from "../types/characterOptions/spells.types";

export default function CharBuilder () {
    const level = 1;
    const proficiencyBonus = 2;

    const [races, setRaces] = useState<Race[]>([]);
    const [classes, setClasses] = useState<Class[]>([]);
    const [alignments, setAlignments] = useState<Alignment[]>([]);

    const [name, setName] = useState<string>('name'); 
    const [race, setRace] = useState<Race>({
        "index": "dragonborn",
        "name": "Dragonborn",
        "url": "/api/races/dragonborn"
        });
    const [charClass, setCharClass] = useState<Class>({
        "index": "barbarian",
        "name": "Barbarian",
        "url": "/api/classes/barbarian"
        });
    const [alignment, setAlignment] = useState<Alignment>({
        "index": "chaotic-evil",
        "name": "Chaotic Evil",
        "url": "/api/alignments/chaotic-evil"
        });
    const [spells, setSpells] = useState<Spell[]>([{
        "index": "acid-arrow",
        "name": "Acid Arrow",
        "url": "/api/spells/acid-arrow"
        }]);
    const [strength, setStrength] = useState<number>(0);
    const [dexterity, setDexterity] = useState<number>(0);
    const [constitution, setConstitution] = useState<number>(0);
    const [intelligence, setIntelligence] = useState<number>(0);
    const [wisdom, setWisdom] = useState<number>(0);
    const [charisma, setCharisma] = useState<number>(0);
    const [armorClass, setArmorClass] = useState<number>(0);
    const [speed, setSpeed] = useState<string>('30 feet');
    const [hitPoints, setHitPoints] = useState<number>(0);
    // const [character, setCharacter] = useState<Character>({
    //     characterName: name,
    //     class: charClass,
    //     level: level,
    //     race: race,
    //     alignment: alignment,
    //     strength: strength,
    //     dexterity: dexterity,
    //     constitution: constitution,
    //     intelligence: intelligence,
    //     wisdom: wisdom,
    //     charisma: charisma,
    //     proficiencyBonus: proficiencyBonus,
    //     armorClass: armorClass,
    //     speed: speed,
    //     hitPoints: hitPoints,
    //     spells: spells,
    //     // proficiencies: proficiencies,
    //     // languages: languages,
    //     // equipment: equipments,
    //     // features: features,
    //     // traits: traits,
    // }); // *****
    
    useEffect(() => {
        fetchRaces().then((races) => {
          setRaces(races);
        });
      }, []);

      useEffect(() => {
        fetchClasses().then((classes) => {
          setClasses(classes);
        });
      }, []);

      useEffect(() => {
        fetchAlignments().then((alignments) => {
          setAlignments(alignments);
        });
      }, []);

    function appendSpells(next: Spell[]) {
        setSpells((prevSpells) => prevSpells)
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // return setCharacter({
        //     ...character,
	    //     characterName: name as string,
	    //     class: charClass as Class,
	    //     level: level,
	    //     race: race as Race,
	    //     alignment: alignment as Alignment,
	    //     strength: strength as number,
	    //     dexterity: dexterity as number,
	    //     constitution: constitution as number,
	    //     intelligence: intelligence as number,
	    //     wisdom: wisdom as number,
	    //     charisma: charisma as number,
	    //     proficiencyBonus: proficiencyBonus,
	    //     armorClass: armorClass as number,
	    //     speed: speed as string,
        //     hitPoints: hitPoints as number,
	    //     spells: spells as Spell[],
	    //     // proficiencies: Proficiencies,
	    //     // languages: Languages,
	    //     // equipment: Equipments,
	    //     // features: Features,
	    //     // traits: Traits,
        // });
        // console.log(character);
      }

      // do we want to have a copy of the stat page display at the bottom of the charater builder page that fills with info from the API as a user inputs choices?
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Let's make yer level 1 character</h2>
                <p>This builder expects ye to know yer rules, so have yer handbook ready</p>

                <label htmlFor="name">
                    Name yer character: 
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                </label>

                <select
                    // onChange={(e: any) => setRace(
                    //     races.find((race) => race.name === e.target.value)
                    //     )}
                    aria-label="Select Character Race"
                    name="race"
                >
                    <option value="dragonborn">Dragonborn</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="elf">Elf</option>
                    <option value="gnome">Gnome</option>
                    <option value="half-elf">Half-Elf</option>
                    <option value="half-orc">Half-Orc</option>
                    <option value="halfling">Halfling</option>
                    <option value="human">Human</option>
                    <option value="tiefling">Tiefling</option>
                </select>

                <select
                    // onChange={(e: any) => setCharClass(classes.find(
                    //     (singleClass) => singleClass.name === e.target.value)
                    // )}
                    aria-label="Select Character Class"
                    name="class"
                >
                    <option value="barbarian">Barbarian</option>
                    <option value="bard">Bard</option>
                    <option value="cleric">Cleric</option>
                    <option value="druid">Druid</option>
                    <option value="fighter">Fighter</option>
                    <option value="monk">Monk</option>
                    <option value="paladin">Paladin</option>
                    <option value="ranger">Ranger</option>
                    <option value="rouge">Rouge</option>
                    <option value="sorcerer">Sorcerer</option>
                    <option value="warlock">Warlock</option>
                    <option value="wizard">Wizard</option>
                </select>

                <select
                    // onChange={(e: any) => setAlignment(
                    //     alignments.find((alignment) => alignment.name === e.target.value)
                    //     )}
                    aria-label="Select Character Alignment"
                    name="alignment"
                >
                    <option value="chaotic-evil">Chaotic-Evil</option>
                    <option value="chaotic-good">Chaotic-Good</option>
                    <option value="chaotic-neutral">Chaotic-Neutral</option>
                    <option value="lawful-evil">Lawful-Evil</option>
                    <option value="lawful-good">Lawful-Good</option>
                    <option value="lawful-neutral">Lawful-Neutral</option>
                    <option value="neutral">Neutral</option>
                    <option value="neutral-evil">Neutral-Evil</option>
                    <option value="neutral-good">Neutral-Good</option>
                </select>

                <label htmlFor="stats">
                    Enter in yer stats: 
                        <input
                            type="number"
                            name="strength"
                            value={strength}
                            placeholder="Strength"
                            onChange={(e) => setStrength(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="dexterity"
                            value={dexterity}
                            placeholder="Dexterity"
                            onChange={(e) => setDexterity(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="constitution"
                            value={constitution}
                            placeholder="Constitution"
                            onChange={(e) => setConstitution(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="intelligence"
                            value={intelligence}
                            placeholder="Intelligence"
                            onChange={(e) => setIntelligence(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="wisdom"
                            value={wisdom}
                            placeholder="Wisdom"
                            onChange={(e) => setWisdom(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="charisma"
                            value={charisma}
                            placeholder="Charisma"
                            onChange={(e) => setCharisma(Number(e.target.value))}
                        />
                </label>

                <label htmlFor="AC">
                    Enter in yer armor class: 
                        <input
                            type="number"
                            name="armorClass"
                            value={armorClass}
                            placeholder="Armor Class"
                            onChange={(e) => setArmorClass(Number(e.target.value))}
                        />
                </label>

                <label htmlFor="speed">
                    Enter in yer speed: 
                        <input
                            type="string"
                            name="speed"
                            value={speed}
                            placeholder="Speed"
                            onChange={(e) => setSpeed(e.target.value)}
                        />
                </label>

                <label htmlFor="hitPoints">
                    Enter in yer hit points: 
                        <input
                            type="number"
                            name="hitPoints"
                            value={hitPoints}
                            placeholder="Hit Points"
                            onChange={(e) => setHitPoints(Number(e.target.value))}
                        />
                </label>

                {/* <SpellListBuilder onChange={appendSpells}/> */}

                <ProficiencyListBuilder />

                <LanguageListBuilder />

                <EquipmentListBuilder />

                <FeatureListBuilder />

                <TraitListBuilder />

                <button onClick={handleSubmit}>submit</button>
            </form>

        </div>
    )
}

  