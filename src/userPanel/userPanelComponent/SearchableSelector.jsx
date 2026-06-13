import {
  MenuItem,
  Typography,
  FormControl,
  Popper,
  Paper,
  MenuList,
  ClickAwayListener,
  InputBase,
  Box,
  CircularProgress,
  InputAdornment,
  IconButton
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef, useState, useEffect } from "react";
// import useDebounce from "../hooks/useDebounce";
import useDebounce from "../hooks/useDebounce";
import ClearIcon from '@mui/icons-material/Clear';


function SearchableSelector({
  items = [],
  value,
  onChange,
  width,
  onSearchChange,
  shouldBeFullwidth = false,
  isLoading = false,
  getOptionLabel = (item) => item.name || item.label || "",
}) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (onSearchChange) {
      onSearchChange(debouncedSearch);
    }
  }, [debouncedSearch]);

  const selectedItem = items.find((item) => item.value === value);

  const handleSelect = (item) => {
    onChange(item.value);
    setOpen(false);
  };

  const filteredItems = items.filter((item) =>
    getOptionLabel(item).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <FormControl sx={{ width: { xs: "100%", sm: width ? width : "100%" } }} fullWidth={shouldBeFullwidth} variant="outlined" size="small">
        <Box
          ref={anchorRef}
          onClick={() => setOpen((prev) => !prev)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ccc",
            borderRadius: "4px",
            px: 2,
            py: 1,
            cursor: "pointer",
            minHeight: "40px",
          }}
        >
          <Typography>
            {selectedItem ? getOptionLabel(selectedItem) : "Please choose..."}
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>
      </FormControl>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        style={{
          zIndex: 1300,
          width: anchorRef.current?.offsetWidth,
        }}
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Paper>
            <Box px={1} py={1}>
              <InputBase
                placeholder="Search..."
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onMouseDown={(e) => e.stopPropagation()}
                endAdornment={
                  search && (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => {
                          setSearch("");
                          onChange(null || "");
                          onSearchChange("");
                        }}
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  )
                }
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  px: 1,
                  py: 0.5,
                }}
              />
            </Box>
            <MenuList>
              {isLoading ? (
                <MenuItem disabled>
                  <CircularProgress size={18} sx={{ mr: 1 }} /> Loading...
                </MenuItem>
              ) : filteredItems.length ? (
                filteredItems.map((item, idx) => (
                  <MenuItem key={idx} onClick={() => handleSelect(item)}>
                    <Typography>{getOptionLabel(item)}</Typography>
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No results</MenuItem>
              )}
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
}

export default SearchableSelector;