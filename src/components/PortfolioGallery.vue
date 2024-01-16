
<template>
    <div>
        <h1>YouTube Playlist Gallery</h1>
        <div v-for="video in videos" :key="video.id">
            <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + video.id" frameborder="0"
                allowfullscreen></iframe>
            <h2>{{ video.title }}</h2>
            <p>{{ video.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videos: [],
        };
    },
    mounted() {
        this.fetchPlaylistVideos();
    },
    methods: {
        async fetchPlaylistVideos() {
            const playlistId = 'PL2SgycZM2S_ZSBqfLU3_f95Mk8ztB83m8';
            const apiKey = 'YOUR_API_KEY';
            const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                this.videos = data.items.map((item) => ({
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                }));
            } catch (error) {
                console.error('Error fetching playlist videos', error);
            }
        },
    },
};
</script>

<style>
/* Add your styles here */
</style>
