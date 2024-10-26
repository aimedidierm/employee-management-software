<template>
    <NavBar />
    <div class="p-20">
        <h2 class="text-2xl font-bold mb-4">Attendance</h2>

        <button @click="openReportModal" class="btn mb-4">Generate Report</button>

        <div v-if="showReportModal" class="modal-overlay">
            <div class="modal-content">
                <h3 class="text-xl font-bold mb-4">Generate Attendance Report</h3>

                <label for="format" class="block font-medium mb-1">Select Format</label>
                <select v-model="reportFormat" id="format" class="form-input mb-4" required>
                    <option value="excel">Excel</option>
                    <option value="pdf">PDF</option>
                </select>

                <label for="date" class="block font-medium mb-1">Select Date</label>
                <input v-model="reportDate" type="date" id="date" class="form-input mb-4" required />

                <button @click="generateReport" class="btn mr-2">Generate</button>
                <button @click="closeReportModal" class="btn-gray">Cancel</button>
            </div>
        </div>

        <div v-if="loading" class="loader">Loading...</div>

        <table v-if="!loading" class="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
                <tr>
                    <th class="px-4 py-2 text-left border-b">Employee Name</th>
                    <th class="px-4 py-2 text-left border-b">Check-In</th>
                    <th class="px-4 py-2 text-left border-b">Check-Out</th>
                    <th class="px-4 py-2 text-center border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td class="px-4 py-2 border-b">{{ employee.name }}</td>
                    <td class="px-4 py-2 border-b">
                        <span v-if="employee.attendance && employee.attendance.check_in">
                            {{ new Date(employee.attendance.check_in).toLocaleTimeString() }}
                        </span>
                        <span v-else>N/A</span>
                    </td>
                    <td class="px-4 py-2 border-b">
                        <span v-if="employee.attendance && employee.attendance.check_out">
                            {{ new Date(employee.attendance.check_out).toLocaleTimeString() }}
                        </span>
                        <span v-else>N/A</span>
                    </td>
                    <td class="px-4 py-2 text-center border-b space-x-2">
                        <button @click="checkIn(employee.id)" class="btn-small"
                            v-if="!employee.attendance || !employee.attendance.check_in">
                            Check-In
                        </button>
                        <button @click="checkOut(employee.id)" class="btn-small"
                            :disabled="!employee.attendance || !employee.attendance.check_in || employee.attendance.check_out">
                            Check-Out
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NavBar from '../../components/NavBar.vue';

const employees = ref([]);
const showReportModal = ref(false);
const reportFormat = ref('excel');
const reportDate = ref(null);
const loading = ref(false);

const fetchEmployeesAndAttendances = async () => {
    loading.value = true;
    try {
        const [employeesResponse, attendancesResponse] = await Promise.all([
            axios.get('/employees', { headers: { Authorization: `Bearer ${localStorage.getItem('auth_token')}` } }),
            axios.get('/attendance', { headers: { Authorization: `Bearer ${localStorage.getItem('auth_token')}` } })
        ]);

        const attendanceMap = {};
        attendancesResponse.data.forEach(att => {
            attendanceMap[att.employee_id] = att;
        });

        employees.value = employeesResponse.data.map(employee => ({
            ...employee,
            attendance: attendanceMap[employee.id] || null
        }));
    } catch (error) {
        console.error('Failed to fetch data:', error);
    } finally {
        loading.value = false;
    }
};

const checkIn = async (employeeId) => {
    loading.value = true;
    try {
        await axios.post('/attendance/check-in', { employee_id: employeeId }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth_token')}`
            }
        });
        await fetchEmployeesAndAttendances();
    } catch (error) {
        console.error('Failed to check-in:', error);
        alert('Error checking in employee.');
    } finally {
        loading.value = false;
    }
};

const checkOut = async (employeeId) => {
    loading.value = true;
    try {
        await axios.post('/attendance/check-out', { employee_id: employeeId }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth_token')}`
            }
        });
        await fetchEmployeesAndAttendances();
    } catch (error) {
        console.error('Failed to check-out:', error);
        alert('Error checking out employee.');
    } finally {
        loading.value = false;
    }
};

const openReportModal = () => {
    showReportModal.value = true;
    reportDate.value = null;
};

const closeReportModal = () => {
    showReportModal.value = false;
    reportFormat.value = 'excel';
};

const generateReport = async () => {
    if (!reportDate.value) {
        alert('Please select a date.');
        return;
    }

    loading.value = true;
    const format = reportFormat.value;
    const date = reportDate.value;
    const url = `/attendance/export/${format}/${date}`;

    try {
        const response = await axios.get(url, {
            responseType: 'blob',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth_token')}`
            }
        });

        const blob = new Blob([response.data]);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `Attendance_Report_${date}.${format === 'excel' ? 'xlsx' : 'pdf'}`;
        link.click();

        closeReportModal();
    } catch (error) {
        console.error('Failed to generate report:', error);
        alert('Error generating report.');
    } finally {
        loading.value = false;
    }
};

onMounted(fetchEmployeesAndAttendances);
</script>

<style scoped>
.btn {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
}

.btn-small {
    @apply px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600;
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

.loader {
    @apply text-center text-lg my-4;
}
</style>
