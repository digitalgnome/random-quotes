import quotes from './quotes.mjs';

const modalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('#modal');
const h2ModalText = document.querySelector('#modal-text');

// Generate random quote, after replacing null authors with 'Unknown'
// Inject quote into modal HTML elements
const generateQuote = quotesArray => {
  quotesArray.forEach(quote => {
    if (quote.author === null) {
      // eslint-disable-next-line no-param-reassign
      quote.author = 'Unknown';
    }
  });
  const quote = quotesArray[Math.floor(Math.random() * 1000)];
  h2ModalText.innerHTML = `<span class="quote">${
    quote.text
  }</span>`
    + `<br><span id="author">- ${
      quote.author
    }</span>`;
};

// Random quotes API call
const quotesAPIEndpoint = 'https://type.fit/api/quotes';

const getQuote = () => {
  fetch(quotesAPIEndpoint, { mode: 'no-cors' })
    .then(rawData => console.log('raw data =', rawData))
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Store an array of objects with author and quote
      const fetchedQuotes = data.slice(0, 999);
      generateQuote(fetchedQuotes);
    })
    .catch(err => {
      console.log('Error occured fetch quotes:', err);
      generateQuote(quotes);
    });
};

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  getQuote();

  modalBtn.blur();
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
