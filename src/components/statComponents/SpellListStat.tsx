import { useEffect, useState } from "react";
import { fetchSpell } from "../../services/statPage.service";
import { Spell } from "../../types/characterOptions/spells.types";

interface SpellProps {
    spells: Spell[];
}

export default function SpellListStatPage ({ spells }: SpellProps) {
    const [selectedSpells, setSelectedSpells] = useState<Spell[]>([]);

            useEffect(() => {
                for (const spell of spells) {
                    fetchSpell(spell.index).then((spell) => {
                        // console.log('after .then: ' + JSON.stringify(spell));
                        setSelectedSpells([...selectedSpells, spell]);
                    });
                    // break;
                }
            }, []);

    if (selectedSpells.length > 0) {
        return (
            <div>
                <h4>Spells:</h4>
                {selectedSpells.map((spell) => 
                    <div key={spell.index}>
                    <p>{spell.name}</p>
                    <p>{spell.desc}</p>
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}