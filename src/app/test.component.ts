import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `
    <div class="p-4">
      <h1 class="text-2xl font-bold">Test Component</h1>
      <p class="mt-2">This is a test component to verify our setup.</p>
    </div>
  `,
  styles: [],
})
export class TestComponent {
  constructor() {
    console.log('Test component initialized');
  }
}
