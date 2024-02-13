function getWord() {
    var input = document.getElementById('Input').value;
    var apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"+input;
    console.log(apiUrl)
    document.getElementById('Definitions').value = ""
  
    fetch(apiUrl)
      .then((data) => data.json())
      .then((data1) => {
        
        //console.log(data1[0].meanings[0].definitions[0].definition);
        var texarea = document.getElementById('Definitions')
        texarea.value = data1[0].meanings[0].definitions[0].definition
        texarea.value += data1[0].meanings[1].definitions[0].definition
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  