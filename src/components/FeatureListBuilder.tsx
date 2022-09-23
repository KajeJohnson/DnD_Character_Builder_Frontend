import { useEffect, useState } from "react";
import { fetchFeatures } from "../services/builder.service";
import { Feature } from "../types/characterOptions/features.types";

interface Props {
    onChange: (features: Feature[]) => void;
}

export default function FeatureListBuilder ({ onChange }: Props) {
    const [featOps, setFeatOps] = useState<Feature[]>([]);
    const [charFeats, setCharFeats] = useState<Feature[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        fetchFeatures().then((features) => {
          setFeatOps(features);
        });
      }, []);

    function addFeat(selectedFeat: Feature) {
        const featAlreadyChosen = charFeats.find((feature) => feature.name === selectedFeat.name);
        if (!featAlreadyChosen) {
        setCharFeats([selectedFeat, ...charFeats]);
        }
    }

    function removeFeat(name: string) {
        const index = charFeats.findIndex((feature) => feature.name === name);
        let newArray = charFeats.slice(0)
        newArray.splice(index, 1)
        setCharFeats(newArray);
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
    
        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
      };

      return (
        <div>
            <h3> Features </h3>
            <div style={styles.container} onScroll={scrollHandler}>
          {featOps.map((feature) => (
              <div key={feature.index} style={styles.item}>

                    {feature.name}

                    <button onClick={() => addFeat(feature)} type='button'>
                        add feature
                    </button>

                    <button onClick={() => removeFeat(feature.name)} type='button'>
                        remove  feature
                    </button>
            </div>
          ))}
            </div>
            <button onClick={() => {onChange(charFeats as Feature[])}} type='button'>add selected features to character</button>
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
