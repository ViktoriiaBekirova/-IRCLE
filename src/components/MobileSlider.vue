<template>
	<swiper :options="swiperOption">
		<div class="swiper-slide">
			<img src="../img/templatemo-slide-1.jpg">
		</div>
		<div class="swiper-slide">
			<img src="../img/templatemo-slide-2.jpg">
		</div>
		<div class="swiper-slide">
			<img src="../img/templatemo-slide-3.jpg">
		</div>
		<div class="swiper-slide">
			<img src="../img/templatemo-slide-4.jpg">
		</div>
	</swiper>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    loop: true,
                    effect: 'fade',
                    keyboard: {
                        enabled: true,
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    }
                }
			}
        }
    }
</script>

<style lang="scss" scoped>
	.swiper-container, .swiper-wrapper {
		position: fixed !important;
		width: 100vw;
		height: 100vh;
	}
	.swiper-slide {
		height: 100%;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
