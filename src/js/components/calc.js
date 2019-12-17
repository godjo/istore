UIkit.util.on("#popupCredit", "show", function () {
  var myRange = document.querySelector(".calc__range");
  var calcTotal = document.querySelector(".calc__result");
  var price = document
    .getElementById("popupCredit")
    .querySelector(".calc__total-price-current").value;

  if (myRange) {
    var myValue = myRange.nextSibling.nextSibling;
    myRange.oninput = function () {
      var off =
        myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
      var px =
        (myRange.valueAsNumber - parseInt(myRange.min)) * off -
        (myValue.offsetWidth * (myRange.valueAsNumber * 100)) /
        (myRange.max - myRange.min) /
        100;

      myValue.innerHTML = myRange.value;
      myValue.style.left = px + "px";
      calcTotal.innerHTML =
        Math.ceil(
          (price * (0.016 * Math.pow(1.016, myRange.value))) /
          (Math.pow(1.016, myRange.value) - 1)
        ) + " ₽";
    };

    calcTotal.innerHTML =
      Math.ceil(
        (price * (0.016 * Math.pow(1.016, myRange.value))) /
        (Math.pow(1.016, myRange.value) - 1)
      ) + " ₽";
  }
});