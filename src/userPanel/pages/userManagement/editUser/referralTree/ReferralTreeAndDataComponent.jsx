import { Container, Stack, Typography } from '@mui/material';
import ReferralTree from "./ReferralTree"
import { useGetReferralListQuery, useGetReferralInfoQuery } from '../../../../../globalState/admin/adminStateApis';
import ReferralInfo from './ReferralInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedReferralCode } from '../../../../../globalState/admin/adminStateSlice';
import { parseReferralTree } from "../../../../utils/parseReferralTree"
import ReferralInfoModal from './ReferralInfoModal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function ReferralTreeAndDataComponent() {

    const { id } = useParams()

    const { selectedReferralCode } = useSelector(state => state.admin)

    const [openModal, setOpenModal] = useState(false);

    const { data: referralInfoData, isLoading: referralInfoDataLoading } = useGetReferralInfoQuery({ referralCode: selectedReferralCode }, { skip: !selectedReferralCode })

    const referralInfo = !referralInfoDataLoading && referralInfoData?.data

    const dispatch = useDispatch()

    const { data, isLoading } = useGetReferralListQuery({ userId: id }, { skip: !id })

    const listData = data?.data ? parseReferralTree(data?.data) : [];

    function onReferralCodeClick(referralCode) {
        const match = referralCode?.match(/-(\w+)-/);
        const refCode = match ? match[1] : null;
        dispatch(setSelectedReferralCode(refCode))
        setOpenModal(true);
    }

    const handleCloseModal = () => setOpenModal(false);

    return (
        <Stack sx={{ mt: "30px" }}>
            <Typography variant="h6" fontWeight="bold">Referral Tree</Typography>
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
        </Stack>
    )
}

export default ReferralTreeAndDataComponent;