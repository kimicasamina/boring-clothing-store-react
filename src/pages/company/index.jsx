import React from "react";
import { production, philosophy, logo, story } from "../../assets/image";
import { Link } from "react-router-dom";

const company = [
  {
    id: 1,
    title: "Our Story",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, ipsam quae? Reiciendis porro perspiciatis illo, ipsam deserunt omnis vel placeat, rerum aperiam culpa nisi. Dicta quo repellat eos sunt. Nihil doloremque nobis qui, explicabo quod labore aut repellat inventore, facere voluptas autem. Eos voluptates officiis pariatur quidem expedita.",
    image_url: story,
  },
  {
    id: 2,
    title: "Philosophy",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, corrupti, esse iste magnam odio dolorum nam adipisci ducimus et illo nulla delectus modi officiis! Nesciunt voluptas vitae, facilis, reprehenderit corporis velit necessitatibus nulla excepturi nostrum cupiditate laborum. Ipsam ducimus perferendis nostrum quae quam.  esse iste magnam odio dolorum nam adipisci ducimus et illo nulla delectus modi officiis! Nesciunt voluptas vitae, facilis.",
    image_url: philosophy,
  },
  {
    id: 3,
    title: "Production",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, corrupti, esse iste magnam odio dolorum nam adipisci ducimus et illo nulla delectus modi officiis! Nesciunt voluptas vitae, facilis, reprehenderit corporis velit necessitatibus nulla excepturi nostrum cupiditate laborum. Ipsam ducimus perferendis nostrum quae quam.",
    image_url: production,
  },
  {
    id: 4,
    title: "Logo",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, ipsam quae? Reiciendis porro perspiciatis illo, ipsam deserunt omnis vel placeat, rerum aperiam culpa nisi. Dicta quo repellat eos sunt. Nihil doloremque nobis qui, explicabo quod labore aut repellat inventore, facere voluptas autem. Eos voluptates officiis pariatur quidem expedita.",
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
            <p className="">{item.content}</p>
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
