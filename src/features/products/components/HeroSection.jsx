import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowButton from "./ArrowButton";
import styles from "./HeroSection.module.css";

const slides = [
  { 
    id: 1, 
    brand: "iPhone 14 Series", 
    title: "Up to 10% off Voucher", 
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    brand: "PlayStation 5", 
    title: "New Console Available Now", 
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    brand: "Speakers", 
    title: "Wireless Sound Experience", 
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop" 
  },
];

const HeroSection = ({ categories }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const categoryRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollCategories = (direction) => {
    if (!categoryRef.current) return;
    const amount = 200;
    categoryRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <aside className={styles.sidebar}>
          <div className={styles.categoryHeader}>
            <span>Categories</span>
            <div className={styles.mobileArrows}>
              <ArrowButton direction="left" onClick={() => scrollCategories("left")} />
              <ArrowButton direction="right" onClick={() => scrollCategories("right")} />
            </div>
          </div>
          
          <ul className={styles.categoryList} ref={categoryRef}>
            {categories && categories.map((category) => (
              <li key={category.id}>
                <Link to={`/products?filter=${category.slug}`} className={styles.categoryItem}>
                  <span className={styles.categoryName}>{category.name}</span>
                  <span className={styles.categoryArrow}>›</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div className={styles.slider}>
          <div className={styles.sliderTrack} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className={styles.slide}>
                <div className={styles.slideContent}>
                  <div className={styles.slideBrand}>{slide.brand}</div>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <Link to="/products" className={styles.shopNow}>Shop Now →</Link>
                </div>
                <img src={slide.image} alt={slide.title} className={styles.slideImage} />
              </div>
            ))}
          </div>
          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.dot} ${index === activeSlide ? styles.dotActive : ""}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;