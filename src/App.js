import './App.css';
import Datalist from './datalist';
import Navbar from '../src/Navbar';
import img1 from './image1.jpg'
import img2 from './image2.jpg'
import img3 from './image3.jpg'
import img4 from './image4.jpg'
import {chocklate} from './data';
import React from 'react';
export default class App extends React.Component{
constructor(){
  super();
  this.state = {
    chocklate : chocklate,
    cartcount : 0,
    totalprize : 0
  }
}
handleAddtocart = (e) => {
  let { chocklate, cartcount, totalprize } = this.state;
  const id = chocklate.indexOf(e);
  chocklate[id].cart = !chocklate[id].cart;
    if (chocklate[id].cart && cartcount < 10) {
      cartcount += 1;
      totalprize += Number(chocklate[id].price);
    } else if( cartcount > 0){
      cartcount -= 1;
      totalprize -= Number(chocklate[id].price);

    }

    this.setState({
      
      chocklate: chocklate,
      cartcount,
      totalprize :totalprize
    });
};
render(){
  const {chocklate , cartcount , totalprize} = this.state;
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Navbar cartcount = {cartcount} totalprize = {totalprize}/>
      </header>
      <main>
      <div className="image-container">
        <div className="image-slider">
            <img className="image" src={img1} alt="Image01"/>
            <img className="image" src={img2} alt="Image02"/>
            <img className="image" src={img3} alt="Image03"/>
            <img className="image" src={img4} alt="Image04"/>
        </div>
    </div>

        <Datalist
           chocklate={chocklate}
           handleAddtocart={this.handleAddtocart}
        />
         <footer style={{background: "black", color: "antiquewhite"}}>© 2023, Divya's Cocktails  Powered by Divya Refund policy Privacy policyTerms of service</footer>
      </main>
      
     
    </div>
    </>
  )
}
}