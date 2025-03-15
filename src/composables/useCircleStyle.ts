import {computed, Ref} from "vue";

const useCircleStyle = ({cxRef, cyRef, rRef}: {
    cxRef: Ref<number>,
    cyRef: Ref<number>,
    rRef: Ref<number>,
}) => {

    // TODO: if I use unref or extract value as const, the reactivity is lost
    // --> can I extract the values directly to shorten the access and make the code more comprehensive?
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