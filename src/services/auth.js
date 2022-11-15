import http from "./http";
export function login(form) {
  return http.post("/users/login", form);
}
