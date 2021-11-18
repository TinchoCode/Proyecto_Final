function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function showCosas(noVer, ver){
  var elemento = document.getElementsByClassName(noVer);
  for(i=0; i<elemento.length; i++){elemento[i].style.display = 'none'}
  var elemento2 = document.getElementsByClassName(ver);
  for(i=0; i<elemento2.length; i++){elemento2[i].style.display = 'block'}

}

