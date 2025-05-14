import { Component, OnInit, Input } from '@angular/core';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  @Input() candID: any;
  candidato: any;

  constructor(private serv: CandidatoService) {}

  getInfo() {
    this.candidato = this.serv.getDetailCandidato(this.candidato);
  }

  ngOnInit() {}
}
