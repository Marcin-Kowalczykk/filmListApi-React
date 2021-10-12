import React, { Fragment, useRef, useState } from 'react';

import Button from '../Ui/Button';

import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #ff6347a4;
  border-radius: 0.5em;
  margin: 5px;
  padding: 5px;
  width: 20em;
  cursor: pointer;

  &:focus {
    background: #ff63474c;
  }
`;

const Textarea = styled.textarea`
  outline: none;
  border: 1px solid #ff6347a4;
  border-radius: 0.5em;
  padding: 5px;
  cursor: pointer;

  &:focus {
    background: #ff63474c;
  }
`;

const Footer = styled.footer`
  margin-top: 1em;
`;

const Error = styled.p`
  color: red;
`;

const HeaderForm = ({ hideForm, onAddFilm, isAdded }) => {
  const [error, setError] = useState(false);
  const titleRef = useRef('');
  const descRef = useRef('');
  const directorRef = useRef('');
  const producerRef = useRef('');
  const dateRef = useRef('');

  const submitFormHandler = (event) => {
    event.preventDefault();
    setError(false);
    if (
      titleRef.current.value.length !== 0 &&
      descRef.current.value.length !== 0 &&
      directorRef.current.value.length !== 0 &&
      producerRef.current.value.length !== 0 &&
      dateRef.current.value.length !== 0
    ) {
      const dataFromForm = {
        title: titleRef.current.value,
        desc: descRef.current.value,
        director: directorRef.current.value,
        producer: producerRef.current.value,
        date: dateRef.current.value,
        place: 'From Data Base',
      };
      onAddFilm(dataFromForm);
    } else {
      setError(true);
    }
  };

  return (
    <Fragment>
      <FormWrapper>
        <label htmlFor="in1">title</label>
        <Input type="text" name="" id="in1" ref={titleRef} />
        <label htmlFor="in2">Description</label>
        <Textarea name="" id="in2" cols="30" rows="5" ref={descRef}></Textarea>
        <label htmlFor="in3">Director</label>
        <Input type="text" name="" id="in3" ref={directorRef} />
        <label htmlFor="in4">Producer</label>
        <Input type="text" name="" id="in4" ref={producerRef} />
        <label htmlFor="in5">Date</label>
        <Input type="text" name="" id="in5" ref={dateRef} />
      </FormWrapper>
      <Footer>
        <Button onClick={hideForm}>Back</Button>
        {!isAdded && <Button onClick={submitFormHandler}>Add new film</Button>}
        {isAdded && <Button onClick={submitFormHandler}>Adding new film...</Button>}
        {error && <Error>input/inputs are blank</Error>}
      </Footer>
    </Fragment>
  );
};

export default HeaderForm;
