var myFirebaseRef = new Firebase("https://assignmentfirebase.firebaseio.com/");
		var newsText,newsText2,newsText3,newsText4;
		
		myFirebaseRef.child("textdemo").on("value", function(snapshot) {
		  newsText=snapshot.val();
		  document.getElementById('news1').innerHTML=newsText;
		});
		
		myFirebaseRef.child("textdemo2").on("value", function(snapshot) {
		  newsText2=snapshot.val();
		  document.getElementById('news2').innerHTML=newsText2;
		});
		
		myFirebaseRef.child("textdemo3").on("value", function(snapshot) {
		  newsText3=snapshot.val();
		  document.getElementById('news3').innerHTML=newsText3;
		});
		
		myFirebaseRef.child("textdemo4").on("value", function(snapshot) {
		  newsText4=snapshot.val();
		  document.getElementById('news4').innerHTML=newsText4;
		});
		