<template>
    <header>
        <nav>
            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/About">About</nuxt-link></li>
                <li><nuxt-link to="/login">Sign In</nuxt-link></li>
                <li><nuxt-link to="/register">Sign Up</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style src="../assets/Navbar.css"></style>