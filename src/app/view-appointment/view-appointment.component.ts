import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private _userSVC:UserService) { }

  appointments = [];

  ngOnInit() {
    this.getfitness();
    
  }
  
  getfitness() {
    this._userSVC.getfitnessdata().subscribe((data) => {
      this.appointments = data;
    });
    

    
  }

  deleteAppointment(){}

  editAppointment(){}
}
