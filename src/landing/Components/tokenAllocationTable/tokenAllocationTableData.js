export function createData(name, Allocation, Description) {
    return { name, Allocation, Description };
}

export const rows = [
    createData('Vested Supply', "80%", "Vested Supply	80%	Locked over 5 years to ensure price stability and long-term trust."),
    createData('Development Fund', "5%", "For platform growth, infrastructure upgrades, and R&D."),
    createData('Marketing & Exchange', "5%", "Marketing & Exchange	5%	To drive global awareness, exchange listings, and community growth."),
    createData('Initial Exchange Offering (IEO)', "5%", "Strategic partnerships with global exchanges."),
    createData('Initial Coin Offering (ICO)', "5%", "Open participation for early adopters and public supporters."),
];