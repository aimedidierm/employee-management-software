<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50">
        <form @submit.prevent="resetPassword" class="reset-password-form">
            <h2 class="form-title">Reset Password</h2>
            <input v-model="email" placeholder="Email" class="form-input" required type="email"
                style="display: none;" />
            <input v-model="token" placeholder="Reset Token" class="form-input" required type="text"
                style="display: none;" />
            <input v-model="password" placeholder="New Password" class="form-input" required type="password" />
            <input v-model="passwordConfirmation" placeholder="Confirm New Password" class="form-input" required
                type="password" />
            <button type="submit" class="form-button">Reset Password</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const token = ref('');
const route = useRoute();

email.value = route.query.email || '';
token.value = route.query.token || '';

const resetPassword = async () => {
    if (password.value !== passwordConfirmation.value) {
        alert('Password confirmation does not match.');
        return;
    }

    try {
        await axios.post('/auth/password/reset', {
            token: token.value,
            email: email.value,
            password: password.value
        });
        alert('Password has been reset! You can now log in.');
    } catch (error) {
        alert('Failed to reset password. Please try again.');
    }
};
</script>

<style scoped>
.reset-password-form {
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
