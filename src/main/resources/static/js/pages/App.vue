<template>
    <div>
    <div v-if="!profile">Need authorize by <a href="/login">Google</a>!</div>
    <div v-else>
        <img :src="profile.userpic" width="100px"/>
        <div>
            <div>{{profile.name}} <a href="/logout">logout</a></div>
            </div>
        <messages-list :messages="messages"/>
        </div>
    </div>
</template>

<script>
    import MessagesList from '../components/messages/MessageList.vue'

    export default {
        components: {
            MessagesList
        },
        data() {
            return {
                messages: frontendData.messages,
                profile: frontendData.profile
            }
        }
    }
</script>

<style>

</style>