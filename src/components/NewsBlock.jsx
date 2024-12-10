import React, { useState } from "react";
import { Grid, Paper, Typography, Modal, Backdrop, Fade, Box } from "@mui/material";
import './NewsBlock.scss';

const articles = [
    {
        title: "Статья 1",
        preview: "Краткое описание первой статьи о строительстве.",
        fullText: "Полный текст первой статьи о строительстве с деталями.",
    },
    {
        title: "Статья 2",
        preview: "Краткое описание второй статьи о строительстве.",
        fullText: "Полный текст второй статьи о строительстве с деталями.",
    },
    {
        title: "Статья 3",
        preview: "Краткое описание третьей статьи о строительстве.",
        fullText: "Полный текст третьей статьи о строительстве с деталями.",
    },
];

const NewsBlock = () => {
    const [open, setOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleOpen = (article) => {
        setSelectedArticle(article);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedArticle(null);
    };

    return (
        <div className="news-block">
            <Typography variant="h4" gutterBottom>
                Новости о строительстве
            </Typography>
            <Grid container spacing={4}>
                {articles.map((article, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper
                            className="article-paper"
                            onClick={() => handleOpen(article)}
                        >
                            <Typography variant="h6" gutterBottom>
                                {article.title}
                            </Typography>
                            <Typography variant="body2">{article.preview}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className="modal-content">
                        <Typography variant="h6" gutterBottom>
                            {selectedArticle?.title}
                        </Typography>
                        <Typography variant="body2">{selectedArticle?.fullText}</Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default NewsBlock;
