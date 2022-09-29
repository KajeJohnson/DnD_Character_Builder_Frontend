import { Spell } from "../types/characterOptions/spells.types"

interface SpellProps {
    spells: Spell[];
}

export default function SpellListStatForPage ({ spells }: SpellProps) {

    console.log('spells: ' + spells)
    return (
        <div>

            {spells.map((spell) => 
                <p>{spell.name}</p>)
            }

        </div>
    )
}