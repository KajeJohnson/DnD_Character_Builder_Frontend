import {
  authenticateWithGoogle,
  loginWithGoogle,
  // loginWithGoogleMobile,
  signUpWithGoogle,
  // signUpWithGoogleMobile,
} from "../services/auth.service";
import gobbyboiii from "../img/gobbyboiii.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { getUser } from "../services/user.service";
import { sign } from "crypto";
import SignupPage from "./SignupPage";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await loginWithGoogle();
    navigate("/homepage");
  };

  const handleSignup = async () => {
    const user = await signUpWithGoogle();
    navigate("/homepage");
  };

  // const handleMobileLogin = async () => {
  // 	const user = await loginWithGoogleMobile();
  // 	navigate("/homepage");
  // };

  // const handleMobileSignup = async () => {
  // 	const user = await signUpWithGoogleMobile();
  // 	navigate("/homepage");
  // };

  return (
    <div>
      <div
        style={{
          height: "100vh",
          margin: "0",
          overflowY: "auto",
          overflowX: "hidden",
          backgroundImage: `url(${gobbyboiii})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "0",
          color: "#fff",
          backgroundPosition: "center",
          position: "fixed",
          top: "0",
          left: "0",
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <div style={{ color: "white" }}>
          <div>
            <h1 style={{ paddingTop: "50px", margin: "0", fontSize: "80px" }}>
              Dice & Details
            </h1>
          </div>
          <div style={{ paddingTop: 40, fontSize: "20px" }}>
            <h2>Greetings, Traveler! </h2>
            <h3>Come spend some time with familiar faces </h3>
            <h3>Or dare to make a new acquaintance </h3>
            {/* <Link to={"/homepage"}> */}
            <div
              style={{
                display: "flex",
                //   alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                onClick={handleLogin}
                className="bg-yellow-800 rounded hidden md:inline-block"
              >
                Hello friend! Log in here.
              </button>
              <div style={{ padding: 10 }}></div>
              <button
                onClick={handleSignup}
                className="bg-yellow-800 rounded hidden md:inline-block"
              >
                Welcome stranger! Sign up here.
              </button>
            </div>
          </div>
          {/* <button
						onClick={handleMobileLogin}
						className="bg-yellow-800 rounded sm:inline-block md:hidden"
					>
						Hello friend
					</button>
					<button
						onClick={handleMobileSignup}
						className="bg-yellow-800 rounded sm:inline-block md:hidden"
					> */}
          {/* Welcome stranger
					</button> */}
          {/* </Link> */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
            }}
          >
            <h4>~ ~ ~ This is a character builder is made for D&D5e ~ ~ ~</h4>
          </div>
          {/* <Link to={"/signup"}>
						<button>Sign up</button>
					</Link> */}
        </div>
      </div>
    </div>
  );
}