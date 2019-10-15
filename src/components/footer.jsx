import React, { Component } from 'react'
import { 
  Container,
  Col,
  Row
} from 'react-bootstrap'
import GitHubButton from 'react-github-btn'

const App = props=> (
  <Container>
    <Row className="justify-content-md-center">
      <Col className="text-center">
        <p 
        className="text-secondary text-capitalize" 
        style={{ fontSize: '1rem', marginBottom: '2px' }}
        >
          build with github ❤️️️
        </p>
        <GitHubButton 
        href="https://github.com/luxizhizhong/color-picker"
        data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
        data-size="large" 
        data-show-count="true" 
        aria-label="Star luxizhizhong/color-picker on GitHub">
          Star🌻
        </GitHubButton>
      </Col>
    </Row>
  </Container>
)

export default App