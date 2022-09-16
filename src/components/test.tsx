import axios from "axios";
import { useEffect, useState } from "react";

export type Race = {
    index: string;
    name: string;
    url: string; 
    speed?: number;
    ability_bonuses?: [];
    alignment?: string;
    age?: string;
    size?: string;
    size_description?: string;
    starting_proficiencies?: string;
    languages?: [];
    language_desc?: string;
    traits?: [];
    subraces?: [];
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

export function fetchRace(race: Race) {
    return axios
      .get<Race>(
        `https://www.dnd5eapi.co/api/races/${race.name}`
      )
      .then((response) => response.data);
}

interface RaceProps {
    item: Race;
}

export function RaceDetails ({item}: RaceProps) {
    const [race, setRace] = useState<Race>();

    useEffect(() => {
        fetchRace(item).then((raceItem) => {
            console.log(raceItem);
            setRace(raceItem);
        });
    })

    return (
        <div style={{border: '2px solid #000'}}>
            <h1>{race?.name}</h1>
            <p>{race?.alignment}</p>
            <p>{race?.speed}</p>
            <p>{race?.ability_bonuses}</p>
            <p>{race?.alignment}</p>
            <p>{race?.age}</p>
            <p>{race?.size}</p>
            <p>{race?.size_description}</p>
            <p>{race?.starting_proficiencies}</p>
            <p>{race?.languages}</p>
            <p>{race?.language_desc}</p>
            <p>{race?.traits}</p>
            <p>{race?.subraces}</p>
        </div>
    )
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
          <RaceDetails item={race} />
        ))}
      </div>
    )
}