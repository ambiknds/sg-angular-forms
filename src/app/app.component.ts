import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productName = new FormControl('', [Validators.required, Validators.minLength(5)])
  productPrice = new FormControl('', [Validators.required, Validators.min(10)])
  productCategory = new FormControl('', [Validators.required])

  productForm = new FormGroup({
    productName: this.productName,
    productPrice: this.productPrice,
    productCategory: this.productCategory
  })

  submitForm(){
    event?.preventDefault();
    if(this.productForm.valid == true){
      // console.log(this.productName, this.productPrice, this.productCategory)
      console.log(this.productForm.value)
    }    
  }
}
