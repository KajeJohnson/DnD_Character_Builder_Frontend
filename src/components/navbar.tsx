import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service";

export default function NavBar() {
  //   const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
  };

  return (
    <div style={styles.navBar}>
      <div style={{ padding: 10 }}>
        <Link to={"/homepage"}>
          <button>Yer Homepage</button>
        </Link>
      </div>

      <div style={{ padding: 10 }}>
        <Link to={"/"}>
          <button onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </div>
  );
}

//styling
const styles = {
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
} as const;
