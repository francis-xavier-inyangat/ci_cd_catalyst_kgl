// Login Validation  Javasrcipt

const loginFocus = () => {
  const loginNow = document.loginForm.loginEmail.focus();
  return false;
};
// validate email
const validEmail = () => {
  const userEmail = document.loginForm.regEmail;
  const logInfo1 = document.querySelector("#emailError");
  let atposition = userEmail.value.indexOf("@");
  let dotposition = userEmail.value.lastIndexOf(".");
  let errorCheck = true;

  // const emailRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (
    userEmail.value.length == "" ||
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= userEmail.length
  ) {
    logInfo1.textContent = "Enter correct email address";
    logInfo1.style.color = "red";

    errorCheck = false;
    // return false
  } else {
    logInfo1.textContent = "";
    errorCheck = true;
  }
  console.log(validEmail());
  return errorCheck;
};

// Login Validation  Javasrcipt

// login Password validation

const validPass = () => {
  const errorCheck = true;
  let userPwd = document.loginForm.password;
  let pwdLength = userPwd.value.length;
  const logInfo2 = document.getElementById("pwdError");
  const strongRegex = /^[A-Za-z\d\D\s\w\W]/;
  if (userPwd.value.match(strongRegex)) {
    logInfo2.textContent = "Good! Strong password";
    logInfo2.style.color = "green";
    errorCheck = false;
  } else if (pwdLength <= 6) {
    logInfo2.textContent = "Password must be 6 characters long!";
    logInfo2.style.color = "red";
    errorCheck = true;
  } else {
    logInfo2.textContent =
      "Password must be alphanumeric and contain special characters";
    logInfo2.style.color = "red";
    errorCheck = true;
  }
  return errorCheck;
};

// const validLogin = ()=>{
//   const logInfo1 = document.querySelector('#emailError');
//   const logInfo2 = document.getElementById ('pwdError')

//   if(!validEmail(e)){
//     // prevent the form from submitting
//   e.preventDefault();
//    logInfo1.textContent = "Enter Valid Email"
//    return false;
//   }else if(!validPass()){
//     const logInfo2 = document.querySelector('#emailError');
//    logInfo2.textContent = "Enter Valid Pasword"
//    return false;
//   }
//   else{
//     // document.loginForm.loginBtn.disabled = false;
//     console.log(validEmail())
//   }
// }
const validLogin = () => {
  const form = document.querySelector("#loginform"),
    logInfo1 = document.querySelector("#emailError"),
    logInfo2 = document.getElementById("pwdError");
  form.addEventListener("submit", function (e) {
    // prevent the form from submitting
    e.preventDefault();

    let isFormValid = validEmail() && validPass();

    // submit to the server if the form is valid
    if (isFormValid) {
    }
  });
};

// Signup page validation

//   first focus
const regFocus = () => {
  const firstFocus = document.regForm.user_name.focus();

  return true;
};

//   name validation
const validName = () => {
  const userName = document.regForm.user_name;
  const nameLength = userName.value.length;
  const errInfo = document.getElementById("nameError");
  const nameRegex = /^[A-Za-z\s]+$/;
  if (nameLength <= 4 || userName.value == "") {
    errInfo.textContent = "Enter name atleast 5 characters long!";
  } else if (!userName.value.match(nameRegex)) {
    errInfo.textContent = "Name must only contain letters!";
  } else {
    errInfo.textContent = "";
  }
};

// validate  position

const validPost = () => {
  const userPost = document.regForm.position.value;
  const postInfo = document.getElementById("postErr");
  if (userPost == "Default") {
    postInfo.textContent = "Select your position !";
  } else {
    postInfo.textContent = "";
  }
};

// validate signup email

const validateMail = () => {
  const regMail = document.regForm.regEmail;

  const mailErr = document.querySelector("#emailError");
  let atposition = regMail.value.indexOf("@");
  let dotposition = regMail.value.lastIndexOf(".");

  // const emailRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (regMail.value == null || regMail.value == "") {
    mailErr.textContent = "Please enter email";
    mailErr.style.color = "red";

    // regMail.focus();
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= regMail.value.length
  ) {
    mailErr.textContent = "Enter correct email address";
    mailErr.style.color = "red";
    // regMail.focus();
  } else {
    mailErr.textContent = "";
  }
  return false;
};

