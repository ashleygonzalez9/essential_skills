// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
/* these are all variables that were created. it's useful when i want to call an image that's in the html by the id it has which is the words in the parenthesis.*/ 
a = document.getElementById("trina");
b = document.getElementById ("student_pages");
c = document.getElementById ("essential_skills");
/* the function nextRoom is a onclick that is on an image that is in my html and this function is used so when the image with this onclick is clicked it'll take it to the link that is under this function. */
function trinasPage (el) { 
	document.location.href = "https://trinanumana.github.io/worldofcats/";
} 
 
 
 function leahsPage (el) { 
	document.location.href = "https://leahtorres.github.io/supermanjs1/home.html";
} 

 function edwardsPage (el) { 
	document.location.href = "https://efeves.github.io/space/";
} 

 function kobysPage (el) { 
	document.location.href = "https://kobywu.github.io/bts/phase6/javascript.html";
} 
 function malakhyesPage (el) { 
	document.location.href = "https://malakhyeshine.github.io/Arkham/final_phase/index.html";
} 

 function alejandrosPage (el) { 
	document.location.href = "https://senseisilva.github.io/hyper8/index.html";
} 

function studentPage(el) { 
	document.location.href = "https://ashleygonzalez9.github.io/studentwebsitepage/student_websites.html#";
} 

function skillsPage(el) { 
	document.location.href = "https://ashleygonzalez9.github.io/essential_skills/Essential_Skills.html# ";
} 

function escapePage (el) { 
	document.location.href = "https://docs.google.com/document/d/1cvuh0Cqh_3Ud9LKuqwgoekutlegN9I2Cjq_jbgbuuIw/edit";
} 

function robotPage (el) { 
	document.location.href = "https://docs.google.com/document/d/1jkwqFXIjVttC_23BFMZSgnLrqdQ3CAhcAiwxTdBhKg0/edit";
} 
