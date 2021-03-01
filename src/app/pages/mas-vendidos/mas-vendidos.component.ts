import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-mas-vendidos',
  templateUrl: './mas-vendidos.component.html',
  styleUrls: ['./mas-vendidos.component.css']
})
export class MasVendidosComponent implements OnInit {

  masVendidos;
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.masVendidos = this.librosService.obtenerMasVendidos();
    console.log(this.masVendidos);
  }

}
