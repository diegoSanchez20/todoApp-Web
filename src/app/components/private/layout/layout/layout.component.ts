import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private loginService: LoginService,
                private router: Router,
    ) {}
  
  onClick = {
    logout: async() => {
      try {
        await this.services.logout();
      } finally {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    }

  }

  services = {
    logout: () => {
      return lastValueFrom(this.loginService.logout());
    },
  }
}
