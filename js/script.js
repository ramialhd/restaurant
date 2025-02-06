
    
      function myfunction() {
        let firstName = document.forms["reservation"]["firstname"].value.trim();  // Corrected name
        let lastName = document.forms["reservation"]["lastname"].value.trim();    // Corrected name
        let guest = document.forms["reservation"]["number"].value;
    
        if (firstName === "" || lastName === "") {
            alert("First name and last name cannot be empty");
            return false;
        }
        if (guest > 30) {
            alert("Number of guests must be at most 30");
            return false;
        }
    
        // Hide the form
        document.getElementById("reservationForm").style.display = "none";
    
        // Show the thank-you message
        document.getElementById("thankYouMessage").style.display = "block";
        return true;
    }
    function showChefInfo(chefId) {
        var infoDiv = document.getElementById(chefId);
        if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
            infoDiv.style.display = "block";
        } else {
            infoDiv.style.display = "none";
        }
    }
    
    