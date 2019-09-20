import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUserService } from '../api.users.service';
import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  user: any

  update: Boolean = true

  name: String

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ApiUserService) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.paramMap.get('id')

    if (userId == '0') {
      this.update = false
    } else {
      this.service.getUserById(userId).subscribe(res => {
        console.log(res)
        this.user = res

        this.name = this.user.name
      })
    }
  }

  save(form: NgForm) {
    console.log(form.value)

    if (this.update) {
      this.updateUser(form)
    } else {
      this.createUser(form)
    }
  }

  updateUser(form: NgForm) {
    this.service.updateUser(form.value.id, form.value.name).subscribe(res => {
      console.log(res)
      this.router.navigate(['/users'])
    })
  }

  createUser(form: NgForm) {
    this.service.createUser(form.value.name).subscribe(res => {
      console.log(res)
      this.router.navigate(['/users'])
    })
  }


}
