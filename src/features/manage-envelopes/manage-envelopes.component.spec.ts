<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEnvelopesComponent } from './manage-envelopes.component';

describe('ManageEnvelopesComponent', () => {
  let component: ManageEnvelopesComponent;
  let fixture: ComponentFixture<ManageEnvelopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageEnvelopesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEnvelopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEnvelopesComponent } from './manage-envelopes.component';

describe('ManageEnvelopesComponent', () => {
  let component: ManageEnvelopesComponent;
  let fixture: ComponentFixture<ManageEnvelopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageEnvelopesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEnvelopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> d0a8cfe (test 1)
