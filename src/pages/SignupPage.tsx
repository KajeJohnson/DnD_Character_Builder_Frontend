import { Link, useNavigate } from "react-router-dom";
import { signUpWithGoogle } from "../services/auth.service";

export default function SignupPage() {
	const handleSignup = async () => {
		const user = await signUpWithGoogle();
		console.log(user);
	};

	return (
		<div>
			<title>Dices & Details</title>

			<button onClick={handleSignup}>Sign up with Google</button>
		</div>
	);
}
