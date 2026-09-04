import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  TypeProduitComponent } from './typeproduit.component';

describe('TypeproduitComponent', () => {
  let component: TypeProduitComponent;
  let fixture: ComponentFixture<TypeProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeProduitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
