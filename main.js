let table = document.querySelector("table");
let thead = document.querySelector("thead");
let tbody = document.querySelector("tbody");
let data = [
  { id: 1, name: "John Doe", age: 25, action: "del edit" },
  { id: 2, name: "Jane Doe", age: 30, action: "del edit" },
  { id: 3, name: "Alice Doe", age: 28, action: "del edit" },
];

data.forEach((val) => {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdName = document.createElement("td");
  let tdAge = document.createElement("td");
  let tdAction = document.createElement("td");

  tdId.textContent = val.id;
  tdName.textContent = val.name;
  tdAge.textContent = val.age;
  tr.append(tdId, tdName, tdAge, tdAction);
  tbody.append(tr);

  val.action.split(" ").forEach((item) => {
    let btn = document.createElement("button");
    btn.textContent = item;
    btn.style.padding = "10px 20px";  
    btn.style.fontSize = "16px";      
    btn.style.margin = "0 5px";
    btn.style.border = "none";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";

    if (item === "del") {
      btn.style.backgroundColor = "#f44336";
      btn.style.color = "white";
      btn.addEventListener("click", () => {
        tr.remove();
      });
    } else if (item === "edit") {
      btn.style.backgroundColor = "#ffeb3b"; 
      btn.style.color = "black";
      btn.addEventListener("click", () => {
        tdName.contentEditable = true;
        tdAge.contentEditable = true;
        tdName.focus();
      });
    }

    tdAction.append(btn);
  });
});
