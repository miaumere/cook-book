import { Component } from '@angular/core';
import {
  animate,
  transition,
  state,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-tooltip',
  template: `
  <div appTooltip>
  {{tooltip}}
  <ng-template #tooltipTemplate>
    <div class="tooltip">
      <div class="tooltip__arrow"></div>
      {{message}}
    </div>
  </ng-template>
  </div>`,
})
export class TooltipComponent {

  tooltip = 'click!!';
  message = 'wiadomość w tooltipie';

}
