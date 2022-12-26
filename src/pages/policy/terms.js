import React from 'react';
import styles from './policy.module.scss'

export const Terms = () => {

    return <div className={styles.policy}>
        <div className="container">
            <h1 className={styles.title}>Terms of Processing Request of Competent Authorities</h1>
            <div className={styles.block}>
                <p className={styles.text}>
                    The Terms of Processing Requests (hereinafter “the Terms”) determine the procedure how Meltswap provide responses to the requests from competent authorities regarding www.meltswap.com (the "Website") and its related services. The Terms apply to the Website and all services provided by Meltswap.
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    General Information
                </h2>
                <p className={styles.text}>
                    Meltswap can only provide the required information to competent authorities after obtaining a official request and agreeing to it. Competent authority is any person or organization that legally is able to exercise the powers, duties and functions of filing such a requests for obtaining information or conducting investigation.
                </p>
                <p className={styles.text}>
                    The request shall be made on a legal basis and sent according to the Terms. The request for information shall be made in English only and include a valid email address for us to deliver our response. Valid email is an official email of the competent authority, which is obviously associated with the competent authority in question.
                </p>
                <p className={styles.text}>
                    Meltswap reserves the right to leave the request without action when it does not comply with the law. Meltswap prefers to receive all type of inquiries via e-mail: <a href="emailto:support@meltswap.com">support@meltswap.com</a>.  The process of reviewing the inquiry might require at least ten (21) business days.
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    The request from competent authority shall contain the following information:
                </h2>
                <p className={styles.text}>
                    <ul>
                        <li><span>1.</span> The full information about competent authority issuing the request for information;</li>
                        <li><span>2.</span> The name and identification information of the person in charge of the inquiry;</li>
                        <li><span>3.</span> An official e-mail and postal address of the competent authority and contact phone number;</li>
                        <li><span>4.</span> The clear description of the types of information which competent authority requests to receive.</li>
                    </ul>
                </p>
                <p className={styles.text}>
                    In order to be able to efficiently process the request, we additionally ask the competent authority to provide transaction details related to the inquiry: a wallet address, a hash of a transaction, amount of a transaction or any other significant information that is in possession of the competent authority.
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    Disclaimer, Exemptions of Liabilities
                </h2>
                <p className={styles.text}>
                    Meltswap uses its best efforts to collect and provide competent authorities with the information to its fullest and maximum possible extent, however, Meltswap takes no responsibility and gives no warranty, including implied, to the accuracy, adequacy, and completeness of the information provided in response to request. Please be aware that any deficiencies in the information are possible and may be caused by whatever reasons including, but not limited to human agency, hardware and software imperfections and malfunctions.
                </p>
                <p className={styles.text}>
                    The correspondence on the requests from competent authority is confidential and privileged and shall be used only for the purposes of the request and neither party shall share any information without the other party’s approval.
                </p>
            </div>
        </div>
    </div>
};
