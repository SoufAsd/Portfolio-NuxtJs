<template>
  <header class="header header-buttom">
    <div class="container">
      <nav class="navbar">
        <ul>
          <li>
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav-link" to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav-link" to="/resume">Resume</NuxtLink>
          </li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/navbar.sass";
</style>
