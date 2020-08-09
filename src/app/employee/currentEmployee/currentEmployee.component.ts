import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-currentEmployee',
  templateUrl: './currentEmployee.component.html'
})

export class CurrentEmployeeComponent implements OnInit{
  parameter;
  
  constructor(private activatedRoute: ActivatedRoute, private fb:FormBuilder){

  }
  status = [
    {
      data: '1st Calss', reason: 'good'
    },
    {
      data: 'pass', reason: 'average'
    },
    {
      data: 'fail', reason: 'bad'
    }
  ]
  employeeForm = this.fb.group({
    employeeName:['',Validators.required],
    employeeAge:[''],
    employeeDOB:['',[Validators.required,this.dobValidation.bind(this)]],
    employeeStatus:[''],
    employeeRemark:['']
  })

  ngOnInit(){
    this.parameter= this.activatedRoute.snapshot.params['id'];
    this.employeeForm.controls['employeeStatus'].setValue('pass');
  }
  onSubmit(){
    console.log(this.employeeForm.value);
  }

  dobValidation(formControl: FormControl):{[s:string]:boolean}{
    console.log('formControl',formControl.value);
    console.log('check meter',new Date());
    let todaydate = new Date();
    let fromdate = new Date(formControl.value)
    if(fromdate>todaydate){
      return {'invalid':true};
    } else
    return null;
  }
}