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
    import  {addHandler } from "util/ws";
    import { getIndex } from "util/collections";

    export default {
        components: {
            MessagesList
        },
        data() {
            return {
                messages: frontendData.messages,
                profile: frontendData.profile
            }
        },
        created() {
            addHandler(data => {
                let index = getIndex(this.messages, data.id)
                if (index > -1) {
                    this.messages.splice(index, 1, data)
                } else {
                    this.messages.push(data)
                }
            })
        }
    }
</script>

<style>

</style>