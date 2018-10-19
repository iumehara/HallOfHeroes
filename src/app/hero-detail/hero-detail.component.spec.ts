import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroDetailComponent} from './hero-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {HeroService} from '../hero.service';
import {of} from 'rxjs';

describe('HeroDetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockHeroService;

  beforeEach(async(() => {
    mockHeroService = jasmine.createSpyObj(['getHero']);

    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [RouterTestingModule, FormsModule],
      providers: [{provide: HeroService, useValue: mockHeroService}]
    });

    fixture = TestBed.createComponent(HeroDetailComponent);
  }));

  it('should display hero name in header', () => {
    mockHeroService.getHero.and.returnValue(of({id: 1, name: 'SpiderDude', strength: 8}));

    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading.textContent).toContain('SPIDERDUDE');
  });

  it('should display header', () => {
    mockHeroService.getHero.and.returnValue(of({id: 1, name: 'SpiderDude', strength: 8}));

    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading.textContent).toContain('SPIDERDUDE');
  });
});
