import { useEffect, useState } from "react";
import { fetchEquipments } from "../../services/builderComponents.service";
import { EquipmentType } from "../../types/characterOptions/equipment.types";

interface Props {
    onChange: (equipments: EquipmentType[]) => void;
}

export default function EquipmentListBuilder ({ onChange }: Props) {
    const [equipmentOps, setEquipmentOps] = useState<EquipmentType[]>([]);
    const [charEquips, setCharEquips] = useState<EquipmentType[]>([]);
    const [progress, setProgress] = useState(0);

    // how to set the charEquips to be added to a player's character data?


    useEffect(() => {
        fetchEquipments().then((equipments) => {
          setEquipmentOps(equipments);
        });
      }, []);

    function addEquip(selectedEquipment: EquipmentType) {
        const equipAlreadyChosen = charEquips.find((equipment) => equipment.name === selectedEquipment.name);
        if (!equipAlreadyChosen) {
        setCharEquips([selectedEquipment, ...charEquips]);
        }
    }

    function removeEquip(name: string) {
        const index = charEquips.findIndex((equipment) => equipment.name === name);
        let newArray = charEquips.slice(0)
        newArray.splice(index, 1)
        setCharEquips(newArray);
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
    
        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
      };

      return (
        <div>
            <h3> Equipment </h3>
            <div style={styles.container} onScroll={scrollHandler}>
          {equipmentOps.map((equipment) => (
              <div key={equipment.index} style={styles.item}>

                    {equipment.name}

                    <button onClick={() => addEquip(equipment)} type='button'>
                        add equipment
                    </button>

                    <button onClick={() => removeEquip(equipment.name)} type='button'>
                        remove  equipment
                    </button>
            </div>
          ))}
            </div>
            <button onClick={() => {onChange(charEquips as EquipmentType[])}} type='button'>add selected equipment to character</button>
        </div>
      );
}

// Styling
const styles = {
    container: {
        width: 500,
        height: 400,
        margin: "30px auto",
        overflowY: "auto",
        overflowX: "hidden",
    },
    list: {
        width: "100%",
    },
    item: {
        margin: "20px 25px",
        padding: "30px 20px",
        boxShadow: "0 2px 4px #999",
        fontSize: "18px",
        textAlign: "center",
    },
    progressBar: {
        width: 600,
        height: 20,
        margin: "auto",
        backgroundColor: "#bbb",
    },
    progressValue: {
        height: "100%",
        backgroundColor: "blue",
    },
    text: {
        textAlign: 'center'
    }
} as const;