// validate reg password

const validRegPwd = () => {
  let userPass = document.regForm.regPass;
  let passLength = userPass.value.length;
  const pwdErr = document.getElementById("pwdError");
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/;
  if (userPass.value.match(strongRegex)) {
    pwdErr.textContent = "Good! Strong password";
    pwdErr.style.color = "green";
  } else if (passLength <= 6) {
    pwdErr.textContent = "Password must be 6 characters long!";
    pwdErr.style.color = "red";
    // userPass.focus();
  } else if (userPass.value.match(strongRegex)) {
    pwdErr.textContent =
      "Password must be alphanumeric and contain special characters.";
    pwdErr.style.color = "red";
    // userPass.focus();
  } else {
    pwdErr.textContent = "";
    pwdErr.style.color = "red";
  }
};

// reset password validation

const reset_focus = () => {
  const reset_focus = document.resetForm.passReset.focus();
};

const validReset = () => {
  const pwdResetMail = document.resetForm.passReset;
  const resetErr = document.querySelector("#resetInfo");
  let atposition = pwdResetMail.value.indexOf("@");
  let dotposition = pwdResetMail.value.lastIndexOf(".");

  if (pwdResetMail.value == null || pwdResetMail.value == "") {
    resetErr.textContent = "Please enter email";
    resetErr.style.color = "red";

    // pwdResetMail.focus();
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= pwdResetMail.value.length
  ) {
    resetErr.textContent = "Enter correct email address";
    resetErr.style.color = "red";
    // pwdResetMail.focus();
  } else {
    resetErr.textContent = "";
  }
  return false;
};

// validate sales form cash
const infoPara = document.querySelector("#errorInfo");

// product name validation
const validProdName = () => {
  const nameofProduce = document.salesForm.prodName.value;
  const errorCheck = true;
  if (nameofProduce == "Default") {
    infoPara.innerHTML = "**Please select produce type!";
    errorCheck = false;
  } else {
    infoPara.textContent = "";
    errorCheck = true;
  }
  return errorCheck;
};

// validate product type
const validProdType = () => {
  const errorCheck = true;
  const typeofProduce = document.salesForm.prodType.value;
  if (typeofProduce == "Default") {
    infoPara.innerHTML = "**Please select produce type!";
    errorCheck = false;
  } else {
    infoPara.textContent = "";
    errorCheck = true;
  }
  return errorCheck;
};

//validate tonnage
const validTonnage = () => {
  const errorCheck = true;
  const weight = document.salesForm.tonnage.value;
  const weightRegex = /^[0-9\W]+$/;
  if (weight.length == "" || weight <= 1000 || !weight.match(weightRegex)) {
    infoPara.innerHTML = "**Please enter 3 digit number!";
    errorCheck = false;
  } else {
    infoPara.textContent = "";
    errorCheck = true;
  }
  return errorCheck;
};

//validate buyer names

const validateName = () => {
  const errorCheck = true;
  const nameOfBuyer = document.salesForm.buyerName.value;
  const nameString = /^[a-z0-9\s]+$/i;
  if (nameOfBuyer.length <= 2 || !nameOfBuyer.match(nameString)) {
    infoPara.innerHTML = "**Required 3 alplha-numeric characters!";
    errorCheck = false;
  } else {
    infoPara.textContent = "";
    errorCheck = true;
  }
  return errorCheck;
};

// validate amount paid
const validateAmount = () => {
  const errorCheck = true;
  const amount = document.salesForm.amountPaid.value;
  const amountRegx = /^[0-9]+$/i;
  if (amount <= 100000 || amount.length <= 5 || !amount.match(amountRegx)) {
    infoPara.innerHTML = "**Required atleast 5 digit characters!";
    errorCheck = false;
  } else {
    infoPara.textContent = "";
    errorCheck = true;
  }
  return errorCheck;
};

