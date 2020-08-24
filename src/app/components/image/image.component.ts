import { Component, OnInit, Input } from '@angular/core';
import { CreateImageQuery, GetImagesQuery, DeleteImageQuery, SetImagePrincipaleQuery } from '../../graphql/queries'
import { Image } from '../../models/image'
import { Vehicule } from '../../models/vehicule'
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { TransporteurStoreService } from 'src/app/services/transporteur-store.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  private imageSrc: string = ''
  private apollo: Apollo
  private images: Image[]
  private vehicule: Vehicule
  public _vehiculeId: number
  private store: TransporteurStoreService
  
  constructor(apollo: Apollo, store: TransporteurStoreService) { 
    this.apollo = apollo
    this.store = store
  }

  public get vehiculeId(): number {
      return this._vehiculeId
  }

  @Input()
  public set vehiculeId(val: number) {
    this._vehiculeId = val
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/
    var reader = new FileReader()
    if (!file.type.match(pattern)) {
      alert('invalid format')
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file)
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result
    console.log(this.imageSrc)

    this.createImage(this.imageSrc)


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
      console.log('vehicule created');
    });

  }
  
  getImages(): void {

    this.apollo.watchQuery({query: GetImagesQuery, variables: {vehiculeId: this.vehiculeId} }).valueChanges.subscribe( res => {
      console.log(res);
      this.images = res['data']['getImages'];
    })
  }

  setImagePricipale(image: Image): void {
      console.log(`vehicule id: ${this.vehiculeId}`)
      this.apollo.mutate({
          mutation: SetImagePrincipaleQuery, 
          variables: { vehiculeId: this._vehiculeId, imageId: image.id} }).subscribe(() => {
            console.log('set image principale: success');
      })

      this.store.vehicule.image = image;

  }

  ngOnInit(): void {

    this.getImages()
  }

}
