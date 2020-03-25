import { AuthService } from "./auth.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

describe("O serviço AuthService", () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("deve ser instanciado", () => {
    expect(service).toBeTruthy();
  });

  it("deve autenticar o usuario", () => {
    const fakeBody = {
      id: 1,
      nome: "alvaro",
      email: "alvaro@alura.com"
    };

    service.authenticate("alvaro", "1234").subscribe(response => {
      expect(response.body).toEqual(fakeBody);
      expect(response.headers.get("x-acess-token")).toBe("tokenTest");
    });
  });
});
