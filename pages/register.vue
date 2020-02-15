<template>
    <main>
        <section class="form-container" enctype="multipart/form-data">
            <div class="form-holder">
                <h1>Sign up</h1>
                <form @submit.prevent="register" class="register-form">
                    <div class="input-info">
                        <input type="text" placeholder="Username or E-mail" v-model="username">
                    </div>
                    <div class="input-info">
                        <input type="password" placeholder="Password" v-model="password">
                    </div>
                    <label for="profileImg" class="file-input">
                        {{placeholderfileName}}
                        <input type="file" id="profileImg" name="profileImg" @change="changeName">
                    </label>
                    <div class="submit-btn-group">
                        <input type="submit" value="Sign up" class="submit-btn">
                        <span class="animation-bg"></span>
                    </div>
                </form>
                <div class="form-info">
                    <p>Already have an account? <nuxt-link to="/login">Sign in</nuxt-link></p>
                </div>
            </div>
        </section>        
    </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'register',
    data(){
        return{
            placeholderfileName: 'Upload profile image',
            file: '',
            username: '',
            password: '',
        }
    },
    methods: {
        ...mapActions({
            registerUser: 'user/registerUser'
        }),

        changeName(file){
            this.placeholderfileName = file.target.files[0].name;
        },

        register(data){
            this.file = data.target.elements.profileImg.files[0];
            const formData = new FormData();
            formData.append('username', this.username);
            formData.append('password', this.password);
            formData.append('file', this.file);

            this.registerUser(formData);
        }
    }
}
</script>

<style src="../assets/Register-login.css"></style>