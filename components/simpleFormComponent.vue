<template lang="pug">
    div
        form(
            @submit.prevent="formSubmit"
        )
            .field
                input.input(
                    type="text"
                    name="name"
                    v-model="name"
                )
            .field
                input.input(
                    type="text"
                    name="lastname"
                    v-model="lastname"
                )
            button.button.isPrimary(
                type="submit"
            ) Submit
        div.display {{ fullName }}
        div.clicked(
            v-show="submit"
        ) I was submitted
        button.button.is-success.clickme(
            @click="onExternalClick()"
        ) Click Me!
</template>

<script lang="ts">
import { Vue, Component, State, Prop } from 'nuxt-property-decorator';

@Component({})
export default class SimpleForm extends Vue {
    name: string = "";
    lastname: string = "";
    submit: boolean = false;

    @Prop(Function) onExternalClick;

    get fullName() {
        return `${this.name} ${this.lastname}`
    }

    formSubmit() {
        this.submit = !this.submit;
    }
}
</script>