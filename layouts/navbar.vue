<template>
            <nav class="navbar">
                <ul>
                    <li>
                        <NuxtLink class="nav-link" @click="navClick" to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="nav-link" @click="navClick" to="/about">About</NuxtLink>
                    </li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
</template>
<style lang="scss" scoped>
@import '@/assets/sass/navbar.sass';
</style>
<script lang="ts">

export default {
    data() {
        return {

        }
    },
    mounted() {
        this.checkRoute()
    },
    methods: {
        checkRoute() {
            let header = document.querySelector("header"),
                section = document.querySelector("section")
            if (this.$route.name == `index`) {
                header!.classList.remove("header-buttom");
            } else {
                header!.classList.add("header-buttom");
                section?.classList.add("section-show")
            }
        },
        navClick(e: Event) {
            let target = e.target as HTMLTextAreaElement,
                section = target!.getAttribute("href");

            if (section) {
                let navbar = document.getElementsByClassName("navbar")
                    , header = document.querySelector("header")
                    , navlinks = [...document.getElementsByClassName("nav-link")]
                    , sections = [...document.getElementsByTagName("section")];

                navlinks.forEach((navlink, index: Number) => {
                    navlink.classList.remove('active');
                });

                target.classList.add('active');
            }
        }
    }

}
</script>