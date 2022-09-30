import axios from "axios";
import { useEffect, useState } from "react";
import { EquipmentType } from "../../types/characterOptions/equipment.types";

interface EquipProps {
    equips: EquipmentType[];
}


export default function EquipListStatPage ({ equips }: EquipProps) {
    const [selectedEquips, setSelectedEquips] = useState<EquipmentType[]>([]);


    async function fetchEquipment(equipName: string) {
        const response = await axios
            .get<EquipmentType>(`https://www.dnd5eapi.co/api/equipment/${equipName}`)
            .then((response) => response.data);
        return response;
    }

    
            useEffect(() => {
                for (const equip of equips) {
                    fetchEquipment(equip.index).then((equip) => {
                        console.log('after .then: ' + JSON.stringify(equip));
                        setSelectedEquips([...selectedEquips, equip]);
                    });
                    // break;
                }
            }, []);

    
    console.log('equips: ' + equips);
    return (
        <div>
            <h4>Equipment:</h4>
            {equips.map((equip) => 
                <div key={equip.index}>
                <p>{equip.name}</p>
                </div>
            )}

        </div>
    )
}