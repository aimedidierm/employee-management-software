<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50">
        <form @submit.prevent="login" class="login-form">
            <h2 class="form-title">Login</h2>
            <input v-model="email" placeholder="Email" class="form-input" required type="email" />
            <input v-model="password" placeholder="Password" class="form-input" required type="password" />
            <button type="submit" class="form-button">Login</button>
            <div class="flex justify-between mt-4">
                <router-link to="/register" class="link">Register</router-link>
                <router-link to="/forgot-password" class="link">Forgot Password?</router-link>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
    try {
        const response = await axios.post('/auth/login', {
            email: email.value,
            password: password.value
        });
        const { data } = response;
        console.log('Data:', data);
        console.log('Token:', data.token);

        if (!data.token) {
            throw new Error('Token is missing from response');
        }

        localStorage.setItem('auth_token', data.token);
        router.push({ name: 'EmployeesPage' });
    } catch (error) {
        alert('Failed to log in. Please check your credentials and try again.');
    }
};
</script>

<style scoped>
.login-form {
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
