function showResult(title, message, icon) {
  Swal.fire({
    title: title,
    html: message,
    icon: icon,
  //  showCancelButton: true,
    confirmButtonColor: "#0061ff",
  // cancelButtonColor: "#d33",
    confirmButtonText: "Okay"
  });
}

async function submitForm() {
   event.preventDefault();
   const result = document.getElementById('result');
   const button = document.getElementById('submit-button');
   try {
     result.style.display = 'block';
     button.style.display = 'none';
     const response = await fetch('/api/submit', {
       method: 'POST',
       body: JSON.stringify({
         cookie: document.getElementById('cookies').value,
         url: document.getElementById('urls').value,
         amount: document.getElementById('amounts').value,
         interval: document.getElementById('intervals').value,
       }),
       headers: {
         'Content-Type': 'application/json',
       },
     });
     const data = await response.json();

     if (data.status === 200) {
       result.style.backgroundColor = '#32ff0dc7';
       result.style.color = '#ffffff';
       result.innerHTML = 'Submitted successfully!';
       button.style.display = 'block';
       } else {
       result.style.backgroundColor = '#3D1619';
       result.style.color = '#ffffff';
       result.innerHTML = 'Error: ' + data.error;
       button.style.display = 'block';
     }
   } catch (e) {
     console.error(e);
   }
 }
setTimeout(() => {
  showResult("", "<b>Hello! 👋</b><br>SPAM SHARE is <font color=red><b>strictly not for sale.</b></font><br>Please report via PM to the developer. You can use my site freely but don't abuse it.<br><b>Please support me. It will be really appreciated 🤍</b><br><br><a href=\"https://www.facebook.com/profile.php?id=61560865311630\">🤖 Check out Project AutoBot</a><br><a href=\"https://www.facebook.com/100090346516171\">🗨️ Contact the developer</a>", "");
}, 1*1000);
