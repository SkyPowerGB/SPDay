window.addEventListener("load", (e) => {
  console.log("loaded");
  const btnAddGroup = document.getElementById("btnAddGroup");
  const btnAddAppoitment = document.getElementById("btnAddAppoitment");

  const appoitmentAddForm = document.getElementById("appoitmentAddForm");
  const appoitmentAddGroupForm = document.getElementById(
    "appoitmentAddGroupForm"
  );

  const btnCloseAppoitmentAddForm = document.getElementById(
    "btnCloseAppoitmentAddForm"
  );

  const bntCloseAppoitmentAddGroupForm = document.getElementById(
    "bntCloseAppoitmentAddGroupForm"
  );

  const formDateSelect = document.getElementById("formDateSelect");
  const formDateInput = document.getElementById("formDateInput");

  const editButtons = document.getElementsByClassName("btn-table-edit");
  const editSidebarBtn = document.getElementById("btnEdit");

  const appointmentTableEditButtons = document.getElementsByClassName(
    "btn-appointment-table-edit"
  );

  Array.from(appointmentTableEditButtons).forEach((btn) => {
    btn.addEventListener("click", () => {
      let desc=  document.getElementById("appointmentTableRow_descData_"+btn.value).innerHTML;
      let date=document.getElementById("appointmentTableRow_dateData_"+btn.value).value;
      formDateInput.value=date;
        showAppoitmentForm();
    });
  });

  editSidebarBtn.addEventListener("click", () => {
    Array.from(editButtons).forEach((element) => {
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  });

  let picker = flatpickr(formDateInput, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    onClose: function (selectedDates, dateStr) {
      selectedDate.textContent = "Odabrano: " + dateStr;
    },
  });

  formDateSelect.addEventListener("click", () => {
    picker.open();
  });

  btnAddGroup.addEventListener("click", () => {
    showAppoitmentGrpForm();
    hideAppoitmentForm();
  });

  btnAddAppoitment.addEventListener("click", () => {
    showAppoitmentForm();
    hideAppoitmentGrpForm();
  });

  btnCloseAppoitmentAddForm.addEventListener("click", () => {
    hideAppoitmentForm();
  });

  bntCloseAppoitmentAddGroupForm.addEventListener("click", () => {
    hideAppoitmentGrpForm();
  });

  function showAppoitmentForm(id, date, desc) {
    showAppoitmentForm();
  }

  function showAppoitmentForm() {
    if (appoitmentAddForm.classList.contains("hidden")) {
      appoitmentAddForm.classList.remove("hidden");
    }
  }
  function hideAppoitmentForm() {
    if (!appoitmentAddForm.classList.contains("hidden")) {
      appoitmentAddForm.classList.add("hidden");
    }
  }
  function showAppoitmentGrpForm() {
    if (appoitmentAddGroupForm.classList.contains("hidden")) {
      appoitmentAddGroupForm.classList.remove("hidden");
    }
  }
  function hideAppoitmentGrpForm() {
    if (!appoitmentAddGroupForm.classList.contains("hidden")) {
      appoitmentAddGroupForm.classList.add("hidden");
    }
  }
});
