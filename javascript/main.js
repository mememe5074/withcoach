function clickEffect(e){
  var d=document.createElement("div");
  d.className="clickEffect";
  d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
  document.body.appendChild(d);
  d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
	document.addEventListener('click',clickEffect);	
$(document).ready(function(){
				$(document).bind('keydown',function(e){
					if ( e.keyCode == 123 /* F12 */) {
						e.preventDefault();
						e.returnValue = false;
					}
				});
			});

$(":button").on('click', function(e) {
// html2canvas(e.target.parentElement).then(function(canvas) {
// document.body.appendChild(canvas)
// });
// html2canvas(e.target.parentElement).then(function(canvas) {
// $('body').append('<img src="' + canvas.toDataURL("image/jpeg") + '"/>');
// });
html2canvas(e.target.parentElement).then(function(canvas) {
if (navigator.msSaveBlob) {
var blob = canvas.msToBlob();
return navigator.msSaveBlob(blob, '파일명.jpg');
} else {
var el = document.getElementById("target");
el.href = canvas.toDataURL("image/jpeg");
el.download = '파일명.jpg';
el.click();
}
});
});

window.onload = function () {
	alert('로딩이 끝난 후, 하단에 있는 축구공을 눌러주세요!\n(슬라이드 사용시 error 발생) ');
}
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
var ben = "발렌시아CF(2001~04)<br>리버풀FC(2004~10)<br>인테르(2010~11)<br>첼시FC(2012~13)<br>나폴리(2013~15)<br>레알 마드리드(2015~16)<br>리그우승 2회<br>UEFA챔피언스리그 우승 1회<br>UEFA 유로파리그우승 1회<br>리그컵 우승 3회<br><br>\"우리가 할 수 있다고 믿으면, 우리는 그렇게 할 것이다.";
var con = "유벤투스FC (2011~14)<br>이탈리아대표팀 (2014~16)<br>첼시FC (2016~18)<br>FC인테르나치오날레 밀라노(2019~ )<br>리그우승 4회<br>리그컵 3회<br><br>\“패배는 죽음을 선언한 것과 다름이 없다.\”";
var par = "베트남 대표팀(2017~ )<br>베트남U-23 대표팀(2017~ )<br>스즈키컵 10년 만에 우승<br>아시안컵 최초 8강<br>동남아시안게임 60년 만에 우승<br><br>\"우리는 최선을 다했기 때문에 자부심을 가져도 된다.\"";
var cho = "전북현대모터스(2005~11)<br>대한민국 대표팀(2011~13)<br>\전북현대모터스(2013~18)<br>리그 우승 6회<br>AFC 우승 2회<br>리그컵 우승 2회\<br><br>\“선수가 지도자를 불신하면, 지도자는 선수를 움직일 수 없다.\”"
var anc = "유벤투스FC(1999~01)<br>AC밀란(2001~09)<br>첼시FC(2009~11)<br>파리생제르맹 FC(2011~13)<br>레알 마드리드 CF(2013~15)<br>바이에른 뮌헨(2016~17)<br>나폴리(2018~19)<br>에버튼 FC(2019~)<br>UEFA 챔피언스 리그 역사상 최다 우승을 달성한 명장<br>리그우승 4회<br>UEFA챔피언스리그 우승 3회<br>리그컵 우승 5회<br><br>\“재미있는 축구만 보고 싶다면 극장가서 영화나 봐라!\”"
var mor = "FC 포르투 (2002~04)<br>첼시 FC (2004~07)<br>FC 인테르나치오날레 밀라노 (2008~10)<br>레알 마드리드 CF (2010~13)<br>\첼시 FC (2013~15)<br>맨체스터 유나이티드 FC (2016~18)<br>토트넘 홋스퍼(2019~)<br>리그우승 8회<br>UEFA 챔피언스리그 우승 2회<br>리그컵 우승 5회\<br><br>\“맨유에서 차지한 리그 2위는 나의 커리어에서 가장 큰 업적이다.\”"
var zid = "레알 마드리드(2016~18)<br>레알 마드리드(19~ )<br>리그 우승 1회<br>UEFA 챔피언스 리그 3연속 우승<br><br>\“축구를 혼자 한다면, 그것은 축구라는 내 인생에 대한 모독이다.\”"
var sar = "엠폴리FC (2012~15)<br>나폴리 (2015~18)<br>첼시FC (2018~19)<br>유벤투스FC (2019~ )UEFA 유로파리그 우승 1회"
var poc = "RCD 에스파뇰(2009~12)<br>사우스햄튼 FC(2013~14)<br>토트넘 핫스퍼 FC(2014~19)<br>무관<br><br>\“하늘을 보며 달을 꿈꿔라\”"
var klo = "FSV마인츠 05 (2001~08)<br>보루시아 도르트문트 (2008~15)<br>리버풀 FC (2015~ )<br>리그우승 2회<br>리그컵 우승 1회<br>UEFA\ 챔피언스리그 우승 1회<br><br>\“내가 세상에서 가장 똑똑한 감독은 아닐지 몰라도 아마 가장 열정이 넘치는 감독일 것이다.\”"
var sim = "라싱 클루브 데 아베야네다 (2006)<br>클루브 에스투디안테스 데 라플라타 (2006~07)<br>CA 리버 플레이트 (2008)<br>CA 산 로렌소 (2009~10)<br>칼초 카타니아 (2011)<br>라싱 클루브 데 아베야네다 (2011)<br>AT 마드리드 (2011~ )<br>리그우승 3회<br>리그컵 우승1회<br>UEFA 유로파 리그 우승 2회<br>UEFA 챔피언스리그 준우승 2회<br><br>\“최선을 다하고도 우리가 패배했다면 그건 우리가 더 성장할 수 있다는 것을 의미한다.\”"
var hey = "아틀레틱 빌바오(1992~94,01~03)<br>프랑크푸르트(1994~95)<br>CD 테네리페(1995~97)<br>레알 마드리드(1997~98)<br>SL 벤피카(1999~00)<br>샬케 04(2003~04)<br>B. 묀헨글라트바흐(79~87, 06~07)<br>바이어 레버쿠젠(2009~2011)<br>바이에른 뮌헨(87~91, 09, 11~13, 17~18)<br>리그우승 4회<br>UEFA 챔피언스리그 2회<br>리그컵 우승 1회"
var hid = "PSV(1987~90,02~06)<br>페네르바체(1990~91)<br>네덜란드대표팀(1995~98,14~15)<br>레알마드리드(1998~99)\<br>레알베티스 (1999~00)<br>PSV에인트호번(2002~06)<br>첼시FC(2009)<br>안지(2012~13)<br>첼시FC(2015~16)<br>대한민국대표팀 (2000~02)<br>호주대표팀 (2005~06)<br>러시아대표팀 (2006~09)<br>터키대표팀 (2010~11)<br>중국올림픽 대표팀 (2018~19)<br>리그우승 6회<br>리그 컵 5회<br>UEFA 챔피언스리그 1회<br>\“나는 아직 배고프다.\”"
var all = "알리아아네세 칼초 (2003~04)<br>레알 SPAL(2004~05)<br>FC 그로세토 (2005~06)<br>US 사수올로 (2007~08)<br>칼리아리 칼초 \(2008~10)<br>AC 밀란 (2010~14)<br>유벤투스 FC (2014~19)<br>리그우승 6회<br>리그컵 우승 3회<br>UEFA 챔피언스 리그 준우승 2회<br><br>\“탈락\을 받아들여! 돌아갈 수 없잖아\”"
var low = "VfB슈투트가르트(1996~98)<br>페네르바흐체SK(1998~99)<br>카를스루에 SC(1999~00)<br>아다나스포르(2001)<br>FC티롤 인스브루크\(2001~02)<br>FK아우스트리아 빈(2003~04)<br>독일 대표팀(2006~ )<br>리그 우승 1회<br>리그 컵 우승 1회<br>월드컵 우승 1회<br><br>\“한국을 이기\지 못한 것은 쇼크다.\”"
var wen = "RC스트라스부르 U-19(1981~82)<br>AS 낭시(1984~87)<br>AS모나코 FC(1987~94)<br>나고야 그램퍼스(1995~96)<br>아스날 FC(1996~18)<br>리그 우승 4회<br>리그 준우승 6회<br>리그 컵 우승 8회<br>UEFA 챔피언스리그 준우승 1회<br><br>\“나의 꿈은 타이틀이 아닌, 가장 완\벽한 축구를 5분만이라도 지속되게 하는 것이다.\”"
var dal ="리버풀 FC (1985~91)<br>블랙번 로버스 FC (1991~95)<br>뉴캐슬 유나이티드 FC (1997~98)<br>셀틱 FC (1999~00)<br>리버풀 FC (2011~12)<br>"

var rog = "왓포드FC(2008~09)<br>레딩FC(2009)<br>스완지 시티 AFC(2010~12)<br>리버풀 FC(2012~15)<br>셀틱 FC(2016~19)<br>레스터 시티 FC(2019~ )<br>\“만약 이 자리에서 구제를 받을 자격이 있는 선수가 있다면, 그건 바로 스티브야.\”"

var kar = "맨체스터utd(2002~03/수석코치)<br>레알 마드리드(2003~04)<br>맨체스터utd(2004~08/수석코치)<br>포르투갈 대표팀(2008~10)<br>이란 대표팀(2011~19)<br>콜롬비아 대표팀(2019~ )<br>리그컵 1회<br>한국 상대 4승 1무<br>"

var ran = "나폴리 (1991~93)<br>발렌시아CF (97~99,04~05)<br>AT마드리드 (1999~00)<br>첼시FC (2000~04)<br>유벤투스FC (2007~09)<br>AS로마 (2009~11)<br>인테르나치오날레 (2011~12)<br>AS 모나코 (2012~14)<br>그리스 대표팀 (2014)<br>레스터 시티 (2015~17)<br>FC 낭트 (2017~18)<br>풀럼 FC (2018~19)<br>AS 로마 (2019)<br>UC 삼프도리아 (2019~ )<br>리그컵 우승 2회<br>세리에 A,B,C 모두 우승<br>15/16 프리미어 리그 우승<br>\“내가 과연 꿈을 이룰 수 있을까? 당연! 레스터시티도 해냈는걸!\”"

var kru = "아약스(1985~88)<br>FC 바르셀로나(1988~96)<br>카탈루냐 대표팀(2009~13)<br>리그 컵 우승  3회<br>리그 우승 4회<br>\“나에게 크루이프는 축구의 역사를 바꾼 사람이다. 그는 축구의 신이다\”-사비 에르난데스-<br>\“내 팀에서는 골키퍼가 첫 번째 공격수고, 포워드가 첫 번째 수비수다.\”"

var kim = "성남일화천마 (2005~08)<br>허난 젠예 (2010~11)<br>강원FC (2012~13)<br>성남FC (2014~16)<br>광주FC (2017)<br>대한민국 U-23 대표팀 (2018~)<br>리그 우승 1회<br>리그컵 우승 1회<br>아시안 게임 금메달<br>AFC U-23 우승<br>\“일장기가 태극기 위에 있는 건 볼 수 없다.\”"

var van = "아약스(1991~97)<br>FC 바르셀로나(97~00,02~03)<br>네덜란드 대표팀(00~02,12~14)<br>AZ알크마르(2005~09)<br>FC 바이에른 뮌헨(2009~11)<br>네덜란드 대표팀<br>맨체스터 유나이티드(2014~16)<br>리그 컵우승 4회<br>리그 우승 7회<br>2014 FIFA 브라질 월드컵 3위<br>UEFA 챔피언스리그 준우승 1회<br>UEFA 챔피언스리그 우승 1회<br>\"최고 수준의 선수 영입을 수차례, 여러번 요청을 했다. 하지만 그들은 내가 원하는 선수들을 영입해주지 않았다\“"

var shi = "성남일화천마(2009~12)<br>대한민국 대표팀(2014/감독대행)<br>대한민국 U-23 대표팀(2015~16)<br>대한민국 U-20(2016~17)<br>대한민국 대표팀(2017~18)<br>인도네시아 대표팀(2020~)<br>리그컵 우승 2회<br>리그 우승 6회<br>AFC 챔피언스리그 준우승 1회<br>\“트릭이라고 보면 되겠습니다.\”<br>\“한국은 월드컵 기간만 도면 3천만명이 감독이 된다.\”"

var del = "레알 마드리드(94,96,99~03)<br>베식타슈 JK(2004~05)<br>스페인 대표팀(2008~16)<br>리그 컵우승 1회<br>리그 우승 2회<br>UEFA 챔피언스리그 우승 2회<br>FIFA 2010 남아공 월드컵 우승<br>UEFA 2008 유로 우승<br>UEFA 2012 유로 우승<br>\“나는 호날두보다는 메시와 함께 하고 싶다.\”"

var eme = "UD 알메리아(2006~08)<br>발렌시아 CF(2008~12)<br>스파르타크 모스크바(2012)<br>세비야 FC(2013~16)<br>PSG(2016~18)<br>아스날FC(2018~19)<br>리그 컵우승 2회<br>리그 우승 1회<br>UEFA 유로파 우승 3회<br>\"내가 원하던 새로운 아스날로 거듭나기 위해선 더 많은 시간을 줬어야한다.\""

var tuc = "FC아우크스부르크(2007~08)<br>마인츠 05(2009~14)<br>도르트문트(2015~17)<br>PSG(2018~ )<br>리그 컵우승 1회<br>리그 우승 1회<br>\"포그바가 없었으면 맨유는 그를 그리워할까? 래시포드는? 당연히 그리워하겠지\“"

var cap = "AC 밀란(91~96, 97~98)<br>레알 마드리드(1996~97)<br>AS 로마(1999~2004)<br>유벤투스(2004~06)<br>레알 마드리드(2006~07)<br>잉글랜드 대표팀(2007~12)<br>러시아 대표팀(2012~15)<br>장쑤 쑤닝(2017~18)<br>리그 우승 7회<br>\“호날두, 3년 동안 아무도 못 제쳐..\”"

console.log(sum);

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
	infoArray.push({ name : "요한 크루이프", formation:"1", manage:"1" , media:"2" , attack:"1" , defence:"1" , rotation:"2" , key:"3", score:0 });
	infoArray.push({ name : "김학범", formation:"3", manage:"1" , media:"4" , attack:"1" , defence:"1" , rotation:"1" , key:"1", score:0 });
	infoArray.push({ name : "루이 반 할", formation:"5", manage:"1" , media:"2" , attack:"2" , defence:"2" , rotation:"2" , key:"5", score:0 });
    infoArray.push({ name : "달글리시", formation:"3", manage:"2" , media:"4" , attack:"5" , defence:"2" , rotation:"1" , key:"3", score:0  });
	infoArray.push({ name : "베니테즈", formation:"3", manage:"4" , media:"3" , attack:"4" , defence:"4" , rotation:"2" , key:"3", score:0  });
	infoArray.push({ name : "콘테", formation:"5", manage:"1" , media:"4" , attack:"1" , defence:"1" , rotation:"2" , key:"3", score:0  });
	infoArray.push({ name : "박항서", formation:"6", manage:"2" , media:"4" , attack:"1" , defence:"1" , rotation:"1" , key:"5", score:0  });
	infoArray.push({ name : "최강희", formation:"3", manage:"4" , media:"3" , attack:"5" , defence:"2" , rotation:"2" , key:"1", score:0  });
	infoArray.push({ name : "안첼로티", formation:"1", manage:"4" , media:"1" , attack:"1" , defence:"2" , rotation:"1" , key:"3", score:0  });
	infoArray.push({ name : "브랜든 로저스", formation:"2", manage:"2" , media:"2" , attack:"1" , defence:"4" , rotation:"1" , key:"3", score:0 });
	infoArray.push({ name : "케이로스", formation:"3", manage:"4" , media:"2" , attack:"2" , defence:"1" , rotation:"2" , key:"5", score:0 });
	infoArray.push({ name : "무리뉴", formation:"2", manage:"2" , media:"2" , attack:"2" , defence:"4" , rotation:"1" , key:"1", score:0  });
	infoArray.push({ name : "지단", formation:"2", manage:"1" , media:"3" , attack:"3" , defence:"2" , rotation:"2" , key:"1" , score:0 });
	infoArray.push({ name : "사리", formation:"2", manage:"2" , media:"4" , attack:"1" , defence:"1" , rotation:"1" , key:"3" , score:0 });
	infoArray.push({ name : "델 보스케", formation:"3", manage:"1" , media:"4" , attack:"1" , defence:"2" , rotation:"1" , key:"3", score:0 });
	infoArray.push({ name : "에메리", formation:"3", manage:"4" , media:"3" , attack:"3" , defence:"4" , rotation:"1" , key:"2", score:0 });
	infoArray.push({ name : "포체티노", formation:"3", manage:"2" , media:"3" , attack:"1" , defence:"1" , rotation:"2" , key:"1", score:0  });
	infoArray.push({ name : "카펠로", formation:"1", manage:"1" , media:"1" , attack:"2" , defence:"2" , rotation:"1" , key:"4", score:0 });
	infoArray.push({ name : "클롭", formation:"2", manage:"2" , media:"1" , attack:"2" , defence:"1" , rotation:"2" , key:"5" , score:0 });
	infoArray.push({ name : "시메오네", formation:"1", manage:"1" , media:"1" , attack:"2" , defence:"4" , rotation:"2" , key:"2" , score:0 });
	infoArray.push({ name : "라니에리", formation:"1", manage:"4" , media:"3" , attack:"2" , defence:"4" , rotation:"2" , key:"4", score:0 });
	infoArray.push({ name : "신태용", formation:"1", manage:"2" , media:"4" , attack:"2" , defence:"4" , rotation:"2" , key:"3", score:0 });
	infoArray.push({ name : "투헬", formation:"2", manage:"1" , media:"4" , attack:"4" , defence:"1" , rotation:"2" , key:"2", score:0 });
	infoArray.push({ name : "하인케스", formation:"3", manage:"1" , media:"3" , attack:"1" , defence:"1" , rotation:"2" , key:"2", score:0  });
	infoArray.push({ name : "히딩크", formation:"6", manage:"1" , media:"4" , attack:"2" , defence:"3" , rotation:"2" , key:"3" , score:0 });
	infoArray.push({ name : "알레그리", formation:"1", manage:"3" , media:"1" , attack:"5" , defence:"4" , rotation:"1" , key:"3", score:0  });
	infoArray.push({ name : "뢰브", formation:"3", manage:"4" , media:"4" , attack:"1" , defence:"2" , rotation:"1" , key:"3", score:0  });
	infoArray.push({ name : "벵거", formation:"1", manage:"3" , media:"4" , attack:"1" , defence:"1" , rotation:"1" , key:"3", score:0  });

for(var i=0 ; i<20; i++){
	if (answer[0] == infoArray[i].formation) {
		infoArray[i].score += 15;
		}
	if (answer[1] == infoArray[i].manage) {
		infoArray[i].score += 15;
	}
	if (answer[2] == infoArray[i].media) {
		infoArray[i].score += 8;
	}
	if (answer[3] == infoArray[i].attack) {
		infoArray[i].score += 18.;
	}
	if (answer[4] == infoArray[i].defence) {
		infoArray[i].score += 15;
	}
	if (answer[5] == infoArray[i].rotation) {
		infoArray[i].score += 9;
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
		document.getElementById("slide9_detail").innerHTML=dal;
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
		document.getElementById("slide9_detail").innerHTML=cho;

}else if(infoArray[0].name == "안첼로티"){
	$('#coach_img').attr("src","coach/anchelotti.jpg");
		document.getElementById("slide9_detail").innerHTML=anc;

}else if(infoArray[0].name == "무리뉴"){
	$('#coach_img').attr("src","coach/mourinho.jpg");
		document.getElementById("slide9_detail").innerHTML=mor;

}else if(infoArray[0].name == "지단"){
	$('#coach_img').attr("src","coach/zidane.jpg");
		document.getElementById("slide9_detail").innerHTML=zid;

}else if(infoArray[0].name == "사리"){
	$('#coach_img').attr("src","coach/sarri.png");
		document.getElementById("slide9_detail").innerHTML=sar;

}else if(infoArray[0].name == "포체티노"){
	$('#coach_img').attr("src","coach/pochettino.jpg");
		document.getElementById("slide9_detail").innerHTML=poc;

}else if(infoArray[0].name == "클롭"){
	$('#coach_img').attr("src","coach/klopp.jpg");
		document.getElementById("slide9_detail").innerHTML=klo;

}else if(infoArray[0].name == "시메오네"){
	$('#coach_img').attr("src","coach/simeone.jpg");
		document.getElementById("slide9_detail").innerHTML=sim;

}else if(infoArray[0].name == "하인케스"){
	$('#coach_img').attr("src","coach/heynckes.jpg");
		document.getElementById("slide9_detail").innerHTML=hey;

}else if(infoArray[0].name == "히딩크"){
	$('#coach_img').attr("src","coach/hidink.jpg");
		document.getElementById("slide9_detail").innerHTML=hid;

}else if(infoArray[0].name == "알레그리"){
	$('#coach_img').attr("src","coach/allegri.jpg");
		document.getElementById("slide9_detail").innerHTML=all;

}else if(infoArray[0].name == "뢰브"){
	$('#coach_img').attr("src","coach/low.jpg");
		document.getElementById("slide9_detail").innerHTML=low;

}else if(infoArray[0].name == "벵거"){
	$('#coach_img').attr("src","coach/wenger.jpg");
		document.getElementById("slide9_detail").innerHTML=wen;

}else if(infoArray[0].name == "브랜든 로저스"){
	$('#coach_img').attr("src","coach/rogers.jpg");
		document.getElementById("slide9_detail").innerHTML=rog;

}else if(infoArray[0].name == "케이로스"){
	$('#coach_img').attr("src","coach/karos.jpg");
		document.getElementById("slide9_detail").innerHTML=kar;

}else if(infoArray[0].name == "라니에리"){
	$('#coach_img').attr("src","coach/rani.jpg");
		document.getElementById("slide9_detail").innerHTML=ran;

}else if(infoArray[0].name == "요한 크루이프"){
	$('#coach_img').attr("src","coach/kruyff.jpg");
		document.getElementById("slide9_detail").innerHTML=kru;

}else if(infoArray[0].name == "김학범"){
	$('#coach_img').attr("src","coach/kim.jpg");
		document.getElementById("slide9_detail").innerHTML=kim;

}else if(infoArray[0].name == "루이 반 할"){
	$('#coach_img').attr("src","coach/vangaal.jpg");
		document.getElementById("slide9_detail").innerHTML=van;

}else if(infoArray[0].name == "신태용"){
	$('#coach_img').attr("src","coach/shin.jpg");
		document.getElementById("slide9_detail").innerHTML=shi;

}else if(infoArray[0].name == "델 보스케"){
	$('#coach_img').attr("src","coach/bosque.jpg");
		document.getElementById("slide9_detail").innerHTML=del;

}else if(infoArray[0].name == "에메리"){
	$('#coach_img').attr("src","coach/emery.jpg");
		document.getElementById("slide9_detail").innerHTML=eme;

}else if(infoArray[0].name == "투헬"){
	$('#coach_img').attr("src","coach/tuchel.jpg");
		document.getElementById("slide9_detail").innerHTML=tuc;

}else if(infoArray[0].name == "카펠로"){
	$('#coach_img').attr("src","coach/capello.jpg");
		document.getElementById("slide9_detail").innerHTML=cap;

}
	
	
}

