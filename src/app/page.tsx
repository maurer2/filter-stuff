import Link from 'next/link';
import { css } from '../../styled-system/css';

const pageTitle = css({
  mb: '1rem',
  fontSize: '2xl',
});

const list = css({
  mb: '1rem',
  counterReset: 'list-entry',
});

const listEntryTitle = css({
  mb: '1rem',
  fontSize: 'xl',
  counterIncrement: 'list-entry',
  _before: { content: '[counter(list-entry)]', pr: '0.5rem' }, // https://github.com/chakra-ui/panda/issues/1781
});

const listEntryDescription = css({
  mb: '1rem',
  maxWidth: '80ch',
});

const listEntryLink = css({
  textDecoration: 'underline',
});

export default function Home() {
  return (
    <main>
      <h1 className={pageTitle}>List of approaches</h1>
      <ul className={list}>
        <li>
          <h2 className={listEntryTitle}>Server side only (todo)</h2>
          <p className={listEntryDescription}>
            Calculate all filtered data in a server component using query params and only send
            results for the current page back to the client as rendered html. Navigate to prev and
            next results page via router and calculate the data on the server again
          </p>
          <Link href="/server-side-only" className={listEntryLink}>
            Link
          </Link>
        </li>
      </ul>
    </main>
  );
}
