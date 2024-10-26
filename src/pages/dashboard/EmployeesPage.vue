<template>
    <NavBar />
    <div class="p-20">
        <h2 class="text-2xl font-bold mb-4">Employees</h2>

        <button @click="openCreateModal" class="btn mb-4">Add New Employee</button>

        <div v-if="isLoading">
            <p class="text-center py-4">Loading...</p>
        </div>
        <table v-else class="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
                <tr>
                    <th class="px-4 py-2 text-left border-b">Name</th>
                    <th class="px-4 py-2 text-left border-b">Email</th>
                    <th class="px-4 py-2 text-left border-b">Position</th>
                    <th class="px-4 py-2 text-left border-b">Phone Number</th>
                    <th class="px-4 py-2 text-center border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td class="px-4 py-2 border-b">{{ employee.name }}</td>
                    <td class="px-4 py-2 border-b">{{ employee.email }}</td>
                    <td class="px-4 py-2 border-b">{{ employee.position }}</td>
                    <td class="px-4 py-2 border-b">{{ employee.phone_number || 'N/A' }}</td>
                    <td class="px-4 py-2 text-center border-b space-x-2">
                        <button @click="openEditModal(employee)" class="btn-small">Edit</button>
                        <button @click="deleteEmployee(employee.id)" class="btn-red-small"
                            :disabled="isLoading">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <h3 class="text-xl font-bold mb-4">{{ isEdit ? 'Edit' : 'Add' }} Employee</h3>

                <input v-model="form.name" placeholder="Name" class="form-input mb-2" required />
                <input v-model="form.email" placeholder="Email" class="form-input mb-2" type="email" required />

                <select v-model="form.position" class="form-input mb-2" required>
                    <option disabled value="">Select Position</option>
                    <option value="Developer">Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Designer">Designer</option>
                </select>

                <input v-model="form.phone_number" placeholder="Phone Number" class="form-input mb-4" type="tel" />

                <button @click="isEdit ? updateEmployee() : createEmployee()" class="btn mr-2" :disabled="isLoading">
                    <span v-if="isLoading">Processing...</span>
                    <span v-else>{{ isEdit ? 'Update' : 'Create' }}</span>
                </button>
                <button @click="closeModal" class="btn-gray" :disabled="isLoading">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NavBar from '../../components/NavBar.vue';

const employees = ref([]);
const showModal = ref(false);
const isEdit = ref(false);
const isLoading = ref(false);
const form = ref({
    id: null,
    name: '',
    email: '',
    position: '',
    phone_number: ''
});

const fetchEmployees = async () => {
    isLoading.value = true;
    try {
        const { data } = await axios.get('/employees', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth_token')}`
            }
        });
        employees.value = data;
    } catch (error) {
        console.error('Failed to fetch employees:', error);
    } finally {
        isLoading.value = false;
    }
};

const createEmployee = async () => {
    isLoading.value = true;
    try {
        await axios.post(
            '/employees',
            {
                name: form.value.name,
                email: form.value.email,
                position: form.value.position,
                phone_number: form.value.phone_number
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('auth_token')}`
                }
            }
        );
        fetchEmployees();
        closeModal();
    } catch (error) {
        console.error('Failed to create employee:', error);
        alert('Error creating employee.');
    } finally {
        isLoading.value = false;
    }
};

const openEditModal = (employee) => {
    isEdit.value = true;
    form.value = { ...employee };
    showModal.value = true;
};

const updateEmployee = async () => {
    isLoading.value = true;
    try {
        await axios.put(
            `/employees/${form.value.id}`,
            {
                name: form.value.name,
                email: form.value.email,
                position: form.value.position,
                phone_number: form.value.phone_number
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('auth_token')}`
                }
            }
        );
        fetchEmployees();
        closeModal();
    } catch (error) {
        console.error('Failed to update employee:', error);
        alert('Error updating employee.');
    } finally {
        isLoading.value = false;
    }
};

const deleteEmployee = async (id) => {
    isLoading.value = true;
    try {
        await axios.delete(`/employees/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth_token')}`
            }
        });
        fetchEmployees();
    } catch (error) {
        console.error('Failed to delete employee:', error);
    } finally {
        isLoading.value = false;
    }
};

const openCreateModal = () => {
    isEdit.value = false;
    form.value = { name: '', email: '', position: '', phone_number: '' };
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    form.value = { id: null, name: '', email: '', position: '', phone_number: '' };
};

onMounted(fetchEmployees);
</script>

<style scoped>
.btn {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
}

.btn-small {
    @apply px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600;
}

.btn-red-small {
    @apply px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600;
}

.btn-gray {
    @apply px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600;
}

.form-input {
    @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500;
}

.modal-overlay {
    @apply fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50;
}

.modal-content {
    @apply w-full max-w-lg p-6 bg-white rounded-lg shadow-lg;
}
</style>
