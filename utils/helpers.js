module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  get_book: (book_name) => {

    let name = book_name.replace(/\s+/g, '+')

    const request = async (input) => {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${input}&limit=1`, {
        method: "GET",
        mode: "cors"
      }
      );
      const json = await response.json();

      console.log(json.docs[0].title)
      console.log(json.docs[0].author_name[0])
    };

    request(name);
  }
};
