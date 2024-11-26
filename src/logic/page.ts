import { FloatSig, setFloatSig } from '@/state';

class PageControl {
    float(): void {
        setFloatSig(FloatSig() + 1);
    }
}

const PageCtr = new PageControl();

export { PageCtr };
