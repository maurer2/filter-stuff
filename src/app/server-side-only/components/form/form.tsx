'use client';

// import { css } from '../../../../../styled-system/css';
import { useRef, useId, useActionState } from 'react';
import type { FormState } from '../../page';

type FormProps = {
  onFormSubmit: (prevState: FormState, formData: FormData) => Promise<FormState>;
};

const defaultFormState: FormState = {
  isFilter1Active: false,
};

export default function Form({ onFormSubmit }: FormProps) {
  const filterBinary = useRef(null);
  const filterBinaryId = useId();

  // const filterMultiple1 = useRef(null);
  // const filterMultiple1Id = useId();
  // const filterMultiple2 = useRef(null);
  // const filterMultiple2Id = useId();

  const [formState, formAction, isPending] = useActionState(onFormSubmit, defaultFormState);

  return (
    <form action={formAction} inert={isPending}>
      <input
        type="checkbox"
        name="filter1"
        id={filterBinaryId}
        defaultChecked={formState.isFilter1Active}
        ref={filterBinary}
      />
      <label htmlFor={filterBinaryId}>Filter 1</label>

      <hr />

      <button type="submit">Submit</button>

      <hr />

      <code>
        <pre>{JSON.stringify(formState, null, 4)}</pre>
      </code>
    </form>
  );
}
