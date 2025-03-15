import {computed, Ref} from "vue";

const useCircleStyle = ({cxRef, cyRef, rRef}: {
    cxRef: Ref<number>,
    cyRef: Ref<number>,
    rRef: Ref<number>,
}) => {

    // TODO: if i use unref or extract value as const, the reactivity is lost
    const circleStyle = computed(() => {
        return `
            cx: ${cxRef.value}px;
            cy: ${cyRef.value}px;
            r: ${rRef.value}px;
        `;
    });

    return {
        circleStyle
    }
}

export default useCircleStyle;