import { useContext, useEffect, useState } from "react";
import { Race } from "../types/characterOptions/race.types";
import { Class } from "../types/characterOptions/classes.types";
import { Alignment } from "../types/characterOptions/alignments.types";
import SpellListBuilder from "../components/builderComponents/SpellListBuilder";
import ProficiencyListBuilder from "../components/builderComponents/ProfListBuilder";
import LanguageListBuilder from "../components/builderComponents/LanguageListBuilder";
import EquipmentListBuilder from "../components/builderComponents/EquipmentListBuilder";
import FeatureListBuilder from "../components/builderComponents/FeatureListBuilder";
import TraitListBuilder from "../components/builderComponents/TraitListBuilder";
import { Character } from "../types/character.types";
import {
  fetchAlignments,
  fetchClasses,
  fetchRaces,
  fetchSpells,
} from "../services/builderComponents.service";
import { Spell } from "../types/characterOptions/spells.types";
import { Proficiency } from "../types/characterOptions/proficiencies.types";
import { Language } from "../types/characterOptions/languages.types";
import { EquipmentType } from "../types/characterOptions/equipment.types";
import { Feature } from "../types/characterOptions/features.types";
import { Trait } from "../types/characterOptions/traits.types";
import { addCharacter } from "../services/character.service";
import { useNavigate } from "react-router-dom";
import { stringify } from "querystring";
import { AuthContext } from "../context/auth.context";
import {
  fetchAlignment,
  fetchClass,
  fetchRace,
} from "../services/builder.service";
import NavBar from "../components/navbar";
import wyzeguhye from "../img/wyzeguhye.png";

