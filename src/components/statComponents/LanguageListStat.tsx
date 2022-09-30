import axios from "axios";
import { useEffect, useState } from "react";
import { fetchLanguage } from "../../services/statPage.service";
import { Language } from "../../types/characterOptions/languages.types";

interface LangProps {
    langs: Language[];
}

export default function LangListStatPage ({ langs }: LangProps) {
    const [selectedLangs, setSelectedLangs] = useState<Language[]>([]);

            useEffect(() => {
                for (const lang of langs) {
                    fetchLanguage(lang.index).then((lang) => {
                        // console.log('after .then: ' + JSON.stringify(lang));
                        setSelectedLangs([...selectedLangs, lang]);
                    });
                    // break;
                }
            }, []);

    if (selectedLangs.length > 0) {
        return (
            <div>
                <h4>Languages:</h4>
                {selectedLangs.map((lang) => 
                    <div key={lang.index}>
                    <p>{lang.name}</p>
                    <p>{lang.typical_speakers}</p>
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div>
                <p>no languages</p>
            </div>
        )
    }
}