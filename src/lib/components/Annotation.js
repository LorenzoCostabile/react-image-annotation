import React, { Component } from 'react'
import T from 'prop-types'
import './Annotation.css'
import compose from '../utils/compose'
import isMouseHovering from '../utils/isMouseHovering'
import withRelativeMousePos from '../utils/withRelativeMousePos'

export default compose(
  isMouseHovering(),
  withRelativeMousePos()
)(class Annotation extends Component {
  static propTypes = {
    innerRef: T.func,
    onMouseUp: T.func,
    onMouseDown: T.func,
    onMouseMove: T.func,
    onClick: T.func,

    showSelector: T.bool,
    renderSelector: T.func,
    showEditor: T.bool,
    renderEditor: T.func,

    renderHighlight: T.func.isRequired,
    renderContent: T.func.isRequired
  }

  static defaultProps = {
    innerRef: () => {},
    onMouseUp: () => {},
    onMouseDown: () => {},
    onMouseMove: () => {},
    onClick: () => {}
  }

  setInnerRef = (el) => {
    this.container = el
    this.props.relativeMousePos.innerRef(el)
    this.props.innerRef(el)
  }

  getTopAnnotationAt = (x, y) => {
    const { annotations } = this.props

    const intersections = annotations
      .map(annotation => {
        const { geometry } = annotation

        if (x < geometry.x) return false
        if (y < geometry.y) return false
        if (x > geometry.x + geometry.width)
          return false
        if (y > geometry.y + geometry.height)
          return false

        return annotation
      })
      .filter(a => !!a)
      .sort((a, b) => (
        (a.geometry.width * a.geometry.height)
        - (b.geometry.width * b.geometry.height)
      ))

    return intersections[0]
  }

  onTargetMouseMove = (e) => {
    this.props.onMouseMove(e)
    this.props.relativeMousePos.onMouseMove(e)
  }

  render () {
    const { props } = this
    const {
      isMouseHovering,

      renderHighlight: Highlight,
      renderContent: Content,
      renderSelector: Selector,
      renderEditor
    } = props

    const topAnnotationAtMouse = this.getTopAnnotationAt(
      this.props.relativeMousePos.x,
      this.props.relativeMousePos.y
    )

    const className = props.className
      ? `Annotation__img ${props.className}`
      : `Annotation__img`

    return (
      <div
        className='Annotation'
        style={props.style}
        ref={isMouseHovering.innerRef}
      >
        <img
          className={className}
          style={props.style}
          alt={props.alt}
          src={props.src}
          draggable={false}
          ref={this.setInnerRef}
        />
        {props.showSelector && <Selector />}
        {props.annotations.map(annotation => (
          <Highlight
            key={annotation.data.id}
            geometry={annotation.geometry}
            active={
              topAnnotationAtMouse === annotation
            }
          />
        ))}
        {props.annotations.map(annotation => (
          topAnnotationAtMouse === annotation && (
            <Content
              key='content'
              geometry={annotation.geometry}
              annotation={annotation}
            />
          )
        ))}
        <div
          onClick={props.onClick}
          onMouseUp={props.onMouseUp}
          onMouseDown={props.onMouseDown}
          onMouseMove={this.onTargetMouseMove}
          className='Annotation__target'
        />
        {props.showEditor && renderEditor()}
      </div>
    )
  }
})
