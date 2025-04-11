import PickAndDrop from "./PickAndDrop";
import LocationPicker from "./LocationPicker";
import DatePicker from "./DatePicker";
import TimePicker from "./DatePicker";
import Icon from "./Icon";

const locations = ["Location 1", "Location 2", "Location 3"];
const dates = ["2025-04-10", "2025-04-11", "2025-04-12"];
const times = ["09:00 AM", "12:00 PM", "03:00 PM"];

function PickAndDropSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-3 md:px-7">
      <div className="w-full md:w-[45%] py-4 px-6 bg-surface-default rounded-lg">
        <PickAndDrop title="Pick-Up" />
        <div className="grid grid-cols-3">
          <LocationPicker
            label="Locations"
            // value={pickUpLocation}
            value="pick up loc"
            // onChange={setPickUpLocation}
            onChange={() => {}}
            options={locations}
            placeholder="Select the city"
            className=""
          />
          <DatePicker
            label="Date"
            // value={pickUpDate}
            value="date loc"
            // onChange={setPickUpDate}
            onChange={() => {}}
            options={dates}
            placeholder="Select the date"
            className=""
          />
          <TimePicker
            label="Time"
            // value={pickUpTime}
            value="time loc"
            // onChange={setPickUpTime}
            onChange={() => {}}
            options={times}
            placeholder="Select the time"
            className=""
          />
        </div>
      </div>

      <div className="w-fit h-fit p-4 bg-accent-primary rounded-lg shadow-2xl">
        <Icon name="swap" />
      </div>

      <div className="w-full md:w-[45%] py-4 px-6 bg-surface-default rounded-lg">
        <PickAndDrop title="Drop-Off" />
        <div className="grid grid-cols-3">
          <LocationPicker
            label="Locations"
            // value={pickUpLocation}
            value="pick up loc"
            // onChange={setPickUpLocation}
            onChange={() => {}}
            options={locations}
            placeholder="Select the city"
          />
          <DatePicker
            label="Date"
            // value={pickUpDate}
            value="date loc"
            // onChange={setPickUpDate}
            onChange={() => {}}
            options={dates}
            placeholder="Select the date"
          />
          <TimePicker
            label="Time"
            // value={pickUpTime}
            value="time loc"
            // onChange={setPickUpTime}
            onChange={() => {}}
            options={times}
            placeholder="Select the time"
          />
        </div>
      </div>
    </div>
  );
}

export default PickAndDropSection;
