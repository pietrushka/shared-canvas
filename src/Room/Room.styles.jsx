import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const RoomContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: white;
`

export const LeftPanel = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`

export const ExitBox = styled.div`
  padding: .2em;
  border-bottom-right-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 5px 0px;
`

export const ExitLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 .5em;
  color: black;
  font-size: .8rem;
  background: rgb(233, 236, 239);
  height: 2.5rem;
  border-radius: .5rem;
`

export const RoomIdBox = styled.div`
  position: relative;
  margin-left: 1rem;
  padding: .2em;
  border-bottom-right-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 
  5px 0px;
  display: flex;
  text-decoration: none;
  outline: none;
`

export const RoomIdBtn = styled.div`
  display: flex;
  font-size: .8rem;
  padding: 0 .5em;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  background: rgb(233, 236, 239);
  border-radius: .5rem;
`

export const Toolbox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 50%;
  padding: .2em;
  transform: translateX(-50%);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 5px 
  0px;
`

const ToolMixin = css`
  font-size: .8rem;
  background: rgb(233, 236, 239);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: .5rem;
  cursor: pointer;
`

export const Pen = styled.details`
  ${ToolMixin}
  margin: 0 .5em;
  outline: none;

  &[open] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  summary {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    outline: none;
    
    &::-webkit-details-marker {
      display: none;
    }
  }
`

export const ColorsList = styled.ul`
  background: rgb(216, 216, 216);
  list-style: none;
  padding: .5rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border-bottom-left-radius: .5rem;
  border-bottom-right-radius: .5rem;
`

export const ColorBtn = styled.div`
  height: 2rem;
  width: 2rem;

  &.black { background-color: black; }
  &.red { background-color: red; }
  &.green { background-color: green; }
  &.blue { background-color: blue; }
  &.yellow { background-color: yellow; }
`

export const Eraser = styled.div`
  ${ToolMixin}

  margin: 0 .5em;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WhiteBoard = styled.canvas`
  height: 100%;
  width: 100%;
`
