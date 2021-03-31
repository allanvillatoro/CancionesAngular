import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';
import {CancionesService} from './canciones.service';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HijoComponent } from './hijo/hijo.component';

const rutas : Routes = [
  { path: '', component: HomeComponent},
  { path: 'canciones', component: CancionesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    HomeComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(
      rutas,
      {
        useHash: false,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  providers: [CancionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
