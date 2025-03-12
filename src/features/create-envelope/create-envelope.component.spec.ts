<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnvelopeComponent } from './create-envelope.component';

describe('CreateEnvelopeComponent', () => {
  let component: CreateEnvelopeComponent;
  let fixture: ComponentFixture<CreateEnvelopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEnvelopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnvelopeComponent } from './create-envelope.component';

describe('CreateEnvelopeComponent', () => {
  let component: CreateEnvelopeComponent;
  let fixture: ComponentFixture<CreateEnvelopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEnvelopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> d0a8cfe (test 1)
