import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput, InputAdornment, IconButton, Stack } from "@mui/material";

function SearchInput({ stactSx, inputWidth }) {

    return (
        <Stack sx={stactSx}>
            <OutlinedInput
                size='small'
                sx={{ width: inputWidth ? inputWidth : "250px" }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton edge="end">
                            <SearchIcon sx={{ color: "primary.main" }} />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </Stack>
    );
}

export default SearchInput;