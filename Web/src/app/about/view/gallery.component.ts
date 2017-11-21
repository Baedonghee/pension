import { Component, Input } from '@angular/core';

@Component({
	selector: 'gallery',
 	templateUrl: './gallery.component.html',
 	styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {

	@Input() datasource;
	selectedImage;

	setSelectedImage(image) {
		this.selectedImage = image;
	}
}