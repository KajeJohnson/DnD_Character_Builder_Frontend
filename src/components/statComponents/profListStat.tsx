import { useEffect, useState } from "react";
import { fetchProficiency } from "../../services/statPage.service";
import { Proficiency } from "../../types/characterOptions/proficiencies.types";

interface ProfProps {
  profs: Proficiency[];
}

export default function ProfListStatPage({ profs }: ProfProps) {
  const [selectedProfs, setSelectedProfs] = useState<Proficiency[]>([]);

  useEffect(() => {
    let ignore = false;
    profs.forEach(prof =>
      fetchProficiency(prof.index)
      .then((prof) => {
          if(!ignore){
                  // console.log("after .then: " + JSON.stringify(prof));
                  setSelectedProfs((prev) => [...prev, prof]);
                }
                })
          )
    return () => { ignore = true }
  }, []);

  if (selectedProfs.length > 0) {
    return (
      <div style={styles.container}>
        <h3>Proficiencies:</h3>
        {selectedProfs.map((prof) => (
          <div key={prof.index}>
            <h4 style={{textAlign: 'left'}}>{prof.name}</h4>
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
  }
}