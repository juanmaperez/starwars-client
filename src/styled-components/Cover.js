import styled from 'styled-components'

export const CoverWrapper = styled.div`
    padding: 50px;
    box-sizing: border-box;
    .welcome {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      font-family: Helvetica, sans-serif;
    }
    .leia {
      width: 100px;
      margin: auto;
      transform: scale(1.5);

      .head {
        position: relative;
        width: 87px;
        height: 96px;
        border-radius: 35%;
        background: #f6c3a4;

        &::before {
          position: absolute;
          width: 19px;
          height: 60px;
          top: 14px;
          left: -19px;
          content: "";
          background:  #473e37;
          border-radius: 9px;
        }

        &::after {
          position: absolute;
          width: 19px;
          height: 60px;
          top: 15px;
          right: -19px;
          content: "";
          background: #473e37;
          border-radius:9px;
        }

        .fringe {
          position: absolute;
          width: 50%;
          height: 39px;
          right: 0;
          background: #473e37;
          border-top-left-radius: 78%;
          border-bottom-right-radius: 70%;
          transform: scaleX(-1);

          &:first-child {
            transform: scaleX(1);
            left: 0;
          }

        }

        .eye {
          position: absolute;
          width: 7px;
          height: 8px;
          top: 52px;
          right: 20px;
          background: #222;
          border-radius: 50%;

          &:first-child {
            left: 20px;
          }

          &::before {
            content: "";
            position: absolute;
            top: -5px;
            left: -5px;
            right: 0;
            height: 6px;
            width: 18px;
            margin: 0 auto;
            border-top: 4px solid #222;
            border-radius: 100%;
          }
          
          &::after {
            content: "";
            position: absolute;
            top: 2px;
            left: 1px;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
          }

        }
        
        .blush {
          position: absolute;
          width: 1px;
          height: 1px;
          top: 72px;
          right: 13px;
          background: #ffa8a8;
          border-radius: 50%;
          opacity: 0.8;
          box-shadow: 0px 0px 15px 8px #ffa8a8;
          
          &:first-child {
            left: 13px;
          }  
        }
        
        .mouth {
          position: absolute;
          top: 73px;
          left: 0;
          right: 0;
          height: 8px;
          width: 19px;
          margin: 0 auto;
          border-bottom: 2px solid #222;
          border-radius: 100%;
        }
      }
    }
`

