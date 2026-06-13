import {
    Box,
    Container,
    TextField,
    Typography,
    Button,
    Stack,
} from "@mui/material";

function Contact() {
    return (
        <Box sx={{ py: 6 }}>
            <Container maxWidth="md">
                <Box textAlign="center" mb={4}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        We’d love to hear from you! Fill out the form below to get in touch
                        with us.
                    </Typography>
                </Box>
                <form>
                    <Stack spacing={3}>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <TextField
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Your Email"
                                variant="outlined"
                                required
                            />
                        </Stack>
                        <TextField
                            fullWidth
                            label="Subject"
                            variant="outlined"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            sx={{
                                input: {
                                    caretColor: "black", // Set the cursor (caret) color to black
                                },
                            }}
                            required
                        />
                        <Stack alignItems={"flex-end"}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{
                                    textAlign: "center",
                                    width: "10rem",
                                    px: 0,
                                    textTransform: "capitalize",
                                    backgroundColor: "#f1b811",
                                    "&:hover": { backgroundColor: "#b4944c" },
                                }}
                            >
                                Send Message
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Container>
        </Box>
    );
}

export default Contact;