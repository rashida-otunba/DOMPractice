// update header
document.getElementById("main-heading").innerHTML = "New DOM Layout";
document.getElementById("page-header").classList.add("bg-success");
// update paragraph language
document.getElementById("para1").innerHTML = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
document.getElementById("para2").innerHTML = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
// add a click event function to the button which will create a new paragraph in the box layout when on clicks on it.
document.addEventListener("click", function(){
    document.getElementById("btn").textContent="The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
} );
// change each boxes to the proper colors mentioned in them. Note the new classLists you are to add for each boxes:
// First box: bg-danger
document.getElementById("red").classList.remove("bg-white");
document.getElementById("red").classList.add("bg-danger");
// Second box: bg-primary
document.getElementById("blue").classList.remove("bg-white");
document.getElementById("blue").classList.add("bg-primary");
// Third box: bg-warning
document.getElementById("yellow").classList.remove("bg-white");
document.getElementById("yellow").classList.add("bg-warning");
// Fourth box: bg-success
document.getElementById("green").classList.remove("bg-white");
document.getElementById("green").classList.add("bg-success");
// Fifth box: bg-dark
document.getElementById("black").classList.remove("bg-white");
document.getElementById("black").classList.add("bg-dark");

