import { AuthService } from "./auth.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UserService } from "../user/user.service";
import { TestBed } from "@angular/core/testing";

describe("O serviço AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    });
    service = TestBed.get(AuthService);
  });

  it("deve ser instanciado", () => {
    expect(service).toBeTruthy();
  });
});
