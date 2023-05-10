
function submit() {

    let First_name = document.getElementById("first_name").value;
    let Last_name = document.getElementById("last_name").value;
    let Contact = document.getElementById("contact").value;
    let Email = document.getElementById("email").value;
    let Company = document.getElementById("company").value;
    let State = document.getElementById("state").value;
    let Vender = document.getElementById("vender").value;
    let Distributor = document.getElementById("distributor").value;

    if (First_name === "" || Last_name === "" || Contact == "" || Email == "" ||
        Company == "" || State == "" || Vender == "" || Distributor == "") {
        alert("Please Fill all the fields to before submitting")
    } else {
        alert("Submitted successfully")
        let form=document.getElementById("form")
        form.style.display="none"
    }
}
var rootElement = document.documentElement
function topFunction() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
  }

