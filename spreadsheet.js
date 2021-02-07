function CupomPromo(e) {
  Promo = e;
  
  return HtmlService.createHtmlOutput(`<html><head><title>Teste</title></head><body style='margin: 0; height: 100vh; width: 100vw;'>
    <div style='
        background-color: #f6fafa;
        height: 100vh;
        width: 100vw;
        text-align: center;
        display: flex;
        justify-content: center;
        vertical-align: middle;
                '>
                      <a target="_top" style='text-decoration: none; position: absolute; top: 8vh; left: 5vw' href='https://sigma.cash/cupom'>
                    <img src='http://sigma.cash/wp-content/uploads/2020/12/arrow_back-green.svg' alt='Voltar' style='width: 60px'/>
                </a>
      <div style='
                      width: 500px;
                      max-width: 500px;
                      height: 400px;
                      align-items: center;
                      padding: 30px 20px;
                      margin: 23vh auto;
                        '>
        <img style='margin-bottom: 10px; max-width: 250px; width: 50vw' src='http://sigma.cash/wp-content/uploads/2020/12/nuvem-1.png' alt="Nuvem feliz"/>
        <h2 style='font-family: arial; font-size: 28px'>Cupom válido!</h2>
        <h2 style='font-family: arial; font-size: 28px'>${Promo}</h2>
                 <a target="_top" href='https://sigma.cash/cupom'
                       style='
                                  background-color: #26cb17;
                                  border: solid .5px var(--outline);
                                  border-radius: 4px;
                                  box-shadow: 1px 1px 1px rgb(0, 0, 0, .15);
                                  padding: 10px 30px;
                                  margin: 20px 0;
                                  display: inline-block;
                                  color: white;
                                  font-family: arial;
                                  font-weight: 400;
                                  font-size: 30px;
                                  outline: none;
                                  text-decoration: none;
                              '>Voltar ao menu</a>
      </div>
      </div>
  </body></html>`);
}

