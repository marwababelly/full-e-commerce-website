import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import styles from "./NewArrivalSection.module.css";


const arrivals = [
  {
    id: 1,
    title: "Smart Watches",
    subtitle: "Stay connected and track your health.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
    size: "large",
    link: "/products?filter=smart-watch",
  },
  {
    id: 2,
    title: "Gaming Gear",
    subtitle: "Level up your gaming experience.",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop",
    size: "wide",
    link: "/products?filter=gamepad",
  },
  {
    id: 3,
    title: "Headphones",
    subtitle: "Immerse yourself in pure sound.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
    size: "small",
    link: "/products?filter=headphone",
  },
  {
    id: 4,
    title: "Cameras",
    subtitle: "Capture your best moments.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop",
    size: "small",
    link: "/products?filter=camera",
  },
];

const NewArrivalSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader label="Featured" title="New Arrival" />

        <div className={styles.grid}>
          {arrivals.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} ${styles[item.size]}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={styles.image}
                loading="lazy"
              />

              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.subtitle}>{item.subtitle}</p>
                <Link to={item.link} className={styles.shopNow}>
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;