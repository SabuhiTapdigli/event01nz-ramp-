"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button/Button";
import Link from "next/link";
import { track } from "@vercel/analytics";

const HotelCard = ({ item, gclid, index }: any) => {
  const { name, url, bonus, image_url } = item;
  const rating = (10 - index * 0.1).toFixed(1);

  const tag =
    index === 0
      ? "🇳🇿 Best NZ Casino Pick 🇳🇿"
      : index === 1
      ? "⚡ Ultra-Fast Payouts ⚡"
      : index === 2
      ? "🎁 Weekly Bonus Offers 🎁"
      : undefined;

  const renderStars = (rating: number) => {
    const stars = Math.round(rating / 2);
    return (
      <div className="flex gap-1 text-yellow-400 text-lg">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < stars ? "⭐" : "☆"}</span>
        ))}
      </div>
    );
  };

  return (
    <Link
      href={`${url}${gclid ? gclid : ""}`}
      onClick={(event) => {
        track("Visit", { name });
      }}
      target="_blank"
      className="block bg-gradient-to-r from-[#1a1a3a] to-[#292966] text-white rounded-xl p-6 shadow-lg relative"
    >
      {/* Tag */}
      {tag && (
        <div className="absolute top-0 left-0 bg-red-500 text-sm font-semibold px-4 py-1 rounded-br-xl">
          {tag}
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-center gap-2 sm:gap-6">
        {/* Logo */}
        <div className="w-[200px] h-20 relative mt-2">
          <Image
            src={image_url}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Rating */}
        <div className="flex items-center w-[200px] justify-center">
          <div className="flex flex-col items-center gap-4 mb-2">
            <div className="text-2xl font-bold text-yellow-400">{rating}</div>
            {renderStars(parseFloat(rating))}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center">
          <div className="text-lg font-semibold mb-2">Welcome Offer</div>
          <div className="text-md text-gray-200">{bonus}</div>
        </div>

        {/* CTA */}
        <Button url={url} gclid={gclid} title={name} />
      </div>
    </Link>
  );
};

export default HotelCard;
