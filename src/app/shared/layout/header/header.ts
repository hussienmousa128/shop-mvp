import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
auth = inject(AuthService);
router = inject(Router)
get isLoggedIn() { return this.auth.isLoggedIn(); }

logout():void{
  this.auth.logout();
  this.router.navigate(['/login']);
}

}
