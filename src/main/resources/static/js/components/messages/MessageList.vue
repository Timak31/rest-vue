<template>
    <div style="position: relative; width: 300px">
        <message-form :messages="messages" :messageAttr="message" />
        <message-row v-for="message in messages"
                     :key="message.id"
                     :message="message"
                     :deleteMessage="deleteMessage"
                     :editMessage="editMessage"
                     :messages="messages"/>
    </div>
</template>

<script>
    import MessageRow from 'components/messages/MessageRow.vue'
    import MessageForm from 'components/messages/MessageForm.vue'

    export default {
        name: "MessageList",
        components: {
            MessageRow,
            MessageForm
        },
        props: ['messages'],
        data() {
            return {
                message: null
            }
        },

        methods: {
            editMessage(message) {
                this.message = message;
            },
            deleteMessage(message) {
                this.$resource('/message{/id}').remove({id: message.id}).then(result => {
                    if (result.ok) {
                        this.messages.splice(this.messages.indexOf(message), 1)
                    }
                })
            }
        }
    }
</script>

<style>

</style>