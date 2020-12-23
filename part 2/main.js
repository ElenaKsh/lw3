window.onload = function() {
  var listingElements = ["apple", "orange"];
  var storeElements = [];

  // логика JS, не связана с DOM
  function addToSetOfElements(deleteElement, addElement, element) {
    var elementPosition = deleteElement.indexOf(element);
    if (elementPosition > -1) {
      addElement.push(element);
      deleteElement.splice(elementPosition, 1);
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

  function sortElements(setOfElements){
    setOfElements.sort();
  }

  function renameElements(setOfElements, element, name){
    var elementPosition = setOfElements.indexOf(element);
    if (elementPosition > -1) {
      setOfElements[elementPosition] = name;
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
    if (selectedOption !== null) {
      addToSetOfElements(listingElements, storeElements, selectedOption.innerText);
    }
    updateUI();
  };

  addButtonListing.onclick = function() {
    var selectedOption = document.querySelector(".store-select option:checked");
    if (selectedOption !== null) {
      addToSetOfElements(storeElements, listingElements, selectedOption.innerText);
    }
    updateUI();
  };

  deleteButtonListing.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    if (selectedOption !== null) {
      deleteListingElement(selectedOption.innerText);
    }
    updateUI();
  };
  addElementButtonListing.onclick = function() {
    addElementToListing();
    updateUI();
  };
  sortListingButton.onclick = function() {
    sortElements(listingElements);
    updateUI();
  }
  sortStoreButton.onclick = function() {
    sortElements(storeElements);
    updateUI();
  }
  renameListingButton.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    if (selectedOption !== null) {
      var result = prompt('Введите новое имя элемента', selectedOption.innerText);
      renameElements(listingElements, selectedOption.innerText, result);
    }
    updateUI();
  }
  renameStoreButton.onclick = function() {
    var selectedOption = document.querySelector(".store-select option:checked");
    if (selectedOption !== null) {
      var result = prompt('Введите новое имя элемента', selectedOption.innerText);
      renameElements(storeElements, selectedOption.innerText, result);
    }
    updateUI();
  }
};