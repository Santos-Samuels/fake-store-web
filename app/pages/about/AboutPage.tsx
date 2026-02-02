import { Globe2, HeartHandshake, ShieldCheck } from "lucide-react";
import type { Route } from "./+types/AboutPage";
import { styles } from "./styles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Fake Store Web" },
    { name: "description", content: "Learn more about our mission and values." },
  ];
}

const stats = [
  { label: "Products Available", value: "5,000+" },
  { label: "Happy Customers", value: "10k+" },
  { label: "Countries Served", value: "50+" },
];

const values = [
  {
    name: "Quality First",
    description: "We verify every product to ensure it meets our high standards of quality and durability.",
    icon: ShieldCheck,
  },
  {
    name: "Customer Focus",
    description: "Your satisfaction is our priority. We offer 24/7 support and easy returns.",
    icon: HeartHandshake,
  },
  {
    name: "Global Shipping",
    description: "We deliver to over 50 countries worldwide with reliable tracking and insurance.",
    icon: Globe2,
  },
];

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero.section}>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className={styles.hero.image}
        />
        <div className={styles.hero.gradient} />
        <div className={styles.hero.contentWrapper}>
          <div className={styles.hero.content}>
            <h1 className={styles.hero.title}>We change the way people shop</h1>
            <p className={styles.hero.subtitle}>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. 
              Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className={styles.mission.section}>
        <div className={styles.mission.grid}>
          <div className="lg:col-span-2">
            <h2 className={styles.mission.title}>Our Mission</h2>
            <p className={styles.mission.description}>
              We believe shopping should be easy, enjoyable, and accessible to everyone. 
              Our mission is to provide a curated selection of high-quality products at competitive prices, 
              backed by exceptional customer service.
              <br /><br />
              Founded in 2024, FakeStore started with a simple idea: connect quality manufacturers directly with consumers. 
              Today, we serve thousands of customers worldwide and continue to expand our catalog.
            </p>
          </div>
          <div className={styles.mission.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.mission.statCard}>
                <dt className={styles.mission.statLabel}>{stat.label}</dt>
                <dd className={styles.mission.statValue}>{stat.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className={styles.values.section}>
        <div className={styles.values.container}>
          <div className={styles.values.header}>
            <h2 className={styles.values.title}>Our Values</h2>
            <p className={styles.values.subtitle}>
              We are guided by a set of core principles that define who we are and how we work.
            </p>
          </div>
          <div className={styles.values.grid}>
            {values.map((value) => (
              <div key={value.name} className={styles.values.card}>
                <value.icon className={styles.values.icon} aria-hidden="true" />
                <dt className={styles.values.cardTitle}>
                  {value.name}.{" "}
                </dt>
                <dd className={styles.values.cardDesc}>{value.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
