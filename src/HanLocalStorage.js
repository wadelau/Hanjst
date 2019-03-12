
//- Han Local Storage

//- define
var StaticClientStorage = function(){
	var hasLocalStorage = false;
	var maxUserKwCount = 6; // seven
	if(window.localStorage){
		hasLocalStorage = true;	
	}
	this.set = function($key, $val){
		if(hasLocalStorage){
			if($key == 'userkw'){
				var $oldv = this.get($key); // $oldv = '';
				var tmpjson = {};
				var $oldc = 0; var hasMinus = false;
				if($val.indexOf('-') > -1){ $val = $val.substring(1); hasMinus=true; }
				if($oldv != null && $oldv != ''){
					tmpjson = JSON.parse($oldv);
					var sortedArr = []; var $tmpi=0;
					for(var $k in tmpjson){
						sortedArr.push(tmpjson[$k]);	
					}
					sortedArr.sort(function(a, b){ return b - a; });
					var tmpjson2 = {}; var dispCount = 0;
					if(!hasMinus && tmpjson[$val]){ tmpjson2[$val] = tmpjson[$val]; }
					var tmpMaxUserKwCount = maxUserKwCount + 2;
					for(var $k in sortedArr){
						for(var $j in tmpjson){
							if(tmpjson[$j] == sortedArr[$k]){
								tmpjson2[$j] = tmpjson[$j]; dispCount++;
								delete tmpjson[$j]; break;
							}
						}
						if(dispCount > tmpMaxUserKwCount){ //- 2 more
							break;	
						}
						//console.log("dispc:"+dispCount+" k:"+$k);	
					}
					//console.log("tmpjson:"+$oldv+" to tmpjson2:"+JSON.stringify(tmpjson2));
					tmpjson = tmpjson2;
				}
				if(tmpjson[$val]){ $oldc = tmpjson[$val]; }
				if(hasMinus){ $oldc--; }else{ $oldc++; }
				tmpjson[$val] = $oldc;
				var $finalval = JSON.stringify(tmpjson);
			}
			window.localStorage.setItem($key, $finalval);
			//console.log("localstorage set: key:"+$key+" val:"+$val+" fval:"+$finalval+".");	
		}
		else{
			console.log("no localstorage found for set.");	
		}
	};
	this.get = function($key){
		var $val = '';
		if(hasLocalStorage){
			$val = window.localStorage.getItem($key);
			console.log("localstorage get: key:"+$key+" val:"+$val+".");	
		}
		else{
			console.log("no localstorage found for get.");	
		}
		return $val;
	};
	this.maxUserKwCount = maxUserKwCount;
}

//- initialize
var clientStorage = new StaticClientStorage();

//- user-defined
if(true){
	var selfkw = document.getElementById('topkw_self_div');
	if(selfkw){
		var $val = clientStorage.get('userkw');
		//console.log("read clientStorage:"+$val);
		var tmpjson = JSON.parse($val);
		var sortedArr = []; var $tmpi=0;
		for(var $k in tmpjson){
			//console.log("tmpjson key:"+$k+" val:"+tmpjson[$k]+" tmpi:"+$tmpi);	
			sortedArr.push(tmpjson[$k]);	
		}
		sortedArr.sort(function(a, b){ return b - a; });
		var selfList = ''; var tmpArr = []; var dispCount = 0;
		for(var $k in sortedArr){
			//console.log("sortedArr key:"+$k+" val:"+sortedArr[$k]);	
			for(var $j in tmpjson){
				if(tmpjson[$j] == sortedArr[$k]){
					tmpArr = $j.split('|');
					if("488".indexOf(tmpArr[1]) > -1){
						//- same kw
					}
					else{
						if(tmpArr[0].length > 2){
						tmpArr[0] = tmpArr[0].substring(0, 2);
						}
						selfList += '<a href="/news/?sid=20190116&pnskwordid=488,'+tmpArr[1]+'" '
							+' onclick="javascript:clientStorage.set(\'userkw\', \''+$j+'\');"'
							+' class="boldkeyword">+'+tmpArr[0]+'</a> '; 
						dispCount++;
					}
					delete tmpjson[$j]; break;
				}
			}
			//console.log("dispc:"+dispCount+" usermax:"+clientStorage.maxUserKwCount);
			if(dispCount > clientStorage.maxUserKwCount){
				break;	
			}
		}
		selfkw.innerHTML = selfList;
	}
	else{
		//window.alert("no userkw div?");	
	}
}
