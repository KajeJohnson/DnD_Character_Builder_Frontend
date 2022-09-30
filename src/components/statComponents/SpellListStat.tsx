import axios from "axios";
import { useEffect, useState } from "react";
import { Spell } from "../../types/characterOptions/spells.types";

interface SpellProps {
    spells: Spell[];
}


export default function SpellListStatPage ({ spells }: SpellProps) {
    const [selectedSpells, setSelectedSpells] = useState<Spell[]>([]);


    async function fetchSpell(spellName: string) {
        const response = await axios
            .get<Spell>(`https://www.dnd5eapi.co/api/spells/${spellName}`)
            .then((response) => response.data);
        return response;
    }

    
            useEffect(() => {
                for (const spell of spells) {
                    fetchSpell(spell.index).then((spell) => {
                        console.log('after .then: ' + JSON.stringify(spell));
                        setSelectedSpells([...selectedSpells, spell]);
                    });
                    // break;
                }
            }, []);

    
    console.log('spells: ' + spells);
    return (
        <div>
            <h4>Spells:</h4>
            {spells.map((spell) => 
                <div key={spell.index}>
                <p>{spell.name}</p>
                </div>
            )}

        </div>
    )
}