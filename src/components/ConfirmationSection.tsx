import React, { useState } from 'react';
import Checkbox from './Checkbox';
import SafeMesg from './SafeMesg';

interface ConfirmationSectionProps {
    termsAccepted: boolean;
    setTermsAccepted: (value: boolean) => void;
    error?: string | undefined;
}

const ConfirmationSection: React.FC<ConfirmationSectionProps> = ({ termsAccepted, setTermsAccepted, error }) => {
    const [marketingEmails, setMarketingEmails] = useState(false);

    return (
        <div className="bg-white p-5 rounded-md shadow-sm">
            <div className="mb-5 px-3 flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">Confirmation</h2>
                    <p className="text-sm text-gray-500">
                        We are getting to the end. Just few clicks and your rental is ready!
                    </p>
                </div>
                <span className="text-sm text-gray-500">Step 4 of 4</span>
            </div>

            <div className="space-y-3 px-3">
                <Checkbox
                    id="marketingEmails"
                    label="I agree with sending an Marketing and newsletter emails. No spam, promised!"
                    checked={marketingEmails}
                    onChange={setMarketingEmails}
                />
                <Checkbox
                    id="termsAccepted"
                    label="I agree with our terms and conditions and privacy policy."
                    checked={termsAccepted}
                    onChange={setTermsAccepted}
                    />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

                
            <SafeMesg
                text1="All your data are safe"
                text2="We are using the most advanced security to provide you the best experience ever."
            />
        </div>
    );
};

export default ConfirmationSection;