// validate telephone

const validatePhone = () => {
  const errorCheck = true;
  const phone = document.salesForm.buyerContact.value;
  const phoneRegx = /^\+?[0-9][0-9]{7,14}$/;
  if (phone.length <= 9 || !phone.match(phoneRegx)) {
    infoPara.innerHTML = "**Enter correct phone number e.g +256760618248";
    errorCheck = false;
  } else {
    infoPara.textContent = "";
    errorCheck = true;
  }
  return errorCheck;
};

const validateAgent = () => {
  const nameOfAgent = document.salesForm.salesAgent.value;
  const nameString = /^[a-z0-9\s]+$/i;
  if (nameOfAgent.length <= 2 || !nameOfAgent.match(nameString)) {
    infoPara.innerHTML = "**Required 3 alplha-numeric characters!";
  } else {
    infoPara.textContent = "";
  }
};



 const validation = ()=>{
  form.addEventListener("submit", function (e) {
    // prevent the form from submitting
    e.preventDefault();
    const isFormValid =
      validProdName() &&
      validProdType() &&
      validTonnage &&
      validateName &&
      validateAmount &&
      validatePhone;
    if (isFormValid) {
    }
  });
}


// VALIDATION OF CREDIT SALES PAGE

const infoError = document.querySelector("#infoError");

// product name validation
const valProdName = () => {
  const produce = document.creditForm.selectProdName.value;
  if (produce == "Default") {
    infoError.innerHTML = "**Please select produce name!";
  } else {
    infoError.textContent = "";
  }
};

// validate type of produce

const valProduceType = () => {
  const Prodtype = document.creditForm.proType.value;
  if (Prodtype == "Default") {
    infoError.innerHTML = "**Please select produce type!";
  } else {
    infoError.textContent = "";
  }
};
// validate number of tonnes

const validateWeight = () => {
  const tonnageKgs = document.creditForm.tonesQty.value;
  const tonesRegex = /^[0-9\W]+$/;
  if (
    tonnageKgs.length == "" ||
    tonnageKgs <= 1000 ||
    !tonnageKgs.match(tonesRegex)
  ) {
    infoError.innerHTML = "**Please enter 3 digit number!";
  } else {
    infoError.textContent = "";
  }
};

// validate amount due

const validcreditDue = () => {
  const dueAmount = document.creditForm.amountDue.value;
  const creditRegx = /^[0-9]+$/i;
  if (
    dueAmount <= 100000 ||
    dueAmount.length <= 5 ||
    !dueAmount.match(creditRegx)
  ) {
    infoError.innerHTML = "**Required atleast 5 digit characters!";
  } else {
    infoError.textContent = "";
  }
};

// validate buyer on credit name

const validateDebtor = () => {
  const debtorName = document.creditForm.debtor.value;
  const debtorString = /^[a-z0-9\s]+$/i;
  if (debtorName.length <= 2 || !debtorName.match(debtorString)) {
    infoError.innerHTML = "**Required 3 alplha-numeric characters!";
  } else {
    infoError.textContent = "";
  }
};

// validate location of the buyer

const validLocation = () => {
  const locateBuyer = document.creditForm.buyerLocation.value;
  const locationString = /^[a-z0-9\s]+$/i;
  if (locateBuyer.length <= 2 || !locateBuyer.match(locationString)) {
    infoError.innerHTML = "**Required 3 alplha-numeric characters!";
  } else {
    infoError.textContent = "";
  }
};

const validateID = () => {
  const id_buyer = document.creditForm.buyerID.value;
  const ninRegx = /^\w|\d[A-Z]+$/;
  if (id_buyer.length <= 12 || !id_buyer.match(ninRegx)) {
    infoError.innerHTML = "**Enter correct ID NIN";
  } else {
    infoError.textContent = "";
  }
};

// validate buyer tel

