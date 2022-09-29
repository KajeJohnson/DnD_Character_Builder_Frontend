import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getUserCharacter } from "../services/character.service";
import { Character } from "../types/character.types"

export default function StatPage () {
    const [character, setCharacter] = useState<Character>();
    const {characterId} = useParams();

    
    useEffect(() => {
        getUserCharacter(characterId!)
        .then((character) => setCharacter(character))
    },[characterId])
    
    //need to use route w params to find character from user array, and have a .map() link from the character list/user homepage for  each, and use end
    
    console.log('class ' + character?.characterClass);
    console.log('race ' + character?.race);
    console.log('alignment ' + character?.alignment);
    console.log(character)


    return (
        <div>
                    <h2>{character?.characterName}</h2>
                    <p>level: {character?.level}</p>
                    <p>hit points:{character?.hitPoints}</p>
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
                    {/* <p>{character?.spells!}</p> // maybe use a component for the lists?
                    <p>{character?.proficiencies!}</p>
                    <p>{character?.languages!}</p>
                    <p>{character?.equipment!}</p>
                    <p>{character?.features!}</p>
                    <p>{character?.traits!}</p> */}
        </div>
    )

}