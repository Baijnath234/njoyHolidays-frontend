import { jwtDecode } from "jwt-decode";

interface TokenType {
  email: string;
  role: string;
  sub: string;
}

const response = await fetch("/api/login");
const data = await response.json(); // ✅ now defined

const token = data.access_token;
console.log({token});


const decoded = jwtDecode<TokenType>(token);

console.log(decoded.role);