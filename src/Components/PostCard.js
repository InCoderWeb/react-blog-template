import { useState } from "react";

export const PostCard = (props) => {
  return (
    <>
      <div className="postCard">
        <a href="#" className="featuredInner">
          <span className="imageWrap beforeMask">
            <span
              className="entryThumb"
              style={{
                backgroundImage: `url(${props.url})`,
              }}
            ></span>
          </span>
          <div className="entryHeader entryInfo">
            <h2 className="title">
              {props.title}
            </h2>
            <div className="entryMeta">
              <span className="entry-author mi">
                <span className="sp">by</span>
                <span className="author-name">{props.author}</span>
              </span>
              <span className="entry-time mi">
                <span className="sp">•</span>
                <time className="published" dateTime="2023-04-14T12:37:00+05:30">
                  {props.time}
                </time>
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
