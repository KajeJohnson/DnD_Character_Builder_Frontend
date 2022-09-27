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


    return (
        <div>
                    <h3>{character?.characterName}</h3>
                    <p>{character?.class.name}</p>
                    <p>{character?.level}</p>
                    <p>{character?.race.name}</p>
                    <p>{character?.alignment.name}</p>
                    <p>{character?.strength}</p>
                    <p>{character?.dexterity}</p>
                    <p>{character?.constitution}</p>
                    <p>{character?.intelligence}</p>
                    <p>{character?.wisdom}</p>
                    <p>{character?.charisma}</p>
                    <p>{character?.proficiencyBonus}</p>
                    <p>{character?.armorClass}</p>
                    <p>{character?.speed}</p>
                    <p>{character?.hitPoints}</p>
                    {/* <p>{character?.spells!}</p> // maybe use a component for the lists?
                    <p>{character?.proficiencies!}</p>
                    <p>{character?.languages!}</p>
                    <p>{character?.equipment!}</p>
                    <p>{character?.features!}</p>
                    <p>{character?.traits!}</p> */}
        </div>
    )

}