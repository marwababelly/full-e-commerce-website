import styles from "./AboutPage.module.css";
import { statistics, team, storyImg, benefits } from "./aboutData";

export default function About() {
  return (
    <div className={styles.aboutPageWrapper}>
      <div className={styles.breadcrumb}>Home / About</div>

      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment of categories
            to meet customers’ needs.
          </p>
        </div>
        <img src={storyImg} alt="Clothing and shopping store" className={styles.storyImg} />
      </section>

      <section className={styles.statisticsGrid}>
        {statistics.map(({ icon: Icon, value, label }) => (
          <div key={label} className={styles.statCard}>
            <div className={styles.iconWrapper}>
              <div className={styles.iconInner}>
                <Icon size={26} />
              </div>
            </div>
            <h2>{value}</h2>
            <p>{label}</p>
          </div>
        ))}
      </section>

      <section className={styles.teamSection}>
        {team.map((member) => (
          <div key={member.name} className={styles.teamCard}>
            <div className={styles.photo}>
              <img src={member.image} alt={member.alt} loading="lazy" />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </section>

      {/* الميزات مدموجة هنا مباشرة */}
      <section className={styles.benefitsGrid}>
        {benefits.map(({ icon: Icon, title, description }) => (
          <div key={title} className={styles.benefitCard}>
            <div className={styles.iconWrapper}>
              <Icon size={30} strokeWidth={1.8} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}