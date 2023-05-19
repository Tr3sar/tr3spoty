import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: "", redirectTo: "inici", pathMatch: "full"},
  {path: "inici",component: PlayerComponent},
  {path: "busqueda", component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
