import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutCommandeComponent } from './statut-commande.component';

describe('StatutCommandeComponent', () => {
  let component: StatutCommandeComponent;
  let fixture: ComponentFixture<StatutCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatutCommandeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatutCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
