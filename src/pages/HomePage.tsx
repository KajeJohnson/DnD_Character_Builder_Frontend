import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CharacterList from "../components/CharacterList";
import { AuthContext } from "../context/auth.context";
import { getUserCharacters } from "../services/character.service";
import { Character } from "../types/character.types";

export default function HomePage() {
	const { user } = useContext(AuthContext);
	// const [opened, handlers] = useDisclosure(false);
	//do we need character in place of user here?

	const characters = [
		{ _id: "test", uid: "test", email: "test", displayName: "test" },
	];

	//added async
	//   const characters = useQuery(
	//     [{ _id: "test", uid: "test", email: "test", displayName: "test" }],
	//     async () => await getUserCharacters(user?._id as string)
	//   );

	// const { data: characters } = useQuery(
	// 	["characters", user?._id],
	// 	async () => await getUserCharacters(user?._id as string)
	// );

	console.log("user", user);

	return (
		<div>
			<button>New character</button>
			{characters && <CharacterList characters={characters} />}
			{/* below div is for testing - delete later -kj */}
			<div>
				<Link to={"/signup"}>
					<button>Sign up</button>
				</Link>
			</div>
		</div>
	);
}
