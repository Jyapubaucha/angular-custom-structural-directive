import { Directive, TemplateRef, ViewContainerRef,Input } from "@angular/core";

@Directive({
    selector: '[appIf]'
})
export class IfDirective{
    //1. Get acccess to the DOM element which we want to add/remove
    //2. Place from where we want to add/remove DOM element

    constructor(private view: TemplateRef<any>, private template: ViewContainerRef){}

    @Input() set appIf(condition :boolean){
        if(condition){
            this.template.createEmbeddedView(this.view);
        }else{
            this.template.clear(); 
        }
    }
}