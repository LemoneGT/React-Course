const getImage = async() =>{

    try {

        const apiKey = "Xou37CIb6A71QCzCjnvpSP8aSogYfyuZ";
        // await use to complete the response to continue executing the code
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        console.error(error)
    }

    
}

// // to know promise
// console.log(getImage())

// its the same to only know after to complete the promise
getImage();