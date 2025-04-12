// src/components/RentalSection.tsx
import React from 'react';
import LocationPicker from './LocationPicker';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { RentalSectionProps } from '../types';
import PickAndDrop from './PickAndDrop';

const RentalSection: React.FC<RentalSectionProps> = ({
    title,
    pickUpLocation,
    dropOffLocation,
    pickUpDate,
    dropOffDate,
    pickUpTime,
    dropOffTime,
    setPickUpLocation,
    setDropOffLocation,
    setPickUpDate,
    setDropOffDate,
    setPickUpTime,
    setDropOffTime,
    errors
    
}) => {
    const locations = ['Location 1', 'Location 2', 'Location 3'];
    const dates = ['2025-04-10', '2025-04-11', '2025-04-12'];
    const times = ['09:00 AM', '12:00 PM', '03:00 PM'];

    return (
        <div className="bg-white p-5 rounded-md mb-7 shadow-sm">
            <div className="mb-5 px-3 flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-gray-500">Please select your rental date</p>
                </div>
                <span className="text-sm text-gray-500">Step 2 of 4</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <PickAndDrop title="Pick-Up" />
                    <div className="space-y-4">
                        <LocationPicker
                            label="Locations"
                            value={pickUpLocation}
                            onChange={setPickUpLocation}
                            options={locations}
                            placeholder="Select the city"
                            className='rounded-md w-full bg-gray-100'
                            error={errors?.pickUpLocation}
                        />
                        
                        <DatePicker
                            label="Date"
                            value={pickUpDate}
                            onChange={setPickUpDate}
                            options={dates}
                            placeholder="Select the date"
                            className='rounded-md w-full bg-gray-100'
                            error={errors?.pickUpDate}
                        />
                        <TimePicker
                            label="Time"
                            value={pickUpTime}
                            onChange={setPickUpTime}
                            options={times}
                            placeholder="Select the time"
                            className='rounded-md w-full bg-gray-100'
                            error={errors?.pickUpTime}
                        />
                    </div>
                </div>

                <div>
                    <PickAndDrop title="Drop-Off" />
                    
                    <div className="space-y-4">
                        <LocationPicker
                            label="Locations"
                            value={dropOffLocation}
                            onChange={setDropOffLocation}
                            options={locations}
                            placeholder="Select the city"
                            className='rounded-md w-full bg-gray-100'
                            error={errors?.dropOffLocation}
                        />
                        <DatePicker
                            label="Date"
                            value={dropOffDate}
                            onChange={setDropOffDate}
                            options={dates}
                            placeholder="Select the date"
                            className='rounded-md w-full bg-gray-100'
                            error={errors?.dropOffDate}
                        />
                        <TimePicker
                            label="Time"
                            value={dropOffTime}
                            onChange={setDropOffTime}
                            options={times}
                            placeholder="Select the time"
                            className='rounded-md w-full bg-gray-100'
                            error={errors?.dropOffTime}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalSection;