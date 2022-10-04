import { useEffect, useState } from "react";
import { fetchTrait } from "../../services/statPage.service";
import { Trait } from "../../types/characterOptions/traits.types";

interface TraitProps {
  traits: Trait[];
}

export default function TraitListStatPage({ traits }: TraitProps) {
  const [selectedTraits, setSelectedTraits] = useState<Trait[]>([]);

  useEffect(() => {
    let ignore = false;
    traits.forEach((trait) =>
      fetchTrait(trait.index).then((trait) => {
        if (!ignore) {
          // console.log("after .then: " + JSON.stringify(equip));
          setSelectedTraits((prev) => [...prev, trait]);
        }
      })
    );
    return () => {
      ignore = true;
    };
  }, []);

  if (selectedTraits.length > 0) {
    return (
      <div style={styles.container}>
        <h3>Traits:</h3>
        {selectedTraits.map((trait) => (
          <div key={trait.index} style={{textAlign: 'left'}}>
            <h4>{trait.name}</h4>
            <li style={styles.info}>{trait.desc}</li>
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