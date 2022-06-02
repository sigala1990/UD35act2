import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'act2';
  input_nombre = '';
  input_email = '';
  input_mensaje = '';
  input_preguntasecreta = '';

  condicion_inicial = false;
  condicion_nombre = false;
  condicion_email = false;
  condicion_mensaje = false;
  condicion_preguntasecreta = false;

  list: any = [];

  validarNombre() {
    if (this.input_nombre === '') {
      console.log(this.input_nombre + '    nombre esta vacio');
      this.condicion_nombre = false;
    } else {
      console.log('nombre esta lleno');
      this.condicion_nombre = true;
    }
  }

  validarEmail() {
    //let regexp = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
    let regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let test = regexp.test(this.input_email);
    console.log(test + ' test');
    this.condicion_email = test;
  }

  validarMensaje() {
    if (this.input_mensaje === '') {
      console.log(this.condicion_mensaje + '    nombre esta vacio');
      this.condicion_mensaje = false;
    } else {
      console.log('nombre esta lleno');
      this.condicion_mensaje = true;
    }
  }

  validarPreguntaSecreta() {
    if (this.input_preguntasecreta === '5') {
      this.condicion_preguntasecreta = true;
    } else {
      this.condicion_preguntasecreta = false;
    }
  }

  btnSubmit() {
    this.condicion_inicial = true;
    this.validarNombre();
    this.validarEmail();
    this.validarMensaje();
    this.validarPreguntaSecreta();
    this.allOK();

    //  alert('nombre ' +this.input_nombre +', email ' +this.input_email +', mensaje ' +this.input_mensaje +', preguntasecreta ' +this.input_preguntasecreta);
  }

  allOK() {

    if (
      this.condicion_nombre &&
      this.condicion_email &&
      this.condicion_mensaje &&
      this.condicion_preguntasecreta
    ){
      let listTemp: any = [];
      listTemp = [this.input_nombre, this.input_email, this.input_mensaje];
      this.list.push(listTemp);
    }


  }
}
