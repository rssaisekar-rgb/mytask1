import { app } from "./firebase.js";

console.log("Firebase Connected");

const form = document.getElementById("myForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = new FormData(form);

    const username =
        formData.get("iuser")?.trim();

    const password =
        formData.get("ipassword")?.trim();

    if (!username && !password) {
        error.textContent =
            "Username and Password are required";
        return;
    }

    if (!username) {
        error.textContent =
            "Username is required";
        return;
    }

    if (!password) {
        error.textContent =
            "Password is required";
        return;
    }

    error.textContent = "";

    const alertBox =
        document.getElementById("successAlert");

    alertBox.classList.remove("d-none");

    setTimeout(() => {

        form.reset();

        alertBox.classList.add("d-none");

    }, 3000);

});