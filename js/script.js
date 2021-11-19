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

function tikiTaka(invocoA){
  var v = document.getElementsByClassName('viendo');
  var invocado = document.getElementsByClassName(invocoA);
  for(i=0; i<v.length; i++){
    v[i].style.display = 'none'
    v[i].classList.remove('viendo');
    for(j=0; j<invocado.length; j++){
      invocado[i].style.display = 'block'
      invocado[i].classList.remove('escond');
      invocado[i].classList.add('viendo');
    }
    v[i].classList.add('escond');
  }
}

