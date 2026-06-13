import { Card, Container, Stack } from '@mui/material';
import Toggle from "../../../../userPanelComponent/Toggle";
import ProfileUpdate from './profileUpdate/ProfileUpdate';
import { useState } from 'react';
import PasswordUpdate from './passwordUpdate/PasswordUpdate';
import EmailUpdate from './emailUpdate/EmailUpdate';
import TransactionPasswordUpdate from './transactionPasswordUpdate/TransactionPasswordUpdate';

const COMPONENTS = {
    Profile: ProfileUpdate,
    "Change Profile Password": PasswordUpdate,
    // "Update Email": EmailUpdate,
    "Change Transaction Password": TransactionPasswordUpdate
};

function ProfileToggle() {
    const [activeButtonName, setActiveButtonName] = useState("Profile");

    function handleAccountToggle(newAlignment) {
        if (newAlignment) setActiveButtonName(newAlignment);
    }

    const ActiveComponent = COMPONENTS[activeButtonName] || ProfileUpdate;

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card
                    sx={{
                        borderRadius: '1rem',
                        p: { xs: "1rem", sm: "2rem" },
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <Toggle
                        toggleButtonSx={{
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                            borderRadius: "0",
                        }}
                        toggleButtonGroupSx={{ flexDirection: { xs: "column", sm: "row" } }}
                        stackSx={{ borderBottom: "1px solid #989c9e" }}
                        items={Object.keys(COMPONENTS)}
                        onChange={(_, newAlignment) => handleAccountToggle(newAlignment)}
                        active={activeButtonName}
                    />
                    <ActiveComponent />
                </Card>
            </Container>
        </Stack>
    );
}

export default ProfileToggle;