export default function CharBuilder() {
  const level = 1;
  const proficiencyBonus = 2;

  const [races, setRaces] = useState<Race[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [alignments, setAlignments] = useState<Alignment[]>([]);
  const [spellOps, setSpellOps] = useState<Spell[]>([]);

  const [name, setName] = useState<string>("");
  const [race, setRace] = useState<Race>();
  const [charClass, setCharClass] = useState<Class>();
  const [alignment, setAlignment] = useState<Alignment>();
  const [spells, setSpells] = useState<Spell[]>([]);
  const [proficiencies, setProficiencies] = useState<Proficiency[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [equipments, setEquipment] = useState<EquipmentType[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [traits, setTraits] = useState<Trait[]>([]);
  const [strength, setStrength] = useState<number>();
  const [dexterity, setDexterity] = useState<number>();
  const [constitution, setConstitution] = useState<number>();
  const [intelligence, setIntelligence] = useState<number>();
  const [wisdom, setWisdom] = useState<number>();
  const [charisma, setCharisma] = useState<number>();
  const [armorClass, setArmorClass] = useState<number>();
  const [speed, setSpeed] = useState<string>("30 feet");
  const [hitPoints, setHitPoints] = useState<number>();
  const [character, setCharacter] = useState<Character>();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

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

  useEffect(() => {
    fetchSpells().then((spells) => {
      setSpellOps(spells);
    });
  }, []);

  function appendSpells(chosenSpells: Spell[]) {
    // console.log("chosen spells " + chosenSpells);
    setSpells(chosenSpells);
    // console.log(JSON.stringify(chosenSpells));
  }

  function appendProficiencies(chosenProfs: Proficiency[]) {
    // console.log('chosen proficiencies ' + chosenProfs);
    setProficiencies(chosenProfs);
    // console.log(JSON.stringify(chosenProfs));
  }

  function appendLanguages(chosenLangs: Language[]) {
    // console.log('chosen languages ' + chosenLangs);
    setLanguages(chosenLangs);
    // console.log(JSON.stringify(chosenLangs));
  }

  function appendEquipment(chosenEquips: EquipmentType[]) {
    // console.log('chosen equipment ' + chosenEquips);
    setEquipment(chosenEquips);
    // console.log(JSON.stringify(chosenEquips));
  }

  function appendFeatures(chosenFeats: Feature[]) {
    // console.log('chosen features ' + chosenFeats);
    setFeatures(chosenFeats);
    // console.log(JSON.stringify(chosenFeats));
  }

  function appendTraits(chosenTraits: Trait[]) {
    // console.log('chosen traits ' + chosenTraits);
    setTraits(chosenTraits);
    // console.log(JSON.stringify(chosenTraits));
  }

  function handleSubmit(e: React.FormEvent) {
    console.log(charClass);
    e.preventDefault();
    addCharacter({
      userId: user?._id,
      characterName: name as string,
      characterClass: charClass as Class,
      level: level,
      race: race as Race,
      alignment: alignment as Alignment,
      strength: strength as number,
      dexterity: dexterity as number,
      constitution: constitution as number,
      intelligence: intelligence as number,
      wisdom: wisdom as number,
      charisma: charisma as number,
      proficiencyBonus: proficiencyBonus,
      armorClass: armorClass as number,
      speed: speed as string,
      hitPoints: hitPoints as number,
      spells: spells as Spell[],
      proficiencies: proficiencies,
      languages: languages,
      equipment: equipments,
      features: features,
      traits: traits,
    });
    navigate("/homepage");
    console.log("class " + character?.characterClass);
    console.log("race " + character?.race);
    console.log("alignment " + character?.alignment);
    console.log(character);
  }
  //get list characters at endpoint and display them

  return (
    <div>
      <div style={styles.container}>
        <NavBar />
        <form onSubmit={handleSubmit}>
          <h2>Let's make yer level 1 character</h2>
          <p>
            This builder expects ye to know yer rules, so have yer handbook
            ready
          </p>

          <div style={styles.box}>
            <label htmlFor="name">
              Name yer character:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="race">
              Select yer race:
              <select
                onChange={(e: any) =>
                  setRace(races.find((race) => race.index === e.target.value))
                }
                aria-label="Select Character Race"
                name="race"
              >
                <option value=""></option>
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
            </label>

            <label htmlFor="class">
              Select yer class:
              <select
                onChange={(e: any) =>
                  setCharClass(
                    classes.find(
                      (charClass) => charClass.index === e.target.value
                    )
                  )
                }
                aria-label="Select Character Class"
                name="class"
              >
                <option value=""></option>
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
            </label>

            <label htmlFor="alignment">
              Select yer alignment:
              <select
                onChange={(e: any) =>
                  setAlignment(
                    alignments.find(
                      (alignment) => alignment.index === e.target.value
                    )
                  )
                }
                aria-label="Select Character Alignment"
                name="alignment"
              >
                <option value=""></option>
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
            </label>

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
          </div>
          <div style={styles.lists}>
            <SpellListBuilder onChange={appendSpells} />

            <ProficiencyListBuilder onChange={appendProficiencies} />

            <LanguageListBuilder onChange={appendLanguages} />

            <EquipmentListBuilder onChange={appendEquipment} />

            <FeatureListBuilder onChange={appendFeatures} />

            <TraitListBuilder onChange={appendTraits} />
          </div>

          <button
            style={{ margin: "30px", padding: "10px" }}
            onClick={handleSubmit}
            type="submit"
          >
            submit character
          </button>
        </form>
      </div>
    </div>
  );
}

{
}
const styles = {
  container: {
    height: "100vh",
    margin: "0",
    overflowY: "auto",
    overflowX: "hidden",
    backgroundImage: `url(${wyzeguhye})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    backgroundPosition: "center",
    position: "fixed",
    minWidth: "100%",
    minHeight: "100%",
    padding: "0",
    color: "#fff",
    top: "0",
    left: "0",
  },
  box: {
    display: "flex",
    flexDisplay: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    // backgroundColor: "#000",
    padding: "10px",
  },
  lists: {
    display: "flex",
    flexDisplay: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
} as const;
