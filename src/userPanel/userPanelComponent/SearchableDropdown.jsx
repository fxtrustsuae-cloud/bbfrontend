import { Autocomplete, TextField } from '@mui/material';

function SearchableDropdown({ options, placeholder, sx, value, onChange }) {
    return (
        <Autocomplete
            size="small"
            disablePortal
            value={value || null}
            onChange={(event, newValue) => onChange(newValue || "")}
            options={options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    sx={{ ...sx }}
                    placeholder={placeholder}
                />
            )}
        />
    );

}

export default SearchableDropdown;