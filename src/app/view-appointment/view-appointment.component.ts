import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Fitness } from '../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private _userSVC:UserService) { }
  isEditing=false;
  editAppointmentForm:Fitness ={} as Fitness;
  appointments = [];

  ngOnInit() {
    this.getfitness();
    
  }

  
  getfitness() {
    this._userSVC.getfitnessdata().subscribe((data) => {
      this.appointments = data;
    });
    

    
  }

  deleteAppointment(appointment){
    console.log(appointment.id);
    this._userSVC.deletefitnessdata(appointment.id).subscribe((data) => {
      this.getfitness();
    });
  }

  editAppointment(appointment){
    this.isEditing=true;
    this._userSVC.updatefitnessdata(appointment).subscribe((data) => {
      this.getfitness();
    });
  }
  saveAppointment(){
    // this._userSVC.postfitnessdata(appointment).subscribe((data) => {
    //   this.getfitness();
    // });
    console.log(this.editAppointmentForm);
  }
  cancelEdit(){
    this.isEditing=false;
  }
}
