function Login(){
		var done=0;
		var username=document.login.username.value;
			username=username.toLowerCase();
		var password=document.login.password.value;
			password=password.toLowerCase();
			if (username=="fkrz" && password=="sosa") {setTimeout(
				function(){
				window.location = "01201001.html" 
				},
				1000);}
			else 
				if (done==0) { alert("Username atau Password SALAH!"); }
}