import { useEffect, useState } from "react";
import { fetchTraits } from "../../services/builderComponents.service";
import { Trait } from "../../types/characterOptions/traits.types";

interface Props {
    onChange: (traits: Trait[]) => void;
}

export default function TraitListBuilder ({ onChange }: Props) {
    const [traitOps, setTraitOps] = useState<Trait[]>([]);
    const [charTraits, setCharTraits] = useState<Trait[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        fetchTraits().then((traits) => {
          setTraitOps(traits);
        });
      }, []);

    function addTrait(selectedTrait: Trait) {
        const traitAlreadyChosen = charTraits.find((trait) => trait.name === selectedTrait.name);
        if (!traitAlreadyChosen) {
        setCharTraits([selectedTrait, ...charTraits]);
        }
    }

    function removeTrait(name: string) {
        const index = charTraits.findIndex((trait) => trait.name === name);
        let newArray = charTraits.slice(0)
        newArray.splice(index, 1)
        setCharTraits(newArray);
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
    
        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
      };

      return (
        <div style={{margin: "20px"}}>
            <h3> Traits </h3>
            <div style={styles.container} onScroll={scrollHandler}>
          {traitOps.map((trait) => (
              <div key={trait.index} style={styles.item}>

                    {trait.name}

                    <button onClick={() => addTrait(trait)} type='button'>
                        add trait
                    </button>

                    <button onClick={() => removeTrait(trait.name)} type='button'>
                        remove  trait
                    </button>
            </div>
          ))}
            </div>
            <button onClick={() => {onChange(charTraits as Trait[])}} type='button'>add selected traits to character</button>
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
      backgroundColor: "#1a1918",
    },
    item: {
      margin: "20px 25px",
      padding: "30px 20px",
      boxShadow: "0 2px 4px #999",
      fontSize: "18px",
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#000",
    },
  } as const;