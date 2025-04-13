import CarsDisplayPanel from "./CarsDisplayPanel";
import SectionTitle from "./SectionTitle";

interface TitledCarsSetion {
  count: number;
  headingTitle?: string;
  gridCols?: string;
}

function TitledCarsSetion({ count, headingTitle, gridCols }: TitledCarsSetion) {
  return (
    <section
      className={`flex flex-col ${
        headingTitle ? "gap-4" : ""
      } mt-12 py-5 px-3 md:px-8`}
    >
      {headingTitle && <SectionTitle title={headingTitle} />}
      <CarsDisplayPanel count={count} gridCols={gridCols} />
    </section>
  );
}

export default TitledCarsSetion;
