import { useEffect, useState } from "react";
import { fetchProficiencies } from "../services/builder.service";
import { Proficiency } from "../types/characterOptions/proficiencies.types";

interface Props {
    onChange: (proficiencies: Proficiency[]) => void;
}

export default function ProficiencyListBuilder ({ onChange }: Props) {
    const [profOps, setProfOps] = useState<Proficiency[]>([]);
    const [charProfs, setCharProfs] = useState<Proficiency[]>([]);
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        fetchProficiencies().then((proficiencies) => {
          setProfOps(proficiencies);
        });
      }, []);

    function addProf(selectedProf: Proficiency) {
        const profAlreadyChosen = charProfs.find((prof) => prof.name === selectedProf.name);
        if (!profAlreadyChosen) {
        setCharProfs([selectedProf, ...charProfs]);
        }
    }

    function removeProf(name: string) {
        const index = charProfs.findIndex((prof) => prof.name === name);
        let newArray = charProfs.slice(0)
        newArray.splice(index, 1)
        setCharProfs(newArray);
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
    
        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
      };

      return (
        <div>
            <h3> Proficiencies </h3>
            <div style={styles.container} onScroll={scrollHandler}>
          {profOps.map((proficiency) => (
              <div key={proficiency.index} style={styles.item}>

                    {proficiency.name}

                    <button onClick={() => addProf(proficiency)} type='button'>
                        add proficiency
                    </button>

                    <button onClick={() => removeProf(proficiency.name)} type='button'>
                        remove  proficiency
                    </button>
            </div>
          ))}
            </div>
            <button onClick={() => {onChange(charProfs as Proficiency[])}} type='button'>add selected proficiencies to character</button>
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
