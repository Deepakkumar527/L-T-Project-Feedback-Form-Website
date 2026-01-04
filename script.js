document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let comments = document.getElementById("comments").value.trim();
    let rating = document.querySelector('input[name="rating"]:checked');

    if (name === "" || email === "" || mobile === "") {
        alert("Please fill all required fields!");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit mobile number!");
        return;
    }

    if (!rating) {
        alert("Please select a star rating!");
        return;
    }

    if (comments.length < 10) {
        alert("Feedback must be at least 10 characters!");
        return;
    }

    alert("Feedback submitted successfully!");
    this.reset();
});

document.getElementById("otherIssue").addEventListener("change", function () {
    document.getElementById("otherBox").style.display =
        this.checked ? "block" : "none";
});
