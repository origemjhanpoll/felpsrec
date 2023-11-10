import background from "../../assets/images/background.jpg";

export default function HomePage() {
  return (
    <section id="sectionHome">
      <img
        src={background}
        height={window.innerHeight}
        width="100%"
        style={{ objectFit: "cover" }}
        alt={background}
        loading="lazy"
      />
    </section>
  );
}
