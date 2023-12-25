import SwiperCarousel from "./SwiperCarousel";

function Reviews() {
  const reviews = [
    {
      name: "Mark Smith",
      role: "Travel Enthusiast",
      stars: 4,
      imgSrc: "https://placeholder.co/500x500",
    },
    {
      name: "Another Name",
      role: "Another Role",
      stars: 5,
      imgSrc: "https://placeholder.co/500x500",
    },
  ];

  return <SwiperCarousel reviews={reviews} />;
}

export default Reviews;
