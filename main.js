function loadJSON(file){
return new Promise((resolve,reject)=>{
  return fetch(file).then(response=>{
    if(response.ok){
      resolve(response.json());
    }
    else {
      reject(new Error('error'));
    }

  })
})
}
var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var child2=document.querySelector("#child2");
function career(car) {
  var heading=document.createElement("h2");
  heading.textContent="Career Objective";
  child2.appendChild(heading);
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);

}
function education(edu){
  var heading=document.createElement("h2");
  heading.textContent="Education Qualifications";
  child2.appendChild(heading);
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  var table=document.createElement("table");
  child2.appendChild(table);
  var tr="<tr> <td> S.no </td> <td> Degree </td> <td> Institute </td> <td> Data </td> </tr>";
  //table.innerHTML=tr;
  table.border="1";
    var tr1="";
for(var i=0;i<edu.length;i++){
     tr1+="<tr><td>"+(i+1)+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>"
}
 table.innerHTML=tr+tr1;
}
function skills(skills){
  var heading=document.createElement("h2");
  heading.textContent="Technical Skills";
  child2.appendChild(heading);
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  for(var i=0;i<skills.length;i++){
  var title=document.createElement("h4");
  title.textContent=skills[i].title;
  child2.appendChild(title);
  var list=document.createElement("ul");
  child2.appendChild(list);
  console.log(skills[i].set.length);
  for(var j=0;j<skills[i].set.length;j++){
    var listItem=document.createElement("li");
    listItem.textContent=skills[i].set[j];
    list.appendChild(listItem);
  }
}

}
