let searchMusics;
const ytdl = require('ytdl-core');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

(async () => {
    const module = await import('node-youtube-music');
    searchMusics = module.searchMusics;
})();

// Endpoint for searching music
app.get('/search', async (req, res) => {
    try {
        const searchTerm = req.query.q;
        const musics = await searchMusics(searchTerm);
        res.json(musics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint for streaming audio
app.get('/stream', async (req, res) => {
    try {
        const videoId = req.query.videoId;
        const info = await ytdl.getInfo(videoId);
        const audioFormat = ytdl.chooseFormat(info.formats, { filter: 'audioonly' });
        const audioStream = ytdl.downloadFromInfo(info, { format: audioFormat });

        res.set({
            'Content-Type': 'audio/mpeg',
            'Content-Disposition': 'attachment; filename="audio.mp3"'
        });

        audioStream.pipe(res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error streaming audio' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});