import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import CharacterList from "../components/CharacterList";
import { AuthContext } from "../context/auth.context";
import { getUserCharacters } from "../services/character.service";
import { Character } from "../types/character.types";

export default function HomePage() {
	const characters = [
		{ _id: "test", uid: "test", email: "test", displayName: "test" },
	];
	const { user } = useContext(AuthContext);

	// const { data: characters } = useQuery(
	// 	["characters", user?._id],
	// 	async () => await getUserCharacters(user?._id as string)
	// );

	return (
		<div>
			<button>New character</button>
			{characters && <CharacterList characters={characters} />}
		</div>
	);
}
