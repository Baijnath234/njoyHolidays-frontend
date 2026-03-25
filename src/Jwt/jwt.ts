import jwtDecode from "jwt-decode";

interface TokenType {
  email: string;
  role: string;
  sub: string;
}

const token = data.access_token;

const decoded: TokenType = jwtDecode(token);

console.log(decoded.role);