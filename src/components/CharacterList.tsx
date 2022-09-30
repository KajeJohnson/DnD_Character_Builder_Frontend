import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { deleteCharacter, getUserCharacter } from "../services/character.service";
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
        <div key={character._id}>
          <p onClick={() => navigate(`/character/${character?._id!}`)}>{character.characterName}</p>
          <button onClick={() => deleteCharacter(character._id!)}>delete character</button>
        </div>
      ))}
    </div>
  );
}