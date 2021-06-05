import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeEditorComponent } from './ge-editor.component';

describe('GeEditorComponent', () => {
  let component: GeEditorComponent;
  let fixture: ComponentFixture<GeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
