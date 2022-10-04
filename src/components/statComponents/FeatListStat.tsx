import { useEffect, useState } from "react";
import { fetchFeature } from "../../services/statPage.service";
import { Feature } from "../../types/characterOptions/features.types";

interface FeatProps {
  feats: Feature[];
}

export default function FeatListStatPage({ feats }: FeatProps) {
  const [selectedFeats, setSelectedFeats] = useState<Feature[]>([]);

  useEffect(() => {
    let ignore = false;
    feats.forEach((feat) =>
      fetchFeature(feat.index)
      .then((feat) => {
          if(!ignore){
                  // console.log("after .then: " + JSON.stringify(feat));
                  setSelectedFeats((prev) => [...prev, feat]);
                }
                })
          )
    return () => { ignore = true }
  }, []);

  if (selectedFeats.length > 0) {
    return (
      <div style={styles.container}>
        <h3>Features:</h3>
        {feats.map((feat) => (
          <div key={feat.index} style={{textAlign: 'left'}}>
            <h4>{feat.name}</h4>
            {/* <li>{feat.prerequisites}</li> */}
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
}