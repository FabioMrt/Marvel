import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  { path: "", redirectTo: "Comics", pathMatch: "full" },
  { path: "Comics", component: ComicsComponent },
  { path: "Characters", component: CharactersComponent },
  { path: "Series", component: SeriesComponent },
  { path: "Stories", component: StoriesComponent },
  { path: "Events", component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
