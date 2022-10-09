import React from 'react';

import Menu, {MenuItem} from './Menu'

import config from '~/config';

import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
};

export default Sidebar;
