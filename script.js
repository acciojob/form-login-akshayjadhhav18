function getFormvalue(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const firstName = document.querySelector("[name='fname']").value.trim();
    const lastName = document.querySelector("[name='lname']").value.trim();

    if (firstName === "" || lastName === "") {
        alert("Please enter both first name and last name.");
        return;
    }

    alert(firstName + " " + lastName);
}

document.getElementById("form1").addEventListener("submit", getFormvalue);
