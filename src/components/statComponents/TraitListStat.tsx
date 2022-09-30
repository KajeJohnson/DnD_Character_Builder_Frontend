import axios from "axios";
import { useEffect, useState } from "react";
import { Trait } from "../../types/characterOptions/traits.types";

interface TraitProps {
    traits: Trait[];
}


export default function TraitListStatPage ({ traits }: TraitProps) {
    const [selectedTraits, setSelectedTraits] = useState<Trait[]>([]);


    async function fetchTrait(traitName: string) {
        const response = await axios
            .get<Trait>(`https://www.dnd5eapi.co/api/traits/${traitName}`)
            .then((response) => response.data);
        return response;
    }

    
            useEffect(() => {
                for (const trait of traits) {
                    fetchTrait(trait.index).then((trait) => {
                        console.log('after .then: ' + JSON.stringify(trait));
                        setSelectedTraits([...selectedTraits, trait]);
                    });
                    // break;
                }
            }, []);

    
    console.log('traits: ' + traits);
    return (
        <div>
            <h4>Traits:</h4>
            {traits.map((trait) => 
                <div key={trait.index}>
                <p>{trait.name}</p>
                </div>
            )}
        </div>
    )
}