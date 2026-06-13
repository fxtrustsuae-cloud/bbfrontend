import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    Card,
    Button
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import Loading from "../../../../userPanelComponent/Loading";

function ReferralNode({ node, onClick }) {
    const [open, setOpen] = useState(false);

    const handleNodeClick = () => {
        onClick(node.title)
    };

    const handleToggleCollapse = (e) => {
        e.stopPropagation()
        if (node.hasChildren) {
            setOpen((prev) => !prev);
        }
    };

    return (
        <>
            <ListItem button onClick={handleNodeClick} sx={{ pl: 2 }}>
                <ListItemText primary={node.title} sx={{ '& .MuiListItemText-primary': { fontSize: '15px' }, cursor: "pointer" }} />
                {node.hasChildren && (
                    <Button
                        onClick={handleToggleCollapse}
                        size="small"
                        variant='contained'
                        type='submit'
                        sx={{
                            textTransform: "capitalize",
                            minWidth: "1.5rem",
                            p: "4px",
                            boxShadow: "none",
                            bgcolor: "primary.main",
                            fontSize: "1rem",
                            color: "white",
                            ml: "1rem",
                            "&:hover": {
                                boxShadow: "none"
                            }
                        }}
                    >
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                )}
            </ListItem>
            {node.hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {node.children?.filter(Boolean).map((child, idx) => (
                            <ReferralNode key={idx} node={child} onClick={onClick} />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
}

export default function ReferralTree({ listData = [], onClick, loadingListData }) {
    return (
        <Card
            sx={{
                p: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                borderRadius: "2rem",
                boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
            }}
        >
            {
                loadingListData
                    ?
                    <Loading />
                    :
                    <List>
                        {listData.map((node, idx) => (
                            <ReferralNode key={idx} node={node} onClick={onClick} />
                        ))}
                    </List>

            }
        </Card>
    );
}