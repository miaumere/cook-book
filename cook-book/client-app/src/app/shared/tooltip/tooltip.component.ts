import { Component, OnInit } from '@angular/core';

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
  </div>
`,
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  tooltip = 'click!!';
  message = 'wiadomość w tooltipie';

}
