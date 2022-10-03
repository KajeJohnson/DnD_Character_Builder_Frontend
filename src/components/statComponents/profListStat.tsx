import { useEffect, useState } from "react";
import { fetchProficiency } from "../../services/statPage.service";
import { Proficiency } from "../../types/characterOptions/proficiencies.types";

interface ProfProps {
  profs: Proficiency[];
}

export default function ProfListStatPage({ profs }: ProfProps) {
  const [selectedProfs, setSelectedProfs] = useState<Proficiency[]>([]);

  useEffect(() => {
    for (const prof of profs) {
      fetchProficiency(prof.index).then((prof) => {
        console.log("after .then: " + JSON.stringify(prof));
        setSelectedProfs([...selectedProfs, prof]);
      });
      // break;
    }
  }, []);

  if (selectedProfs.length > 0) {
    return (
      <div>
        <h4>Proficiencies:</h4>
        {selectedProfs.map((prof) => (
          <div key={prof.index}>
            <p>{prof.name}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
