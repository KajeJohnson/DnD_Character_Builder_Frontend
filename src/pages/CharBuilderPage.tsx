import { useState } from "react";
import { Race } from "../types/characterOptions/race.types";
import { Class } from "../types/characterOptions/classes.types";
import { Alignment } from "../types/characterOptions/alignments.types"

export default function CharBuilder () {
    const level = 1;
    const proficiencyBonus = 2;
    const [name, setName] = useState<string>(); 
    const [race, setRace] = useState<Race>(); // these are set to endpoints
    const [charClass, setCharClass] = useState<Class>(); // these are set to endpoints
    const [alignment, setAlignment] = useState<Alignment>(); // these are set to endpoints
    const [strength, setStrength] = useState<number>();
    const [dexterity, setDexterity] = useState<number>();
    const [constitution, setConstitution] = useState<number>();
    const [intelligence, setIntelligence] = useState<number>();
    const [wisdom, setWisdom] = useState<number>();
    const [charisma, setCharisma] = useState<number>();
    const [armorClass, setArmorClass] = useState<number>();
    const [speed, setSpeed] = useState<number>();
    const [hitPoints, setHitPoints] = useState<number>();
    

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // right now just an empty function
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
                    onChange={(e: any) => setRace(e.target.value)}
                    aria-label="Select Character Race"
                >
                    <option value="/api/races/dragonborn">Dragonborn</option>
                    <option value="/api/races/dwarf">Dwarf</option>
                    <option value="/api/races/elf">Elf</option>
                    <option value="/api/races/gnome">Gnome</option>
                    <option value="/api/races/half-elf">Half-Elf</option>
                    <option value="/api/races/half-orc">Half-Orc</option>
                    <option value="/api/races/halfling">Halfling</option>
                    <option value="/api/races/human">Human</option>
                    <option value="/api/races/tiefling">Tiefling</option>
                </select>

                <select
                    onChange={(e: any) => setCharClass(e.target.value)}
                    aria-label="Select Character Class"
                >
                    <option value="/api/classes/barbarian">Barbarian</option>
                    <option value="/api/classes/bard">Bard</option>
                    <option value="/api/classes/cleric">Cleric</option>
                    <option value="/api/classes/druid">Druid</option>
                    <option value="/api/classes/fighter">Fighter</option>
                    <option value="/api/classes/monk">Monk</option>
                    <option value="/api/classes/paladin">Paladin</option>
                    <option value="/api/classes/ranger">Ranger</option>
                    <option value="/api/classes/rouge">Rouge</option>
                    <option value="/api/classes/sorcerer">Sorcerer</option>
                    <option value="/api/classes/warlock">Warlock</option>
                    <option value="/api/classes/wizard">Wizard</option>
                </select>

                <select
                    onChange={(e: any) => setAlignment(e.target.value)}
                    aria-label="Select Character Alignment"
                >
                    <option value="/api/alignments/chaotic-evil">Chaotic-Evil</option>
                    <option value="/api/alignments/chaotic-good">Chaotic-Good</option>
                    <option value="/api/alignments/chaotic-neutral">Chaotic-Neutral</option>
                    <option value="/api/alignments/lawful-evil">Lawful-Evil</option>
                    <option value="/api/alignments/lawful-good">Lawful-Good</option>
                    <option value="/api/alignments/lawful-neutral">Lawful-Neutral</option>
                    <option value="/api/alignments/neutral">Neutral</option>
                    <option value="/api/alignments/neutral-evil">Neutral-Evil</option>
                    <option value="/api/alignments/neutral-good">Neutral-Good</option>
                </select>

                <label htmlFor="stats">
                    Enter in yer stats: 
                        <input
                            type="number"
                            name="stats"
                            value={strength}
                            placeholder="Strength"
                            onChange={(e) => setStrength(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="stats"
                            value={dexterity}
                            placeholder="Dexterity"
                            onChange={(e) => setDexterity(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="stats"
                            value={constitution}
                            placeholder="Constitution"
                            onChange={(e) => setConstitution(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="stats"
                            value={intelligence}
                            placeholder="Intelligence"
                            onChange={(e) => setIntelligence(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="stats"
                            value={wisdom}
                            placeholder="Wisdom"
                            onChange={(e) => setWisdom(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="stats"
                            value={charisma}
                            placeholder="Charisma"
                            onChange={(e) => setCharisma(Number(e.target.value))}
                        />
                </label>

                <label htmlFor="AC">
                    Enter in yer armor class: 
                        <input
                            type="number"
                            name="AC"
                            value={armorClass}
                            placeholder="Armor Class"
                            onChange={(e) => setArmorClass(Number(e.target.value))}
                        />
                </label>

                <label htmlFor="speed">
                    Enter in yer speed: 
                        <input
                            type="number"
                            name="speed"
                            value={speed}
                            placeholder="Speed"
                            onChange={(e) => setSpeed(Number(e.target.value))}
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

                {/* <SpellListBuilder /> */}

            </form>

        </div>
    )
}

  