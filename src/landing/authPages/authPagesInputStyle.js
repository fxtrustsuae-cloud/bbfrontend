export const inputStyles = {
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#f1b811",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#f1b811",
    },
    input: {
        color: "white",
        backgroundColor: "transparent !important",
        WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
        caretColor: "white",
    },
    "& input:-webkit-autofill": {
        WebkitTextFillColor: "white !important",
        WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
        backgroundColor: "transparent !important",
        transition: "background-color 5000s ease-in-out 0s",
        caretColor: "white",
    },
    "& input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active": {
        WebkitTextFillColor: "white !important",
        WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
        backgroundColor: "transparent !important",
        caretColor: "white",
    },

};

export const searchableDropdownStyle = {
    "& .MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8703ef",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8703ef",
        },
        "&.MuiAutocomplete-hasPopupIcon.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
            borderColor: "#8703ef",
        },
    },
    "& .MuiInputBase-input": {
        color: "white",
    },
    "& .MuiSvgIcon-root": {
        color: "#8703ef",
    },
    "& label": {
        color: "white",
        "&.Mui-focused": {
            color: "#8703ef",
        },
    },
}

export const baseInputOverrides = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#f1b811",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#f1b811",
  },

  "& .MuiInputBase-input": {
    color: "white",
    caretColor: "white",
    backgroundColor: "transparent",
  },

  "& textarea": {
    color: "white",
    caretColor: "white",
    backgroundColor: "transparent",
  },

  "& input:-webkit-autofill": {
    WebkitTextFillColor: "white !important",
    WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
    backgroundColor: "transparent !important",
    transition: "background-color 5000s ease-in-out 0s",
    caretColor: "white",
  },
  "& input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active": {
    WebkitTextFillColor: "white !important",
    WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
    backgroundColor: "transparent !important",
    caretColor: "white",
  },
};