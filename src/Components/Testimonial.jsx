import React from "react";
import { Carousel } from "react-bootstrap";
import { FaQuoteLeft, FaStar, FaRegStar } from "react-icons/fa";
import {
  ZA,
  AE,
  BR,
  SG,
  EG,
  CA,
  MY,
  US, // Country codes
} from "country-flag-icons/react/3x2";

import "./Testimonial.css";

export default function Testimonial() {
  const countryFlags = {
    "South Africa": ZA,
    UAE: AE,
    Brazil: BR,
    Singapore: SG,
    Egypt: EG,
    Canada: CA,
    Malaysia: MY,
    "United States": US,
  };

  const testimonials = [
    {
      id: 1,
      quote:
        "Trading with ABET Global has been a game-changer for me. The security measures they have in place give me peace of mind, knowing that my investments are in safe hands.",
      name: "John Smith",
      country: "South Africa",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      quote:
        "I've been impressed by ABET Global's responsiveness to my inquiries. Whenever I have a question or need assistance, their support team is quick to respond and provide helpful guidance.",
      name: "Fatima Khan",
      country: "UAE",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      quote:
        "As someone new to trading, I appreciate how user-friendly ABET Global's platform is. It's intuitive and easy to navigate, making it simple for me to execute trades and manage my investments.",
      name: "Pedro Rodriguez",
      country: "Brazil",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 4,
      quote:
        "About security, ABET Global has surpassed my expectations. Their robust encryption measures and commitment to safeguarding my personal and financial information have earned my trust as a trader.",
      name: "Mei Ling",
      country: "Singapore",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 5,
      quote:
        "I've tried several trading platforms, but none compare to ABET Global. Their platform's user-friendly interface, combined with their responsive customer support, makes trading a seamless and enjoyable experience.",
      name: "Ahmed Hassan",
      country: "Egypt",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 6,
      quote:
        "I've always been nervous about trading, but ABET Global made it so simple for me. The support team is amazing, and I've actually started seeing real profits. Highly recommend!",
      name: "Sarah Taylor",
      country: "Canada",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 7,
      quote:
        "Trading felt intimidating at first, but with ABET Global, everything is straightforward. Their tools helped me understand the market better, and now I'm doing it with confidence!",
      name: "Aisha Khan",
      country: "Malaysia",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/76.jpg",
    },
    {
      id: 8,
      quote:
        "I was new to trading, but ABET Global really helped me understand how things work. Now I can manage my investments with ease. Couldn't be happier!",
      name: "David Markram",
      country: "South Africa",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    },
    {
      id: 9,
      quote:
        "Honestly, I didn't think trading could be this easy. ABET Global has clear tutorials, and their platform is super user-friendly. I'm glad I took the leap!",
      name: "James Root",
      country: "Canada",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/99.jpg",
    },
    {
      id: 10,
      quote:
        "Thanks to ABET Global, I've been able to grow my savings through trading. It's easy to use, and I always feel supported!",
      name: "Emily James",
      country: "United States",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        i < rating ? (
          <FaStar key={i} className="text-warning" />
        ) : (
          <FaRegStar key={i} className="text-warning" />
        )
      );
  };

  const FlagComponent = ({ country }) => {
    const Flag = countryFlags[country];
    return Flag ? <Flag className="me-2" style={{ width: "24px" }} /> : null;
  };

  return (
    <div className="container testimonial my-5">
      <div className="row">
        <h1 className="mb-5 text-center">Testimonial</h1>
        <div className="col-lg-6 d-flex align-items-center">
          <Carousel indicators={false} variant="dark">
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="testimonial-box text-center p-4">
                  <div className="comment-content mb-4">
                    <p className="fs-5">
                      <FaQuoteLeft className="me-2" />
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="comment-header mb-4">
                    <ul className="list-unstyled d-flex justify-content-center">
                      {renderStars(testimonial.rating)}
                    </ul>
                  </div>
                  <div className="comment-bio">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="text-start">
                        <strong className="d-block">{testimonial.name}</strong>
                        <span className="text-muted d-flex align-items-center">
                          <FlagComponent country={testimonial.country} />
                          {testimonial.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-lg-6 d-lg-block d-none">
          <img src="./testimonialback.png" alt="" />
        </div>
      </div>
    </div>
  );
}
