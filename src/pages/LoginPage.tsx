import { loginWithGoogle } from "../services/auth.service";

export default function LoginPage() {
	const handleLogin = async () => {
		const user = await loginWithGoogle();
		console.log(user);
	};

	return (
		<div>
			<button onClick={handleLogin}>Log in with google</button>
		</div>
	);
}
