import { Component } from '@angular/core';
import { MatMenuModule, MatToolbar } from '@angular/material';

@Component({
    selector: 'top-nav',
    template: `
        <mat-toolbar class="top-menu">
            <button mat-button [matMenuTriggerFor]="menu">Menu</button>
            <mat-menu #menu="matMenu" class="">
                <button mat-menu-item>test1</button>
                <button mat-menu-item>test2</button>
            </mat-menu>
        </mat-toolbar>
    `,
    styles: [ `
        .mat-toolbar-row, .mat-toolbar-single-row = {
            justify-content: flex-end;
        }
    `]
})
export class TopNavComponent {}
