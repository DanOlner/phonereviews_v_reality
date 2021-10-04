//alltexts.json compiled into JSON using R in fiction/randomeverything/exportPhoneArticlesAsJSON.R
var texts

//min and max random string length
var minmax = {
    min: 14,
    max: 20
    }

$.getJSON('alltexts_df.json', function(obj) {
    console.log('ping');
    
    texts = obj
    
    console.log(obj[0].link)
    console.log(obj[1].link)
    
    
    for (var i = 0; i < 100; i++) {
    
    //String together a bunch of links (with CSS making links appear as plain text but stil linkable)
    //Pick an article randomly (one article per index, each index has link and text
    
    //Pick random text
    //selectedtext = texts[Math.floor(Math.random() * (texts.length-1))]
    selectedtext = texts[d3.randomInt(0,texts.length)()]
    
    //pick random string of words from the text
    //First, split into separate words
    text = selectedtext.text.split(" ")
    
    //Then pick a string of random words.
    stringlength = d3.randomInt(minmax.min,minmax.max+1)()
    //Make sure it's within array bounds
    startpos = d3.randomInt(1,text.length-stringlength)()
    endpos = startpos + stringlength
    
//    console.log(startpos + ' ' + endpos)
    
    randomwords = text.slice(startpos,endpos)
    
    randomwords.push(' ')
    
    //concatenate random words into one string
    randomwords = randomwords.join(' ')
    //And add space on end...
//    randomwords = randomwords.concat(' ')
    
    //target="_blank": open in new tab (HTML5)
    //Prob want to turn off links to text altogether on phone version
    $("#randomtext").append('<a href="' + selectedtext.link + '" target="_blank">' + randomwords + '</a>')
    
    }    
    
    
});

