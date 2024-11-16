import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface jwtPayload extends JwtPayload {
  userId: string;
}

const getAuthData = () => {
  const userId = Cookies.get("userId");
  const token = Cookies.get("token");
  return { userId, token };
};

const decodeToken = (token: string) => {
  const decodedToken = jwtDecode(token) as jwtPayload;
  Cookies.set("token", token, { expires: 1 });
  Cookies.set("userId", decodedToken.userId, { expires: 1 });
};

export default { getAuthData, decodeToken };
