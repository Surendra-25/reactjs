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

var newfile = loadjson("task3.json");
newfile.then(data=>{
	console.log(data);
	basic();
	cards();

})

var navigation = document.querySelector(".navigation");

function basic(){
	var nav=document.createElement("nav");
	nav.setAttribute("class","navbar navbar-expand-sm bg-dark navbar-dark");
	//nav.setAttribute("style","background-color:blue");
	navigation.appendChild(nav);

	var navbar = document.querySelector(".navbar");
		var navlink = document.createElement("a");
		navlink.setAttribute("class","navbar-brand");
		//navlink.setAttribute("style","color:black");
		navlink.textContent = "Tasks";
		navbar.appendChild(navlink);
		
		var button= document.createElement("button");
		button.setAttribute("class","navbar-toggler");
		button.setAttribute("type","button");
		button.setAttribute("data-toggle","collapse");
		button.setAttribute("data-target","#collapsibleNavbar");
		navbar.appendChild(button);

		var buttontoggler=document.querySelector(".navbar-toggler");
			var span=document.createElement("span");
			span.setAttribute("class","navbar-toggler-icon");
			span.setAttribute("style","color:black")
			buttontoggler.appendChild(span);
		
		var div = document.createElement("div");
		div.setAttribute("class","collapse navbar-collapse");
		div.setAttribute("id","collapsibleNavbar");
		navbar.appendChild(div);

		var divi=document.querySelector(".collapse");

			var ul = document.createElement("ul");
			ul.setAttribute("class","nav nav-pills");
			divi.appendChild(ul);

			var navpills=document.querySelector(".nav-pills");
				var an = document.createElement("a");
				an.setAttribute("class","nav-brand");
				navpills.appendChild(an);

				var a1=document.querySelector(".nav-brand");
					var img= document.createElement("img");
					img.src="1.png";
					img.alt="logo";
					img.setAttribute("style","width:40px;border-radius:50%");
					a1.appendChild(img);

				var li=document.createElement("li");
				li.setAttribute("class","nav-item");
				li.setAttribute("id","nav-item1");
				navpills.appendChild(li);

				var part1=document.querySelector("#nav-item1");
					var a=document.createElement("a");
					a.setAttribute("class","nav-link active");
					a.setAttribute("data-toggle","pill");
					//a.setAttribute("style","color:black");
					a.href="#home";
					a.textContent="Resume";
					part1.appendChild(a);

				var li=document.createElement("li");
				li.setAttribute("class","nav-item");
				li.setAttribute("id","nav-item2");
				navpills.appendChild(li);

				var part2=document.querySelector("#nav-item2");
					var a=document.createElement("a");
					a.setAttribute("class","nav-link");
					a.setAttribute("data-toggle","pill");
					//a.setAttribute("style","color:black");
					a.href="#login";
					a.textContent="Navbar";
					part2.appendChild(a);

				var li=document.createElement("li");
				li.setAttribute("class","nav-item");
				li.setAttribute("id","nav-item3");
				navpills.appendChild(li);

				var part3=document.querySelector("#nav-item3");
					var a=document.createElement("a");
					a.setAttribute("class","nav-link");
					a.setAttribute("data-toggle","pill");
					//a.setAttribute("style","color:black");
					a.href="#register";
					a.textContent="Register";
					part3.appendChild(a);

				var li=document.createElement("li");
				li.setAttribute("class","nav-item");
				li.setAttribute("id","nav-item4");
				navpills.appendChild(li);

				var part4=document.querySelector("#nav-item4");
					var div =document.createElement("div");
					div.setAttribute("class","dropdown");
					part4.appendChild(div);

					var d=document.querySelector(".dropdown");
						var a=document.createElement("a");
						a.setAttribute("class","btn dropdown-toggle");
						a.setAttribute("href","#dropdown");
						a.setAttribute("role","button");
						a.setAttribute("id","dropdownMenuLink");
						a.setAttribute("data-toggle","dropdown");
						a.setAttribute("aria-haspopup","true");
						a.setAttribute("aria-expanded","false");
						a.setAttribute("style","color:#3492eb");
						a.textContent="dropdown link";
						d.appendChild(a);

						var d1=document.createElement("div");
						d1.setAttribute("class","dropdown-menu");
						d1.setAttribute("aria-labelledby","dropdownMenuLink");
						d.appendChild(d1);

						var d1 =document.querySelector(".dropdown-menu");
							var a=document.createElement("a");
							a.setAttribute("class","dropdown-item");
							a.setAttribute("href","#");
							a.textContent="Resume";
							d1.appendChild(a);

							var a=document.createElement("a");
							a.setAttribute("class","dropdown-item");
							a.setAttribute("href","#");
							a.textContent="login";
							d1.appendChild(a);
							
							var a=document.createElement("a");
							a.setAttribute("class","dropdown-item");
							a.setAttribute("href","#");
							a.textContent="register";
							d1.appendChild(a);
	
}

var child = document.querySelector(".child");

