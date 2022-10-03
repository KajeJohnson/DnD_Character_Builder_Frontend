import { useEffect, useState } from "react";
import { fetchFeature } from "../../services/statPage.service";
import { Feature } from "../../types/characterOptions/features.types";

interface FeatProps {
  feats: Feature[];
}

export default function FeatListStatPage({ feats }: FeatProps) {
  const [selectedFeats, setSelectedFeats] = useState<Feature[]>([]);

  useEffect(() => {
    for (const feat of feats) {
      fetchFeature(feat.index).then((feat) => {
        console.log("after .then: " + JSON.stringify(feat));
        setSelectedFeats([...selectedFeats, feat]);
      });
      // break;
    }
  }, []);

  if (selectedFeats.length > 0) {
    return (
      <div>
        <h4>Features:</h4>
        {feats.map((feat) => (
          <div key={feat.index}>
            <p>{feat.name}</p>
            <p>{feat.desc}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
