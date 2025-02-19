import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <div class="comment-section">
      <h2>Real Madrid Club de Fútbol</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
        alt="Real Madrid Logo"
        class="logo"
      />
      <p>
        El Real Madrid es uno de los clubes más exitosos en la historia del
        fútbol.
      </p>
      <ul>
        <li>🏆 14 Champions League</li>
        <li>🏆 35 Ligas de España</li>
        <li>🏆 5 Mundiales de Clubes</li>
      </ul>
    </div>
  `,
  styles: `
    .comment-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .logo {
      width: 200px;
      margin: 10px 0;
    }
  `,
})
export class CommentsComponent {}
