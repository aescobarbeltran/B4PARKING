import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';
import { NgForm } from '@angular/forms';
import { Parking } from 'src/app/models/parking';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {

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

  editParking(parking: Parking) {
    this.parkingService.selectedParking = parking;
  }

  deleteParking(_id: string) {
    this.parkingService.deleteParking(_id).subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
  }


}
