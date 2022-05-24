import React from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");
  React.useEffect(() => {
    // TODO: answer here
    const fetchData = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      const data = await response.json();
      const randomQuote =
        data.quotes[Math.floor(Math.random() * data.quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    };
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  const [loading, setLoading] = React.useState(false);
  getQuote();
}
