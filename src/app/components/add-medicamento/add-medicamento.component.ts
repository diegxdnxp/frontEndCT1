import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento.model';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private medicamentoService: MedicamentoService) { }

Medicamento : Medicamento = {



}

saveMedicamento(){
this.medicamentoService.create(this.Medicamento).subscribe(

Response => {
  console.log(Response);
  alert(Response.mensaje);
},
error => {
  console.log(error);
},
  );

}



  ngOnInit(): void {
  }

}
