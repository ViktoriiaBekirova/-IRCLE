<template>
    <div class="block">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div class="row">
            <div class="col col--4 col-md--2 col-xs--2"
                 v-for="(image, imageIndex) in images"
                 :key="imageIndex"
                 @click="index = imageIndex">
                <div class="gallery-image">
                    <img :src="image.poster">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';

    export default {
        data() {
            return {
                images: [
                    {
                        href: './assets/img/g1.jpg',
                        type: 'jpg',
                        poster: './assets/img/g1.jpg'
                    },
                    {
                        href: './assets/img/g2.jpg',
                        type: 'jpg',
                        poster: './assets/img/g2.jpg'
                    },
                    {
                        href: './assets/img/g3.jpg',
                        type: 'jpg',
                        poster: './assets/img/g3.jpg'
                    },
                    {
                        href: './assets/img/g4.jpg',
                        type: 'jpg',
                        poster: './assets/img/g4.jpg'
                    },
                    {
                        href: './assets/img/g5.jpg',
                        type: 'jpg',
                        poster: './assets/img/g5.jpg'
                    },
                    {
                        href: './assets/img/g6.jpg',
                        type: 'jpg',
                        poster: './assets/img/g6.jpg'
                    },
                    {
                        href: './assets/img/g7.jpg',
                        type: 'jpg',
                        poster: './assets/img/g7.jpg'
                    },
                    {
                        href: './assets/img/g8.jpg',
                        type: 'jpg',
                        poster: './assets/img/g8.jpg'
                    },
                    {
                        href: './assets/img/g9.jpg',
                        type: 'jpg',
                        poster: './assets/img/g9.jpg'
                    },
                ],
                index: null
            };
        },
        components: {
            'gallery': VueGallery
        }
    }
</script>

