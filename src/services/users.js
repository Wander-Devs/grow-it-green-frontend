import http from "./http";
export function getAllUsers() {
  return http.get("/users");
}
