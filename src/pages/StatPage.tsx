import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpellListStatForPage from "../components/statComponents/SpellListStat";
import { getUserCharacter } from "../services/character.service";
import { Character } from "../types/character.types";
import wiiiitchy from "../img/wiiiitchy.png";
import SpellListStatPage from "../components/statComponents/SpellListStat";
import ProfListStatPage from "../components/statComponents/profListStat";
import LangListStatPage from "../components/statComponents/LanguageListStat";
import EquipListStatPage from "../components/statComponents/EquipListStat";
import FeatListStatPage from "../components/statComponents/FeatListStat";
import TraitListStatPage from "../components/statComponents/TraitListStat";

export default function StatPage() {
  const [character, setCharacter] = useState<Character>();
  const { characterId } = useParams();

  useEffect(() => {
    getUserCharacter(characterId!).then((character) => setCharacter(character));
  }, [characterId]);

  //need to use route w params to find character from user array, and have a .map() link from the character list/user homepage for  each, and use end

  console.log("class " + character?.characterClass);
  console.log("race " + character?.race);
  console.log("alignment " + character?.alignment);
  console.log('spells on charBuilder: ' + character?.spells)

  console.log(character);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${wiiiitchy})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "0",
          padding: "0",
          color: "#fff",
        }}
      >
        <div style={{ paddingTop: 40 }}>
          <h2>{character?.characterName}</h2>
        </div>
        <p>level: {character?.level}</p>
        <p>hit points: {character?.hitPoints}</p>
        <p>class: {character?.characterClass.name}</p>
        <p>race: {character?.race.name}</p>
        <p>alignment: {character?.alignment.name}</p>
        <p>strenght: {character?.strength}</p>
        <p>dexterity: {character?.dexterity}</p>
        <p>constitution: {character?.constitution}</p>
        <p>intelligence: {character?.intelligence}</p>
        <p>wisdom: {character?.wisdom}</p>
        <p>charisma: {character?.charisma}</p>
        <p>proficiency bonus: {character?.proficiencyBonus}</p>
        <p>armor class: {character?.armorClass}</p>
        <p>speed: {character?.speed}</p>
        {character?.spells ? <SpellListStatPage spells={character?.spells} /> : <p>no spells</p>}
        {character?.proficiencies ? <ProfListStatPage profs={character?.proficiencies} /> : <p>no proficiencies</p>}
        {character?.languages ? <LangListStatPage langs={character?.languages} /> : <p>no languages</p>}
        {character?.equipment ? <EquipListStatPage equips={character?.equipment} /> : <p>no equipment</p>}
        {character?.features ? <FeatListStatPage feats={character?.features} /> : <p>no features</p>}
        {character?.traits ? <TraitListStatPage traits={character?.traits} /> : <p>no traits</p>}
      </div>
    </div>
  );
}
