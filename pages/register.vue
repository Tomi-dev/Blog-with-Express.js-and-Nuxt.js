<template>
    <main>
        <section class="form-container" enctype="multipart/form-data">
            <form @submit.prevent="console.log('');" class="register-form">
                <input type="text" placeholder="Username or E-mail">
                <input type="password" placeholder="Password">
                <label for="profileImg" class="file-input">
                    Upload profile image
                    <input type="file" id="profileImg">
                </label>
                <div class="submit-btn-group">
                    <input type="submit" value="Sign up" class="submit-btn">
                    <span class="animation-bg"></span>
                </div>
            </form>
        </section>        
    </main>
</template>

<script>
export default {
    name: 'register'
}
</script>

<style src="../assets/Register-login.css"></style>