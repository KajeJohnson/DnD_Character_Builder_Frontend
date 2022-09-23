import { useEffect, useState } from "react";
import { fetchTraits } from "../services/builder.service";
import { Trait } from "../types/characterOptions/traits.types";

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
        <div>
            <h3> Traits </h3>
            <div style={styles.container} onScroll={scrollHandler}>
          {traitOps.map((trait) => (
              <div key={trait.index} style={styles.item}>

                    {trait.name}

                    <button onClick={() => addTrait(trait)}>
                        add trait
                    </button>

                    <button onClick={() => removeTrait(trait.name)}>
                        remove  trait
                    </button>
            </div>
          ))}
            </div>
            <button onClick={() => {onChange(charTraits as Trait[])}}>add selected traits to character</button>
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