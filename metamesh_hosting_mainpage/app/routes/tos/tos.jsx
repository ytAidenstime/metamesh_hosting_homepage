import TermsOfService from "../../components/terms_of_service/tos";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function TOS() {
    const rules = [
        "1. Must be atleast 13 years old or more to use our services and or join the discord.",
        "2. Information given must be your own information.",
        `3. We reserve the right to Ban (ANY) of your accounts for any reason. as well as terminate (delete your
                data) for any reasons.`,
        "4. No spamming channels/tickets or any of our chats.",
        `5. You may not ever try and make another account to bypass a ban that is actively placed on one of your
                previous accounts. (if we see its the same ip we will still ban it even if its your brother)`,
        `6. You may not ever try to install malware/malicious code with intent/knowingly doing so to either try to
                mess up the system and or for testing purposes`,
        "7. No hacking into our Networks/Systems/Machines",
        "8. No uploading/placing copyrighted/illegal content on our Systems",
        `9. Anything posted on our network weather it be an image/files/code any of this content or data on our
                networks you have full rights too however we also automatically get the rights to use it in
                promotionals/on our website (with the consent of YOU)`,
        `10. Any content listed on our Website (any site with the domain metamesh.ca)/GamePanel (Pterodactyl
                Panel)/WebPanel (CPanel) is subject to copyright and you may not use it in any of your
                personal/commercial projects no matter what. (this also extends to anything with the metamesh.ca domain
                in it)`,
        "11. We are not held accountable for your servers being hacked/dataloss/forgetting your password",
        `12. We have the right to suspend/put your server on hold if we believe you to have violated one of our
                Terms Of Service`,
        `13. You have the right to get your money Refunded within the first 48 hours of your purchase/service
                being ordered and after that you cannot and may not recieve a refund (in some cases we may make an
                exception to this rule)`,
        `14. we are not responsible for any damages to your server/service interuptions to your server that costed
                you anything Eg: you bought a server and it was on maintenance for awhile`,
        "15. We do not 100% 24/7 guarantee our site will be online or any of the systems will be online 24/7"
    ]

    return <>
        <Header />
        <TermsOfService title="Welcome to the MetaMesh Hosting Terms of Service" rules={rules} info={<p>Below is a list of Terms and Conditions that you agree too upon purchasing/ordering/using our
            services.<br />the references made are as follows: You (refers to you the person using our systems), our/us/metamesh (us as a company).
            <br />if you still have questions about our TOS or any other rules/regulations please create a ticket on our <a
                href="https://discord.gg/s3ABvC2hjp" target="_blank">Discord</a> or in the billing dashboard.</p>} />
        <Footer />
    </>
}

/*
            <p>13. You have the right to get your money Refunded within the first 48 hours of your purchase/service
                being ordered and after that you cannot and may not recieve a refund (in some cases we may make an
                exception to this rule)</p>
            <p>14. we are not responsible for any damages to your server/service interuptions to your server that costed
                you anything Eg: you bought a server and it was on maintenance for awhile</p>
            <p>15. We do not 100% 24/7 guarantee our site will be online or any of the systems will be online 24/7</p>
 */