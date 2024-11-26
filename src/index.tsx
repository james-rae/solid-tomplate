import './index.css';
import { render } from 'solid-js/web';
import { PageLayout } from '@/view';

// do initial draw of reactive root
const root = document.getElementById('root');
render(() => <PageLayout />, root!);
