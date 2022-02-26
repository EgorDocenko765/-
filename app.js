const tariff = Array.from(document.querySelectorAll(".tariff"));
const option = Array.from(document.querySelectorAll(".option"));
const total = document.querySelector("#total");
const orderTariff = document.querySelector("#order__tariff");
const orderTime = document.querySelector("#order__time");




const time = document.querySelector("#time");
const volume = document.querySelector("#voulum");
const orderOption = document.querySelector("#order__option");




tariff.forEach((el) => {
    el.addEventListener("click", tariffUpdate);
});

time.addEventListener("input", timeUpdate);

option.forEach(el => {
    el.addEventListener("change", optionUpdate);


});

function tariffUpdate(e) {
    currentSet.tariff = e.target.id;
    updatePrice();
    orderUpdate();
    

}

function timeUpdate(e) {
    currentSet.time = time.value;
    volume.value = currentSet.time;
    updatePrice();
    orderUpdate();
}

function optionUpdate(e) {
    e.stopPropagation();
    if (e.target.checked) {
        currentSet.option.push(e.target.id);
    } else {
        let index = currentSet.option.indexOf(e.target.id);
        currentSet.option.splice(index.option);

    }
    updatePrice();
    orderUpdate();
}

function updatePrice() {
    let tariffPrice = currentSet.getTariffPrice();
    let optionPrice = currentSet.getOptionPrice();
    let totalPrice = currentSet.time * tariffPrice + optionPrice;
    total.value = totalPrice;
}

function orderUpdate() {
    if (currentSet.time < 5) {
        orderTime.value = currentSet.time + "часа";
    } else {
        orderTime.value = currentSet.time + "часов";
    }
    
    orderTariff.value = currentSet.getTariffPrice() + "\u{20BD}/час";
    orderOption.value = currentSet.getOptionPrice() + "\u{20BD}";
}

const priceInfo =  {
    tariff: {
        economy: 500,
        comfrot: 800,
        business: 1100,
        premium: 1400,
    },
    option: {
        option1: 1000,
        option2: 1500,
        option3: 1500,
        option4: 2000,
    },
};

let currentSet = {
    tariff: "comfrot",
    time: 2,
    option: ["option1", "option2"],
    getTariffPrice() {
        return priceInfo.tariff[this.tariff];


    },
    getOptionPrice() {
        let optionPrice = 0;
        if (!this.option.length == 0) {
            this.option.forEach((el) => {
                optionPrice +=priceInfo.option[el];

        });


    }
    return optionPrice;
  },
};

















