import { Container, Typography } from '@mui/material';
import ReferralTree from './referralTree/ReferralTree';
import { useGetReferralListQuery, useGetReferralInfoQuery } from '../../../../globalState/walletState/walletStateApis';
import ReferralInfo from './referralInfo/ReferralInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedReferralCode } from '../../../../globalState/walletState/walletStateSlice';
import { parseReferralTree } from "../../../utils/parseReferralTree"
import ReferralInfoModal from './referralTree/ReferralInfoModal';
import { useState } from 'react';

function DirectTeam() {

    const { selectedReferralCode } = useSelector(state => state.wallet)

    const [openModal, setOpenModal] = useState(false);

    const { data: referralInfoData, isLoading: referralInfoDataLoading } = useGetReferralInfoQuery({ referralCode: selectedReferralCode }, { skip: !selectedReferralCode })

    const referralInfo = !referralInfoDataLoading && referralInfoData?.data

    const dispatch = useDispatch()

    const { data, isLoading } = useGetReferralListQuery()

    const listData = data?.data ? parseReferralTree(data?.data) : [];

    function onReferralCodeClick(referralCode) {
        const match = referralCode?.match(/-(\w+)-/);
        const refCode = match ? match[1] : null;
        dispatch(setSelectedReferralCode(refCode))
        setOpenModal(true);
    }

    const handleCloseModal = () => setOpenModal(false);

    return (
        <Container sx={{ mt: "100px" }}>
            <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Referral Tree</Typography>
            <ReferralTree
                listData={listData}
                loadingListData={isLoading}
                onClick={onReferralCodeClick}
            />
            <ReferralInfoModal
                modalWidth={{ xs: "90%", sm: 600 }}
                open={openModal}
                onClose={handleCloseModal}
                Content={ReferralInfo}
                contentData={referralInfo}
                loading={referralInfoDataLoading}
            />
        </Container>
    )
}

export default DirectTeam;