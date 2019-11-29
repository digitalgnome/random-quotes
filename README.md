# [Random Quote Generator](https://digitalgnome.github.io/random-quotes/)

A vanilla JavaScript Random Quote generator that uses the JS fetch API to connect to endpoint to retrieve a JSON file that contains 1000 quotes.  The array is then slightly modified to substitute any null author key values with 'Unknown'.  With a 'click' event listener added to a button, a random quote is selected from the array of objects that contain a quote, and author key.  These values are then injected into the HTML document in the form of a Modal overlay.
