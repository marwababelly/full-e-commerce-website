import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";

const categories = [
  { name: "Woman's Fashion", filter: "fashion" },
  { name: "Men's Fashion", filter: "fashion" },
  { name: "Electronics", filter: "electronics" },
  { name: "Home & Lifestyle", filter: "home" },
  { name: "Medicine", filter: "medicine" },
  { name: "Sports & Outdoor", filter: "sports" },
  { name: "Baby's & Toys", filter: "toys" },
  { name: "Groceries & Pets", filter: "pets" },
  { name: "Health & Beauty", filter: "beauty" },
];

const slides = [
  {
    id: 1,
    brand: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    image: "https://picsum.photos/seed/iphone/800/400",
  },
  {
    id: 2,
    brand: "PlayStation 5",
    title: "New Console Available Now",
    image: "https://picsum.photos/seed/ps5hero/800/400",
  },
  {
    id: 3,
    brand: "Speakers",
    title: "Wireless Sound Experience",
    image: "https://picsum.photos/seed/speakerhero/800/400",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li key={category.name}>
           <Link
                to={`/products?filter=${category.filter}`}
                className={styles.categoryItem}
              >
                <span className={styles.categoryName}>{category.name}</span>
                <span className={styles.categoryArrow}>›</span>
            </Link>
            </li>
          ))}
          </ul>
        </aside>

        <div className={styles.slider}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className={styles.slide}>
                <div className={styles.slideContent}>
                  <div className={styles.slideBrand}>
                    <span className={styles.brandIcon}></span>
                    {slide.brand}
                  </div>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <Link to="/products" className={styles.shopNow}>
                         Shop Now →
                  </Link>
                </div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={styles.slideImage}
                />
              </div>
            ))}
          </div>

          <div className={styles.dots}>
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`${styles.dot} ${
                  index === activeSlide ? styles.dotActive : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;