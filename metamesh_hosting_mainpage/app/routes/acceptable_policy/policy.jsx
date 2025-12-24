import "./policy.css";

import Header from "../../components/header/header";
import PolicyA from "../../components/terms_of_service/tos";
import Footer from "../../components/footer/footer";

export default function Policy() {
    const rules = [
        "1. You may use our service with any non malicious code/malware/spyware/any code that is not malicious.",
        "2. You may create a Ticket in the billing dashboard or on our discord.",
        "3. Spamming tickets on both the billing and discord is not allowed.",
        "4. we may ban your account for any reason",
        "5. if you are banned you may not create a second account on which you currently have an active pan on the previous one",
        "6. You may not post illegal/copyrighted content on our systems/networks",
        "7. Our name/brand may not be used in any content without first getting our permissions.",
    ]

    return <div className="app">
        <Header />
        <PolicyA title="Welcome to the MetaMesh Hosting Acceptable Use policy" rules={rules} info={<p>below is a list of acceptable uses for the MetaMesh Hosting networks/services. you agree to this by using our services.</p>} />
        <Footer />
    </div>
}