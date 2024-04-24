const apiKey = "Xou37CIb6A71QCzCjnvpSP8aSogYfyuZ";

// url to get response
const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
    .then(resp => resp.json() )
    .then( ({ data }) => { // estructurar el data ya que viene como data.data
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch( console.warn );