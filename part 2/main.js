window.onload = function() {
  var listingElements = ["apple", "orange"];
  var storeElements = [];

  // логика JS, не связана с DOM
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }

  function deleteListingElement(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
    }
  }

  function addElementToListing() {
    var result = prompt('Введите элемент');
    if (result !== "") {
      listingElements.push(result);
    }
  }

  function sortListing(){
    listingElements.sort();
  }

  function sortStore(){
    storeElements.sort();
  }

  function renameListingElement(element){
    var elementPosition = listingElements.indexOf(element);
    var result = prompt('Введите новое имя элемента');
    if (elementPosition > -1) {
      listingElements[elementPosition] = result;
    }
  }

  function renameStoreElement(element){
    var elementPosition = storeElements.indexOf(element);
    var result = prompt('Введите новое имя элемента');
    if (elementPosition > -1) {
      storeElements[elementPosition] = result;
    }
  }

  // updateUI берет данные из массивов и занимается вставкой
  function updateUI() {
    var storeSelect = document.querySelector(".store-select");
    var listingSelect = document.querySelector(".listing-select");
    storeSelect.innerHTML = "";
    listingSelect.innerHTML = "";
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  // регистрируем события
  var addButtonStore = document.querySelector("#add-button-store");
  var addButtonListing = document.querySelector("#add-button-listing");
  var deleteButtonListing = document.querySelector("#delete-button-listing");
  var addElementButtonListing = document.querySelector("#add-elemetn-listing-button");
  var sortListingButton = document.querySelector("#sort-listing-button");
  var sortStoreButton = document.querySelector("#sort-store-button");
  var renameListingButton = document.querySelector("#rename-listing-button");
  var renameStoreButton = document.querySelector("#rename-store-button");

  addButtonStore.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };

  addButtonListing.onclick = function() {
    var selectedOption = document.querySelector(".store-select option:checked");
    addToListingElements(selectedOption.innerText);
    updateUI();
  };

  deleteButtonListing.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    deleteListingElement(selectedOption.innerText);
    updateUI();
  };
  addElementButtonListing.onclick = function() {
    addElementToListing();
    updateUI();
  };
  sortListingButton.onclick = function() {
    sortListing();
    updateUI();
  }
  sortStoreButton.onclick = function() {
    sortStore();
    updateUI();
  }
  renameListingButton.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    renameListingElement(selectedOption.innerText);
    updateUI();
  }
  renameStoreButton.onclick = function() {
    var selectedOption = document.querySelector(".store-select option:checked");
    renameStoreElement(selectedOption.innerText);
    updateUI();
  }
};