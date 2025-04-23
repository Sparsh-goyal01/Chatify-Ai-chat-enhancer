
function validateForm() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === 'Nitin' && password === 'nitin') {
      window.location.href = 'idex.html';
      return false; 
    } else if (username === 'Pijus' && password === 'pijus') {
      window.location.href = 'idex.html';
      return false;
    } else if (username === 'Naman' && password === 'naman') {
      window.location.href = 'idex.html';
      return false;
    } else if (username === 'Sparsh' && password === 'sparsh') {
      window.location.href = 'idex.html';
      return false;
    } else  {
      alert("No User Found. Try Signing Up.");
      return false;
    }
    
  }

  