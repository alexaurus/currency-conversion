import { Component } from '@angular/core';
import { ConversionService } from './conversion-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'currency-conversion';
  
  constructor(){}

  ngOnInit(){
    const  fifty_euro = new ConversionService(50,'Euro');

    //log 
     console.log(fifty_euro.getAmountAndCurrecy());

     //convet to USD
     console.log(fifty_euro.convertTo('USD'));

     const  twenty_dollars = new ConversionService(20,'USD');


     let amount1 = fifty_euro.convertTo('USD');
    let amount2 = twenty_dollars.getAmountAndCurrecy().amount;
    if(amount2 == undefined){
      amount2 = 0;
    }

    // sum up
    let sumAmount = amount1*1 + amount2*1;
    console.log(sumAmount);

    //difference 

    let diffAmount = amount1*1 - amount2*1;
    console.log(diffAmount);

    //multiply 

    let mulAmount = amount2*3;
    console.log(mulAmount);


    //comprarisions
    if(twenty_dollars.getAmountAndCurrecy().amount == new ConversionService(20,'USD').getAmountAndCurrecy().amount){
      console.log(true);
    }
    else{
      console.log(false);
    }

    if(twenty_dollars.getAmountAndCurrecy().amount == new ConversionService(30,'USD').getAmountAndCurrecy().amount){
      console.log(true);
    }
    else{
      console.log(false);
    }

    if(twenty_dollars.getAmountAndCurrecy().amount > new ConversionService(5,'USD').getAmountAndCurrecy().amount){
      console.log(true);
    }
    else{
      console.log(false);
    }

    if(twenty_dollars.getAmountAndCurrecy().amount < new ConversionService(30,'USD').getAmountAndCurrecy().amount){
      console.log(true);
    }
    else{
      console.log(false);
    }

    if(twenty_dollars.getAmountAndCurrecy().amount < new ConversionService(20,'Euro').convertTo('USD')){
      console.log(true);
    }
    else{
      console.log(false);
    }

  }

}


