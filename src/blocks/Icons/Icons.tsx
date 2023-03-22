import React, {useContext} from 'react';

import {block, getLinkProps} from '../../utils';
import {IconsBlockProps} from '../../models';
import {BlockHeader, Image, LinkBase} from '../../components';
import {LocationContext} from '../../context/locationContext';

import './Icons.scss';

const b = block('icons-block');

const Icons = ({title, size = 's', items}: IconsBlockProps) => {
    const {hostname} = useContext(LocationContext);

    return (
        <div className={b({size})}>
            {title && <BlockHeader className={b('header')} title={title} colSizes={{all: 12}} />}
            {items.map((item) => (
                <LinkBase
                    className={b('item')}
                    key={item.url}
                    href={item.url}
                    {...getLinkProps(item.url, hostname)}
                >
                    <Image className={b('image')} src={item.src} />
                    <p className={b('text')}>{item.text}</p>
                </LinkBase>
            ))}
        </div>
    );
};

export default Icons;
