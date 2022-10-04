import { useEffect, useState } from "react";
import { fetchLanguage } from "../../services/statPage.service";
import { Language } from "../../types/characterOptions/languages.types";

interface LangProps {
  langs: Language[];
}

export default function LangListStatPage({ langs }: LangProps) {
  const [selectedLangs, setSelectedLangs] = useState<Language[]>([]);

  useEffect(() => {
    let ignore = false;
    langs.forEach(lang =>
      fetchLanguage(lang.index)
      .then((lang) => {
          if(!ignore){
                  setSelectedLangs((prev) => [...prev, lang]);
                }
                })
          )
    return () => { ignore = true }
  }, []);

  if (selectedLangs.length > 0) {
    return (
      <div style={styles.container}>
        <h3>Languages:</h3>
        {selectedLangs.map((lang) => (
          <div key={lang.index} style={{textAlign: 'left'}}>
            <h4>{lang.name}</h4>
            <li style={styles.info}>typical speakers: {lang.typical_speakers}</li>
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