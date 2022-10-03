import { useEffect, useState } from "react";
import { fetchSpells } from "../../services/builderComponents.service";
import { Spell } from "../../types/characterOptions/spells.types";

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
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
    
        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
      };

      return (
        <form style={{margin: "20px"}}>
            <h3> Spells </h3>
            <div style={styles.container} onScroll={scrollHandler}>
          {spellOps.map((spell) => (
              <div key={spell._id} style={styles.item}>

                    {spell.name}

                    <button onClick={() => addSpell(spell)} type='button'>
                        add spell
                    </button>

                    <button onClick={() => removeSpell(spell.name)} type='button'>
                        remove spell
                    </button>
            </div>
          ))}
            </div>
            <button onClick={() => {onChange(charSpells as Spell[])}} type='button'>add selected spells to character</button>
        </form>
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
