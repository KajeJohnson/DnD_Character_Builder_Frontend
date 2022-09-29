import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharacterList from "../components/CharacterList";
import { AuthContext } from "../context/auth.context";
import { logout } from "../services/auth.service";
import inside from "../img/inside.png";
import { getUserCharacters } from "../services/character.service";
import { Character } from "../types/character.types";

export default function HomePage() {
  const { user } = useContext(AuthContext);
  const [userCharacters, setUserCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getUserCharacters(user?._id as string).then((characters) =>
      setUserCharacters(characters)
    );
  }, [user]);

  // console.log('in useeffect' + userCharacters)

  //use effect call service function set state
  // console.log("user", user);

  const handleLogout = async () => {
    logout();
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${inside})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "0",
          padding: "0",
          color: "#fff",
        }}
      >
        <div style={{ paddingTop: 40 }}>
          <div style={{ padding: 10 }}>
            <Link to={"/createCharacter"}>
              <button>New character</button>
              {/* {characters && <CharacterList characters={characters} />} */}
            </Link>
          </div>
          <CharacterList characters={userCharacters} />
          {/* {userCharacters && <CharacterList characters={userCharacters} />} */}

          {/* below div is for testing - delete later -kj */}
          <div style={{ padding: 10 }}>
            <Link to={"/"}>
              <button onClick={handleLogout}>Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
