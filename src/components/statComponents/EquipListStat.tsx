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
                  setSelectedEquips((prev) => [...prev, equip]);
                }
                })
          )
    return () => { ignore = true }
  },[]);

  if (selectedEquips.length > 0) {
    return (
      <div style={styles.container}>
        <h3>Equipment:</h3>
        {selectedEquips.map((equip) => (
          <div key={equip.index} style={{textAlign: 'left'}}>
            <h4>{equip.name}</h4>
            <li style={styles.info}>{equip.desc}</li>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

// styling
const styles = {
  container: {
    width: "50%",
    margin: "30px",
  },
  info: {
    marginTop: "5px"
  },
}
