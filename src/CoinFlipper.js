import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "tura",
        donuyor: false,
        atis : 0,
        yaziMi : 0
    }
  }
  handleClick = () => {
    //her tıklandığında atış sayısını bir arttırdım
    this.setState({
      atis : this.state.atis+1
    });

    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState({donuyor: true});
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({
      donuyor: false,
      //yazı ve turaya karar vermek için 1 ya da 0 döndürmesi durumuna baktım
      side: (Math.round(Math.random())=== 0  ? 'yazi' : 'tura')
      }), 1000);

      if(this.state.side === 'yazi'){
        this.setState({yaziMi : this.state.yaziMi+1});
      }

  };

  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick} >At!</button>
        <p>
            Toplam 
            <strong> {this.state.atis} </strong> 
            atıştan
            <strong> {this.state.atis - this.state.yaziMi} </strong>
            ü tura
            <strong> {this.state.yaziMi} </strong>
            si yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;