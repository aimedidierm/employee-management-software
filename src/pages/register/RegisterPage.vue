<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50">
        <form @submit.prevent="register" class="register-form">
            <h2 class="form-title">Register</h2>
            <input v-model="name" placeholder="Name" class="form-input" required type="text" />
            <input v-model="email" placeholder="Email" class="form-input" required type="email" />
            <input v-model="password" placeholder="Password" class="form-input" required type="password" />
            <input v-model="passwordConfirmation" placeholder="Confirm Password" class="form-input" required
                type="password" />
            <button type="submit" class="form-button">Register</button>
            <div class="flex justify-between mt-4">
                <router-link to="/" class="link">Login</router-link>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const router = useRouter();

const register = async () => {
    try {
        await axios.post('/auth/register', {
            name: name.value,
            email: email.value,
            password: password.value,
            password_confirmation: passwordConfirmation.value
        });
        alert('Registration successful! You can now log in.');
        router.push({ name: 'LoginPage' });
    } catch (error) {
        if (error.response && error.response.data.errors) {
            const errors = error.response.data.errors.join('\n');
            alert(`Registration failed:\n${errors}`);
        } else {
            alert('Registration failed. Please try again.');
        }
    }
};
</script>

<style scoped>
.register-form {
    @apply w-96 p-6 space-y-4 bg-white shadow-md rounded-lg;
}

.form-title {
    @apply text-2xl font-semibold text-gray-700;
}

.form-input {
    @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500;
}

.form-button {
    @apply w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-150;
}

.link {
    @apply text-blue-500 hover:underline;
}
</style>
