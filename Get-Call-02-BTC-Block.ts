
const btcFields = [
  "id",
  "height",
  "version",
  "timestamp",
  "tx_count",
  "size",
  "weight",
  "merkle_root",
  "previousblockhash",
  "mediantime",
  "nonce",
  "bits",
  "difficulty"
  ];

async function getApiRequestBTC_Block(blockID: string) {
    const url = `https://blockstream.info/api/block/${blockID}` ; //  <your-api-endpoint>`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'text/javascript; charset=utf-8'
      }
    });
    const data = await response.json();
    return data;
  }

  getApiRequestBTC_Block('0000000000000000000028f749b7b00840f16f9179d4398b57560a4938aa6159').then((data) => {
      const btcBlockJson = JSON.parse(JSON.stringify(data));

      btcFields.forEach((field) => {  
        console.log(`${field}: ${btcBlockJson[field]}`);
      });
    
    }).catch((error) => { 
      console.error('Error:', error);
    });