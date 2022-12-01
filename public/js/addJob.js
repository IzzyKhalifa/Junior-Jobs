const Pool = require("mysql2/typings/mysql/lib/Pool");

window.onload = () => {

        document.getElementById('btn-next').onclick = () => {

            let firstItem = document.getElementById("first_item").value;
            let secondItem = document.getElementById("second_item").value;
            let option1 = document.getElementById("option1").value;
            let option2 = document.getElementById("option2").value;
            let option3 = document.getElementById("option3").value;
            let option4 = document.getElementById("option4").value;
            let option5 = document.getElementById("option5").value;
            let option6 = document.getElementById("option6").value;
            let option7 = document.getElementById("option7").value;
            let option8 = document.getElementById("option8").value;
            let option9 = document.getElementById("option9").value;
            let option11 = document.getElementById("option10").value;
            let option12 = document.getElementById("option11").value;
            let option13 = document.getElementById("option12").value;
        
        
            Pool.query(
                'INSERT INTO jobs (firstItem , secondItem) VALUES (?,?)'
                [firstItem, secondItem]
            )

        }

        

}




/* <div class="first-item">
<input
  type="text"
  name="name"
  placeholder="Company name"
  required
  size="50" */


//   <div class="second-item">
//   <input
//     type="text"
//     name="name"
//     placeholder="Job Description"
//     required
//     size="50"
//   />

// <div class="checkbox-options"></div>
// <input type="checkbox" id="option1" name="option1" value="highest"
// <input type="checkbox" id="option2" name="option2" value="medium" 
// <input type="checkbox" id="option3" name="option3" value="low" 
// <input type="checkbox" id="option4" name="option4" value="lowest" 


// <div class="checkbox-options2">
//       <input type="checkbox" id="option4" name="option4" value="fulltime" /><br
//       <input type="checkbox" id="option5" name="option5" value="parttime" /><br
//       <input type="checkbox" id="option6" name="option6" value="intern" /><br />


// <div class="checkbox-options3">
// <input type="checkbox" id="option7" name="option7" value="it" /><br />
// <input type="checkbox" id="option8" name="option8" value="Design" /><br />
// <input
//         type="checkbox"
//         id="option9"
//         name="option9"
//         value="hospitality"
//       /><br />

// <input type="checkbox" id="option10" name="option10" value="Media" /><b
// <input type="checkbox" id="option11" name="option11" value="Finance" /><br
