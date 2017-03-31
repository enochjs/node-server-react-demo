import * as React from 'react';

export default class app extends React.Component<any, any> {
  constructor(props) {
		super(props)
	}
	render() {
		const { children } = this.props
		return (
			<div id="page-wrapper">
        <div id="main-wrapper" className="ant-row">
        	<div>test</div>
					<div>ewefsfsdfw</div>
        </div>
			</div>
		)
	}
}