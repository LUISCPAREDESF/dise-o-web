function mostrar_vista(seccion){
	$(".seccion").toggleClass('seccion-oculta',true);
	$(".seccion-"+seccion).toggleClass('seccion-oculta',false);
}