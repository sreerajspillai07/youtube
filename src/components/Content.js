import React from "react";
import profile from "../assets/p.jpg";
import con1 from "../assets/con1.webp";
import ContentCard from "./ContentCard";

const Content = () => {
  const videos = [
    {
      photo: con1,
      title: "Transformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "Transformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
    {
      photo: con1,
      title: "WorlTransformers: Rise of the Beasts | Official Teaser Trailer (2023 Movie)",
      profile: profile,
    },
  ];
  return (
    <div className="px-5 lg:px-6 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    gap-4">
      {videos.map((video) => (
        <ContentCard
          photo={video.photo}
          title={video.title}
          profile={video.profile}
        />
      ))}
    </div>
  );
};

export default Content;
