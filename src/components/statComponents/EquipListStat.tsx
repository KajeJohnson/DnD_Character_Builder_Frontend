import { useEffect, useState } from "react";
import { fetchEquipment } from "../../services/statPage.service";
import { EquipmentType } from "../../types/characterOptions/equipment.types";

interface EquipProps {
  equips: EquipmentType[];
}

export default function EquipListStatPage({ equips }: EquipProps) {
  const [selectedEquips, setSelectedEquips] = useState<EquipmentType[]>([]);

  useEffect(() => {
        equips.filter(equip =>
            fetchEquipment(equip.index)
            .then((equip) => {
                    console.log("after .then: " + JSON.stringify(equip));
                    setSelectedEquips([equip]);
                  })
            )
    // for (let i = 0; i < equips.length; i++) {
    //   fetchEquipment(equips[i].index)
    //   .then((equip) => {
    //     console.log("after .then: " + JSON.stringify(equip));
    //     setSelectedEquips([...selectedEquips, equip]);
    //   });
    //   break;
    // }
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
