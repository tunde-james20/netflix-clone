import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`

export const Container = styled.div`
  display: flex;
  margin: 0 3.5em;
  height: 64px;
  padding: 1.125em 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 1.875em;
  }
`

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 1.875em;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 5.25em;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1rem;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 2.5em;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`