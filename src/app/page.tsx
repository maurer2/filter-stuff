import { css } from '../../styled-system/css';

const wrapper = css({
  backgroundColor: '#c3c3d3',
});

export default function Home() {
  return (
    <div className={wrapper}>
      <nav>Nav</nav>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
}
