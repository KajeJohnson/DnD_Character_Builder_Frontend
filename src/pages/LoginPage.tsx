import { loginWithGoogle } from "../services/auth.service";
import gobbyboiii from "../img/gobbyboiii.png";

export default function LoginPage() {
  const handleLogin = async () => {
    const user = await loginWithGoogle();
    console.log(user);
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

          <button onClick={handleLogin}>Log in with google</button>
          <h4>This character builder is made for D&D5e</h4>
        </div>
      </div>
    </div>
  );
}
