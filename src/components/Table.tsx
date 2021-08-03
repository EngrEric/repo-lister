import React, { FC } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'

/**
 * A component that renders a table for repositories
 * @returns {ReactElement}
 */
const TableComponent: FC<any> = ({ dataSource }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'forks',
      dataIndex: 'forkCount',
      key: 'name'
    },
    {
      title: 'Stars',
      dataIndex: 'stargazerCount',
      key: 'name'
    }
  ]

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

TableComponent.propTypes = {
  dataSource: PropTypes.array.isRequired
}

export default TableComponent
