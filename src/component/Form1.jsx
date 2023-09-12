import React from "react";

const Form1 = ({setopenForm}) => {
  function validateForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const feedback = document.getElementById("feedback").value;

    if (name.trim() === "") {
        alert("Name field cannot be empty");
        return false;
    }

    if (isNaN(age) || age < 1 || age > 120) {
        alert("Please enter a valid age between 1 and 120");
        return false;
    }

    if (feedback.trim() === "") {
        alert("Feedback field cannot be empty");
        return false;
    }

    alert("form Submitted");
    setopenForm(false);

    return true;
}
  return <div>
    
    <div class="form-container">
        <h1>Feedback Form</h1>
        <form id="feedback-form" onsubmit="return validateForm()">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" required/>
            </div>
            <div class="form-group">
                <label for="feedback">Feedback:</label>
                <textarea id="feedback" name="feedback" rows="4" required></textarea>
            </div>
            <button type="submit" onClick={validateForm}>Submit</button>
        </form>
    </div>
</div>;
};

export default Form1;
