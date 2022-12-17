<template>
    <div>
        <BackGround />
        <header class="header">
            <div class="container">
                <h3>Hi, my name is</h3>
                <h1><a href="index.html">Soufiane Assaadi</a></h1>
                <h2>I build things for the <span>web.</span></h2>
                <NuxtLayout name="navbar" />
            </div>
        </header>
        <NuxtLayout name="socials" />
    </div>
</template>
<script lang="ts">

export default {
    data: () => ({
    }),
}

</script>