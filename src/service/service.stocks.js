//import axios from 'axios'


export async function fetchStocks(symbol) {

    fetch(`http://ws-api.iextrading.com/1.0/tops?symbols=${symbol}`)
      .then(response => {
          console.log(response);
          response.json()
      }).catch( error =>{
        throw error;
      })
      //.then(data => this.setState({ data }));

    // try{        
    //     let stocks = await axios.get(`http://ws-api.iextrading.com/1.0/tops?symbols=${symbol}`, 
    //         {
    //             method: 'GET',
    //             mode: 'no-cors',
    //             headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json'
    //             }
    //         });
    //     console.log(stocks);
    //     return stocks;

    // } catch (error) {
    //     throw error;
    // }
}
