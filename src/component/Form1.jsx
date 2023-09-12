import React from "react";

const Form1 = ({setopenForm}) => {

    function validateForm() {
        let x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
  return <div>
    
    <form name="myForm" action="/action_page.php" onsubmit={validateForm} method="post">
  Name: <input type="text" name="fname"/>
  <input type="submit" value="Submit" onClick={()=>setopenForm(false)}/>
</form>
</div>;
};

export default Form1;
