import styles from "./AboutPage.module.css";
import storyImg from "../features/auth/assets/about/2.jpg";
import tomImg from "../features/auth/assets/about/1.jpg";
import emmaImg from "../features/auth/assets/about/4.jpg";
import willImg from "../features/auth/assets/about/3.jpg";

const StoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 9l1.5-5h15L21 9M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18" />
    <path d="M8 13h8M8 17h5" />
  </svg>
);

const MoneyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M9 10h4.5a1.5 1.5 0 010 3H9M9 13h4.5a1.5 1.5 0 010 3H9" />
  </svg>
);

const BagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 016 0v2" />
  </svg>
);

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 18v-6a9 9 0 0118 0v6" />
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const stats = [
  { Icon: StoreIcon, value: "10.5k", label: "Sallers active our site" },
  { Icon: MoneyIcon, value: "33k", label: "Monthly Product Sale" },
  { Icon: BagIcon, value: "45.5k", label: "Customer active in our site" },
  { Icon: DollarIcon, value: "25k", label: "Annual gross sale in our site" },
];

const team = [
  { name: "Tom Cruise", role: "Founder & Chairman", img: tomImg },
  { name: "Emma Watson", role: "Managing Director", img: emmaImg },
  { name: "Will Smith", role: "Product Designer", img: willImg },
];

const features = [
  {
    Icon: TruckIcon,
    title: "FREE AND FAST DELIVERY",
    text: "Free delivery for all orders over $140",
  },
  {
    Icon: SupportIcon,
    title: "24/7 CUSTOMER SERVICE",
    text: "Friendly 24/7 customer support",
  },
  {
    Icon: ShieldIcon,
    title: "MONEY BACK GUARANTEE",
    text: "We return money within 30 days",
  },
];

const AboutPage = () => {
  return (
    <div className={styles.page}>

      <section className={styles.story}>
        <div>
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer goods to electronics.
          </p>
        </div>
        <img src={storyImg} alt="Our story" />
      </section>

      <section className={styles.stats}>
        {stats.map(({ Icon, value, label }, i) => (
          <div key={i} className={styles.stat}>
            <div className={styles.statIcon}>
              <Icon />
            </div>
            <h3>{value}</h3>
            <p>{label}</p>
          </div>
        ))}
      </section>

      <section className={styles.team}>
        {team.map((m, i) => (
          <div key={i} className={styles.member}>
            <img src={m.img} alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
            <div className={styles.social}>
              <a>𝕏</a>
              <a>📷</a>
              <a>in</a>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.features}>
        {features.map(({ Icon, title, text }, i) => (
          <div key={i}>
            <div className={styles.featureIcon}>
              <Icon />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;