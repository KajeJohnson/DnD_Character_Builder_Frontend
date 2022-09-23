import {
	authenticateWithGoogle,
	loginWithGoogle,
	loginWithGoogleMobile,
	signUpWithGoogle,
	signUpWithGoogleMobile,
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

	const handleMobileLogin = async () => {
		const user = await loginWithGoogleMobile();
		navigate("/homepage");
	};

	const handleMobileSignup = async () => {
		const user = await signUpWithGoogleMobile();
		navigate("/homepage");
	};

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
					<button
						onClick={handleLogin}
						className="bg-yellow-800 rounded hidden md:inline-block"
					>
						Hello friend
					</button>
					<button
						onClick={handleSignup}
						className="bg-yellow-800 rounded hidden md:inline-block"
					>
						Welcome stranger
					</button>
					<button
						onClick={handleMobileLogin}
						className="bg-yellow-800 rounded sm:inline-block md:hidden"
					>
						Hello friend
					</button>
					<button
						onClick={handleMobileSignup}
						className="bg-yellow-800 rounded sm:inline-block md:hidden"
					>
						Welcome stranger
					</button>
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
