import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEulerPage } from './project-euler-page';

describe('ProjectEulerPage', () => {
  let component: ProjectEulerPage;
  let fixture: ComponentFixture<ProjectEulerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectEulerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEulerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
