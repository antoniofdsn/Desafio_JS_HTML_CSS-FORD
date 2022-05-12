//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
  constructor(image, title, url) {
    this._image = image;
    this._title = title;
    this._url = url;
  }

  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next(arr, Carousel._sequence); //start
        Carousel._interval = setInterval(function () {
          if (Carousel._sequence < 2) {
            Carousel._sequence++;
            Carousel.Next(arr, Carousel._sequence);
          } else {
            Carousel._sequence = -1;
          }
        }, 5000);
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }
  static Next(arr, sequence) {
    var carousel = document.getElementById("carousel");
    var carouselTitle = document.getElementById("carousel-title");
    var carouselUrl = document.getElementById("carousel-anchor");
    carousel.style.backgroundImage = "url(img/" + arr[sequence]._image + ")";
    carouselTitle.textContent = arr[sequence]._title;
    carouselUrl.href = arr[sequence]._url;
  }
}
