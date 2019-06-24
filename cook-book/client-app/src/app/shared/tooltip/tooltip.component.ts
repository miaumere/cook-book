import { Component, HostBinding } from '@angular/core';
import {
  animate,
  transition,
  state,
  style,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-tooltip',
  template: `
  <div appTooltip #x = tooltip >
  {{tooltipx}}
  <ng-template #tooltipTemplate>
    <div [@openClose]="x.isOpen ? 'open' : 'closed'" class="tooltip"
    [ngClass]="x.isOpen ? 'open' : 'closed'"
    (mouseenter)="x.isOpen = !x.isOpen"
    >
      <div class="tooltip__arrow"></div>
      {{message}}
    </div>
  </ng-template>
  </div>`,
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        backgroundImage: 'linear-gradient(to bottom, #cacaca 0%, white 100%)',
      })),
      state('closed', style({
        opacity: 0,
        backgroundImage: 'linear-gradient(to bottom, #cacaca 0%, white 100%)',

      })),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class TooltipComponent {
  isOpen = true;
  tooltipx = 'click!!';
  message = 'wiadomość w tooltipie';

  toggle() {
    this.isOpen = !this.isOpen;
  }

  log(tooltip: any) {
    console.warn(tooltip)
  }

  onAnimationEvent(event: AnimationEvent) {
    this.isOpen = !this.isOpen;
  }

}
