import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { CandidatoService } from './service/candidato.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CandidatosListComponent,
    CandidatosDetailComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  providers:[CandidatoService],
  exports: [
    CandidatosListComponent
  ]

})
export class CandidatosModule { }
