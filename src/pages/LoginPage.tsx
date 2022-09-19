import { loginWithGoogle } from "../services/auth.service";

export default function LoginPage() {
  const handleLogin = async () => {
    const user = await loginWithGoogle();
    console.log(user);
  };

  return (
    <div>
      <h1>Welcome, Traveler! </h1>
      <h3>
        C'mon in and get cozy with folk ye know. Or ye can make some new
        friends!
      </h3>
      <button onClick={handleLogin}>Log in with google</button>
      <p>This character builder is made for D&D5e</p>
    </div>
  );
}
