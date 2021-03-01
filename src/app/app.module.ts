import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoLibrosComponent } from './componentes/listado-libros/listado-libros.component';
import { DetalleLibroComponent } from './pages/detalle-libro/detalle-libro.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { MasVendidosComponent } from './pages/mas-vendidos/mas-vendidos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoLibrosComponent,
    DetalleLibroComponent,
    PrincipalComponent,
    NovedadesComponent,
    MasVendidosComponent,
    NotFoundComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
