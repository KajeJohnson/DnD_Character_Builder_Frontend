import { useEffect, useState } from "react";
import { fetchEquipment } from "../../services/statPage.service";
import { EquipmentType } from "../../types/characterOptions/equipment.types";

interface EquipProps {
  equips: EquipmentType[];
}

export default function EquipListStatPage({ equips }: EquipProps) {
  const [selectedEquips, setSelectedEquips] = useState<EquipmentType[]>([]);

  useEffect(() => {
    let ignore = false;
    equips.forEach(equip =>
      fetchEquipment(equip.index)
      .then((equip) => {
          if(!ignore){
                  // console.log("after .then: " + JSON.stringify(equip));
                  setSelectedEquips((prev) => [...prev, equip]);
                }
                })
          )
    return () => { ignore = true }
  },[]);

  if (selectedEquips.length > 0) {
    return (
      <div>
        <h4>Equipment:</h4>
        {selectedEquips.map((equip) => (
          <div key={equip.index}>
            <p>{equip.name}</p>
            <p>{equip.desc}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
