import styles from "./ServicesSection.module.css";

const services = [
  {
    id: 1,
    icon: "🚚",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: "🎧",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: "✓",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{service.icon}</span>
            </div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;