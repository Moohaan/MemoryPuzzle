$(document).ready( function() {
	var hey = null;
	var  matched = false;
	var score = 0;
	var turns = 0;
	$('.table .row div').click(function(){
		if ($(this).attr('class')!='active') {
			turns++;
			if (turns%2==0) {
				$('#turns').empty();
				$('#turns').text('Turns:'+turns/2);
			}
			if (hey!=null && !($(hey).prev().attr('src') == $(this).prev().attr('src'))) {
				if (!matched) {
				$(hey).removeClass('active');
			}
				$(this).removeClass('active');
				matched = false;
			}
			else if (hey!=null && ($(hey).prev().attr('src') == $(this).prev().attr('src'))) {
				matched = true;
				$('#matched').empty();
				score++;
				$('#matched').text('Match:'+score);
			}
			$(hey).css("background-image", " ");
			$(this).addClass('active');
			hey = this;
	}
	if (score==8) {
		$('#parentPopUp').removeClass('parentPopUp');
	}
	})
	var RandomImages = new Array();
	var RandomDivs = new Array();
	function In(a , Array) {
		var found = false;
		if (Array.length==0) {
			Array[0] = a;
		}
		else {
			for (var i = 0; i < Array.length; i++) {
				if(Array[i] == a){
					found = true;
				}
			}
			if (!found) {
			Array[Array.length] = a;
		}
		}
	}
	function print(Array) {
		for (var i = 0; i < Array.length; i++) {
			console.log(i,Array[i]);
		}
	}
	function DistributeImages(){
		while (!(RandomImages.length==8)) {
		var r1 = Math.floor((Math.random() * 16) + 1);
		In(r1, RandomImages);
		}
		while (!(RandomDivs.length==16)){
			var r1 = Math.floor((Math.random() * 16) + 1);
			In(r1, RandomDivs);
		}
	}
	function displayImages() {
		for (var i = 0; i < RandomDivs.length; i++) {
			$('#e'+RandomDivs[i]).attr("src","img/"+RandomImages[i/2]+".png");
			$('#e'+RandomDivs[i+1]).attr("src", "img/"+RandomImages[i/2]+".png");
			i++;
		}
	}
	DistributeImages();
	displayImages();
	$('.button , .button1').click(function(){
		score = 0;
		turns = 0;
		$('#parentPopUp').addClass('parentPopUp');
		RandomImages.splice(0, RandomImages.length);
		RandomDivs.splice(0, RandomDivs.length);
		$('.table .row div').removeClass('active');
		$('#turns').text('Turns:'+turns);
		$('#matched').text('Match:'+score);
		DistributeImages();
		displayImages();
	})
	//print(RandomImages);
	//print(RandomDivs);
})