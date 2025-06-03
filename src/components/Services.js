import Title from "./Title";
import { serviceSections } from "../data/data";
import Service from "./Service";

export default function Services() {
  return (
    <>
      <section className="section services" id="services">
        <Title title="our" subTitle="services" />

        <div className="section-center services-center">
          {serviceSections.map((section) => {
            return <Service key={section.id} {...section} />;
          })}
        </div>
      </section>
    </>
  );
}
