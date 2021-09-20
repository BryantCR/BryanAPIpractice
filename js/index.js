function grabInfo( event ){
    event.preventDefault();

    let searchWeather = event.target.navsearch.value;

    
}

let weatherForm = document.querySelector('#weatherForm');
weatherForm.addEventListener('submit', grabInfo);