import { getUserCharacters } from "../services/character.service";
import { Character } from "../types/character.types";
import { User } from "../types/user.types";

interface Props {
  characters: Character[];
}

export default function CharacterList({ characters }: Props) {
  return (
    <div>
      {characters.map((character) => (
        <div>{character.characterName}</div>
      ))}
    </div>
  );
}
