export interface AuthStrategy {
  login: (username: string, password: string) => string;
}
