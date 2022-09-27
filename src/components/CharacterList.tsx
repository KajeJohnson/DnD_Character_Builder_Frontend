import { Character } from "../types/character.types";

interface Props {
  characters: Character[];
}

export default function CharacterList({ characters }: Props) {
  console.log(characters);
  return (
    <div>
      {characters.map((character) => (
        <div>{character.characterName}
        </div>
      ))}
    </div>
  );
}
