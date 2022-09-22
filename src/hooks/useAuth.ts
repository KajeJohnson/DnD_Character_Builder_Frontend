import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { firebaseAuth } from "../libs/firebase";
import { getLoginUser } from "../services/auth.service";

export function useAuth() {
	const { user, setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = firebaseAuth.onAuthStateChanged(
			async (firebaseUser) => {
				if (firebaseUser && !user) {
					const user = await getLoginUser(firebaseUser.uid);
					setUser(user);
					navigate("/homepage");
				} else {
					if (!firebaseUser) {
						navigate("/");
						//changed to login from homepage -kj
					}
				}
			}
		);

		return () => unsubscribe();
	}, [navigate, setUser, user]);
	return user;
}
