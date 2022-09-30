import axios from "axios";
import { useEffect, useState } from "react";
import { Feature } from "../../types/characterOptions/features.types";

interface FeatProps {
    feats: Feature[];
}


export default function FeatListStatPage ({ feats }: FeatProps) {
    const [selectedFeats, setSelectedFeats] = useState<Feature[]>([]);


    async function fetchFeature(featName: string) {
        const response = await axios
            .get<Feature>(`https://www.dnd5eapi.co/api/features/${featName}`)
            .then((response) => response.data);
        return response;
    }

    
            useEffect(() => {
                for (const feat of feats) {
                    fetchFeature(feat.index).then((feat) => {
                        console.log('after .then: ' + JSON.stringify(feat));
                        setSelectedFeats([...selectedFeats, feat]);
                    });
                    // break;
                }
            }, []);

    
    console.log('feats: ' + feats);
    return (
        <div>
            <h4>Features:</h4>
            {feats.map((feat) => 
                <div key={feat.index}>
                <p>{feat.name}</p>
                </div>
            )}

        </div>
    )
}