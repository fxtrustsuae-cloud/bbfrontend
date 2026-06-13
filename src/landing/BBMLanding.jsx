import Header from './layout/Header';
import Footer from './layout/Footer';
import HeroBanner from './Components/heroBanner/HeroBanner';
import WhatIsBBMCoin from './Components/whatIsBBMCoin/WhatIsBBMCoin';
import BBMCoinKeyFeatures from './Components/BBMCoinKeyFeatures/BBMCoinKeyFeatures';
import TokenAllocationTable from './Components/tokenAllocationTable/TokenAllocationTable';
import BBMRoadmapHighlight from './Components/BBMRoadmapHighlight/BBMRoadmapHighlight';
import JoinBBMCommunity from './Components/JoinBBMCommunity';
import ScrollUp from './Components/ScrollUp';
import BBMHero from './Components/BBMHero/BBMHero';

function BBMLanding() {
    return (
        <>
            <Header />
            <BBMHero />
            <BBMCoinKeyFeatures />
            <WhatIsBBMCoin />
            <TokenAllocationTable />
            <BBMRoadmapHighlight />
            <JoinBBMCommunity />
            <ScrollUp />
            <Footer />
        </>
    )
}

export default BBMLanding;