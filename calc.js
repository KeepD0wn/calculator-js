$(function(){

	var numbers;
	var input = $("#input");

	function Insert(num){		
		if(typeof numbers=="undefined"){
			numbers=num;
		}
		else{
			numbers+=num;
		}
		
		input.val(numbers);
	}

	function Clean(){		
		numbers="";
		input.val(numbers);
	}

	function Back(){
		numbers=numbers.substring(0,numbers.length-2);
		input.val(numbers);
	}

	function Equal(){
		numbers=numbers.substring(0,numbers.length-1);
		if(numbers){					
			numbers = eval(numbers);
			input.val(numbers); 
		}
	}

	$(".item").on("click",function(event){
		event.preventDefault();
		Insert($(this).text());
	});

	$(".clean").on("click",function(event){
		event.preventDefault();
		Clean();
	});

	$(".back").on("click",function(event){		
		event.preventDefault();
		Back();
	});

	$(".equal").on("click",function(event){		
		event.preventDefault();
		Equal();
	});

});