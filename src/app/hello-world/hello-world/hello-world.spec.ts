import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HelloWorldComponent],
    }).compileComponents();
  });

  it('should have h3 tag', () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hello world');
  });
});
