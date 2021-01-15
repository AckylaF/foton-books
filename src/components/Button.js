import styled from 'styled-components';

const ActionButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: .8rem;
  color: #FFF;
  background-color: #549AE6;
  text-transform: uppercase;
  border-radius: 50px;
  box-shadow: 0px 2px 15px -6px #212529;

  @media screen and (min-width: 1024px){
    cursor: pointer;

    &:hover{
      background-color: #549AE6cc;
    }
  }
`;

export default function Button({ text, type, fn }) {
  return (
    <ActionButton type={type} onClick={fn}>
      {text}
    </ActionButton>
  )
}