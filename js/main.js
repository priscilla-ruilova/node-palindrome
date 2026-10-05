document.querySelector('#checkPali').addEventListener('click', paliTrueFalse)


function paliTrueFalse(){
    let wordCheck = document.querySelector('#wordCheck').value.toLowerCase() //this is the user input value that gets sent to the server
    console.log(wordCheck)

    fetch(`/api?palindrome=${wordCheck}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
        document.querySelector('#result').textContent = data.message;
    });


}