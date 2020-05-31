import { Component } from '@angular/core';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html'
})
export class PageComponent{
    title: string = 'templateTitle'
    content: string = 'templateContent'
}