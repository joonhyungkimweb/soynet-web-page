<template>
    <div class="divider ml-auto mr-auto" :style="`width : ${width}; border-color : ${borderColor}; margin : ${margin}`">
    </div>
</template>

<style scoped>
    .divider {
        height: 1px;
        border: 2px solid;
    }
</style>

<script>
    export default {
        props: {
            width: {
                type: String,
                default: '50px'
            },
            borderColor : {
                type: String,
                default: '#F96332'
            },
            margin : {
                type : String,
                default : '0 0'
            }
        }
    }
</script>