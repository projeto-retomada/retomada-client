<template>
    <span class="tooltip-role" :class="{'student': role == 'STUDENT','teacher': role == 'TEACHER', 'admin': role == 'ADMIN'}">
        {{ role }}
    </span>
</template>

<script>
    export default {
        name: 'RoleBadge',
        props: {
            role: { 
                required: true,
            },
        },
        created() { 
            
        },
        data() {
            return {
                
            };
        },
    }
</script>