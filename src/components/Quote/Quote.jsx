import React, { useState, useEffect } from "react";
import * as S from "./Quote.style";

const Quote = () => {
  const [copiedShow, setCopiedShow] = useState(false);
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

  const handleClickQuote = () => {
    navigator.clipboard.writeText(`"${quote.content}" - ${quote.author}`);
    showCopied();
  };

  const showCopied = () => {
    setCopiedShow(true);

    setTimeout(() => {
      setCopiedShow(false);
    }, 2000);
  };

  return (
    <>
      <S.Quote>
        <S.QuoteCopied visible={copiedShow}>Copied!</S.QuoteCopied>
        <div onClick={handleClickQuote} title={"Copy Quote"}>
          <S.QuoteContent>"{quote.content}"</S.QuoteContent>
          <S.QuoteAuthor>{quote.author}</S.QuoteAuthor>
        </div>
      </S.Quote>
    </>
  );
};

export default Quote;
