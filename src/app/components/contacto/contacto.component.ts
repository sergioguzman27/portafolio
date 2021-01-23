import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from '../../../assets/js/smtp.js';
import { faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const { form: { value } } = form;
    console.log("form ", value);

    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'sergiohumberto27@gmail.com',
      Password : '037382D6205CC5E79B87202143F25A003341',
      To : 'sergiohumberto27@gmail.com',
      From : 'sergiohumberto27@gmail.com',
      Subject : value.motivo,
      Body : `
      ${value.nombre} ${value.apellido} quiere contactarse contigo.\n
      Correo: ${value.correo}\n\n
      Mensaje: \n\n
      ${value.mensaje}
      `
    }).then( message => {
      Swal.fire(
        'Excelente!',
        'Me has enviado un mensaje, me contactaré contigo tan pronto como pueda.',
        'success'
      )
      form.resetForm(); 
    });
  }

}
