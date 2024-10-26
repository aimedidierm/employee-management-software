    <template>
        <div class="flex items-center justify-center min-h-screen bg-gray-50">
            <form @submit.prevent="forgotPassword" class="forgot-password-form">
                <h2 class="form-title">Forgot Password</h2>
                <input v-model="email" placeholder="Email" class="form-input" required type="email" />
                <button type="submit" class="form-button">Send Reset Link</button>
                <div class="flex justify-between mt-4">
                    <router-link to="/" class="link">Login</router-link>
                </div>
            </form>
        </div>
    </template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');

const forgotPassword = async () => {
    try {
        await axios.post('/auth/password/forgot', { email: email.value });
        alert('Reset link sent! Please check your email.');
    } catch (error) {
        if (error.response && error.response.data.message) {
            alert(`Failed to send reset link:\n${error.response.data.message}`);
        } else {
            alert('Failed to send reset link. Please try again.');
        }
    }
};
</script>

<style scoped>
.forgot-password-form {
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
