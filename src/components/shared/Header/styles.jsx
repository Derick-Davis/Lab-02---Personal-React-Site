import styled from 'styled-components';
import './styles.css';

export default {
  Header: styled.header`
    padding: 1em;
    border-radius: 10px;
    margin: 0 auto;
    width: 95%;
    margin-top: 2em;
    background: #f1c40f;
    color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      padding: 0;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
    }

    p{
      align-items: center;
      color: #2c3e50;
      font-size: large;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

  `

}