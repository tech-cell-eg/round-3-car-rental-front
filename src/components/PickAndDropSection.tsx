import { useState } from "react";
import PickAndDrop from "./PickAndDrop";
import LocationPicker from "./LocationPicker";
import DatePicker from "./DatePicker";
import TimePicker from "./DatePicker"; // Assuming TimePicker is an alias of DatePicker
import Icon from "./Icon";

const locations: number[] = [1, 2, 3]; // made them strings for compatibility
const dates: string[] = ["2025-04-10", "2025-04-11", "2025-04-12"];
const times: string[] = ["09:00 AM", "12:00 PM", "03:00 PM"];

// Types
type SectionType = "pickup" | "dropoff";
type FieldType = "location" | "date" | "time";

interface SectionData {
  location: string;
  date: string;
  time: string;
}

interface FormData {
  pickup: SectionData;
  dropoff: SectionData;
}

function PickAndDropSection() {
  const [formData, setFormData] = useState<FormData>({
    pickup: { location: "", date: "", time: "" },
    dropoff: { location: "", date: "", time: "" },
  });

  const handleChange = (
    section: SectionType,
    field: FieldType,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Pickup */}
      <div className="w-full md:w-[45%] py-4 px-6 bg-surface-default rounded-lg">
        <PickAndDrop title="Pick-Up" />
        <div className="grid grid-cols-3">
          <LocationPicker
            label="Locations"
            value={formData.pickup.location}
            onChange={(val: string) => handleChange("pickup", "location", val)}
            options={locations}
            placeholder="Select the city"
          />
          <DatePicker
            label="Date"
            value={formData.pickup.date}
            onChange={(val: string) => handleChange("pickup", "date", val)}
            options={dates}
            placeholder="Select the date"
          />
          <TimePicker
            label="Time"
            value={formData.pickup.time}
            onChange={(val: string) => handleChange("pickup", "time", val)}
            options={times}
            placeholder="Select the time"
          />
        </div>
      </div>

      {/* Icon */}
      <div className="w-fit h-fit p-4 bg-accent-primary rounded-lg shadow-2xl">
        <Icon name="swap" />
      </div>

      {/* Drop-off */}
      <div className="w-full md:w-[45%] py-4 px-6 bg-surface-default rounded-lg">
        <PickAndDrop title="Drop-Off" />
        <div className="grid grid-cols-3">
          <LocationPicker
            label="Locations"
            value={formData.dropoff.location}
            onChange={(val: string) => handleChange("dropoff", "location", val)}
            options={locations}
            placeholder="Select the city"
          />
          <DatePicker
            label="Date"
            value={formData.dropoff.date}
            onChange={(val: string) => handleChange("dropoff", "date", val)}
            options={dates}
            placeholder="Select the date"
          />
          <TimePicker
            label="Time"
            value={formData.dropoff.time}
            onChange={(val: string) => handleChange("dropoff", "time", val)}
            options={times}
            placeholder="Select the time"
          />
        </div>
      </div>
    </div>
  );
}

export default PickAndDropSection;
