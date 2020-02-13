<template>
    <main>
        <section class="form-container">
            <div class="form-holder">
                <h1>Sign in</h1>
                <form @submit.prevent="console.log('');" class="login-form">
                    <input type="text" placeholder="Username or E-mail">
                    <input type="password" placeholder="Password">
                    <div class="submit-btn-group">
                        <input type="submit" value="Sign in" class="submit-btn">
                        <span class="animation-bg"></span>
                    </div>
                </form>
                <div class="form-info">
                    <p>Don't have an account yet? <nuxt-link to="/register">Create one</nuxt-link></p>
                </div>
            </div>
        </section>        
    </main>
</template>

<script>
export default {
    name: 'login'
}
</script>

<style src="../assets/Register-login.css"></style>