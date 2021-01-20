<template>
    <CCard class="infected-card">
        <CCardBody>
            <p class="infected-card__title">{{ message }}</p>
            <span class="infected-card__statistic">
                <span class="infected" :class="getColor()">{{ infected }} </span>
                <span class="total">/ {{ total }} </span>
            </span>
         </CCardBody>
    </CCard>
</template>
<script>
export default {
    name: 'InfectedCard',
    props: {
        message: {
            required: true
        },
        infected: {
            required: true
        },
        total: {
            required: true
        }
    },
    components: {
    
    },
    data () {
      return {
      }
    },
    methods: {
        getColor() {
            var total = parseInt(this.total);
            var infected = parseInt(this.infected);
            if (infected <= total * 0.10) {
                return 'p-color-green-35';
            } else if (infected > total * 0.10 && infected <= total * 0.3) {
                return 'p-color-yellow-35';
            } 
            return 'p-color-red-25';
        }
    }
}
</script>