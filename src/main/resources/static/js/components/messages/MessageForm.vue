<template>
    <div>
        <input type="text" placeholder="Write something" v-model="text" />
        <input type="button" value="Save" @click="save" />
    </div>
</template>

<script>
    import { sendMessage } from "util/ws";

    export default {
        name: "MessageForm",
        props: ['messages', "messageAttr"],
        data() {
            return {
                text: '',
                id: ''
            }
        },
        watch: {
            messageAttr(newVal, oldVal) {
                this.text = newVal.text;
                this.id = newVal.id;
            }
        },
        methods: {
            save() {
                sendMessage({id: this.id, text: this.text})

                this.text = ''
                this.id = ''

            }
        }
    }
</script>

<style scoped>

</style>