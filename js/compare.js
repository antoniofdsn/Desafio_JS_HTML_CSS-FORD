//car
let carArr = [];

class Car {
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image
  ) {
    this.nome = nome;
    this.preco = preco;
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.image = image;
  }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nome === carClass.nome) return i;
  }
  return -1;
}

function SetCarToCompare(el, carClass) {
  if (carClass instanceof Car) {
    if (el.checked) {
      addCar(carArr, carClass);
    } else {
      deleteCar(carArr, carClass);
    }
  } else {
    throw "You need set a Car Class";
  }
}

function addCar(carArr, carClass) {
  position = GetCarArrPosition(carArr, carClass);
  if (position === -1 && carArr.length < 2) {
    return carArr.push(carClass);
  } else {
    alert("Selecione somente 2 carros para efetuar a comparação");
    location.reload();
  }
}

function deleteCar(carArr, carClass) {
  position = GetCarArrPosition(carArr, carClass);
  if (position !== -1) {
    return carArr.splice(position, 1);
  } else {
    carArr.shift();
  }
}

function ShowCompare() {
  if (carArr.length < 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");
    return;
  }

  UpdateCompareTable(carArr);
  document.getElementById("compare").style.display = "block";
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable(carArr) {
  for (let i = 0; i < carArr.length; i++) {
    var image = document.querySelector("#compare_image_" + i);
    var nome = document.querySelector("#compare_modelo_" + i);
    var alturaCacamba = document.querySelector("#compare_alturacacamba_" + i);
    var alturaVeiculo = document.querySelector("#compare_alturaveiculo_" + i);
    var alturaSolo = document.querySelector("#compare_alturasolo_" + i);
    var capacidadeCarga = document.querySelector(
      "#compare_capacidadecarga_" + i
    );
    var motor = document.querySelector("#compare_motor_" + i);
    var potencia = document.querySelector("#compare_potencia_" + i);
    var volumeCacamba = document.querySelector("#compare_volumecacamba_" + i);
    var roda = document.querySelector("#compare_roda_" + i);
    var preco = document.querySelector("#compare_preco_" + i);

    image.src = carArr[i].image;
    nome.textContent = carArr[i].nome;
    alturaCacamba.textContent = carArr[i].alturaCacamba;
    alturaVeiculo.textContent = carArr[i].alturaVeiculo;
    alturaSolo.textContent = carArr[i].alturaSolo;
    capacidadeCarga.textContent = carArr[i].capacidadeCarga;
    motor.textContent = carArr[i].motor;
    potencia.textContent = carArr[i].potencia;
    volumeCacamba.textContent = carArr[i].volumeCacamba;
    roda.textContent = carArr[i].roda;
    preco.textContent = carArr[i].preco;
  }
}
