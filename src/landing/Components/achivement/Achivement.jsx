import { Container, Stack, Typography } from '@mui/material';
import { achivementData } from './achivementData';
import Grid from "@mui/material/Grid2";
import CountUp, { useCountUp } from 'react-countup';
import { useRef } from 'react';

function Achivement() {
    const counterRef = useRef(null);

    useCountUp({
        ref: counterRef,
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        duration: 180
    });

    return (
        <Stack bgcolor={"#f5e2b0"} my={"8rem"} py={"1rem"}>
            <Container>
                <Grid container spacing={4}>
                    {achivementData.map((ele, i) => (
                        <Grid
                            key={i}
                            item
                            size={{ xs: 12, sm: 6, md: 4 }}
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                gap: 1,
                                padding: "1rem",
                            }}
                        >
                            {!ele.countM &&
                                <Stack sx={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: ".2rem" }}>
                                    <Typography variant="h4" fontWeight="700" color="#f1b811">
                                        <CountUp
                                            start={0}
                                            end={ele.count}
                                            enableScrollSpy
                                            startOnMount
                                        />
                                    </Typography>
                                    <Typography variant="h4" p={0} color="#f1b811">+</Typography>
                                </Stack>
                            }
                            {ele.countM && <Typography variant="h4" fontWeight="700" color="#f1b811">{ele.countM}</Typography>}
                            <Stack>
                                {ele.heading && <Typography variant="h6" fontWeight="700">{ele.heading}</Typography>}
                                {ele.contant && <Typography variant="body2" color='#707070'>{ele.contant}</Typography>}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Stack>
    );
}

export default Achivement;