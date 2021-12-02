import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';
import { NgForm } from '@angular/forms';
import { Parking } from 'src/app/models/parking';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
})
export class ParkingComponent implements OnInit {

  constructor(public parkingService: ParkingService) { }

  ngOnInit(): void {
    this.getParking();
  }

  getParking() {
    this.parkingService.getParking().subscribe(
    res => {
      this.parkingService.parking = res;
    },
    err => console.error(err)
    )
  }

  addParking(form: NgForm) {
    if (confirm("Confirma Guardar")) {
    this.parkingService.createParking(form.value).subscribe(
      res => {
        this.getParking();
        form.reset();
      },
      err => console.error(err)
    )
  }
  }

  editParking() {
    if (confirm("Confirma terminar servicio")) {
    }
    // parking.duracion=(parking.salida-parking.entrada)*1e-3/60;
    // if (parking.tipo=="carro"){
    //   parking.tarifa=tarifa_carro;
    // }else{
    //   parking.tarifa=tarifa_moto;
    // }
    // parking.total=parking.duracion*parking.tarifa;
    // parking.vigilante=user.name;
  }

  deleteParking() {
    if (confirm("Confirma eliminar servicio")) {
    }
  }
  // deleteParking(_id: string) {
  //   if (confirm("Confirma eliminar servicio")) {
  //     this.parkingService.deleteParking(_id).subscribe(
  //       (res) => console.log(res),
  //       (err) => console.error(err)
  //     );
  //   }
  // }


}
