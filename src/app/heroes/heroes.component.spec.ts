import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroesComponent} from './heroes.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HeroService} from '../hero.service';
import {of} from 'rxjs';

describe('HeroesComponent', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(async(() => {
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55},
    ];
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'getHero']);

    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(HeroesComponent);
  }));

  it('should display links with hero names', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();

    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links[0].textContent).toContain('SpiderDude');
    expect(links[1].textContent).toContain('Wonderful Woman');
    expect(links[2].textContent).toContain('SuperDude');
  });
});
