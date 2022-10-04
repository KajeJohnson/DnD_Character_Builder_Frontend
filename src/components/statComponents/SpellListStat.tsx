import { useEffect, useState } from "react";
import { fetchSpell } from "../../services/statPage.service";
import { Spell } from "../../types/characterOptions/spells.types";

interface SpellProps {
  spells: Spell[];
}

export default function SpellListStatPage({ spells }: SpellProps) {
  const [selectedSpells, setSelectedSpells] = useState<Spell[]>([]);

  useEffect(() => {
    let ignore = false;
    spells.forEach((spell) =>
      fetchSpell(spell.index).then((spell) => {
        if (!ignore) {
          setSelectedSpells((prev) => [...prev, spell]);
        }
      })
    );
    return () => {
      ignore = true;
    };
  }, []);

  if (selectedSpells.length > 0) {
    return (
      <div  style={styles.container}>
        <h3>Spells:</h3>
        {selectedSpells.map((spell) => (
          <div key={spell.index} style={{textAlign: 'left'}}>
            <h4>{spell.name}</h4>
            <li style={styles.info}>{spell.desc}</li>
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
    margin: "30px"
  },
  info: {
    marginTop: "5px"
  },
}