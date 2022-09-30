import axios from "axios";
import { useEffect, useState } from "react";
import { Proficiency } from "../../types/characterOptions/proficiencies.types";

interface ProfProps {
    profs: Proficiency[];
}


export default function ProfListStatPage ({ profs }: ProfProps) {
    const [selectedProfs, setSelectedProfs] = useState<Proficiency[]>([]);


    async function fetchProficiency(profName: string) {
        const response = await axios
            .get<Proficiency>(`https://www.dnd5eapi.co/api/proficiencies/${profName}`)
            .then((response) => response.data);
        return response;
    }

    
            useEffect(() => {
                for (const prof of profs) {
                    fetchProficiency(prof.index).then((prof) => {
                        console.log('after .then: ' + JSON.stringify(prof));
                        setSelectedProfs([...selectedProfs, prof]);
                    });
                    // break;
                }
            }, []);

    
    console.log('profs: ' + profs);
    return (
        <div>
            <h4>Proficiencies:</h4>
            {profs.map((prof) => 
                <div key={prof.index}>
                <p>{prof.name}</p>
                </div>
            )}

        </div>
    )
}