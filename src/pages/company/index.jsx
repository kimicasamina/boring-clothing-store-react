import React from "react";
import { production, philosophy, logo, story } from "../../assets/image";
import { Link } from "react-router-dom";

const company = [
  {
    id: 1,
    title: "Our Story",
    content:
      "Boring Clothing was born from a simple idea: to offer high-quality, stylish clothing that reflects individuality and stands the test of time. Our founders envisioned a place where fashion meets comfort and where every piece of clothing tells a story. From our humble beginnings, we have grown into a beloved destination for fashion enthusiasts. We’ve carefully handpicked each item in our collection, ensuring that every piece embodies our commitment to craftsmanship and affordability.",
    image_url: story,
  },
  {
    id: 2,
    title: "Philosophy",
    content:
      "Our clothing philosophy is rooted in a commitment to quality, individuality, and sustainability. We believe that fashion should be more than just a way to dress; it should be a reflection of who you are, a statement of your values, and a celebration of the artistry and craftsmanship behind every piece",
    image_url: philosophy,
  },
  {
    id: 3,
    title: "Production",
    content:
      "We are dedicated to providing clothing that stands the test of time. Our commitment to quality means we carefully select the finest materials and work with skilled artisans who share our passion for excellence. Each garment is crafted with precision and care, ensuring durability and comfort without compromising on style",
    image_url: production,
  },
  {
    id: 4,
    title: "Logo",
    content:
      "The Boring logo is more than just a visual mark; it represents our brand’s values of quality and efficiency. It serves as a symbol of our commitment to delivering exceptional fashion experiences and helps establish a strong, recognizable presence in the fashion world.",
    image_url: logo,
  },
];

export default function Company() {
  return (
    <div className="flex flex-wrap flex-col gap-y-14">
      {company.map((item) => (
        <div className="flex flex-col tablet:flex-row w-full" key={item.id}>
          <img
            src={item.image_url}
            alt=""
            className="w-auto tablet:max-w-[350px]  object-cover"
          />
          <div className="flex-1 flex flex-col gap-y-4 py-4 tablet:p-8">
            <h1 className="text-3xl font-semibold ">{item.title}</h1>
            <p className="leading-relaxed">{item.content}</p>
            <Link
              to="/shop"
              className="btn px-8 py-2 bg-purple-dark rounded-sm text-center hover:bg-purple-saturated text-light-base w-full max-w-[120px]"
            >
              SHOP
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
