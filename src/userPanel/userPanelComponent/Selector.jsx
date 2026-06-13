import { MenuItem, Typography, Stack, FormControl, Select } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Selector({
    items = [],
    shouldBeFullWidth = false,
    shouldBeDisabled = false,
    width,
    value,
    onChange,
    selectSx,
    showDefaultOption = true
}) {

    return (
        <FormControl size="small" sx={{ width: width }} fullWidth={shouldBeFullWidth}>
            <Select
                disabled={shouldBeDisabled}
                size="small"
                value={value || ""}
                onChange={onChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={{ transitionDuration: 0 }}
                sx={{ ...selectSx }}
                IconComponent={KeyboardArrowDownIcon}
            >
                {showDefaultOption && (
                    <MenuItem value="">
                        <em>Select --</em>
                    </MenuItem>
                )}
                {items.map((item, i) => (
                    <MenuItem value={item.value || item.name || item} key={i}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            {item.image && (
                                <img src={item.image} alt={item.label || item.name} width="24" height="24" />
                            )}
                            {item.icon && <item.icon />}
                            <Typography>
                                {item.label || item.name || item}
                            </Typography>
                            {item.description && (
                                <Typography variant="body2" color="gray">
                                    {item.description}
                                </Typography>
                            )}
                        </Stack>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default Selector;