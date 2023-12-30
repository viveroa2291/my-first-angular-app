import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  imports: [CommonModule]
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() btnClick = new EventEmitter()

  constructor() {

  }
  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
