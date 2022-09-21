import { useEffect, useState } from "react";
import { getSpells } from "../services/spell.service";

export default function SpellListBuilder () {
    const [spells, setSpells] = useState([]);

    useEffect(() => {
        getSpells().then((spell) => {
          setSpells(spells);
        });
      }, []);

      return (
        <div></div>
        // some sort of checklist that allows users to just check off their spells and that adds them to their characters? and again, rules are expected to be known by users because theres too many for us to properly code in the time alloted
        // do similar components for proficiencies, languages, equipment, features, traits
      )

}