import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  // Lo recibe de HTML de listado libro en corchetes []
  @Input() libro;
  @Output() libroComprado = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  emitirEvento(libro){
    this.libroComprado.emit(libro);
  }


}
