import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import styles from "./NewArrivalSection.module.css";

const arrivals = [
  {
    id: 1,
    title: "PlayStation 5",
    subtitle: "Black and White version of the PS5 coming out on sale.",
    image: "https://picsum.photos/seed/ps5big/800/900",
    size: "large",
    link: "/products?filter=gaming",
  },
  {
    id: 2,
    title: "Women's Collections",
    subtitle: "Featured woman collections that give you another vibe.",
    image: "https://picsum.photos/seed/womenbig/800/500",
    size: "wide",
    link: "/products?filter=fashion",
  },
  {
    id: 3,
    title: "Speakers",
    subtitle: "Amazon wireless speakers.",
    image: "https://picsum.photos/seed/speakersmall/400/400",
    size: "small",
    link: "/products?filter=music",
  },
  {
    id: 4,
    title: "Perfume",
    subtitle: "GUCCI INTENSE OUD EDP.",
    image: "https://picsum.photos/seed/perfumesmall/400/400",
    size: "small",
    link: "/products?filter=beauty",
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