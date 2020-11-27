import React from 'react'

import { getLanguageCookie } from '@/js/lang.js'

const labels = require('@/articles/editor/labels.json')
const lang = getLanguageCookie()

export default class Title extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="row justify-content-between">
            <div className="col-12 col-md-4">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">{labels['Title'][lang]}</span>
                    </div>
                    <input type="text" className="form-control" value={this.props.title} onChange={this.props.changeTitle} />
                </div>
            </div>
            <div className="col-12 col-md-8">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">{labels['Description'][lang]}</span>
                    </div>
                    <input type="text" className="form-control" value={this.props.description} onChange={this.props.changeDescription} />
                </div>
            </div>
        </div>
    }
}