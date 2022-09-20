import { loginWithGoogle } from "../services/auth.service";
import gobbyboiii from "../img/gobbyboiii.png";

export default function LoginPage() {
  const handleLogin = async () => {
    const user = await loginWithGoogle();
    console.log(user);
  };

  return (
    <div>
      {/* <img src={gobbyboiii} /> */}
      {/* <div style={{ backgroundImage: `url(${gobbyboiii})` }}> */}
      <div
        style={{
          backgroundImage: `url(${gobbyboiii})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "0",
          //     top: "0",
          //     left: "0",
          //   minWidth: "100%",
          //   minHeight: "100%",
          //   width: "100%",
          //   height: "100%",
        }}
      >
        <div style={{ color: "white" }}>
          <h1 style={{ paddingTop: "50px", margin: "0" }}>
            Welcome, Traveler!{" "}
          </h1>
          <h3>C'mon in and hang</h3>

          <button onClick={handleLogin}>Log in with google</button>
          <h4>This character builder is made for D&D5e</h4>
        </div>
      </div>
    </div>
  );
}
