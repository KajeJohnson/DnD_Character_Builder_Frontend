import axios from "axios";
import { useEffect, useState } from "react";
import { Language } from "../../types/characterOptions/languages.types";

interface LangProps {
    langs: Language[];
}


export default function LangListStatPage ({ langs }: LangProps) {
    const [selectedLangs, setSelectedLangs] = useState<Language[]>([]);


    async function fetchLanguage(langName: string) {
        const response = await axios
            .get<Language>(`https://www.dnd5eapi.co/api/languages/${langName}`)
            .then((response) => response.data);
        return response;
    }

    
            useEffect(() => {
                for (const lang of langs) {
                    fetchLanguage(lang.index).then((lang) => {
                        console.log('after .then: ' + JSON.stringify(lang));
                        setSelectedLangs([...selectedLangs, lang]);
                    });
                    // break;
                }
            }, []);

    
    console.log('langs: ' + langs);
    return (
        <div>
            <h4>Languages:</h4>
            {langs.map((lang) => 
                <div key={lang.index}>
                <p>{lang.name}</p>
                </div>
            )}

        </div>
    )
}