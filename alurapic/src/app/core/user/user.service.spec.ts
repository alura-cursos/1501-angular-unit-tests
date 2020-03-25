import { UserService } from "./user.service";
import { TokenService } from "../token/token.service";

describe("O serviço UserService", () => {
  let service: UserService;

  beforeEach(() => {
    const tokenService = new TokenService();
    service = new UserService(tokenService);
  });

  it("deve ser instanciado", () => {
    expect(service).toBeTruthy();
  });

  it("deve, através de um token, configurar as informações do usuário", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4MDk0NDcxOCwiZXhwIjoxNTgxMDMxMTE4fQ.irVPxUq3o6ntq08_XHs9tuDQbuOrL4Z6cCkonc1exqc";
    service.setToken(token);
    expect(service.isLogged()).toBeTruthy();
    expect(service.getUserName()).toBe("flavio");
  });
});
