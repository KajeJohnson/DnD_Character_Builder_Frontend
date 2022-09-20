import { useState } from "react"
import { Character } from "../types/character.types"

export default function StatPage () {
    const [character, setCharacter] = useState<Character>();


    return (
        <div>

                    <h3>{character?.characterName}</h3>
                                
        </div>
    )

}