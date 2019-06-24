import {
  Input, Renderer2, HostListener, Directive, ElementRef,
  TemplateRef, ViewContainerRef, ContentChild
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef) { }

  isOpen = false;

  @Input() parametroPlantilla: TemplateRef<any>;

  @ContentChild('tooltipTemplate', { static: true }) private tooltipTemplateRef: TemplateRef<object>;

  @HostListener('mouseenter') onMouseEnter(): void {
    const view = this.viewContainerRef.createEmbeddedView(this.tooltipTemplateRef);
    view.rootNodes.forEach(node =>
      this.renderer.appendChild(this.elementRef.nativeElement, node));
    this.isOpen = true;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.viewContainerRef) {
      this.isOpen = false;
    }
  }
}