const validateTel = () => {
  const telephone = document.creditForm.buyerTel.value;
  const telRegx = /^\+?[0-9][0-9]{7,14}$/;
  if (telephone.length <= 9 || !telephone.match(telRegx)) {
    infoError.innerHTML = "**Enter correct phone number e.g +256760618248";
  } else {
    infoError.textContent = "";
  }
};

const validAgent = () => {
  const nameOfAgent = document.creditForm.salesAtten.value;
  const nameString = /^[a-z0-9\s]+$/i;
  if (nameOfAgent.length <= 2 || !nameOfAgent.match(nameString)) {
    infoError.innerHTML = "**Required 3 alplha-numeric characters!";
  } else {
    infoError.textContent = "";
  }
};

// PROCUREMENT PAGE VALIDATIONS
const pageErrors = document.getElementById("pageError");
// product name validation
const newStock = () => {
  const stockin = document.procureForm.consignment.value;
  if (stockin == "Default") {
    pageErrors.innerHTML = "**Please select produce name!";
  } else {
    pageErrors.textContent = "";
  }
};

// validate type of produce

const valProdTyp = () => {
  const Prodtype = document.procureForm.typeofProduce.value;
  if (Prodtype == "Default") {
    pageErrors.innerHTML = "**Please select produce type!";
  } else {
    pageErrors.textContent = "";
  }
};
//Validate tonnage
const validateTones = () => {
  const tonnageWt = document.procureForm.no_kgs.value;
  const tonesRegex = /^[0-9\W]+$/;
  if (
    tonnageWt.length == "" ||
    tonnageWt <= 1000 ||
    !tonnageWt.match(tonesRegex)
  ) {
    pageErrors.innerHTML = "**Please enter 4 digit number!";
  } else {
    pageErrors.textContent = "";
  }
};

// Validate unit sellprice

const unitPrice = () => {
  const cost_price = document.procureForm.unitCost.value;
  const costRegx = /^[0-9]+$/i;
  if (
    cost_price <= 100 ||
    cost_price.length < 3 ||
    !cost_price.match(costRegx)
  ) {
    pageErrors.innerHTML = "**Required atleast 5 digit characters!";
  } else {
    pageErrors.textContent = "";
  }
};

// Validate unit amount

const amountPaid = () => {
  const cost_total = document.procureForm.pay.value;
  const costRegx = /^[0-9]+$/i;
  if (
    cost_total <= 100000 ||
    cost_total.length <= 5 ||
    !cost_total.match(costRegx)
  ) {
    pageErrors.innerHTML = "**Required atleast 5 digit characters!";
  } else {
    pageErrors.textContent = "";
  }
};

// validate name of supplier
const validBuyer = () => {
  const supplier = document.procureForm.supplierName.value;
  const nameString = /^[a-z0-9\s]+$/i;
  if (supplier.length <= 2 || !supplier.match(nameString)) {
    pageErrors.innerHTML = "**Required 3 alplha-numeric characters!";
  } else {
    pageErrors.textContent = "";
  }
};

// validate type of procurement txn

const validModePay = () => {
  const payMode = document.procureForm.payTerms.value;
  if (payMode == "Default") {
    pageErrors.innerHTML = "**Select a payment option!";
  } else {
    pageErrors.innerHTML = "";
  }
};

// valid receipt number

const vailidReceipt = () => {
  const receiptNumber = document.procureForm.receiptNum.value;
  const receiptRegx = /^\d\w+$/i;
  if (
    receiptNumber.length <= 1 ||
    receiptNumber.length >= 6 ||
    !receiptNumber.match(receiptRegx)
  ) {
    pageErrors.innerHTML = "**Enter correct receipt number";
  } else {
    pageErrors.textContent = "";
  }
};

// validate other
const otherTranX = () => {
  const otherTxx = document.procureForm.otherPay.value;
  const receiptRegx = /^\d\w+$/i;
  if (
    otherTxx.length <= 6 ||
    otherTxx.length >= 25 ||
    !otherTxx.match(receiptRegx)
  ) {
    pageErrors.innerHTML = "**Enter alpha numeric explanation";
  } else {
    pageErrors.textContent = "";
  }
};
