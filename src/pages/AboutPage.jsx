import React from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./AboutPage.module.css";
import { statistics, team, storyImg, benefits } from "./aboutData";

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

const AboutPage = () => {
  const { t } = useLanguage();

  const stats = [
    { Icon: StoreIcon, value: "10.5k", label: t.activeSellers },
    { Icon: MoneyIcon, value: "33k", label: t.monthlySale },
    { Icon: BagIcon, value: "45.5k", label: t.activeCustomers },
    { Icon: DollarIcon, value: "25k", label: t.annualSale },
  ];

  const team = [
    { name: "Tom Cruise", role: t.founder, img: tomImg },
    { name: "Emma Watson", role: t.managingDirector, img: emmaImg },
    { name: "Will Smith", role: t.productDesigner, img: willImg },
  ];

  const features = [
    {
      Icon: TruckIcon,
      title: t.freeDeliveryTitle,
      text: t.freeDeliveryText,
    },
    {
      Icon: SupportIcon,
      title: t.supportTitle,
      text: t.supportText,
    },
    {
      Icon: ShieldIcon,
      title: t.moneyBackTitle,
      text: t.moneyBackText,
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.story}>
        <div>
          <h1>{t.ourStoryTitle}</h1>
          <p>{t.storyParagraph1}</p>
          <p>{t.storyParagraph2}</p>
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