import { createSignal } from 'solid-js';

const [FloatSig, setFloatSig] = createSignal<number>(0);

export { FloatSig, setFloatSig };
