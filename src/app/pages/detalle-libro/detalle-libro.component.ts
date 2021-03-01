import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  isbn;
  libro;
  constructor(private librosService: LibrosService, private route: ActivatedRoute,
    private location: Location){ }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.params['isbn']; // Recupero parámetro isbn de la URL
    this.libro = this.librosService.obtenerLibro(this.isbn); 
  }

  volver(){
    this.location.back();
  }

}
