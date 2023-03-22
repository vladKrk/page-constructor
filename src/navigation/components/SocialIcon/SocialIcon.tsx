import React from 'react';

import {block} from '../../../utils';
import {NavigationSocialItem} from '../../../models';
import {Image, LinkBase} from '../../../components';
import {getMediaImage} from '../../../components/Media/Image/utils';

import './SocialIcon.scss';

const b = block('social-icon');

export interface NavigationSocialItemOwnProps extends NavigationSocialItem {
    className?: string;
}

const SocialIcon: React.FC<NavigationSocialItemOwnProps> = ({icon, url, className}) => {
    const iconData = getMediaImage(icon);

    return (
        <LinkBase
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={b(null, className)}
        >
            <Image className={b('icon')} {...iconData} />
        </LinkBase>
    );
};

export default SocialIcon;
