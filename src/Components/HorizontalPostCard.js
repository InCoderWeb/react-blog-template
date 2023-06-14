import { useState } from "react";

export const HorizontalPostCard = (props) => {
  return (
    <>
      <article className="indexPost">
        <a
          className="entryImageWrap"
          href={props.url}
          title="Step-by-Step Guide: Creating a Stunning Tourist Agency Landing Page with HTML and CSS"
        >
          <span
            className="entryThumb"
            style={{backgroundImage:"url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTMKY3yTOysOZf6c4MDx8vFRAq0U5eO5QjHSdJSC6fIR8Qb-5gDlCRf9M0If4K-ApBBGdeNNRQZ1wFHvTC2bXTHB2HNPwcqCwJ3cx7qUXFkj-HYgJdHcAxdQbMAZus8GCk2TZqgk6a-e3jdBxpHbQX2LM9HnyU-xL9gPwrg1B5OVfYKXbvWd8h9nUZPA/w220-h146-p-k-no-nu/landing%20Page.png)"}}
          ></span>
        </a>
        <div className="entryHeader">
          <h2 className="entryTitle">
            <a
              className="entry-title-link hover:text-mainColor transition-colors"
              href={props.url}
              rel="bookmark"
              title="Step-by-Step Guide: Creating a Stunning Tourist Agency Landing Page with HTML and CSS"
            >
              Step-by-Step Guide: Creating a Stunning Tourist Agency Landing
              Page with HTML and CSS
            </a>
          </h2>
          <p className="entry-excerpt">
            Hello friends, today in this blog, we will learn how to create a
            Stunning Tourist Agency Landing Page with HTML and CSS. In …
          </p>
          <div className="entry-meta">
            <span className="entry-author mi">
              <span className="by sp">by</span>
              <span className="author-name text-mainColor">Ashutosh Tiwari</span>
            </span>
            <span className="entry-time mi">
              <span className="sp">•</span>
              <time className="published" datetime="2023-05-05T14:29:00+05:30">
                May 05, 2023
              </time>
            </span>
          </div>
        </div>
      </article>
    </>
  );
};
