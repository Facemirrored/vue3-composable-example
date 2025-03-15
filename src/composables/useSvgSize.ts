import {computed, Ref} from "vue";

const useSvgSize = (sizeRef: Ref<number>) => {

    // TODO: if i dont use computed, the reactivity is lost
    const size = computed(() => sizeRef.value);

    return {
        width: size,
        height: size,
    }
};

export default useSvgSize;