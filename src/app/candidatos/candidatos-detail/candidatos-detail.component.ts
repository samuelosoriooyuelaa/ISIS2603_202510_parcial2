import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Candidato } from '../model/candidato';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent {
  @Input() candidato!: Candidato;
  @Output() back = new EventEmitter<void>();
}
