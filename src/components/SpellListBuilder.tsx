import { useEffect, useState } from "react";
import { fetchSpells } from "../services/builder.service";
import { Spell } from "../types/characterOptions/spells.types";

interface Props {
    onChange: (spells: Spell[]) => void;
}

export default function SpellListBuilder ({ onChange }: Props) {
    const [spellOps, setSpellOps] = useState<Spell[]>([]);
    const [charSpells, setCharSpells] = useState<Spell[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        fetchSpells().then((spells) => {
          setSpellOps(spells);
        });
      }, []);

    function addSpell(selectedSpell: Spell) {
        const spellAlreadyChosen = charSpells.find((spell) => spell.name === selectedSpell.name);
        if (!spellAlreadyChosen) {
        setCharSpells([selectedSpell, ...charSpells]);
        };
        console.log(charSpells);
    }

    function removeSpell(name: string) {
        const index = charSpells.findIndex((spell) => spell.name === name);
        let newArray = charSpells.slice(0)
        newArray.splice(index, 1)
        setCharSpells(newArray);
        console.log(charSpells);
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
    
        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
      };

      return (
        <div>
            <h3> Spells </h3>
            <div style={styles.container} onScroll={scrollHandler}>
          {spellOps.map((spell) => (
              <div key={spell._id} style={styles.item}>

                    {spell.name}

                    <button onClick={() => addSpell(spell)}>
                        add spell
                    </button>

                    <button onClick={() => removeSpell(spell.name)}>
                        remove spell
                    </button>
            </div>
          ))}
            </div>
            <button onClick={() => {onChange(charSpells as Spell[])}}>add selected spells to character</button>
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
