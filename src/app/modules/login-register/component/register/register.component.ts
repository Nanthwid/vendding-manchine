import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, Message, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  value?:string


  msgs: Message[] = [];

  userform!: FormGroup<any>;

  submitted?: boolean;

  genders: any[] = [];
  items: MenuItem[] | undefined;
  
  description?: string;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.userform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      gender: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.items = [
      {
        label: "Loign",
        icon: "pi pi-fw pi-file"
      },
      {
        label: "Register",
        icon: "pi pi-fw pi-file"
      },
    ]
     ///////////////
    this.genders = [];
    this.genders.push({label: 'Select Gender', value: ''});
    this.genders.push({label: 'Male', value: 'Male'});
    this.genders.push({label: 'Female', value: 'Female'});
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
  }

  get diagnostic() { return JSON.stringify(this.userform?.value); }

}