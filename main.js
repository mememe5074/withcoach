
var answer = [0, 0, 0, 0, 0, 0, 0];

var caoch_name = "klopp";
var coach_detail = "awsome";
var similarity = 5;
var caoch_second = "klopp";
var similarity_2 = 5;
var coach_third = "klopp";
var similarity_3 = 5;

var text = 'web<br>is<br>free';


var strTest = "테스트\n합니다.\n다시한번\n테스트 합니다.";


var pep = "FC바르셀로나(2008~2012)\nFC바이에른 뮌헨(2013~2016)\n맨체스터시티FC(2016~ )\n리그우승 7회\nUEFA챔피언스리그우승 2회\n리그컵우승 8회";
var result = pep.replace(/\n/g, '<p>');


function button1_click() {
	alert("버튼1을 누르셨습니다.");
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
	document.getElementById("slide9_detail").innerHTML=pep;
 }else if(infoArray[0].name == "알렉스 퍼거슨"){
	$('#coach_img').attr("src","coach/ferguson.jpg");
	 $('#slide9_detail:contains("~")').text(fug);
}else if(infoArray[0].name == "슈틸리케"){
	$('#coach_img').attr("src","coach/stielike.jpg");
	$('#slide9_detail:contains("~")').text(sut);
}else if(infoArray[0].name == "달글리시"){
	$('#coach_img').attr("src","coach/dalglish.jpg");
}else if(infoArray[0].name == "베니테즈"){
	$('#coach_img').attr("src","coach/benitez.jpg");
	$('#slide9_detail:contains("~")').text(ben);
}else if(infoArray[0].name == "콘테"){
	$('#coach_img').attr("src","coach/conte.jpg");
	$('#slide9_detail:contains("~")').text(con);
}else if(infoArray[0].name == "박항서"){
	$('#coach_img').attr("src","coach/park.jpg");
	$('#slide9_detail:contains("~")').text(par);
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
infoArray[0].name;//1등
infoArray[1].name;//2등
infoArray[2].name;//3등
}

