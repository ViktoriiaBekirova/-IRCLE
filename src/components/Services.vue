<template>
    <div class="block">
        <ul class="row" v-bind:class="active" v-on:click.prevent>
            <li class="col col--4 col-s--4" @click="makeActive(1)">
                <a href="#" :class="['block__icon-item', {'is-active': activeMenu === 1}, {'active': activeMenu === 1}]">
                    <i class="fa fa-cogs"></i>
                </a>
            </li>
            <li class="col col--4 col-s--4" @click="makeActive(2)">
                <a href="3" :class="['block__icon-item', {'is-active': activeMenu === 2}, {'active': activeMenu === 2}]">
                    <i class="fa fa-leaf"></i>
                </a>
            </li>
            <li class="col col--4 col-s--4" @click="makeActive(3)">
                <a href="#" :class="['block__icon-item', {'is-active': activeMenu === 3}, {'active': activeMenu === 3}]">
                    <i class="fa fa-users"></i>
                </a>
            </li>
        </ul>
        <transition name="fade-fast" mode="out-in">
            <div class="block__tab" v-if="activeMenu === 1" :key="1">
                <div class="row">
                    <div class="col col--12">
                        <div class="block__history">
                            <h3>Our Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aut corporis, deleniti ex id inventore libero maiores neque repellendus sapiente temporibus voluptate voluptates! Commodi consequuntur corporis distinctio illo illum nesciunt nobis perspiciatis, provident quaerat, ratione saepe sunt veniam voluptate?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis laboriosam qui vero? Aperiam dignissimos nemo optio perferendis quia recusandae sunt vero voluptatum. Alias cumque debitis dolorem esse maiores minima obcaecati officiis perferendis quam quia, quis reiciendis tempora, voluptatum. Eum laudantium, quasi? Consequuntur delectus iste perspiciatis sapiente sequi! Ab architecto aspernatur assumenda dolorem ducimus earum eligendi eum fugit illum in incidunt ipsa ipsam laboriosam laudantium magni molestiae nemo odio officia omnis perspiciatis ratione, recusandae rem repudiandae sequi sint sit tempore velit veritatis voluptate voluptatum. Assumenda, aut doloremque doloribus ducimus id illo itaque numquam obcaecati quisquam recusandae repellat sint sunt, totam vero.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur assumenda commodi consectetur corporis delectus dicta eaque earum est exercitationem fugiat fugit id labore laborum, magnam molestiae molestias natus nesciunt numquam officia quae quaerat quas quidem temporibus vero voluptatibus.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block__tab" v-if="activeMenu === 2" :key="2">
                <div class="row">
                    <div class="col col--12">
                        <div class="block__history">
                            <h3>Our Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis laboriosam qui vero? Aperiam dignissimos nemo optio perferendis quia recusandae sunt vero voluptatum. Alias cumque debitis dolorem esse maiores minima obcaecati officiis perferendis quam quia, quis reiciendis tempora, voluptatum. Eum laudantium, quasi? Consequuntur delectus iste perspiciatis sapiente sequi! Ab architecto aspernatur assumenda dolorem ducimus earum eligendi eum fugit illum in incidunt ipsa ipsam laboriosam laudantium magni molestiae nemo odio officia omnis perspiciatis ratione, recusandae rem repudiandae sequi sint sit tempore velit veritatis voluptate voluptatum. Assumenda, aut doloremque doloribus ducimus id illo itaque numquam obcaecati quisquam recusandae repellat sint sunt, totam vero.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur assumenda commodi consectetur corporis delectus dicta eaque earum est exercitationem fugiat fugit id labore laborum, magnam molestiae molestias natus nesciunt numquam officia quae quaerat quas quidem temporibus vero voluptatibus.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block__tab" v-if="activeMenu === 3" :key="3">
                <div class="row">
                    <div class="col col--12">
                        <div class="block__history">
                            <h3>Testimonials</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis laboriosam qui vero? Aperiam dignissimos nemo optio perferendis quia recusandae sunt vero voluptatum. Alias cumque debitis dolorem esse maiores minima obcaecati officiis perferendis quam quia, quis reiciendis tempora, voluptatum. Eum laudantium, quasi? Consequuntur delectus iste perspiciatis sapiente sequi! Ab architecto aspernatur assumenda dolorem ducimus earum eligendi eum fugit illum in incidunt ipsa ipsam laboriosam laudantium magni molestiae nemo odio officia omnis perspiciatis ratione, recusandae rem repudiandae sequi sint sit tempore velit veritatis voluptate voluptatum. Assumenda, aut doloremque doloribus ducimus id illo itaque numquam obcaecati quisquam recusandae repellat sint sunt, totam vero.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur assumenda commodi consectetur corporis delectus dicta eaque earum est exercitationem fugiat fugit id labore laborum, magnam molestiae molestias natus nesciunt numquam officia quae quaerat quas quidem temporibus vero voluptatibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            active: 'block__icon-item'
        },
        data () {
            return {
                activeMenu: 1,
            }
        },
        methods: {
            makeActive: function (item) {
                this.activeMenu = item
            }
        }
    }
</script>
