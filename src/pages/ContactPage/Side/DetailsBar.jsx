import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const DetailsBarWrapper = styled.div`
  background-color: #1e7ed7;
  border-radius: 7px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    padding-bottom: 30px;
    grid-row: 2;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`;

const TextTwo = styled.p`
  text-align: center;
  color: #fff;
  font-size: 17px;
  line-height: 18px;
`;

const ContactsWrapper = styled.a`
  display: flex;
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

const ContactText = styled.div`
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  margin-top: 30px; /* Add margin to create space above */
  cursor: pointer;
`;

const SocialIconWrapper = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  &:hover {
    background-color: #000099;
  }
`;

const DetailsBar = () => {
  return (
    <DetailsBarWrapper>
      <TextWrapper>
        <TextOne>Contact Information</TextOne>
        <TextTwo>Fill up the form and our team will get back to you within 24 hours</TextTwo>
      </TextWrapper>
      <div>
        <ContactsWrapper href="tel:+123 456 7890">
          <Icon.Phone size={25} color="#fff" />
          <ContactText>+123 456 7890</ContactText>
        </ContactsWrapper>

        <ContactsWrapper href="mailto:info@iykmotors.com">
          <Icon.Mail size={25} color="#fff" />
          <ContactText>info@iykmotors.com</ContactText>
        </ContactsWrapper>
      </div>

      <SocialsWrapper>
        <SocialIconWrapper href="https://www.facebook.com/profile.php?id=100021937291259">
          <Icon.Facebook color="#fff" size={25} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.instagram.com/_allenjones/">
          <Icon.Instagram color="#fff" size={25} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.linkedin.com/in/allen-jones-b799b7171/">
          <Icon.Linkedin color="#fff" size={25} />
        </SocialIconWrapper>
      </SocialsWrapper>
    </DetailsBarWrapper>
  );
};

export default DetailsBar;
