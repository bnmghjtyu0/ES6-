
//blob() 資料轉為 blob物件
let url =
  "https://images.unsplash.com/photo-1513313778780-9ae4807465f0?auto=format&fit=crop&w=634&q=80";
fetch(url)
  .then(response => {
    return response.blob();
  })
  .then(imageBlob => {
    let img = document.createElement("IMG");
    document.querySelector(".newImg").appendChild(img);
    // 將 blog 物件轉為 url
    img.src = URL.createObjectURL(imageBlob);
  });
