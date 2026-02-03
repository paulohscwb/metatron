function abrir() {
  window.open(fl, '_self');
}

function sairVR() {
	const sceneEl = document.querySelector('a-scene');
	if (sceneEl.is('vr-mode')) {
		sceneEl.exitVR();
	}
}

function mfaces() {
	var x = document.getElementById("faces")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function marestas() {
	var x = document.getElementById("arestas1")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#ar')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mvertices() {
	var x = document.getElementById("vertices")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#esfera')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mnivel() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelector('#nivel0')
	var entityEl1 = sceneEl.querySelector('#nivel1')
	var entityEl2 = sceneEl.querySelector('#nivel2')
	var entityEl3 = sceneEl.querySelector('#nivel3')
	var entityEl4 = sceneEl.querySelector('#nivel4')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 1) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 2) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 3) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','false');
	} else {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','true');
	}
}

function mnivelRA() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelector('#nivel0')
	var entityEl1 = sceneEl.querySelector('#nivel1')
	var entityEl2 = sceneEl.querySelector('#nivel2')
	var entityEl3 = sceneEl.querySelector('#nivel3')
	var entityEl4 = sceneEl.querySelector('#nivel4')
	var entityEl5 = sceneEl.querySelector('#nivel5')
	var entityEl6 = sceneEl.querySelector('#nivel6')
	var entityEl7 = sceneEl.querySelector('#nivel7')
	var entityEl8 = sceneEl.querySelector('#nivel8')
	var entityEl9 = sceneEl.querySelector('#nivel9')
	var entityEl10 = sceneEl.querySelector('#nivel10')
	var entityEl11 = sceneEl.querySelector('#nivel11')
	var entityEl12 = sceneEl.querySelector('#nivel12')
	var entityEl13 = sceneEl.querySelector('#nivel13')
	var entityEl14 = sceneEl.querySelector('#nivel14')
	var entityEl15 = sceneEl.querySelector('#nivel15')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 1) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 2) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 3) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 4) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','true');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 5) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','true');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 6) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','true');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 7) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','true');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 8) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','true');
	  entityEl7.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 9) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','true');
	  entityEl8.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 10) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','true');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 11) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','true');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 12) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','true');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 13) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','true');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 14) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','true');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','false');
	} else if (p == 15) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl15.setAttribute('visible','true');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	  entityEl11.setAttribute('visible','false');
	  entityEl12.setAttribute('visible','false');
	  entityEl13.setAttribute('visible','false');
	  entityEl14.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	}
}