function cards(){
	child.setAttribute("class","child tab-content");

	var div=document.createElement("div");
	div.setAttribute("class","tab-pane container active resume");
	div.setAttribute("id","home");
	//div.textContent="this is home";
	child.appendChild(div);

	var container=document.querySelector(".container");
		var div=document.createElement("div");
		div.setAttribute("class","row");
		container.appendChild(div);

		var row=document.querySelector(".row");	
			var div=document.createElement("div");
			div.setAttribute("class","card shadow");
			div.setAttribute("id","card1");
			//div.setAttribute("style","width:20rem");
			row.appendChild(div);

			var card1=document.querySelector("#card1");
				var img=document.createElement("img");
				img.setAttribute("class","card-img-top");
				img.src="resume2.jpg";
				img.setAttribute("style","border:1px solid black")
				card1.appendChild(img);

				var div=document.createElement("div");
				div.setAttribute("class","card-body text-center");
				div.setAttribute("id","cardbody1");
				card1.appendChild(div);

				var body1=document.querySelector("#cardbody1");
					var h=document.createElement("h5");
					h.setAttribute("class","card-title");
					h.textContent="Resume";
					body1.appendChild(h);

					var p=document.createElement("p");
					p.setAttribute("class","card-text");
					p.textContent="Static Design";
					body1.appendChild(p);

					var a=document.createElement("a");
					a.setAttribute("href","static_resume.html");
					a.setAttribute("class","btn btn-success");
					a.textContent="click";
					body1.appendChild(a);

			var div=document.createElement("div");
			div.setAttribute("class","card shadow");
			div.setAttribute("id","card2");
			//div.setAttribute("style","width:20rem");
			row.appendChild(div);

			var card2=document.querySelector("#card2");
				var img=document.createElement("img");
				img.setAttribute("class","card-img-top");
				img.src="reume1.jpg";
				card2.appendChild(img);

				var div=document.createElement("div");
				div.setAttribute("class","card-body text-center");
				div.setAttribute("id","cardbody2");
				card2.appendChild(div);

				var body2=document.querySelector("#cardbody2");
					var h=document.createElement("h5");
					h.setAttribute("class","card-title");
					h.textContent="Resume";
					body2.appendChild(h);

					var p=document.createElement("p");
					p.setAttribute("class","card-text");
					p.textContent="Dynamic Design";
					body2.appendChild(p);

					var a=document.createElement("a");
					a.setAttribute("href","dynamic_resume.html");
					a.setAttribute("class","btn btn-success");
					a.textContent="click";
					body2.appendChild(a);




		var div =document.createElement("div");
		div.setAttribute("class","");
		div.setAttribute("id","div3");
			row.appendChild(div);





	var div=document.createElement("div");
	div.setAttribute("class","tab-pane container fade navbar_");
	div.setAttribute("id","login");
	//div.textContent="this is login";
	child.appendChild(div);

	var container=document.querySelector(".navbar_");
		var div=document.createElement("div");
		div.setAttribute("class","row2");
		container.appendChild(div);

		var row=document.querySelector(".row2");	
			var div=document.createElement("div");
			div.setAttribute("class","card shadow");
			div.setAttribute("id","card3");
			//div.setAttribute("style","width:20rem");
			row.appendChild(div);

			var card1=document.querySelector("#card3");
				var img=document.createElement("img");
				img.setAttribute("class","card-img-top");
				img.src="navbar.jpg";
				img.setAttribute("style","border:1px solid black")
				card1.appendChild(img);

				var div=document.createElement("div");
				div.setAttribute("class","card-body text-center");
				div.setAttribute("id","cardbody3");
				card1.appendChild(div);

				var body1=document.querySelector("#cardbody3");
					var h=document.createElement("h5");
					h.setAttribute("class","card-title");
					h.textContent="Navbar";
					body1.appendChild(h);

					var p=document.createElement("p");
					p.setAttribute("class","card-text");
					p.textContent="Bootstrap Navbar Static Design";
					body1.appendChild(p);

					var a=document.createElement("a");
					a.setAttribute("href","static_navbar.html");
					a.setAttribute("class","btn btn-success");
					a.textContent="click";
					body1.appendChild(a);

			var div=document.createElement("div");
			div.setAttribute("class","card shadow");
			div.setAttribute("id","card4");
			//div.setAttribute("style","width:20rem");
			row.appendChild(div);

			var card2=document.querySelector("#card4");
				var img=document.createElement("img");
				img.setAttribute("class","card-img-top");
				img.src="navbar2.png";
				card2.appendChild(img);

				var div=document.createElement("div");
				div.setAttribute("class","card-body text-center");
				div.setAttribute("id","cardbody4");
				card2.appendChild(div);

				var body2=document.querySelector("#cardbody4");
					var h=document.createElement("h5");
					h.setAttribute("class","card-title");
					h.textContent="Resume";
					body2.appendChild(h);

					var p=document.createElement("p");
					p.setAttribute("class","card-text");
					p.textContent="Bootstrap Navbar Dynamic Design";
					body2.appendChild(p);

					var a=document.createElement("a");
					a.setAttribute("href","task3.html");
					a.setAttribute("class","btn btn-success");
					a.textContent="click";
					body2.appendChild(a);








	var div=document.createElement("div");
	div.setAttribute("class","tab-pane container fade");
	div.setAttribute("id","register");
	div.textContent="this is register";
	child.appendChild(div)
}