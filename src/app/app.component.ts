import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { CommentsComponent } from "./comments/comments.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starting';
}
