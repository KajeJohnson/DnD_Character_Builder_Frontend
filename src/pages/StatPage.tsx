import { useState } from "react"
import { Character } from "../types/character.types"
import { Class } from "../types/characterOptions/classes.types";

export default function StatPage () {
    const [character, setCharacter] = useState<Character>();


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
                    <p>{character?.attacks}</p>
                    {/* <p>{character?.spells.map()}</p>
                    <p>{character?.proficiencies}</p>
                    <p>{character?.languages}</p>
                    <p>{character?.equipment}</p>
                    <p>{character?.features}</p>
                    <p>{character?.traits}</p> */}
        </div>
    )

}