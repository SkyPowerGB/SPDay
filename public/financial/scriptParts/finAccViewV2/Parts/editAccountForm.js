const formContainerId = "editFinAcc";
const formId = "finAccEditFormForm";
const deleteCaseE = "deleteFinAcc";
// elements to be filled
// finAccEditForm
const formPartsIds = {
  idInputId: "finAccEditFormAccIdInput",
  nameInputId: "finAccEditFormNameInput",
  typeInputId: "finAccEditFormAccType",
  currencyInputId: "finAccEditFormCurrencyInput",
  balanceInputId: "finAccEditFormBalance",
};

const dataHoldingItemIds = {
  idData: "finAccIdDatDispInput",
  nameData: "finAccNameDatDisp",
  accType: "finAccAccTypeDatDispInput",
  currency: "finAccCurrencyDatDispInput",
  balance: "finAccBalanceDatDispInput",
};

const editAccountForm = {
  deleteCaseE: deleteCaseE,
  sendForm(callback) {
    sendFormData(callback);
  },
  showForm(id) {
    showForm(id);
  },
  hideForm() {
    hideForm();
  },
  setupEvents(reloadCallback) {
    setup(reloadCallback);
  },
};
let formContainer;

function setup(reloadCallback) {
  formContainer = document.getElementById(formContainerId);
  const form = document.getElementById(formId);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    let formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    sendFormData(reloadCallback, formDataObj);
  });

  
}
const hiddenClass = "hidden";

function fillFormEditV(id) {
  const idInput = document.getElementById(formPartsIds.idInputId);
  const nameInput = document.getElementById(formPartsIds.nameInputId);
  const typeInput = document.getElementById(formPartsIds.typeInputId);
  const currencyInput = document.getElementById(formPartsIds.currencyInputId);
  const balanceInput = document.getElementById(formPartsIds.balanceInputId);

  // const idData=document.getElementById(dataHoldingItemIds.idData);
  const nameData = document.getElementById(dataHoldingItemIds.nameData);
  const accType = document.getElementById(dataHoldingItemIds.accType);
  const currency = document.getElementById(dataHoldingItemIds.currency);
  const balance = document.getElementById(dataHoldingItemIds.balance);

  idInput.value = id;
  nameInput.value = nameData.innerText.trim();
  typeInput.value = accType.value.trim();
  currencyInput.value = currency.value;
  balanceInput.value = balance.value;
  console.log("currency input:", currency.value);
  console.log("balance input:", balance.value);
}
function showForm(id) {
  fillFormEditV(id);
  if (formContainer.classList.contains(hiddenClass)) {
    formContainer.classList.remove(hiddenClass);
  }
}
function hideForm() {
  if (!formContainer.classList.contains(hiddenClass)) {
    formContainer.classList.add(hiddenClass);
  }
}

async function sendFormData(callback, formDataObj) {
  const result = await fetch("finAccView/finAccEdit", {
    method: "PATCH",
    body: JSON.stringify(formDataObj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (result.ok) {
    console.log("Form submitted successfully:", formDataObj);

    callback();
  }
}

export { editAccountForm };
