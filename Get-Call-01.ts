

async function makeApiRequest(apiKey: string) {
    const url = `https://api.hiro.so/extended` ; //  <your-api-endpoint>`;
    const response = await fetch(url, {
      headers: {
        "x-api-key": apiKey
      }
    });
    return response;
  }

  makeApiRequest('b9fc910e515d23f0b070333b9aa509e4').then((data) => {
    console.log(data);
  });