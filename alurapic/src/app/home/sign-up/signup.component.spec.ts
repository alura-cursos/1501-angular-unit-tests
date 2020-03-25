import { async, TestBed } from "@angular/core/testing";
import { SignUpComponent } from "./signup.component";
import { SignUpService } from "./signup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { VMessageModule } from "src/app/shared/componets/vmessage/vmessage.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

describe("O formulário SignUp", () => {
  let component: SignUpComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      providers: [SignUpService, UserNotTakenValidatorService],
      imports: [
        HttpClientTestingModule,
        VMessageModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents;
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve ser instanciado", () => {
    expect(component).toBeTruthy();
  });
});
