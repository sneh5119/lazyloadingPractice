import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Moment } from "moment/moment.d";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

   country=['india','usa','canada','london'];
   val:number=1;
   val2:number=50;
   selected?:{startDate: Moment, endDate: Moment};
   phn:any;
   ratings?:number=0;
   obj:any;

   constructor(private service : NotificationsService) { }

  ngOnInit(): void {
    // this.primengConfig.ripple = true;

  }

  onSubmit(userForm: NgForm){

    if(userForm.value.namefield==="" || userForm.value.country===""||
     userForm.value.genderfield===""|| userForm.value.dateofjoining==="" ||
     userForm.value.range.startDate===null ||userForm.value.range.endDate===null
     ||userForm.value.emailfield===""|| userForm.value.phnfield===""||
      userForm.value.address===""){
      
      console.log('empty value');       
      this.service.error('Dont leave blank fields','',{timeOut:1000});

    }else{
      this.showToast();
    }

    // console.warn(userForm.value);
     
    this.obj={
      name:userForm.value.namefield,
      country:userForm.value.country,
      gender:userForm.value.genderfield,
      dateofjoining:userForm.value.dateofjoining,
      range:{
        startDate:userForm.value.range.startDate._i,
        endDate:userForm.value.range.endDate._i
      },
      email:userForm.value.emailfield,
      phonenumber:parseInt(userForm.value.phnfield),
      address:userForm.value.address,   
      ratings:userForm.value.ratings  
    }

    // console.log("range : startdate=> ", userForm.value.range.startDate._i,
    // "endate=>",userForm.value.range.endDate._i);
    // console.log("Ratings : ",userForm.value.ratings);

    this.phn=userForm.value.phnfield;
    this.ratings=userForm.value.ratings;
    console.log("json object: ",this.obj)
  }

  enterVal(val:any,time:any){
    var alpha=val.target.value;
    
    var iKeyCode = (val.which) ? val.which : val.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57) 
    &&((iKeyCode > 64 && iKeyCode < 91) || (iKeyCode > 96 && iKeyCode < 123) || 
    iKeyCode== 8 || iKeyCode == 32 || (iKeyCode >= 48 && iKeyCode<= 57))){
     
      this.service.warn('Please enter number','',{timeOut:time});

      console.log("error");
    }else if(alpha===''){
      this.service.warn('Please enter some value','',{timeOut:time});
    }
    
    console.log("no error")
   
  }

  enterEmail(val:any,time:any){
    console.log(val,time)
    if(val.includes('@')===false){
      
      this.service.error('Please correct email','title',{timeOut:time});     
    }
    // else{
    //   this.service.success('correct mail','title',{timeOut:time});
    // }
   
  }

  showToast(){
    this.service.success('You have submitted the details','',{timeOut:3000});
  }

}
