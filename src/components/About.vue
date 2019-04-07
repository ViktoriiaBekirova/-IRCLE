<template>
    <div class="block">
        <ul class="row" v-bind:class="active" v-on:click.prevent>
            <li class="col col--4 col-s--4" @click="makeActive(1)">
                <a href="#" :class="['block__icon-item', {'is-active': activeMenu === 1}, {'active': activeMenu === 1}]">
                    <i class="fa fa-umbrella"></i>
                </a>
            </li>
            <li class="col col--4 col-s--4" @click="makeActive(2)">
                <a href="3" :class="['block__icon-item', {'is-active': activeMenu === 2}, {'active': activeMenu === 2}]">
                    <i class="fa fa-camera"></i>
                </a>
            </li>
            <li class="col col--4 col-s--4" @click="makeActive(3)">
                <a href="#" :class="['block__icon-item', {'is-active': activeMenu === 3}, {'active': activeMenu === 3}]">
                    <i class="fa fa-coffee"></i>
                </a>
            </li>
        </ul>
        <transition name="fade-fast" mode="out-in">
            <div class="block__tab" v-if="activeMenu === 1" :key="1">
                <div class="row">
                    <div class="col col--12">
                        <div class="block__history">
                            <h3>Our History</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis laboriosam qui vero? Aperiam dignissimos nemo optio perferendis quia recusandae sunt vero voluptatum. Alias cumque debitis dolorem esse maiores minima obcaecati officiis perferendis quam quia, quis reiciendis tempora, voluptatum. Eum laudantium, quasi? Consequuntur delectus iste perspiciatis sapiente sequi! Ab architecto aspernatur assumenda dolorem ducimus earum eligendi eum fugit illum in incidunt ipsa ipsam laboriosam laudantium magni molestiae nemo odio officia omnis perspiciatis ratione, recusandae rem repudiandae sequi sint sit tempore velit veritatis voluptate voluptatum. Assumenda, aut doloremque doloribus ducimus id illo itaque numquam obcaecati quisquam recusandae repellat sint sunt, totam vero.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur assumenda commodi consectetur corporis delectus dicta eaque earum est exercitationem fugiat fugit id labore laborum, magnam molestiae molestias natus nesciunt numquam officia quae quaerat quas quidem temporibus vero voluptatibus.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col--4 col-s--4">
                        <div class="block__member-item">
                            <div class="block__foto">
                                <img src="../img/t1.jpg" alt="Candy - Web Developer">
                            </div>
                            <h4>Ethel Davis</h4>
                            <span>Managing Director</span>
                        </div>
                    </div>
                    <div class="col col--4 col-s--4">
                        <div class="block__member-item">
                            <div class="block__foto">
                                <img src="../img/t2.jpg" alt="Candy - Web Developer">
                            </div>
                            <h4>Lena Keller</h4>
                            <span>Creative Content Developer</span>
                        </div>
                    </div>
                    <div class="col col--4 col-s--4">
                        <div class="block__member-item">
                            <div class="block__foto">
                                <img src="../img/t3.jpg" alt="Candy - Web Developer">
                            </div>
                            <h4>Rodney Cooper</h4>
                            <span>Senior Core Developer</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block__tab" v-if="activeMenu === 2" :key="2">
                <div class="row">
                    <div class="col col--12">
                        <div class="block__history">
                            <h3>What We Do</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis laboriosam qui vero? Aperiam dignissimos nemo optio perferendis quia recusandae sunt vero voluptatum. Alias cumque debitis dolorem esse maiores minima obcaecati officiis perferendis quam quia, quis reiciendis tempora, voluptatum. Eum laudantium, quasi? Consequuntur delectus iste perspiciatis sapiente sequi! Ab architecto aspernatur assumenda dolorem ducimus earum eligendi eum fugit illum in incidunt ipsa ipsam laboriosam laudantium magni molestiae nemo odio officia omnis perspiciatis ratione, recusandae rem repudiandae sequi sint sit tempore velit veritatis voluptate voluptatum. Assumenda, aut doloremque doloribus ducimus id illo itaque numquam obcaecati quisquam recusandae repellat sint sunt, totam vero.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur assumenda commodi consectetur corporis delectus dicta eaque earum est exercitationem fugiat fugit id labore laborum, magnam molestiae molestias natus nesciunt numquam officia quae quaerat quas quidem temporibus vero voluptatibus.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col--4 col-s--4">
                        <div class="block__member-item">
                            <div class="block__foto">
                                <img src="../img/t1.jpg" alt="Candy - Web Developer">
                            </div>
                            <h4>Ethel Davis</h4>
                            <span>Managing Director</span>
                        </div>
                    </div>
                    <div class="col col--4 col-s--4">
                        <div class="block__member-item">
                            <div class="block__foto">
                                <img src="../img/t2.jpg" alt="Candy - Web Developer">
                            </div>
                            <h4>Lena Keller</h4>
                            <span>Creative Content Developer</span>
                        </div>
                    </div>
                    <div class="col col--4 col-s--4">
                        <div class="block__member-item">
                            <div class="block__foto">
                                <img src="../img/t3.jpg" alt="Candy - Web Developer">
                            </div>
                            <h4>Rodney Cooper</h4>
                            <span>Senior Core Developer</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block__tab" v-if="activeMenu === 3" :key="3">
                <div class="row">
                    <div class="col col--12">
                        <div class="block__history">
                            <h3>Our team</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis laboriosam qui vero? Aperiam dignissimos nemo optio perferendis quia recusandae sunt vero voluptatum. Alias cumque debitis dolorem esse maiores minima obcaecati officiis perferendis quam quia, quis reiciendis tempora, voluptatum. Eum laudantium, quasi? Consequuntur delectus iste perspiciatis sapiente sequi! Ab architecto aspernatur assumenda dolorem ducimus earum eligendi eum fugit illum in incidunt ipsa ipsam laboriosam laudantium magni molestiae nemo odio officia omnis perspiciatis ratione, recusandae rem repudiandae sequi sint sit tempore velit veritatis voluptate voluptatum. Assumenda, aut doloremque doloribus ducimus id illo itaque numquam obcaecati quisquam recusandae repellat sint sunt, totam vero.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur assumenda commodi consectetur corporis delectus dicta eaque earum est exercitationem fugiat fugit id labore laborum, magnam molestiae molestias natus nesciunt numquam officia quae quaerat quas quidem temporibus vero voluptatibus.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col--4 col-s--4">
                        <div class="block__member-item">
                            <div class="block__foto">
                                <img src="../img/t1.jpg" alt="Candy - Web Developer">
                            </div>
                            <h4>Ethel Davis</h4>
                            <span>Managing Director</span>
                        </div>
                    </div>
                    <div class="col col--4 col-s--4">
                        <div class="block__member-item">
                            <div class="block__foto">
                                <img src="../img/t2.jpg" alt="Candy - Web Developer">
                            </div>
                            <h4>Lena Keller</h4>
                            <span>Creative Content Developer</span>
                        </div>
                    </div>
                    <div class="col col--4 col-s--4">
                        <div class="block__member-item">
                            <div class="block__foto">
                                <img src="../img/t3.jpg" alt="Candy - Web Developer">
                            </div>
                            <h4>Rodney Cooper</h4>
                            <span>Senior Core Developer</span>
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
