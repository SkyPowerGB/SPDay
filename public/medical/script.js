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
  const appointFormIdInput = document.getElementById("appointFormIdInput");
  const appointFormDescInput = document.getElementById("appointmentDesc");
  const appointFormAppointGroupSelect = document.getElementById(
    "appointFormAppointGroupSelect"
  );

  const closeDeleteePopup = document.getElementById("popupCancelDeleteBtn");

  

  const editButtons = document.getElementsByClassName("btn-table-edit");
  const editSidebarBtn = document.getElementById("btnEdit");
  const deletePopupForm = document.getElementById("deletePopupForm");



  const appointmentTableEditButtons = document.getElementsByClassName(
    "btn-appointment-table-edit"
  );
  const appointmentTableDeleteButtons = document.getElementsByClassName(
    "btn-appointment-table-delete"
  );


  let picker = flatpickr(formDateInput, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    onClose: function (selectedDates, dateStr) {
      selectedDate.textContent = "Odabrano: " + dateStr;
    },
  });


  Array.from(appointmentTableEditButtons).forEach((btn) => {
    btn.addEventListener("click", () => {
      let desc = document.getElementById(
        "appointmentTableRow_descData_" + btn.value
      ).innerHTML;
      let date = document.getElementById(
        "appointmentTableRow_dateData_" + btn.value
      ).value;
      let groupNm = document.getElementById(
        "appointmentTableRow_groupData_" + btn.value
      ).innerHTML;
      picker.setDate(date);

      appointFormIdInput.value = btn.value;

      const options = appointFormAppointGroupSelect.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].textContent === groupNm) {
          appointFormAppointGroupSelect.selectedIndex = i;
          break;
        }
      }

      appointFormDescInput.value = desc;

      showAppoitmentForm();
    });
  });
  Array.from(appointmentTableDeleteButtons).forEach((btn) => {
    btn.addEventListener("click", () => {
      showDeletePopup(btn.value, "appointment","Da li ste sigurni da želite da obrišete termin?");
    });
  });


  closeDeleteePopup.addEventListener("click", () => {
    hideDeletePopup();
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

  function showAppoitmentForm(id, date, groupNm, desc) {
    formDateInput.value = date;
    appointFormDescInput.value = desc;
    appointFormIdInput.value = id;
    appointFormAppointGroupSelect.value = groupNm;
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

  function showDeletePopup(id, type,msg) {
    if (deletePopupForm.classList.contains("hidden")){
      deletePopupForm.classList.remove("hidden");
    }
    document.getElementById("deleteWarningMsg").textContent = msg;  
    document.getElementById("deleteElementId").value = id;
    document.getElementById("deleteElementType").value = type;
  }

  function hideDeletePopup() {
    if (!deletePopupForm.classList.contains("hidden")){
      deletePopupForm.classList.add("hidden");

    }
   
  }


});
