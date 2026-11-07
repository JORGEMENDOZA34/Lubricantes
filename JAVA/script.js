var N="51910310405";
/* EDITA AQUÍ: promociones y catálogo. Agrega p:"S/ 99" a un producto para mostrar su precio. */
var PROMOS=[
{t:"Cambio de aceite + filtro",d:"Llévate el aceite y el filtro juntos para tu mantenimiento.",g:"Combo"},
{t:"Líquido de frenos + revisión",d:"Cambia tu líquido de frenos y revisa el estado de pastillas y discos.",g:"Seguridad"},
{t:"Compras al por mayor",d:"Precio especial para talleres, flotas y negocios. Consulta por volumen.",g:"Mayorista"}
];
var CAT=[
{n:"Aceite 5W-30 sintético",c:"Aceites de motor",d:"Para motores a gasolina modernos. Mayor protección y ahorro."},
{n:"Aceite 10W-40 semisintético",c:"Aceites de motor",d:"Uso diario en autos con kilometraje medio."},
{n:"Aceite 20W-50 mineral",c:"Aceites de motor",d:"Para motores con alto kilometraje."},
{n:"Aceite diésel 15W-40",c:"Aceites de motor",d:"Para camionetas y vehículos diésel."},
{n:"ATF caja automática",c:"Transmisión",d:"Fluido para cajas automáticas y direcciones hidráulicas."},
{n:"Aceite de caja 80W-90",c:"Transmisión",d:"Cajas manuales y diferenciales."},
{n:"Líquido de frenos DOT 4",c:"Frenos",d:"Frenado firme y seguro. Cámbialo cada cierto tiempo."},
{n:"Pastillas de freno",c:"Frenos",d:"Según marca, modelo y año. Dinos tu vehículo."},
{n:"Discos de freno",c:"Frenos",d:"Ventilados o sólidos, según tu vehículo."},
{n:"Refrigerante",c:"Aditivos",d:"Protege el motor contra el sobrecalentamiento."},
{n:"Limpiador de inyectores",c:"Aditivos",d:"Ayuda a mantener limpio el sistema de combustible."},
{n:"Filtro de aceite",c:"Filtros",d:"Compatible con tu motor. Consulta el modelo."}
];
var REV={
"Aceite 5W-30 sintético":"Aceite de baja viscosidad pensado para motores a gasolina modernos. Fluye rápido en el arranque en frío y protege bien con uso exigente. Ideal para autos de uso diario en ciudad.",
"Aceite 10W-40 semisintético":"Equilibrio entre protección y precio. Una opción popular para autos con kilometraje medio que buscan buen rendimiento sin pasar a un sintético completo.",
"Aceite 20W-50 mineral":"Aceite de mayor viscosidad que mantiene la película protectora en motores con desgaste o alto kilometraje. Ideal para vehículos antiguos y clima cálido.",
"Aceite diésel 15W-40":"Formulado para soportar el hollín y la exigencia de los motores diésel. Recomendado para camionetas, pick-ups y vehículos de trabajo.",
"ATF caja automática":"Fluido para cajas automáticas y direcciones hidráulicas. Ayuda a lograr cambios suaves y a proteger los componentes internos. Confirma la especificación de tu vehículo.",
"Aceite de caja 80W-90":"Lubricante de engranajes para cajas manuales y diferenciales. Reduce el desgaste y el ruido bajo carga. Ideal para mantenimiento de transmisión.",
"Líquido de frenos DOT 4":"Mantiene el pedal firme y responde bien a altas temperaturas. Con el tiempo absorbe humedad, por eso conviene cambiarlo según el plan de mantenimiento de tu vehículo.",
"Pastillas de freno":"Repuesto clave para frenar con seguridad. Cada vehículo usa una medida distinta, así que te recomendamos según marca, modelo y año. Cambia las pastillas al primer ruido o desgaste.",
"Discos de freno":"Superficie de frenado que trabaja junto con las pastillas. Se recomienda cambiarlos en pares y revisarlos cuando vibra el pedal. Consulta el tipo que lleva tu vehículo.",
"Refrigerante":"Protege el motor del sobrecalentamiento y de la corrosión del circuito. Un nivel y una mezcla correctos ayudan a que el motor dure más.",
"Limpiador de inyectores":"Aditivo que ayuda a mantener limpio el sistema de combustible, para un funcionamiento más parejo del motor. Se agrega directamente al tanque.",
"Filtro de aceite":"Retiene impurezas para que el aceite circule limpio. Es buena práctica cambiarlo en cada cambio de aceite. Dinos tu vehículo y te indicamos el modelo compatible."
};
function pic(x){
  if(x.img)return '<img src="'+x.img+'" alt="'+x.n+'">';
  if(/Pastillas|Discos/.test(x.n)){
    var h='';for(var k=0;k<5;k++){var g=k*72*Math.PI/180;h+='<circle cx="'+(60+32*Math.sin(g)).toFixed(1)+'" cy="'+(60-32*Math.cos(g)).toFixed(1)+'" r="5" fill="#14213d"/>';}
    return '<svg viewBox="0 0 120 120" role="img" aria-label="'+x.n+'"><circle cx="60" cy="60" r="54" fill="#c8cfdd"/><circle cx="60" cy="60" r="20" fill="#14213d"/>'+h+'</svg>';
  }
  var m=/\d+W-\d+/.exec(x.n),l=m?m[0]:x.c.charAt(0);
  var col={"Aceites de motor":"#f2a900","Transmisión":"#d9822b","Frenos":"#1659b8","Aditivos":"#2aa66a","Filtros":"#6b7a99"}[x.c]||"#f2a900";
  return '<svg viewBox="0 0 120 150" role="img" aria-label="'+x.n+'"><rect x="44" y="6" width="32" height="22" rx="5" fill="#14213d"/><path d="M40 28h40l14 22v84a10 10 0 0 1-10 10H36a10 10 0 0 1-10-10V50z" fill="'+col+'"/><rect x="34" y="66" width="52" height="46" rx="6" fill="#fff"/><text x="60" y="95" text-anchor="middle" font-family="Barlow Condensed,sans-serif" font-style="italic" font-weight="800" font-size="19" fill="#0b2a6b">'+l+'</text></svg>';
}
function openP(x){
  var d=document.getElementById("dlg");
  document.getElementById("dFig").innerHTML=pic(x);
  document.getElementById("dT").textContent=x.n;
  document.getElementById("dC").textContent=x.c;
  document.getElementById("dR").textContent=REV[x.n]||x.d;
  document.getElementById("dL").href=wa("Hola, quiero cotizar: "+x.n);
  d.showModal();
}
(function(){
  var dl=document.getElementById("dlg");
  document.getElementById("dX").onclick=function(){dl.close()};
  dl.addEventListener("click",function(e){if(e.target===dl)dl.close()});
  var pl=document.getElementById("promoList");
  PROMOS.forEach(function(x){
    var a=document.createElement("article");a.className="promo";
    a.innerHTML='<span class="tag"></span><h3></h3><p></p><a class="btn wa" href="#">Quiero esta promo</a>';
    a.querySelector(".tag").textContent=x.g;a.querySelector("h3").textContent=x.t;a.querySelector("p").textContent=x.d;
    a.querySelector(".wa").setAttribute("data-msg","Hola, me interesa la promoción: "+x.t);
    pl.appendChild(a);
  });
  var cl=document.getElementById("catList"),ch=document.getElementById("chips"),cats=["Todos"];
  CAT.forEach(function(x){if(cats.indexOf(x.c)<0)cats.push(x.c)});
  CAT.forEach(function(x,i){
    var a=document.createElement("article");a.className="prod";a.setAttribute("data-c",x.c);
    a.innerHTML='<div class="ph'+(i%3==1?' a':'')+'"></div><div class="bd"><h3></h3><p></p><span class="price"></span><button class="btn alt det" type="button">Ver detalle</button><a class="btn wa" href="#">Cotizar</a></div>';
    a.querySelector(".ph").innerHTML=pic(x);a.querySelector(".ph").onclick=function(){openP(x)};a.querySelector(".det").onclick=function(){openP(x)};a.querySelector("h3").textContent=x.n;a.querySelector("p").textContent=x.d;
    a.querySelector(".price").textContent=x.p||"";
    a.querySelector(".wa").setAttribute("data-msg","Hola, quiero cotizar: "+x.n);
    cl.appendChild(a);
  });
  cats.forEach(function(c,i){
    var b=document.createElement("button");b.type="button";b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",i==0?"true":"false");
    b.onclick=function(){
      ch.querySelectorAll(".chip").forEach(function(k){k.setAttribute("aria-pressed",k===b?"true":"false")});
      cl.querySelectorAll(".prod").forEach(function(p){p.hidden=!(c==="Todos"||p.getAttribute("data-c")===c)});
    };
    ch.appendChild(b);
  });
})();
function wa(t){return "https://wa.me/"+N+"?text="+encodeURIComponent(t)}
document.querySelectorAll(".wa").forEach(function(a){
  var t=a.getAttribute("data-msg");
  if(t){a.href=wa(t);a.target="_blank";a.rel="noopener"}
});
document.getElementById("f").addEventListener("submit",function(e){
  e.preventDefault();
  var d=new FormData(e.target);
  var t="Hola, necesito: "+d.get("need")+". Vehículo: "+d.get("auto")+(d.get("anio")?" ("+d.get("anio")+")":"")+", combustible "+d.get("comb")+". ¿Qué me recomiendan?";
  window.open(wa(t),"_blank","noopener");
});