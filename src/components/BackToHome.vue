<template>
    <nav aria-label="breadcrumb" role="navigation">
        <div class="row px-2 py-3 mb-3">
            <a :href="link"><span>< Back to </span>
                <slot>
                    Home
                </slot>
            </a>
        </div>
    </nav>
</template>

<style scoped>
</style>

<script>
    export default {
        props: {
            link: {
                type: String,
                default: "#/about"
            }
        }
    }
</script>