import { useEffect, useState } from "react";
import { fetchLanguages } from "../services/builder.service";
import { Language } from "../types/characterOptions/languages.types";

interface Props {
    onChange: (languages: Language[]) => void;
}

export default function LanguageListBuilder ({ onChange }: Props) {
    const [langOps, setLangOps] = useState<Language[]>([]);
    const [charLangs, setCharLangs] = useState<Language[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        fetchLanguages().then((languages) => {
          setLangOps(languages);
        });
      }, []);

    function addLang(selectedLang: Language) {
        const langAlreadyChosen = charLangs.find((language) => language.name === selectedLang.name);
        if (!langAlreadyChosen) {
        setCharLangs([selectedLang, ...charLangs]);
        }
    }

    function removeLang(name: string) {
        const index = charLangs.findIndex((language) => language.name === name);
        let newArray = charLangs.slice(0)
        newArray.splice(index, 1)
        setCharLangs(newArray);
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
    
        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
      };

      return (
        <div>
            <h3> Languages </h3>
            <div style={styles.container} onScroll={scrollHandler}>
          {langOps.map((language) => (
              <div key={language.index} style={styles.item}>

                    {language.name}

                    <button onClick={() => addLang(language)}>
                        add language
                    </button>

                    <button onClick={() => removeLang(language.name)}>
                        remove  language
                    </button>
            </div>
          ))}
            </div>
            <button onClick={() => {onChange(charLangs as Language[])}}>add selected languages to character</button>
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