var htmlCerto = (`<html><head><title>Teste</title></head><body style='margin: 0; height: 100vh; width: 100vw;'>
    <div style='
        background-color: #f6fafa;
        height: 100vh;
        width: 100vw;
        text-align: center;
        display: flex;
        justify-content: center;
        vertical-align: middle;
                '>
                      <a target="_top" style='text-decoration: none; position: absolute; top: 8vh; left: 5vw' href='https://sigma.cash/cupom'>
                    <img src='http://sigma.cash/wp-content/uploads/2020/12/arrow_back-green.svg' alt='Voltar' style='width: 60px'/>
                </a>
      <div style='
                      width: 500px;
                      max-width: 500px;
                      height: 400px;
                      align-items: center;
                      padding: 30px 20px;
                      margin: 23vh auto;
                        '>
        <img style='margin-bottom: 10px; max-width: 250px; width: 50vw' src='http://sigma.cash/wp-content/uploads/2020/12/nuvem-1.png' alt="Nuvem feliz"/>
        <h2 style='font-family: arial; font-size: 28px'>Cupom válido!</h2>
                 <a target="_top" href='https://sigma.cash/cupom'
                       style='
                                  background-color: #26cb17;
                                  border: solid .5px var(--outline);
                                  border-radius: 4px;
                                  box-shadow: 1px 1px 1px rgb(0, 0, 0, .15);
                                  padding: 10px 30px;
                                  margin: 20px 0;
                                  display: inline-block;
                                  color: white;
                                  font-family: arial;
                                  font-weight: 400;
                                  font-size: 30px;
                                  outline: none;
                                  text-decoration: none;
                              '>Voltar ao menu</a>
      </div>
      </div>
  </body></html>`)

 /* ~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  
  
  
  var htmlErrado = (`<html><head><title>Teste</title></head><body style='margin: 0; height: 100vh; width: 100vw;'>
    <div style='
        background-color: #f6fafa;
        height: 100vh;
        width: 100vw;
        text-align: center;
        display: flex;
        justify-content: center;
        vertical-align: middle;
                '>
                      <a target="_top" style='text-decoration: none; position: absolute; top: 8vh; left: 5vw' href='https://sigma.cash/cupom'>
                    <img src='http://sigma.cash/wp-content/uploads/2020/12/arrow_back-green.svg' alt='Voltar' style='width: 60px'/>
                </a>
      <div style='
                      width: 80vw;
                      height: 400px;
                      align-items: center;
                      padding: 30px 20px;
                      margin: 23vh auto;
                        '>
        <img style='margin-bottom: 10px; max-width: 250px; width: 50vw' src='http://sigma.cash/wp-content/uploads/2020/12/7e49d317454ff63e1f74c6826a4bc7dc.png' alt="Carinha triste"/>
        <h2 style='font-family: arial; font-size: 28px'>Ops... Cupom ínválido! Ele pode já ter sido usado ou estar errado</h2>
                 <a target="_top" href='https://sigma.cash/cupom'
                       style='
                                  background-color: #26cb17;
                                  border: solid .5px var(--outline);
                                  border-radius: 4px;
                                  box-shadow: 1px 1px 1px rgb(0, 0, 0, .15);
                                  padding: 10px 30px;
                                  margin: 20px 0;
                                  display: inline-block;
                                  color: white;
                                  font-family: arial;
                                  font-weight: 400;
                                  font-size: 30px;
                                  outline: none;
                                  text-decoration: none;
                              '>Voltar ao menu</a>
      </div>
      </div>
  </body></html>`)

 /* ~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  

  
function doGet(e) {
//  var result = deleteRow(e.parameter.Cupom);
//
//  if(!result) {
//     return HtmlService.createHtmlOutput('<html><head><title>HTML from API Gateway/Lambda</title></head><body><h1>DEU ERRADO </h1></body></html>');
//  } else {
//    return HtmlService.createHtmlOutput('<html><head><title>HTML from API Gateway/Lambda</title></head><body><h1>DEU CERTO </h1></body></html>');
//  }
  Cupom = e.parameter.cupom
  upperCupom = Cupom.toUpperCase();
  
  return HtmlService.createHtmlOutput(`<h1>${upperCupom}</h1>`)
  
}

function updateRow(data) {
  var found = false;
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var editSheet = ss.getSheetByName('cupons');
  
  var lastRowEdit = editSheet.getLastRow();
  
  for(var i = 2; i <= lastRowEdit; i++)
  {
    if(editSheet.getRange(i, 1).getValue() == data)
    { if(editSheet.getRange(i, 4).getValue() < 1)
          {
            found = true
            uses = editSheet.getRange(i, 4).getValue();
            promo = editSheet.getRange(i, 5).getValue();
            PropertiesService.getScriptProperties().setProperty('promo', promo);
            editSheet.getRange(i, 4).setValue(uses + 1);
          } else {
                uses = editSheet.getRange(i, 4).getValue();
                editSheet.getRange(i, 4).setValue(uses + 1);
          }
     //      editSheet.deleteRow(i);
    }
  }
  return found;
}

function doPost( request ) {
//	var params = request.postData.getDataAsString();
//	params = JSON.parse(params);

//  
  // HTTP Response
  
  
  	var params = JSON.stringify(request.parameter);
	params = JSON.parse(params);
  
    var result = updateRow(params.Cupom.toUpperCase());

  
  
  if(!result) {
    return HtmlService.createHtmlOutput(htmlErrado);
  } else {
    var myPromo = PropertiesService.getScriptProperties().getProperty('promo');
//    return HtmlService.createHtmlOutput(htmlCerto);
//    CupomPromo(myPromo);
    return HtmlService.createHtmlOutput(`<html><head><title>Teste</title></head><body style='margin: 0; height: 100vh; width: 100vw;'>
    <div style='
        background-color: #f6fafa;
        height: 100vh;
        width: 100vw;
        text-align: center;
        display: flex;
        justify-content: center;
        vertical-align: middle;
                '>
                      <a target="_top" style='text-decoration: none; position: absolute; top: 8vh; left: 5vw' href='https://sigma.cash/cupom'>
                    <img src='http://sigma.cash/wp-content/uploads/2020/12/arrow_back-green.svg' alt='Voltar' style='width: 60px'/>
                </a>
      <div style='
                      width: 500px;
                      max-width: 500px;
                      height: 400px;
                      align-items: center;
                      padding: 30px 20px;
                      margin: 23vh auto;
                        '>
        <img style='margin-bottom: 10px; max-width: 250px; width: 50vw' src='http://sigma.cash/wp-content/uploads/2020/12/nuvem-1.png' alt="Nuvem feliz"/>
        <h2 style='font-family: arial; font-size: 28px'>Cupom válido!</h2>
        <h2 style='font-family: arial; font-size: 28px'>${myPromo}</h2>
                 <a target="_top" href='https://sigma.cash/cupom'
                       style='
                                  background-color: #26cb17;
                                  border: solid .5px var(--outline);
                                  border-radius: 4px;
                                  box-shadow: 1px 1px 1px rgb(0, 0, 0, .15);
                                  padding: 10px 30px;
                                  margin: 20px 0;
                                  display: inline-block;
                                  color: white;
                                  font-family: arial;
                                  font-weight: 400;
                                  font-size: 30px;
                                  outline: none;
                                  text-decoration: none;
                              '>Voltar ao menu</a>
      </div>
      </div>
  </body></html>`);
    
  }
                              
//  return HtmlService.createHtmlOutput(`<html><head><title>Teste</title></head><body>${params.Cupom}</body></html>`);
  
}
