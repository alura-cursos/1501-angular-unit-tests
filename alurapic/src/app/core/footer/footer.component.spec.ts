import { FooterComponent } from "./footer.component";
import { TestBed } from "@angular/core/testing";

describe("O componente Footer", () => {
  let component: FooterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve ser instanciado", () => {
    expect(component).toBeTruthy();
  });
});
