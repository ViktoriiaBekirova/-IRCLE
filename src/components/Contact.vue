<template>
    <div class="block">
        <div class="row">
            <div class="col col--12">
                <div class="block__history">
                    <h3>Contact Us</h3>
                    <p>Donec mattis enim sit amet nisl faucibus, eu pulvinar nibh facilisis. Aliquam erat volutpat. Vivamus tempus, nisi varius imperdiet molestie, velit mi feugiat felis, sit amet fringilla mi massa sit amet arcu. Mauris dictum nisl id felis lacinia congue. Aliquam lectus nisi, sodales in lacinia quis, lobortis vel sem.
                        <p><strong>Address:</strong> 123 Thamine Street, Digital Estate, Yangon 10620, Myanmar</p>
                    <p><strong>Email: </strong><a class="block__history_link" href="mailto:info@company.com">info@company.com</a> |
                       <strong>Tel: </strong><a class="block__history_link" href="tel:010-020-0340">010-020-0340</a></p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col col--12">
                <div class="block__history">
                    <div class="map-container">
                        <div id="map">
                            <yandex-map  v-if="dataLoaded"
                                         :coords="[16.860509, 96.115217]"
                                         zoom="13"
                                         style="width: 100%; height: 100%;"
                                         :cluster-options="{
									1: {clusterDisableClickZoom: true}
								  }"
                                         :behaviors="['ruler']"
                                         :placemarks="placemarks"
                                         map-type="map"
                            >
                                <ymap-marker
                                        marker-id="1"
                                        marker-type="placemark"
                                        :coords="[16.860509, 96.115217]"
                                ></ymap-marker>
                            </yandex-map>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col col--12">
                <v-form></v-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    export default {
        data () {
            return {
                dataLoaded: false,
                placemarks: [
                    {
                        markerId: '1',
                    }
                ]
            }
        },
        mounted () {
            this.dataLoaded = true
        },
        components: {
            yandexMap,
            ymapMarker
        }
    }
</script>
