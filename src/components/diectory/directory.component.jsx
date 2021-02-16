import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3150&q=80',
                    id: 1,
                    linkUrl: 'hats'
                }, 
                {
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1560290625-14944c4409eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
                    id: 2,
                    linkUrl: ''
                }, 
                {
                    title: 'sneakers',
                    imageUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80',
                    id: 3,
                    linkUrl: ''
                }, 
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1596451984287-7a274406cbca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                }, 
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }, 
            ]
        }
    }

    render() {
        return(
            <div className="container">

                <div className="directory-menu">
                    {
                        // this.state.sections.map(({ title, imageUrl, size, id }) => (
                        //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                        // ))
                        this.state.sections.map(({ id, ...otherSectionProps }) => (
                            <MenuItem key={id} {...otherSectionProps} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Directory;