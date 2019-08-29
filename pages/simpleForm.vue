<template>
    <div>
        <FormComponent
            :onExternalClick="onExternalClick"
        />
    </div>
</template>

<script lang="ts">
import { Vue, Component, State } from 'nuxt-property-decorator';
import FormComponent from '@/components/simpleFormComponent.vue';

@Component({
    components: {
        FormComponent
    }
})
export default class SimpleForm extends Vue {
    externalClick: boolean = false;

    onExternalClick() {
        console.log('Hi');
    }
}
</script>