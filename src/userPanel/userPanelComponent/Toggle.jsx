import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack } from '@mui/material';

function Toggle({ toggleButtonSx, items, toggleButtonGroupSx, stackSx, onChange, active }) {

    return (
        <Stack sx={stackSx}>
            <ToggleButtonGroup
                color="primary"
                exclusive
                onChange={onChange}
                aria-label="Platform"
                sx={{ color: "#989c9e", ...toggleButtonGroupSx }}
            >
                {
                    items?.map((item, i) => (
                        <ToggleButton
                            value={item}
                            sx={{
                                borderBottom: active === item && "2px solid primary.main",
                                color: active === item && "primary.main",
                                textTransform: "capitalize",
                                fontSize: "1rem",
                                ...toggleButtonSx
                            }}
                            key={i}
                        >
                            {item}
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </Stack>
    );
}

export default Toggle;