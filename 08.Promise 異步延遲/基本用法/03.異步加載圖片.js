let url = 'https://media-01.creema.net/user/1473254/exhibits/3010527/0_bf7cf57c4007c0936e6555950987b97a_583x585.jpg'

function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error("Could not load image at " + url));
    };

    image.src = url;
  });
}

loadImageAsync(url).then((value) => {
  console.log(value);
});