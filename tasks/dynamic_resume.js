function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("dynamic_resume.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	careerinfo(data.careerobjective);
	education(data.educationalqualification);
	skills(data.techinicalskills);
	achievements(data.achievements);
})

var card = document.querySelector(".card1");

function basic(d){
	var img=document.createElement("img");
	img.setAttribute("class","profile");
	img.src=d.image;
	img.alt="display picture";
	card.appendChild(img);

	var b=document.createElement("br");
	card.appendChild(b);

	var b=document.createElement("br");
	card.appendChild(b);

	var img=document.createElement("img");
	img.setAttribute("class","info");
	img.src="person.png";
	card.appendChild(img);

	var strong=document.createElement("strong");
	strong.setAttribute("style","font-size:150%;padding-right:5%");
	strong.textContent=" - "+d.name;
	card.appendChild(strong);

	var b=document.createElement("br");
	card.appendChild(b);

	var b=document.createElement("br");
	card.appendChild(b);

	var div=document.createElement("div");
	div.setAttribute("style","overflow-x: auto");
	div.setAttribute("id","email");
	card.appendChild(div);

	var div1=document.querySelector("#email");
		var img=document.createElement("img");
		img.setAttribute("class","info");
		img.src="download.png";
		div1.appendChild(img);

		var strong=document.createElement("strong");
		strong.setAttribute("style","font-size:95%;padding-right:2%");
		strong.textContent=" - "+d.email;
		div1.appendChild(strong);

	var b=document.createElement("br");
	card.appendChild(b);

	var img=document.createElement("img");
	img.setAttribute("class","info");
	img.setAttribute("style","border-radius: 50%");
	img.src="contact.jpg";
	card.appendChild(img);

	var strong=document.createElement("strong");
	strong.setAttribute("style","font-size:130%");
	strong.textContent=" - "+d.number;
	card.appendChild(strong);

	var h3=document.createElement("h3");
	h3.textContent="Address :";
	h3.setAttribute("class","h3");
	card.appendChild(h3);

	card.appendChild(document.createElement("hr"));

	var address1 = document.createElement("p");
	address1.setAttribute("style","font-size:120%");
	address1.textContent=d.address;
	card.append(address1);

}

var card2=document.querySelector(".card2");

function careerinfo(info1){
	var h3=document.createElement("h3");
	h3.setAttribute("style","background-color:#dddddd");
	h3.textContent="Carrer Objective :";
	card2.appendChild(h3);

	var p=document.createElement("p");
	p.textContent=info1.info;
	card2.appendChild(p);

}

function education(e){
	var h3=document.createElement("h3");
	h3.setAttribute("style","background-color:#dddddd");
	h3.textContent="Education :";
	card2.appendChild(h3);

	var div=document.createElement("div");
	div.setAttribute("class","table1");
	card2.appendChild(div);

	var divt=document.querySelector(".table1");
		var table=document.createElement("table");
		table.setAttribute("id","table");
		table.border="1";
		divt.appendChild(table);

		tabledata="<tr><th>SNO</th><th>College</th><th>Passout Year</th><th>Percentage</th></tr>";
		for(i=0;i<e.length;i++){
			tabledata+="<tr><td>"+e[i].sno+"</td><td>"+e[i].institute+"</td><td>"+e[i].passoutyear+"</td><td>"+e[i].percentage+"</td></tr>";
		}
		table.innerHTML=tabledata;

}
function skills(skill){
	var head=document.createElement("h3");
	head.setAttribute("style","background-color:#dddddd");
	head.textContent="Technical Skills :";
	card2.appendChild(head);

	var list=document.createElement("ol");
	list.setAttribute("type","1");
	card2.appendChild(list);

	listdata="";
	for(i=0;i<skill.length;i++){
		listdata+="<li><h5>"+skill[i].title+"</h5><span class=\"bar\"><span class=\""+skill[i].title+"\"></span></span></li>"
	}
	list.innerHTML=listdata;

}
function achievements(a){
	var head=document.createElement("h3");
	head.setAttribute("style","background-color:#dddddd");
	head.textContent="Achievements :";
	card2.appendChild(head);

	var list=document.createElement("ul");
	card2.appendChild(list);

	data="";
	for(i=0;i<a.length;i++){
		data+="<li>"+a[i].Achieved+"</li>";
	}
	list.innerHTML=data;
}