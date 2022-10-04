import { NONAME } from "dns";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import {
	deleteCharacter,
	getUserCharacter,
} from "../services/character.service";
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
				<div key={character._id} style={styles.charBox}>
					<button
						style={styles.character}
						onClick={() => navigate(`/character/${character?._id!}`)}
					>
						{character.characterName}
					</button>
					<button
						style={styles.button}
						onClick={() => deleteCharacter(character._id!)}
					>
						delete {character.characterName}
					</button>
				</div>
			))}
		</div>
	);
}
// styling
const styles = {
	charBox: {
		display: "flex",
		justifyContent: "center",
	},
	button: {
		margin: "10px",
	},
	character: {
		border: "0px",
		backgroundColor: "transparent",
		color: "white",
		textDecoration: "underline",
		fontSize: "22px",
		hover: "orange",
	},
} as const;
