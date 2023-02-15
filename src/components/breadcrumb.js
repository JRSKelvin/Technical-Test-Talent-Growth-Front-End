import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const BreadcrumbComponent = () => {
  return (
    <React.Fragment>
      <Breadcrumb className="bg-light rounded-3 p-3 mb-4">
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
      </Breadcrumb>
    </React.Fragment>
  )
}

export default BreadcrumbComponent
