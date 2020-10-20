// user submits text
// on submission of text, API is called
// response from API is filtered with the input search text
// display filtered search response jokes

// App namespace object
const punApp = {};


// Method to retrieve jokes/puns
// OBTAIN PUNS! AJAX CALL!
punApp.getPuns = function(query) {
    $.ajax({
        url: `https://icanhazdadjoke.com/search?`,
        method: 'GET',
        dataType: 'json',
        data: {
            term: query
        }

    }).then(result => {
        
        punApp.displayPuns(result.results)
    })
}


// Display puns on cards on the page!

punApp.displayPuns = function(puns){
    
    // Clear previous results
    $('.pun_container').empty();

    // Loop through the puns!
    puns.forEach(joke => {

        // add HTML to the page to display jokes in the pun_container
        const htmlToAppend = `
            <div class="pun_card">
                <p>${joke.joke}</p>
            </div>
        `
        // append the Puns the page!
        $('.pun_container').append(htmlToAppend);
    })
}

// Initialize the Puns!
punApp.init = function () {
    // Get input from the "Want a funny?" form!
    $('form').on('submit',(e) =>{
        e.preventDefault();
        
        // make it searchable!
        const query = $('#search_input').val()

        punApp.getPuns(query);
    })
}


// Document Ready for Puns!

$(function(){

    punApp.init();

});

