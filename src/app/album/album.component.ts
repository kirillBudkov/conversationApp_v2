import { Component, OnInit, Input, Output } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.sass'],
    providers: [ServicesService]
})

export class AlbumComponent implements OnInit  {
    photos;	
    id;
    view1=false;
    title;
    constructor(private ss: ServicesService,
                private router: ActivatedRoute) { }

    ngOnInit() {
        this.getSome()
    }
    getSome(){
        this.router.params.subscribe( params => {
            this.id = params['albumId']       
            this.ss.getPhotos( this.id )
            .then( res => {
                this.photos = res.json();
            });
        });
        this.router.queryParams.subscribe(params => {
        this.title=params['title'];
        }) 
    }    
}
