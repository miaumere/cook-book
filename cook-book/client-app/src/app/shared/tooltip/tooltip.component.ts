import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `  <div appTooltip>
  TESTSETESTSTSTSTET
  <ng-template #tooltipTemplate>
    <div class="tooltip">
      Wiadomość w tooltipie
    </div>
  </ng-template>
</div>`,
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
