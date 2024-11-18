import { css } from '../../../styled-system/css';

const pageTitle = css({
  color: 'red',
  fontSize: '2xl',
});

export default function Home() {
  return (
    <article>
      {/* @ts-expect-error marquee tag is too new */}
      <marquee className={pageTitle}>
        <h1>Server side only</h1>
        {/* @ts-expect-error marquee tag is too new */}
      </marquee>
    </article>
  );
}
