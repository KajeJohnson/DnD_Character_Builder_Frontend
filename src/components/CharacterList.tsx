import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { getUserCharacter } from "../services/character.service";
import { Character } from "../types/character.types";


interface Props {
  characters: Character[];
}

export default function CharacterList({ characters }: Props) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div>
      {characters.map((character) => (
        <div>
          <p onClick={() => navigate(`/character/${character?._id!}`)}>{character.characterName}</p>
        </div>
      ))}
    </div>
  );
}