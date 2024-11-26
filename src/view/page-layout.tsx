import './page-layout.css';

import { Component } from 'solid-js';
import { FloatSig } from '@/state';
import { PageCtr } from '@/logic';

const PageLayout: Component = () => {
    return (
        <div>
            <img src="./img/float.jpg" />
            <p>
                <button on:click={e => PageCtr.float()}>Float!</button> ==&gt; Floated {FloatSig()} Times
            </p>
        </div>
    );
};

export { PageLayout };
