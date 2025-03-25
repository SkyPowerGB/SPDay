window.addEventListener("load", (e) => {
  console.log("loaded");

   // variables---------------------------------------------------------------------
   let dataExportActive=false;

  // sidebar buttons---------------------------------------------------------------------

  const btnAddGroup = document.getElementById("btnAddGroup");
  const btnAddAppoitment = document.getElementById("btnAddAppoitment");
  const btnExportData = document.getElementById("btnExportData");

  // other buttons--------------------------------------------------------------------- 
  const underbarCloseBtn=document.getElementById("underbarCloseBtn");

  //---other buttons events---------------------------------------------------------------------------------------
  underbarCloseBtn.addEventListener("click",()=>{hideDataExport()});



  // TOGGABLE elements------------------------------------------------------------------

  const appointGrpTableContainer = document.getElementById(
    "appointGrpTableContainer"
  );
  const appointTableContainer = document.getElementById(
    "appointTableContainer"
  );

  const appoitmentAddForm = document.getElementById("appoitmentAddForm");
  const appoitmentAddGroupForm = document.getElementById(
    "appoitmentAddGroupForm"
  );

  const underbarContainer = document.getElementById("underbarContainer");

  //------------------------------------------------------------------------------------------

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


  const picker = flatpickr(formDateInput, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    onClose: function (selectedDates, dateStr) {
      selectedDate.textContent = "Odabrano: " + dateStr;
    },
  });



 

  const closeDeleteePopup = document.getElementById("popupCancelDeleteBtn");

  const editButtons = document.getElementsByClassName("btn-table-edit");
  const editSidebarBtn = document.getElementById("btnEdit");
  const deletePopupForm = document.getElementById("deletePopupForm");

  const appointmentGrpTabEditBtns = document.getElementsByClassName(
    "btn-appointment-grp-table-edit"
  );
  const appointmentGrpTabDeleteBtns = document.getElementsByClassName(
    "btn-appointment-grp-table-delete"
  );

  Array.from(appointmentGrpTabEditBtns).forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.value);
      const appointGrpId = btn.value;
      const appointGrpData = document.getElementById(
        "appointGrpData-name" + appointGrpId
      ).innerHTML;

      showAppointmentGrpForm(appointGrpId, appointGrpData);
    });
  });

  Array.from(appointmentGrpTabDeleteBtns).forEach((btn) => {
    btn.addEventListener("click", () => {
      showDeletePopup(
        btn.value,
        "appointment_group",
        "Da li ste sigurni da želite da obrišete grupu?"
      );
    });
  });

  const appointmentTableEditButtons = document.getElementsByClassName(
    "btn-appointment-table-edit"
  );
  const appointmentTableDeleteButtons = document.getElementsByClassName(
    "btn-appointment-table-delete"
  );

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
      showDeletePopup(
        btn.value,
        "appointment",
        "Da li ste sigurni da želite da obrišete termin?"
      );
    });
  });

  const btnAppointToggle = document.getElementById("btnAppointToggle");
  const btnGroupsToggle = document.getElementById("btnGroupsToggle");

  // data export -------------------------------------------------------------------------
  let idList = [];
  let groupNmList = [];


  const inputGroupIdList=document.getElementById("inputGroupIdList");
  const inputGroupNmList=document.getElementById("inputGroupNmList");

  const appointGrpTabDataExportChckBx = document.getElementsByClassName("table-checkbox");
    
  const appointGrpTabDataExportChckBxTd = document.getElementsByClassName(
    "table-dat-exoport-select-group-td"
  );
  const groupsHeaderRowSelectGrps = document.getElementById(
    "groupsHeaderRowSelectGrps"
  );

  btnExportData.addEventListener("click", () => {
    {
      if(dataExportActive){hideDataExport();dataExportActive=false;return;}
      showDataExport();
      dataExportActive=true;
    }
  });


  const dateInputFrom = flatpickr(document.getElementById("inputDateFrom"), {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    onClose: function (selectedDates, dateStr) {
      selectedDate.textContent = "Odabrano: " + dateStr;
    },
  });

  const dateInputTo = flatpickr(document.getElementById("inputDateTo"), {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    onClose: function (selectedDates, dateStr) {
      selectedDate.textContent = "Odabrano: " + dateStr;
    },
  });
  

  //----------------------------------------------

  Array.from(appointGrpTabDataExportChckBx).forEach((chckBx) => {
    chckBx.addEventListener("change", (e) => {
      if (e.target.checked) {
        addIdToList(chckBx.value);
       
      } else {
        removeIdFromList(chckBx.value); 
      }
    });
  });

  btnAppointToggle.addEventListener("click", () => {
    hideAppointmentGrpTable();
    showAppointmentTable();
  });
  btnGroupsToggle.addEventListener("click", () => {
    hideAppointmentTable();
    showAppointmentGrpTable();
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


  // FORM functions---------------------------------------------------------------------
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

  function showAppointmentGrpForm(id, name) {
    document.getElementById("appointGrpPopupForm-id").value = id;
    document.getElementById("appointGrpPopupForm-grpNm").value = name;

    showAppoitmentGrpForm();
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

  function showDeletePopup(id, type, msg) {
    if (deletePopupForm.classList.contains("hidden")) {
      deletePopupForm.classList.remove("hidden");
    }
    document.getElementById("deleteWarningMsg").textContent = msg;
    document.getElementById("deleteElementId").value = id;
    document.getElementById("deleteElementType").value = type;
  }

  function hideDeletePopup() {
    if (!deletePopupForm.classList.contains("hidden")) {
      deletePopupForm.classList.add("hidden");
    }
  }

  // table functions---------------------------------------------------------------------

  function showAppointmentTable() {
     hideDataExport();
    if (appointTableContainer.classList.contains("hidden")) {
      appointTableContainer.classList.remove("hidden");
    }
  }
  function hideAppointmentTable() {
    if (!appointTableContainer.classList.contains("hidden")) {
      appointTableContainer.classList.add("hidden");
    }
  }
  function showAppointmentGrpTable() {
    if(dataExportActive){hideDataExport();}
    if (appointGrpTableContainer.classList.contains("hidden")) {
      appointGrpTableContainer.classList.remove("hidden");
    }
  }
  function hideAppointmentGrpTable() {
    if (!appointGrpTableContainer.classList.contains("hidden")) {
      appointGrpTableContainer.classList.add("hidden");
    }
  }

  //------------------------------------------------------------------------------------------
  //data export functions----------------------------------------------------------------

  function showDataExport() {
    showChckBoxes();
    showUnderbar();
    showAppointmentGrpTable();
    hideAppointmentTable();
    dataExportActive=true;
  }

  function hideDataExport() {
    hideChckBoxes();
    hideUnderbar();
    dataExportActive=false;
  }

  function showUnderbar() {
    if (underbarContainer.classList.contains("hidden")) {
      underbarContainer.classList.remove("hidden");
    }
  }
  function hideUnderbar() {
    if (!underbarContainer.classList.contains("hidden")) {
      underbarContainer.classList.add("hidden");
    }
  }

  function getNameOfGroupById(id) {  

    const appointGrpData = document.getElementById("appointGrpData-name"+id);
    return appointGrpData.innerHTML.trim();
  }

  function addNameOfGroupToList(name) {
    inputGroupNmList.value += name + ",";
  }
  function removeNameOfGroupFromList(name) { 

    inputGroupNmList.value = inputGroupNmList.value.replace(name + ",", "");
  }


  function addIdToList(id) {
    if (doesIdExist(id)) {
      return;
    }
    addNameOfGroupToList(getNameOfGroupById(id));
    inputGroupIdList.value += id + ",";
  }

  function doesIdExist(id) {

    return (inputGroupIdList.value).includes(id);
  }

  function removeIdFromList(id) {

    if (doesIdExist(id)) {
      removeNameOfGroupFromList(getNameOfGroupById(id));
      inputGroupIdList.value = inputGroupIdList.value.replace(id + ",", "");
    }
  }


  function showChckBoxes() {
    showChckBoxesTh();
    Array.from(appointGrpTabDataExportChckBxTd).forEach((td) => {
      if (td.classList.contains("hidden")) {
        td.classList.remove("hidden");
      }
    });
  }
  function hideChckBoxes() {
    hideChckBoxesTh();
    Array.from(appointGrpTabDataExportChckBxTd).forEach((td) => {
      if (!td.classList.contains("hidden")) {
        td.classList.add("hidden");
      }});
    
  }

  function showChckBoxesTh() {
    if (groupsHeaderRowSelectGrps.classList.contains("hidden")) {
      groupsHeaderRowSelectGrps.classList.remove("hidden");
    }
  }
  function hideChckBoxesTh() {
    if (!groupsHeaderRowSelectGrps.classList.contains("hidden")) {
      groupsHeaderRowSelectGrps.classList.add("hidden");
    }
  }



  //---------------------------------------------------------------------------------------
});
