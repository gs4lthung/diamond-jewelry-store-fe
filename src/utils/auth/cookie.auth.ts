import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface jwtPayload extends JwtPayload {
  userId: string;
  role: string;
}

const getAuthData = () => {
  const userId = Cookies.get("userId");
  const token = Cookies.get("token");
  const role = Cookies.get("role");
  return { userId, token, role };
};

const setAuthData = (token: string) => {
  const decodedToken = jwtDecode(token) as jwtPayload;
  Cookies.set("token", token, { expires: 1 });
  Cookies.set("userId", decodedToken.userId, { expires: 1 });
  Cookies.set("role", decodedToken.role, { expires: 1 });
};

export default { getAuthData, setAuthData };
