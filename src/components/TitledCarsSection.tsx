import { Car } from "../types/car";
import CarsDisplayPanel from "./CarsDisplayPanel";
import SectionTitle from "./SectionTitle";

interface TitledCarsSection {
  carList: Car[];
  headingTitle?: string;
  gridCols?: string;
}

function TitledCarsSection({
  carList,
  headingTitle,
  gridCols,
}: TitledCarsSection) {
  return (
    <section
      className={`flex flex-col ${
        headingTitle ? "gap-4" : ""
      } mt-12 py-5 px-3 md:px-8 text-content-dimmed`}
    >
      {headingTitle && <SectionTitle title={headingTitle} />}
      <CarsDisplayPanel carList={carList} gridCols={gridCols} />
    </section>
  );
}

export default TitledCarsSection;
