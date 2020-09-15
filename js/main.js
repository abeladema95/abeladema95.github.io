// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function myFunction1(){
 document.getElementById("demo").innerHTML = "Bij de emphatize fase ga je je meeleven met je eindgebruiker om beter inzicht te krijgen hoe je je product gaat ontwerpen. Je probeert hun gedachten, emoties, needs en motivatie te achterhalen. ";
}
function myFunction2(){
 document.getElementById("demo").innerHTML = "Tijdens de define fase ga je definieren wat het probleem of de need is, hierbij kijk je terug naar de vorige fase om tot een goed antwoord te komen.";
}
function myFunction3(){
 document.getElementById("demo").innerHTML = "In de Ideate fase is het doel simpel: zo veel mogelijk ideeen en ingevingen verzamelen, vervolgens ga je hier met je team de beste ideeen uit bepalen ";
}
function myFunction4(){
 document.getElementById("demo").innerHTML = "Bij Protoype ga je bijvorbeeld een papieren prototype maken om te kijken waar je tegen aanloopt, en om je ideeen 'leven' te geven. Ook kan je hier sommige tests al mee uitvoeren en aan je eindgebruiker laten zien voor extra inzicht. ";
}
function myFunction5(){
 document.getElementById("demo").innerHTML = "Bij test ga je je product aan eindgebruikers laten testen, en eventueel verbeteringen aanbrengen, of in het ergste geval blijkt er een fatale fout in je product te zitten en moet je deels overnieuw beginnen. ";
}
function myFunction6(){
 document.getElementById("demo1").innerHTML = "Deskresearch is research dat je uitvoert op andersmans onderzoeken en rapporten, om meer te weten te komen over bijvorbeeld een doelgroep";
}
function myFunction7(){
 document.getElementById("demo1").innerHTML = "Een persona is een denkbeeldige eindgebruiker van je product, zijn interesses, persoonlijkheid en struikelblokken worden omschreven.";
}
function myFunction8(){
 document.getElementById("demo1").innerHTML = "Interviews gebruik je om meer inzicht te krijgen in je doelgroep.";
}
function myFunction9(){
 document.getElementById("demo2").innerHTML = "Kleur is erg belangrijk bij UX design, het schets een sfeer. Kleuren als groen worden als natuurlijk gezien, terwijl blauw als 'betrouwbaar' wordt gezien.";
}
function myFunction10(){
 document.getElementById("demo2").innerHTML = "Typografie is de kunst van het vormgeven, zetten en drukken van tekst, zowel voor functionele als esthetische doeleinden. Erg belangrijk voor UX dus.";
}
function myFunction11(){
 document.getElementById("demo2").innerHTML = "Rastering is het verdelen van een UX in verschillende, gelijke stukken. Dit kan helpen met usability en overzicht. ";
}
function myFunction12(){
 document.getElementById("demo2").innerHTML = "Margin/padding is de ruimte die je overlaat tussen verschillende elementen met css, dit zorgt voor een prettig ogende website en de leesbaarheid daarvan.";
}
function myFunction13(){
 document.getElementById("demo2").innerHTML = "Een Affordance is iets dat een object kan doen, in dit geval in html/css. Een signifier is een indicator van wat dit object gaat doen of al doet. ";
}
