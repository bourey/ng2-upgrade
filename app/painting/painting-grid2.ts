import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Painting } from '../services/painting';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';


@Component({
    selector: 'painting-grid',
    templateUrl: 'app/painting/painting-grid2.html',
})
export class PaintingGridComponent implements OnInit {
    @Input('paintings') paintings: Painting[];
    layout: Painting[][];

    ngOnInit() {
        this.layout = [[], [], []];
        this.paintings.forEach(function(painting, i) {
            this.layout[i % 3].push(painting);
        }, this);
    }
}


@NgModule({
    declarations: [PaintingGridComponent],
    imports: [CommonModule, MdButtonModule, MdCardModule],
    exports: [PaintingGridComponent]
})
export class PaintingGridModule { }
