import { Link, useNavigate } from "react-router-dom";
import { signUpWithGoogle } from "../services/auth.service";
import { loginWithGoogle } from "../services/auth.service";
// import { Anchor, Paper, Title, Text, Container, Button } from "@mantine/core";
import gobbyboiii from "../img/gobbyboiii.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function SignupPage() {
	//   const handleSignup = async () => {
	// const { setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	// const user = await signUpWithGoogle();
	// console.log(user);

	const handleSignup = async () => {
		const user = await signUpWithGoogle();
		// setUser(user);
		navigate("/homepage");
	};
	return (
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
			<div>
				<title>Dice & Details</title>

				<div>
					<div style={{ color: "white" }}>
						<h1 style={{ paddingTop: "50px", margin: "0" }}>
							Welcome, Traveler!{" "}
						</h1>
						<h3>Care te start a new adventure?</h3>

						<button onClick={handleSignup}>Sign up with Google</button>
						<h3>
							Already have an account?{" "}
							{/* <Anchor
                component={Link}
                to="/login"
                className="font-medium !no-underline"
              >
                Login
              </Anchor> */}
						</h3>
						<h4>This character builder is made for D&D5e</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
