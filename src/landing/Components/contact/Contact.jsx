// import {
//     Box,
//     Container,
//     TextField,
//     Typography,
//     Button,
//     Stack,
// } from "@mui/material";

// function Contact() {
//     return (
//         <Box sx={{ py: 6 }}>
//             <Container maxWidth="md">
//                 <Box textAlign="center" mb={4}>
//                     <Typography variant="h4" fontWeight="bold" gutterBottom>
//                         Contact Us
//                     </Typography>
//                     <Typography variant="body1" color="textSecondary">
//                         We’d love to hear from you! Fill out the form below to get in touch
//                         with us.
//                     </Typography>
//                 </Box>
//                 <form>
//                     <Stack spacing={3}>
//                         <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                             <TextField
//                                 fullWidth
//                                 label="Your Name"
//                                 variant="outlined"
//                                 required
//                             />
//                             <TextField
//                                 fullWidth
//                                 label="Your Email"
//                                 variant="outlined"
//                                 required
//                             />
//                         </Stack>
//                         <TextField
//                             fullWidth
//                             label="Subject"
//                             variant="outlined"
//                             required
//                         />
//                         <TextField
//                             fullWidth
//                             label="Message"
//                             variant="outlined"
//                             multiline
//                             rows={4}
//                             sx={{
//                                 input: {
//                                     caretColor: "black", // Set the cursor (caret) color to black
//                                 },
//                             }}
//                             required
//                         />
//                         <Stack alignItems={"flex-end"}>
//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 color="primary"
//                                 size="large"
//                                 sx={{
//                                     textAlign: "center",
//                                     width: "10rem",
//                                     px: 0,
//                                     textTransform: "capitalize",
//                                     backgroundColor: "#f1b811",
//                                     "&:hover": { backgroundColor: "#b4944c" },
//                                 }}
//                             >
//                                 Send Message
//                             </Button>
//                         </Stack>
//                     </Stack>
//                 </form>
//             </Container>
//         </Box>
//     );
// }

// export default Contact;
















// Contact.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Stack,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import { motion } from "framer-motion";
import { inputStyles, baseInputOverrides } from "../../authPages/authPagesInputStyle"

const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.55, delay },
  }),
};

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErr = {};
    if (!form.name.trim()) newErr.name = "Name is required";
    if (!form.email.trim()) newErr.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErr.email = "Invalid email";
    if (!form.subject.trim()) newErr.subject = "Subject is required";
    if (!form.message.trim()) newErr.message = "Message is required";
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg,#000000 0%,#1f063d 85%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 40%, rgba(241,184,17,0.08), transparent 60%), radial-gradient(circle at 80% 20%, rgba(241,184,17,0.04), transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box textAlign="center" mb={4}>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.1}
          >
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)" }}>
              We’d love to hear from you! Fill out the form below to get in touch
              with us.
            </Typography>
          </motion.div>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.2}
                style={{ flex: 1 }}
              >
                <TextField
                  fullWidth
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  InputProps={{
                    sx: {
                      ...inputStyles,
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 1.5,
                      "& .MuiFilledInput-input": { color: "white" },
                      "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
                      "& .MuiFilledInput-root": {
                        "&:hover": {
                          background: "rgba(255,255,255,0.08)",
                        },
                        "&.Mui-focused": {
                          background: "rgba(255,255,255,0.1)",
                          boxShadow: "0 0 0 3px rgba(241,184,17,0.35)",
                        },
                      },
                    },
                  }}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.25}
                style={{ flex: 1 }}
              >
                <TextField
                  fullWidth
                  name="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    sx: {
                      ...inputStyles,
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 1.5,
                      "& .MuiFilledInput-input": { color: "white" },
                      "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
                      "& .MuiFilledInput-root": {
                        "&:hover": {
                          background: "rgba(255,255,255,0.08)",
                        },
                        "&.Mui-focused": {
                          background: "rgba(255,255,255,0.1)",
                          boxShadow: "0 0 0 3px rgba(241,184,17,0.35)",
                        },
                      },
                    },
                  }}
                />
              </motion.div>
            </Stack>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <TextField
                fullWidth
                name="subject"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
                InputProps={{
                  sx: {
                    ...inputStyles,
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 1.5,
                    "& .MuiFilledInput-input": { color: "white" },
                    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
                    "& .MuiFilledInput-root": {
                      "&:hover": {
                        background: "rgba(255,255,255,0.08)",
                        transition: "background .2s ease",
                      },
                      "&.Mui-focused": {
                        background: "rgba(255,255,255,0.1)",
                        boxShadow: "0 0 0 3px rgba(241,184,17,0.35)",
                      },
                    },
                  },
                }}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.35}
            >
              <TextField
                fullWidth
                name="message"
                placeholder="Message"
                required
                multiline
                rows={5}
                value={form.message}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
                InputProps={{
                  sx: {
                    ...baseInputOverrides,
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 1.5,
                    "& .MuiFilledInput-input": { color: "white" },
                    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
                    "& .MuiFilledInput-root": {
                      "&:hover": {
                        background: "rgba(255,255,255,0.08)",
                        transition: "background .2s ease",
                      },
                      "&.Mui-focused": {
                        background: "rgba(255,255,255,0.1)",
                        boxShadow: "0 0 0 3px rgba(241,184,17,0.35)",
                      },
                    },
                  },
                }}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.45}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  textTransform: "capitalize",
                  width: "10rem",
                  px: 0,
                  fontWeight: 600,
                  backgroundColor: "#f1b811",
                  color: "black",
                  borderRadius: 2,
                  boxShadow: "0 25px 60px -10px rgba(241,184,17,0.6)",
                  "&:hover": {
                    backgroundColor: "#e0aa0f",
                    transform: "scale(1.02)",
                  },
                  transition: "all .2s ease",
                }}
              >
                Send Message
              </Button>
            </motion.div>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;