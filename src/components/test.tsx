import axios from "axios";
import { useEffect, useState } from "react";

export type Race = {
    index: string;
    name: string;
    url: string; 
}

export type Races = {
    results: Race[];
  };

export function fetchRaces() {
    return axios
      .get<Races>(
        `https://www.dnd5eapi.co/api/races`
      )
      .then((response) => response.data.results);
}


export default function TestRaceList () {
    const [races, setRaces] = useState<Race[]>([]);

    useEffect(() => {
        fetchRaces().then((races) => {
          console.log(races);
          setRaces(races);
        });
      }, []);



    return (
        <div className="MovieList">
        {races.map((race) => (
          <div>{race.name}</div>
        ))}
      </div>
    )
}