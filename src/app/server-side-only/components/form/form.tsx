'use client';

// import { css } from '../../../../../styled-system/css';
import { useRef, useId, useActionState } from 'react';

type FormProps = {
  onFormSubmit: (
    prevState: { filter1: boolean },
    formData: FormData,
  ) => Promise<{ filter1: boolean }>;
};

const defaultFormState = {
  filter1: false,
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
        defaultChecked={formState.filter1}
        ref={filterBinary}
      />
      <label htmlFor={filterBinaryId}>Filter 1</label>

      <hr />

      <button type="submit">Submit</button>
    </form>
  );
}
