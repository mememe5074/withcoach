
var answer = [0, 0, 0, 0, 0, 0, 0];

var caoch_name = "klopp";
var coach_detail = "awsome";
var similarity = 5;
var caoch_second = "klopp";
var similarity_2 = 5;
var coach_third = "klopp";
var similarity_3 = 5;
var sum = 0;

var pep = "FC바르셀로나(2008~12)<br>FC바이에른 뮌헨(2013~16)<br>맨체스터시티FC(2016~ )<br>리그우승 7회<br>UEFA챔피언스리그우승 2회<br>리그컵우승 8회<br><br> 트로피 를 약속할 수는 없지만 사람들이 우리를 보고 자랑스러워하도록 만들 것이다. ";
var fug = "맨체스터 유나이티드 FC(1986~2013)<br>프리미어리그 우승 13회<br>UEFA 챔피언스리그 우승 2회<br>FA컵 우승 5회<br><br>\“팀보다 큰 선수는 필요가 없다.\”";
var sut = "독일대표팀(1998~2000/수석코치)<br>코트디부아르 대표팀(2006~2008)<br>대한민국 대표팀(2014~2017)<br><br>\"어떤 전술로 나갔어야 할지 내가 묻고 싶다.\"";
var ben = "발렌시아CF(2001~04)<br>리버풀FC(2004~10)<br>인테르(2010~11)<br>첼시FC(2012~13)<br>나폴리(2013~15)<br>레알 마드리드(2015~16)<br>리그우승 2회<br>UEFA챔피언스리그 우승 1회<br>UEFA 유로파리그우승 1회<br>리그컵 우승 3회<br>\
<br>우리가 할 수 있다고 믿으면, 우리는 그렇게 할 것이다.";
var con = "유벤투스FC (2011~14)<br>이탈리아대표팀 (2014~16)<br>첼시FC (2016~18)<br>FC인테르나치오날레 밀라노(2019~ )<br>리그우승 4회<br>리그컵 3회<br>\“패배는 죽음을 선언한 것과 다름이 없다.\”";
var par = "베트남 대표팀(2017~ )<br>베트남U-23 대표팀(2017~ )<br>스즈키컵 10년 만에 우승<br>아시안컵 최초 8강<br>동남아시안게임 60년 만에 우승<br>\"우리는 최선을 다했기 때문에 자부심을 가져도 된다.\"";


$(function() {
	sum++;
  $('.slick-next').click( function() {
	sum++;
	  console.log(sum);
	  if(sum == 8){
		$(".slick-next").hide();
		$(".slick-arrow").hide();
	}
	});
	
});

$(function() {
  $('.slick-prev').click( function() {
	sum--;
	  console.log(sum);
	});
	
});
console.log(sum);

window.onload = function () {
	$(".slick-next").hide();
	$(".slick-arrow").hide();
}

function button1_click() {
	$(".slick-next").show();
	$(".slick-arrow").show();
	
	$(".slick-next").trigger("click");
	$(".slick-arrow").trigger("click");
}


