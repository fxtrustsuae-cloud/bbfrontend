import { Stack, Typography } from "@mui/material"

function BannerContent({ data }) {

    return (
        <Stack sx={{ objectFit: "cover" }}>
            <img
                src={data?.image}
                alt="Banner"
                style={{ width: "100%", borderRadius: "10px" }}
            />
            <Typography sx={{ height: "100%", width: "100%", color: "#8703ef", }}>{data?.title}</Typography>
        </Stack>
    )
}

export default BannerContent;