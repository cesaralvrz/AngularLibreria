import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleLibroComponent } from './pages/detalle-libro/detalle-libro.component';
import { MasVendidosComponent } from './pages/mas-vendidos/mas-vendidos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'novedades', component: NovedadesComponent},
  {path: 'masvendidos', component: MasVendidosComponent},
  {path: 'detallelibro/:isbn', component: DetalleLibroComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