function button2_click() {
	$(".slick-next").hide();
	$(".slick-arrow").hide();
	
	
	alert("입력하신대로 분석중입니다.");
	$(".slick-next").trigger("click");
	
	$("input[name='q1']:checked").each(function(){
	answer[0] = $(this).val();
});

$("input[name='q2']:checked").each(function(){
	answer[1] = $(this).val();
});

$("input[name='q3']:checked").each(function(){
	answer[2] = $(this).val();
});

$("input[name='q4']:checked").each(function(){
	answer[3] = $(this).val();
});

$("input[name='q5']:checked").each(function(){
	answer[4] = $(this).val();
});

$("input[name='q6']:checked").each(function(){
	answer[5] = $(this).val();
});

$("input[name='q7']:checked").each(function(){
	answer[6] = $(this).val();
});

for(var i=0; i<7;i++){
	console.log(answer[i]);
}

var infoArray = [];
var sortingField = "score";
    infoArray.push({ name : "펩 과르디올라", formation:"4", manage:"3" , media:"3" , attack:"1" , defence:"1" , rotation:"1" , key:"3", score:0 });
    infoArray.push({ name : "알렉스 퍼거슨", formation:"1", manage:"1" , media:"4" , attack:"3" , defence:"2" , rotation:"2" , key:"2", score:0  });
    infoArray.push({ name : "슈틸리케", formation:"3", manage:"4" , media:"3" , attack:"2" , defence:"4" , rotation:"1" , key:"1", score:0  });
    infoArray.push({ name : "달글리시", formation:"3", manage:"2" , media:"4" , attack:"5" , defence:"2" , rotation:"1" , key:"3", score:0  });
	infoArray.push({ name : "베니테즈", formation:"3", manage:"4" , media:"3" , attack:"4" , defence:"4" , rotation:"2" , key:"3", score:0  });
	infoArray.push({ name : "콘테", formation:"5", manage:"1" , media:"4" , attack:"1" , defence:"1" , rotation:"2" , key:"3", score:0  });
	infoArray.push({ name : "박항서", formation:"6", manage:"2" , media:"4" , attack:"1" , defence:"1" , rotation:"1" , key:"5", score:0  });
	infoArray.push({ name : "최강희", formation:"3", manage:"4" , media:"3" , attack:"5" , defence:"2" , rotation:"2" , key:"1", score:0  });
	infoArray.push({ name : "안첼로티", formation:"1", manage:"4" , media:"1" , attack:"1" , defence:"2" , rotation:"1" , key:"3", score:0  });
	infoArray.push({ name : "무리뉴", formation:"2", manage:"2" , media:"2" , attack:"2" , defence:"4" , rotation:"1" , key:"1", score:0  });
	infoArray.push({ name : "지단", formation:"2", manage:"1" , media:"3" , attack:"3" , defence:"2" , rotation:"2" , key:"1" , score:0 });
	infoArray.push({ name : "사리", formation:"2", manage:"2" , media:"4" , attack:"1" , defence:"1" , rotation:"1" , key:"3" , score:0 });
	infoArray.push({ name : "포체티노", formation:"3", manage:"2" , media:"3" , attack:"1" , defence:"1" , rotation:"2" , key:"1", score:0  });
	infoArray.push({ name : "클롭", formation:"2", manage:"2" , media:"1" , attack:"2" , defence:"1" , rotation:"2" , key:"5" , score:0 });
	infoArray.push({ name : "시메오네", formation:"1", manage:"1" , media:"1" , attack:"2" , defence:"4" , rotation:"2" , key:"2" , score:0 });
	infoArray.push({ name : "하인케스", formation:"3", manage:"1" , media:"3" , attack:"1" , defence:"1" , rotation:"2" , key:"2", score:0  });
	infoArray.push({ name : "히딩크", formation:"6", manage:"1" , media:"4" , attack:"2" , defence:"3" , rotation:"2" , key:"3" , score:0 });
	infoArray.push({ name : "알레그리", formation:"1", manage:"3" , media:"1" , attack:"5" , defence:"4" , rotation:"1" , key:"3", score:0  });
	infoArray.push({ name : "뢰브", formation:"3", manage:"4" , media:"4" , attack:"1" , defence:"2" , rotation:"1" , key:"3", score:0  });
	infoArray.push({ name : "벵거", formation:"1", manage:"3" , media:"4" , attack:"1" , defence:"1" , rotation:"1" , key:"3", score:0  });

for(var i=0 ; i<20; i++){
	if (answer[0] == infoArray[i].formation) {
		infoArray[i].score += 10;
		}
	if (answer[1] == infoArray[i].manage) {
		infoArray[i].score += 10;
	}
	if (answer[2] == infoArray[i].media) {
		infoArray[i].score += 10;
	}
	if (answer[3] == infoArray[i].attack) {
		infoArray[i].score += 20;
	}
	if (answer[4] == infoArray[i].defence) {
		infoArray[i].score += 20;
	}
	if (answer[5] == infoArray[i].rotation) {
		infoArray[i].score += 10;
	}
	if (answer[6] == infoArray[i].key) {
		infoArray[i].score += 20;
	}
}
infoArray.sort(function(a, b) { // 내림차순
    return b[sortingField] - a[sortingField];
});

$('#slide9_coach:contains("~")').text(infoArray[0].name);
$('#slide9_coach_p:contains("~")').text(infoArray[0].score);
	
$('#slide9_second:contains("~")').text(infoArray[1].name);
$('#slide9_second_p:contains("~")').text(infoArray[1].score);
	
$('#slide9_third:contains("~")').text(infoArray[2].name);
$('#slide9_third_p:contains("~")').text(infoArray[2].score);
	
if(infoArray[0].name == "펩 과르디올라"){
	$('#coach_img').attr("src","coach/guardiola.jpg");
	document.getElementById("slide9_detail").innerHTML=pep;
	
 }else if(infoArray[0].name == "알렉스 퍼거슨"){
	$('#coach_img').attr("src","coach/ferguson.jpg");
	document.getElementById("slide9_detail").innerHTML=fug;
	 
}else if(infoArray[0].name == "슈틸리케"){
	$('#coach_img').attr("src","coach/stielike.jpg");
	document.getElementById("slide9_detail").innerHTML=sut;
	
}else if(infoArray[0].name == "달글리시"){
	$('#coach_img').attr("src","coach/dalglish.jpg");
	
}else if(infoArray[0].name == "베니테즈"){
	$('#coach_img').attr("src","coach/benitez.jpg");
	document.getElementById("slide9_detail").innerHTML=ben;
	
}else if(infoArray[0].name == "콘테"){
	$('#coach_img').attr("src","coach/conte.jpg");
	document.getElementById("slide9_detail").innerHTML=con;
	
}else if(infoArray[0].name == "박항서"){
	$('#coach_img').attr("src","coach/park.jpg");
	document.getElementById("slide9_detail").innerHTML=par;
	
}else if(infoArray[0].name == "최강희"){
	$('#coach_img').attr("src","coach/choi.jpg");
}else if(infoArray[0].name == "안첼로티"){
	$('#coach_img').attr("src","coach/anchelotti.jpg");
}else if(infoArray[0].name == "무리뉴"){
	$('#coach_img').attr("src","coach/mourinho.jpg");
}else if(infoArray[0].name == "지단"){
	$('#coach_img').attr("src","coach/zidane.jpg");
}else if(infoArray[0].name == "사리"){
	$('#coach_img').attr("src","coach/sarri.jpg");
}else if(infoArray[0].name == "포체티노"){
	$('#coach_img').attr("src","coach/pochettino.jpg");
}else if(infoArray[0].name == "클롭"){
	$('#coach_img').attr("src","coach/klopp.jpg");
}else if(infoArray[0].name == "시메오네"){
	$('#coach_img').attr("src","coach/simeone.jpg");
}else if(infoArray[0].name == "하인케스"){
	$('#coach_img').attr("src","coach/heynckes.jpg");
}else if(infoArray[0].name == "히딩크"){
	$('#coach_img').attr("src","coach/hidink.jpg");
}else if(infoArray[0].name == "알레그리"){
	$('#coach_img').attr("src","coach/allegri.jpg");
}else if(infoArray[0].name == "뢰브"){
	$('#coach_img').attr("src","coach/low.jpg");
}else if(infoArray[0].name == "벵거"){
	$('#coach_img').attr("src","coach/wenger.jpg");
}
}

