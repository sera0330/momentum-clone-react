import React, { useState, useEffect } from "react";
import * as S from "./Quote.style";

const Quote = () => {
  const [quote, setQoute] = useState({
    content: "",
    author: "",
  });

  useEffect(() => {
    fetch("https://api.quotable.io/random?maxLength=50")
      .then((response) => response.json())
      .then((data) => {
        setQoute({
          content: `${data.content}`,
          author: `${data.author}`,
        });
      });
  }, []);

  return (
    <S.Quote>
      <S.QuoteContent>"{quote.content}"</S.QuoteContent>
      <S.QuoteAuthor>{quote.author}</S.QuoteAuthor>
    </S.Quote>
  );
};

export default Quote;
