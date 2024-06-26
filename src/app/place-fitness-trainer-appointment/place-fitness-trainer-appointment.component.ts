import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import {  FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from '@angular/forms';
import { UserService } from '../_services';

export class Fitness {
  constructor(
    public inr: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  

  fitnessForm: FormGroup;
  
  constructor(private _fb:FormBuilder,private _userSVC:UserService) { }
  

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.fitnessForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      phonenumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      streetaddress: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      country: ['',Validators.required],
      pincode: ['',Validators.required],
      trainerpreference: [''], // Initial value can be set here if needed
      physiotherapist: [''],   // Initial value can be set here if needed
      package: [''],           // Initial value can be set here if needed
      weeks: ['',Validators.required],           // Initial value can be set here if needed
      inr: ['',Validators.required]           // Initial value can be set here if needed
    });
  }

  onSubmit() {
    if (this.fitnessForm.valid) {
      console.log('Form is valid. Submitting the form data.');
      this._userSVC.postfitnessdata(this.fitnessForm.value)
        .subscribe(
          data => {
            console.log('Success!', data);
          },
          error => {
            console.error('Error!', error);
          }
        );
     
    } else {
      console.log('Form is invalid. Please fill in all required fields correctly.');
    }
  }
    
}
