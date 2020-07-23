import { Component, OnInit } from '@angular/core';
import { CreateImageQuery, GetImagesQuery, DeleteImageQuery } from '../../graphql/queries'
import { Image } from '../../models/image'
import { Vehicule } from '../../models/vehicule'
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  private imageSrc: string = '';
  private apollo: Apollo;
  private images: Image[];
  
  constructor(apollo: Apollo) { 
    this.apollo = apollo;
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)

    this.createImage(this.imageSrc);


  }

  deleteImage(image: Image) {
    this.apollo.mutate({mutation: DeleteImageQuery, variables: {id: image.id}}).subscribe(a => {
      console.log('image deleted');
      console.log(a);
      let idx = this.images.indexOf(image);
      console.log(`index of image found is ${idx}`)
      this.images.splice(idx, 1);
    })

  }

  createImage(data: string) {
    console.log('creating vehicule...');

    let image = new Image();
    image.id = 0;
    image.data = data
    image.vehicule = new Vehicule();
    image.vehicule.id = 5;
    
    this.apollo.mutate({
      mutation: CreateImageQuery,
      variables: { imageInput: image}
    }).subscribe((a) => {
      console.log(a);
      let i = a['data']['createImage'] as Image
      console.log(i);
      this.images.push(i)
      // let i = new Image();
      // i.id = a.id;
      // i.data = a.data;
      // i.vehicule = new Vehicule();
      // // i.vehicule.id = a.vehicule.id;

      // this.images.push(i);
      console.log('vehicule created');
    });

  }
  
  getImages(): void {

    this.apollo.watchQuery({query: GetImagesQuery}).valueChanges.subscribe( res => {
      console.log(res);
      this.images = res['data']['getImages'];
    })
  }

  ngOnInit(): void {

    this.getImages()
  }

}
