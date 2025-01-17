import React from 'react';
import styled from 'styled-components';
import InputSide from '../InputSide/InputSide';
import DetailsBar from '../Side/DetailsBar';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormContainer = styled.div`
  width: 80%;
  min-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: 500px;
  grid-gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    max-width: 500px;
    min-width: 0px;
    grid-gap: 20px;
  }
`;

const TextOne = styled.b`
  font-size: 60px;
  color: #1e7ed7;
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 20px;
  text-align: center;
`;

const FormPage = () => {
  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact US</TextOne>
        <TextTwo>Any Question or remarks? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar />
        <InputSide />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;