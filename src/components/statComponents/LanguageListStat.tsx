import axios from "axios";
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
                  // console.log("after .then: " + JSON.stringify(lang));
                  setSelectedLangs((prev) => [...prev, lang]);
                }
                })
          )
    return () => { ignore = true }
  }, []);

  if (selectedLangs.length > 0) {
    return (
      <div>
        <h4>Languages:</h4>
        {selectedLangs.map((lang) => (
          <div key={lang.index}>
            <p>{lang.name}</p>
            <p>{lang.typical_speakers}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
