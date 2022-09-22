import { loginWithGoogle, signUpWithGoogle } from "../services/auth.service";
import gobbyboiii from "../img/gobbyboiii.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function LoginPage() {
  var { user } = useContext(AuthContext);
  //added line 8 -KJ
  const navigate = useNavigate();

  const handleLogin = async () => {
    user = await loginWithGoogle();

    if (!user) {
      user = await signUpWithGoogle();
    }
    // const user = await signUpWithGoogle();
    // console.log(user);
    navigate("/homepage");

    // if (user) {
    // 	navigate("/homepage");
    // }
  };

  // if (user) {
  // 	navigate("/homepage");
  // }
  // if (!user) {
  // 	navigate("/signup");
  // }

  //do we need homepage here?
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${gobbyboiii})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "0",
        }}
      >
        <div style={{ color: "white" }}>
          <h1 style={{ paddingTop: "50px", margin: "0", fontSize: "40px" }}>
            Dice & Details
          </h1>
          <h2>Greetings, Traveler! </h2>
          <h3>Come spend some time with familiar faces </h3>
          <h3>Or dare to make a new acquaintance </h3>
          {/* <Link to={"/homepage"}> */}
          <button onClick={handleLogin}>Log in with google</button>
          {/* </Link> */}
          <h4>This character builder is made for D&D5e</h4>
          {/* <Link to={"/signup"}>
						<button>Sign up</button>
					</Link> */}
        </div>
      </div>
    </div>
  );
}
function signupWithGoogle() {
  throw new Error("Function not implemented.");
}
