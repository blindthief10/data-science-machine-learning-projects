import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div class="jumbotron">
        <h1>Welcome to our app!</h1>
      </div>
      <p>This is {{person.name}} and he is {{person.age}} years old!</p>
  `
})

export class AppComponent {
  person = {
    name: 'Kostas',
    age: 28,
    isMarried: false
  }
}
