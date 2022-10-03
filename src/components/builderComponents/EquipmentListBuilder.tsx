import { useEffect, useState } from "react";
import { fetchEquipments } from "../../services/builderComponents.service";
import { EquipmentType } from "../../types/characterOptions/equipment.types";

interface Props {
  onChange: (equipments: EquipmentType[]) => void;
}

export default function EquipmentListBuilder({ onChange }: Props) {
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
    const equipAlreadyChosen = charEquips.find(
      (equipment) => equipment.name === selectedEquipment.name
    );
    if (!equipAlreadyChosen) {
      console.log("arrayb4", charEquips);
      setCharEquips([selectedEquipment, ...charEquips]);

      console.log("addequip", selectedEquipment);
      console.log("equiparray", charEquips);
      console.log("selected index", selectedEquipment.index);
      console.log("equip index");
    }
  }

  //   function addEquip(selectedEquipment: EquipmentType) {
  //     const equipAlreadyChosen = charEquips.find(
  //       (equipment) => equipment.name === selectedEquipment.name
  //     );
  //     if (!equipAlreadyChosen) {
  //       console.log("arrayb4", charEquips);
  //       setCharEquips([selectedEquipment, ...charEquips]);

  //       console.log("addequip", selectedEquipment);
  //       console.log("equiparray", charEquips);
  //       console.log("selected index", selectedEquipment.index);
  //       console.log("equip index");
  //     }
  //   }

  //item isn't being added property, only adding first clicked item when second item is click, but only displaying first item
  //it's logging the correct thing clicked, but sets the array to empty

  //not displaying on stat page - showing only one thing clicked (last in array which is first clicked)-if you're in the inspector in the stat page for the selected character, you can see the array correctly in the console.
  //is not having initial array part of it? display is deffo an issue

  function removeEquip(name: string) {
    const index = charEquips.findIndex((equipment) => equipment.name === name);
    let newArray = charEquips.slice(0);
    newArray.splice(index, 1);
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

            <button onClick={() => addEquip(equipment)} type="button">
              add equipment
            </button>

            <button onClick={() => removeEquip(equipment.name)} type="button">
              remove equipment
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          onChange(charEquips as EquipmentType[]);
        }}
        type="button"
      >
        add selected equipment to character
      </button>
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
  item: {
    margin: "20px 25px",
    padding: "30px 20px",
    boxShadow: "0 2px 4px #999",
    fontSize: "18px",
    textAlign: "center",
  },
} as const;
