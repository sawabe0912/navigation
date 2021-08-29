 const navbar = document.getElementById("menu-bars");
 const nav1 = document.getElementById("nav-1");
 const nav2 = document.getElementById("nav-2");
 const nav3 = document.getElementById("nav-3");
 const nav4 = document.getElementById("nav-4");
 const overlay = document.getElementById("overlay");
 const navbars = [nav1, nav2, nav3, nav4];

navbar.addEventListener("click", change);

function change(){
    overlay.classList.toggle("overlay-active");
    navbar.classList.toggle("change");
	if(overlay.classList.contains("overlay-active")){
	  overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
      navAnimation("out", "in");
	}else{
	  overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
      navAnimation("in", "out");
	}
}

function navAnimation(direction1, direction2){
	navbars.forEach((nav, i) => {
		nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`)
	})
}