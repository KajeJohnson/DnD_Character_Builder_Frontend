import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserCharacter } from "../services/character.service";
import { Character } from "../types/character.types";
import wiiiitchy from "../img/wiiiitchy.png";
import SpellListStatPage from "../components/statComponents/SpellListStat";
import ProfListStatPage from "../components/statComponents/profListStat";
import LangListStatPage from "../components/statComponents/LanguageListStat";
import EquipListStatPage from "../components/statComponents/EquipListStat";
import FeatListStatPage from "../components/statComponents/FeatListStat";
import TraitListStatPage from "../components/statComponents/TraitListStat";
import NavBar from "../components/navbar";


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
    <div style={styles.container}>
      <NavBar />
      <div>
        <div>
          <h1>{character?.characterName}</h1>
        </div>
        <div style={styles.box}>
          <p>level: {character?.level}</p>
          <p>hit points: {character?.hitPoints}</p>
          <p>class: {character?.characterClass.name}</p>
          <p>race: {character?.race.name}</p>
          <p>alignment: {character?.alignment.name}</p>
        </div>
        <div style={styles.box}>
          <p>strength: {character?.strength}</p>
          <p>dexterity: {character?.dexterity}</p>
          <p>constitution: {character?.constitution}</p>
          <p>intelligence: {character?.intelligence}</p>
          <p>wisdom: {character?.wisdom}</p>
          <p>charisma: {character?.charisma}</p>
        </div>
        <div style={styles.box}>
          <p>proficiency bonus: {character?.proficiencyBonus}</p>
          <p>armor class: {character?.armorClass}</p>
          <p>speed: {character?.speed}</p>
        </div>
        <div style={styles.box}>
          {character?.equipment && <EquipListStatPage equips={character?.equipment!} />}
          {character?.languages && <LangListStatPage langs={character?.languages!} />}
        </div>
        <div style={styles.box}>
          {character?.traits && <TraitListStatPage traits={character?.traits!} />}
          {character?.proficiencies && <ProfListStatPage profs={character?.proficiencies!} />}
        </div>
        <div style={styles.box}>
          {character?.spells && <SpellListStatPage spells={character?.spells!} />}
          {character?.features && <FeatListStatPage feats={character?.features!} />}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
      height: "100vh",
      margin: "0",
      overflowY: "auto",
      overflowX: "hidden",
      backgroundImage: `url(${wiiiitchy})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: "0",
      color: "#fff",
      backgroundPosition: "center",
      position: "fixed",
      top: "0",
      left: "0",
      minWidth: "100%",
      minHeight: "100%",
  },
  box: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px",
      display: "flex",
      flexDisplay: "row",
      justifyContent: "space-between",
      backgroundColor: "#000",
      padding: "10px",
      // opacity: "0.2",
  }
} as const;
