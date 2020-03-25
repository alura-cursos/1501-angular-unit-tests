import { TokenService } from "./token.service";

describe("O serviço TokenService", () => {
  it("deve ser instaciado", () => {
    const service = new TokenService();
    expect(service).toBeTruthy();
  });

  it("de guardar um token", () => {
    const token = "testetoken";
    const service = new TokenService();
    service.setToken(token);
    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toBe("testetoken");
  });
});
