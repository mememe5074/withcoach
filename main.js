
var formation, manage, media, attack, defence, rotation, key;
var answer = [formation, manage, media, attack, defence, rotation, key];
var result_score = [0,0,0,0,0,
					0,0,0,0,0,
					0,0,0,0,0,
					0,0,0,0,0];
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

for(let i ; i<20; i++){
	if (answers[0] == coach[i].formation) {
		coach[i].score += 10;
		}
	if (answers[1] == coach[i].manage) {
		coach[i].score += 10;
	}
	if (answers[2] == coach[i].media) {
		coach[i].score += 10;
	}
	if (answers[3] == coach[i][3].attack) {
		coach[i].score += 20;
	}
	if (answers[4] == coach[i][4].defence) {
		coach[i].score += 20;
	}
	if (answers[5] == coach[i][5].rotation) {
		coach[i].score += 10;
	}
	if (answers[6] == coach[i][6].key) {
		coach[i].score += 20;
	}
}
infoArray.sort(function(a, b) { // 내림차순
    return b[sortingField] - a[sortingField];
});

infoArray[0].name;//1등
infoArray[1].name;//2등
infoArray[2].name;//3등