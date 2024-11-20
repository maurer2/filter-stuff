import { css } from '../../../styled-system/css';
import Form from './components/form/form';

const pageTitle = css({
  color: 'red',
  fontSize: '2xl',
});

const handleSubmit = async (prevState: { filter1: boolean }, formData: FormData) => {
  'use server';

  console.log('prevState', formData);

  const newFormState = {
    filter1: formData.get('filter1') === 'on',
  };

  return newFormState;
};

export default function Home() {
  return (
    <article>
      {/* @ts-expect-error marquee tag is too new */}
      <marquee className={pageTitle}>
        <h1>Server side only</h1>
        {/* @ts-expect-error marquee tag is too new */}
      </marquee>
      <Form onFormSubmit={handleSubmit} />
    </article>
  );
}
