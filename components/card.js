import React from "react";
import Link from "next/link";

const Card = ({ article }) => {
  const imageUrl = "https://admin.andrecastellanos.dev" + article.image.url;
  return (
    <Link href={`/blog/article/${article.id}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <img src={imageUrl} alt={article.image.url} height="100" />
          </div>
          <div className="uk-card-body">
            <p id="title" className="uk-text-medium">
              {article.title}
            </p>
            <p id="category" className="uk-text-uppercase">
              {article.categories
                .map((category) => {
                  return category.name;
                })
                .join(", ")}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
