import React from 'react';
import styles from './policy.module.scss'

export const Aml = () => {

    return <div className={styles.policy}>
        <div className="container">
            <h1 className={styles.title}>AML/KYC Policy <span>AML refers to “Anti-Money Laundering” and KYC refers to “Know Your Customer”.</span> </h1>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    Overview
                </h2>
                <p className={styles.text}>
                    We strive to protect all users from fraudulent and scam activities in the crypto assets sphere. It is possible for crypto assets to be used for scams or criminal activity, as defined by law. In order to prevent these type of activities and protect users, it is necessary we use measures for user verification and security of all financial transactions information. One of these measures are the implementation of AML/KYC procedures, which allows us to confirm, that you are a law abiding individual or corporation using our platform.
                </p>
                <p className={styles.text}>
                    Meltswap use a system to identify any suspicious activities on its platform. Should transactions be flagged by the system or its partners, it will be put on hold and not be executed by the platform and user will be ask to verify this suspicious behavior. For security reasons we are not able to disclose specific information of how our platform identify such suspicious behavior. But this is used to protect users from potential scammers or unauthorized activities on their profile. Furthermore Meltswap reserve the right to apply AML/KYC procedures to any user using there platform for crypto assets transactions. The application of this AML/KYC procedures is in line with policies of Meltswap and aimed at preventing and mitigating potential risk of Meltswap platform being used for money laundering or illegal activities.
                </p>
                <p className={styles.text}>
                    Meltswap also reserve the right to appoint a third-party service provider in order to fulfil AML/KYC procedure on behalf of Metlswap. During the processing of user’s information such service can be used in line with Meltswap privacy policy in respect of user’s personal information. Meltswap can provide user information during the AML/KYC procedure verification process to competent authorities upon legal request. Meltswap will not engage in any activities with individuals or entities suspected or directly involved in money laundering activities, of in which funds have been sourced of illegal activity.
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    AML/KYC Procedures
                </h2>
                <p className={styles.text}>
                    AML/KYC procedure might be applied in respect to those crypto assets pay, which are determined by our risk prevention system as suspicious. In these cases, Meltswap will contact the user with registered account by email.
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    AML/KYC procedure includes confirming the identity of users by means of:
                </h2>
                <p className={styles.text}>
                   1. A high-quality photo of their valid ID (passport, ID or Driver’s License) in their country; <br/>
                   2. Selfie of the user holding there valid Identification document; <br/>
                   3. Proof of residence.
                </p>
                <p className={styles.text}>
                    Upon successful completion of the AML & KYC verification, the transaction that was put on hold will be processed. In response to Meltswap request for user documentation, Meltswap takes all possible measures to recognize the deceptive documentation or other false information and reserves the right to investigate certain users or transactions which have been detected  to be risky or suspicious. If there is any reasonable doubt that any information provided by user is wrong, untruthful, outdated or incomplete, Meltswap has the right to send user a notice to demand corrections or terminate accounts relating to that user.
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    Disclaimer
                </h2>
                <p className={styles.text}>
                    Meltswap keeps working on quick and transparent procedures updates that may be delivered to our users via email and other means as well as on our website <a href="www.meltswap.com">www.meltswap.com</a>.
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    Contact Us
                </h2>
                <p className={styles.text}>
                    If you have any questions about our AML/KYC procedures, please contact us via <a href="support@meltswap.com">support@meltswap.com</a>.
                </p>
            </div>
        </div>
    </div>
};
