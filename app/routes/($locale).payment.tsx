import React from 'react';

export default function PaymentTermsPage() {
    return (
        <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
                <p className='!text-2xl sm:!text-3xl font-bold'>Payment Terms</p>
                <p className="!text-2xl sm:!text-3xl lg:!text-3xl font-bold">PAYMENT TERMS</p>
                <div>
                    <h2 className="!text-xl sm:!text-2xl font-semibold">Payment Processing</h2>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base'>When you place an order on our website, your card is charged immediately and not at the time of shipment. Your billing statement will appear as: {import.meta.env.VITE_COMPANY_NAME}</p>
                </div>
                <div>
                    <h2 className="!text-xl sm:!text-2xl font-semibold">Accepted Payment Methods</h2>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base'>We accept payments by credit card (Visa, MasterCard, American Express). For credit card payments, your credit card information will be processed securely by our payment service provider.</p>
                </div>
                <div>
                    <h2 className="!text-xl sm:!text-2xl font-semibold">Payment Security</h2>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base'>
                        All transactions made on our site are secured through SSL (Secure Socket Layer) encryption protocol, which ensures the confidentiality of transmitted information. We are committed to protecting our customers&apos; personal data in accordance with the General Data Protection Regulation (GDPR).
                    </p>
                </div>
                <div>
                    <h2 className="!text-xl sm:!text-2xl font-semibold">Billing Information</h2>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base'>
                        Once your order is placed, a detailed invoice will be sent to you by email. Please verify the billing and shipping information to ensure proper receipt of your order.
                    </p>
                </div>
                <div>
                    <h2 className="!text-xl sm:!text-2xl font-semibold">Accuracy of Billing Information</h2>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base'>You are responsible for providing accurate and up-to-date billing and shipping information. If these details change, you must inform us as soon as possible to avoid any delay or delivery issues.</p>
                </div>
                <div>
                    <h2 className="!text-xl sm:!text-2xl font-semibold">Refunds</h2>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base'>If you wish to obtain a refund, please contact us at the following address: {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}. You have {import.meta.env.VITE_REFUND_PERIOD} days from receipt of your order to exercise your right of withdrawal.</p>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base'>The refund will be processed to the payment method used for the order and will take {import.meta.env.VITE_REFUND_PROCESSING_TIME} business days to appear in your bank account.</p>
                </div>
                <div>
                    <h2 className="!text-xl sm:!text-2xl font-semibold">Claims and Disputes</h2>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base'>In case of complaints or disputes regarding a transaction, please contact us at the email address mentioned above. We will strive to resolve any complaint as quickly as possible.</p>
                </div>
                <div>
                    <h2 className="!text-xl sm:!text-2xl font-semibold">Modifications to Payment Terms</h2>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base'>We reserve the right to modify these payment terms at any time. Any modification will be published on this page and you will be informed by email. By continuing to use our site after the publication of modifications, you accept them.</p>
                </div>
                <div>
                    <h2 className="!text-xl sm:!text-2xl font-semibold">Contact Information</h2>
                    <p className='leading-6 sm:leading-7 !text-sm sm:!text-base !pb-4'>To contact us, simply send an email to {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL} or call {import.meta.env.VITE_CUSTOMER_SERVICE_PHONE} Monday to Friday - {import.meta.env.VITE_BUSINESS_HOURS}.</p>
                     <p className='flex flex-col gap-2 !text-sm sm:!text-base'>
                        <span>Address: {import.meta.env.VITE_COMPANY_ADDRESS}</span>
                        <span>Email: <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline underline-offset-4">{import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}</a></span>
                        <span>Phone: <a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`} className="underline underline-offset-4">{import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}</a></span>
                        <span>Website: <a href={`${import.meta.env.VITE_DOMAIN_NAME}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{import.meta.env.VITE_DOMAIN_NAME}</a></span>
                        <span className='pt-4'>Last updated: {import.meta.env.VITE_PP_LAST_UPDATED_DATE}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}