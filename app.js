const modalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('#modal');
const h2ModalText = document.querySelector('#modal-text');

// Random quotes API call

const quotesAPIEndpoint = 'https://type.fit/api/quotes';

const getQuote = () => {
  fetch(quotesAPIEndpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Store an array of objects with author and quote
      const quotes = data.slice(0, 999);
      generateQuote(quotes);
    });
};

// Generate random quote, after replacing null authors with 'Unknown'
// Inject quote into modal HTML elements
const generateQuote = quotesArray => {
  quotesArray.forEach(quote => {
    if (quote.author === null) {
      quote.author = 'Unknown';
    }
  });
  const quote = quotesArray[Math.floor(Math.random() * 1000)];
  h2ModalText.innerHTML =
    '<span class="quote">' +
    quote.text +
    '</span>' +
    '<br><span id="author">- ' +
    quote.author +
    '</span>';
};

modalBtn.addEventListener('click', event => {
  modal.style.display = 'block';
  getQuote();

  modalBtn.blur();
});

modal.addEventListener('click', event => {
  modal.style.display = 'none';
});
