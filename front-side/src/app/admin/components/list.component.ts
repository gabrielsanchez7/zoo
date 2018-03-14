import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../models/animal.model';
import { AnimalService } from '../../services/animal.service';

@Component({
	selector: 'list-data',
	templateUrl: '../views/list-data.html',
	styleUrls: ['../admin-style.scss'],
	providers: [ AnimalService ]
})

export class ListDataComponent {
	public animals: Animal;

	constructor(
		private _animalService: AnimalService,
		private _router: Router,
		private _route: ActivatedRoute
	){
		this.getAnimals();
	}

	ngOnInit(){
	}

	getAnimals(){
		this._animalService.getAnimals().subscribe(
			response => {
				this.animals = response.animals;
			},
			error => console.log(<any>error)
		);
	}
}