import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDirectory } from './link-directory';

describe('LinkDirectory', () => {
  let component: LinkDirectory;
  let fixture: ComponentFixture<LinkDirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkDirectory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkDirectory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
