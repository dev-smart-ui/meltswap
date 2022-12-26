import React from 'react';
import styles from './policy.module.scss'

export const Policy = () => {

    return <div className={styles.policy}>
        <div className="container">
            <h1 className={styles.title}>Privacy Policy </h1>
            <div className={styles.block}>
                <p className={styles.text}>
                    This Privacy Policy (the Policy) explains the way in which Meltswap. (hereinafter referred to as
                    “Meltswap”), collect, use, share, and protect Personal Information of Users ("you") obtained through Meltswap.com ("Websites"), any related applications (including but not limited to the mobile one) and exchange tools integrated into third party services (“Services”). The terms “we,” “us,” and “our” refer to the entities indicated below.
                </p>
                <p className={styles.text}>
                    “Personal Information” is an information that identifies or can be used to identify, contact, or locate the person to whom such information pertains.
                </p>
                <p className={styles.text}>
                    We are fully committed to respecting privacy and to protecting any information that our clients provide. Your privacy and security are both our highest priorities and we make every effort to ensure that all the information provided by you is protected
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    General Information
                </h2>
                <p className={styles.text}>
                    Meltswap use Personal Information only for providing and improving the Website and the Services. In particular, we use user's Personal Information for the following purposes:
                </p>
                <p className={styles.text}>
                    <ul>
                        <li><span>1.</span> To maintain our Website and the Services. We use Personal Information to ensure that our services function properly;</li>
                        <li><span>2.</span> To improve our Website and Services. Personal Information helps our systems ensure that our interface is accessible for Users across all platforms;</li>
                        <li><span>3.</span> To comply with our legal obligations. In many jurisdictions we are obliged to collect certain information about our users to be authorized to act (Know Your Client and Anti-Money Laundering regulations). Meltswap obliged to obtain Personal Information in order to be able to aid during criminal investigations;</li>
                        <li><span>4.</span> To protect your assets Meltswap may use information to identify you and the assets belonging to you in order to secure access to your accounts and to prevent the fraud. Information about your transaction allows us to monitor suspicious activity and protect you from fraud and scam activity;</li>
                        <li><span>5.</span> To send periodic e-mails Meltswap may use the information we collect from you when you register or use certain other site features. This might be for security reasons, to ask your opinion about the website, or it may be to keep you updated on any changes to the services provided on the Website and our Services. We may also send periodic emails with news and Services updates, or use this information to follow up with you following live chat or email;</li>
                        <li><span>6.</span> To resolve disputes and enforce our agreements to the extent necessary and sufficient for protecting your interests or interests of other users.</li>
                    </ul>
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    Disclaimer, Exemptions of Liabilities
                </h2>
                <p className={styles.text}>
                    <ul>
                        <li><span>1.</span> We will retain your information only for as long as is necessary for the purposes set out in this policy. We will retain your information just to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</li>
                        <li><span>2.</span> The User may request to remove the personal data. Should that be a case, user requests could be fulfilled by the erasure of personal data to the extent permissible by the applicable law and regulations. In certain cases we are obliged to store your information to be legally compliant.</li>
                    </ul>
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    Security Measures
                </h2>
                <p className={styles.text}>
                    <ul>
                        <li>
                            <span>1.</span> Meltswap and Sum & Substance aim to protect your information as much as we aim to protect our own information and network. Meltswap will not permit any third parties to contact you directly on an unsolicited basis in relation to their own products or services. Meltswap do not sell, trade, or rent your personal identification information to others. You should never disclose your account password to unauthorized parties.
                        </li>
                        <li>
                            <span>2.</span> Meltswap use certain security measures to help keep your personal information safe, but we cannot guarantee that these measures will stop any users try to get around the privacy or security settings on the Website and Services platform through unforeseen and/or illegal activity. That is why we make no warranty, express, implied or otherwise, that we will prevent such access.
                        </li>
                    </ul>
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    Law and Harm
                </h2>
                <p className={styles.text}>
                    <ul>
                        <li><span>1.</span> Notwithstanding anything to the contrary in this Policy, Meltswap may preserve or disclose your information if we believe that it is reasonably necessary to comply with a law, regulation, legal process, or governmental request; to protect the safety of any person; to address fraud, security or technical issues; or to protect our or our users’ rights or property.</li>
                    </ul>
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    Changes to Policy
                </h2>
                <p className={styles.text}>
                    <ul>
                        <li><span>1.</span> This Policy may be amended at our full discretion without prior notice. Meltswap encourage you to review it periodically in order to be aware of the changes we may have made. Reading it carefully and checking for any modifications is your responsibility. By using the Services, you accept and agree to the Policy and the Terms of Use.</li>
                    </ul>
                </p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>
                    Contact Us
                </h2>
                <p className={styles.text}>
                    If you have any questions please contact us via <a href="mailto:support@meltswap.com">support@meltswap.com</a>.
                </p>
            </div>
        </div>
    </div>
};
