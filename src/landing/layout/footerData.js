import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const footerData = [
    {
        "Contact": [
            {
                icon: WhatsAppIcon,
                contactInfo: "+971 547800208",
                type: "Trading related query"
            },
            {
                icon: MailOutlineIcon,
                contactInfo: "support@boostbullion.com",
                type: "Email us"
            }
        ]
    },
    {
        "About": "Boost Bullion provides secure and reliable gold trading services, investment solutions, and market insights. Explore our range of precious metals, real-time pricing, and expert guidance for safe and profitable investments"
    },
    {
        "Services": ["Gold Bullion Trading", "Gold Lending and Leasing", "Secure Storage and Custody", "Consultation and Advisory"]
    },
    {
        "Community": [
            { name: 'Services', ref: 'servicesRef' },
            { name: 'About Us', ref: 'aboutRef' },
            { name: 'Contact Us', ref: 'contactRef' }
        ]
    },
    {
        "Subscribe To Newsletter": "Get latest update and News",
        socialMediaIcons: [FacebookIcon, InstagramIcon, XIcon, YouTubeIcon]
    },
    {
        reservedRight: "© 2025 — Boost Bullion. All Rights Reserved."
    }
]