import { Component, OnInit, Output } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {
  candidatos: Array<any> = [];

  constructor(private serv: CandidatoService) { }

  getCandidatos() {
    this.serv.getListCandidatos().subscribe(candidatos => {
      console.log(candidatos);
      this.candidatos = candidatos;
      console.log(this.candidatos);
    });
  }

  @Output() candidatoSeleccionado = null
  seleccionado = false;

  seleccionarCandidato(candidatoID: any) {
    this.candidatoSeleccionado = candidatoID;
    console.log(this.candidatoSeleccionado);
    this.seleccionado = true;
  }

  ngOnInit(): void {
      this.getCandidatos();
  }
}
